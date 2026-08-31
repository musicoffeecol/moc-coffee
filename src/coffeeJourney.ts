import type { Mood, MomentSelection } from './types'

export function resolveMoment(moods: Mood[], value: unknown, productId?: string) {
  if (!value || typeof value !== 'object') return null
  const candidate = value as Partial<MomentSelection>
  const mood = moods.find((item) => item.id === candidate.moodId)
  if (!mood || (productId !== undefined && mood.recommendedProductId !== productId)) return null
  const index = candidate.thoughtIndex
  if (typeof index !== 'number' || !Number.isInteger(index) || index < 0 || index >= mood.thoughts.length) return null
  return { mood, thought: mood.thoughts[index], selection: { moodId: mood.id, thoughtIndex: index } }
}

export function readMoment(moods: Mood[], params: URLSearchParams, productId?: string) {
  const index = params.get('pensamiento')
  if (index === null || !/^\d+$/.test(index)) return null
  return resolveMoment(moods, { moodId: params.get('mood'), thoughtIndex: Number(index) }, productId)
}

export function selectMoment(mood: Mood, thought: string): MomentSelection {
  return { moodId: mood.id, thoughtIndex: Math.max(0, mood.thoughts.indexOf(thought)) }
}

export function momentQuery(selection: MomentSelection) {
  return new URLSearchParams({ mood: selection.moodId, pensamiento: String(selection.thoughtIndex) }).toString()
}

export function journeyPath(view: 'mood' | 'catalogo', selection?: MomentSelection) {
  return `/tienda?vista=${view}${selection ? `&${momentQuery(selection)}` : ''}`
}

export function cartItemKey(productId: string, presentation: string, grind?: string, frequency?: string, moment?: MomentSelection) {
  return [productId, presentation, grind, frequency, moment && `mood:${moment.moodId}:${moment.thoughtIndex}`].filter(Boolean).join('|')
}
