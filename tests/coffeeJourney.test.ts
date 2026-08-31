import assert from 'node:assert/strict'
import { test } from 'node:test'
import { cartItemKey, journeyPath, momentQuery, readMoment, resolveMoment, selectMoment } from '../src/coffeeJourney.ts'
import type { Mood } from '../src/types.ts'

const moods: Mood[] = [
  { id: 'calma', name: 'Calma', description: '', accent: '', thoughts: ['Pausa uno', 'Pausa dos'], ritual: 'Una pausa', recommendedProductId: 'cafe-a', playlist: { name: 'Pausa', url: 'https://example.com/' } },
  { id: 'enfoque', name: 'Enfoque', description: '', accent: '', thoughts: ['Una cosa'], ritual: 'Una intención', recommendedProductId: 'cafe-a', playlist: { name: 'Enfoque', url: 'https://example.com/' } },
]

test('the product and return links preserve the exact mood and thought', () => {
  const selection = selectMoment(moods[0], 'Pausa dos')
  const result = readMoment(moods, new URLSearchParams(momentQuery(selection)), 'cafe-a')
  assert.equal(result?.mood.id, 'calma')
  assert.equal(result?.thought, 'Pausa dos')
  const returnUrl = new URL(journeyPath('mood', selection), 'https://example.com')
  assert.equal(returnUrl.searchParams.get('vista'), 'mood')
  assert.deepEqual(readMoment(moods, returnUrl.searchParams)?.selection, selection)
})

test('catalog switching preserves the selection without forcing a product recommendation', () => {
  const selection = { moodId: 'calma', thoughtIndex: 1 }
  const url = new URL(journeyPath('catalogo', selection), 'https://example.com')
  assert.equal(url.searchParams.get('vista'), 'catalogo')
  assert.equal(readMoment(moods, url.searchParams)?.thought, 'Pausa dos')
  assert.equal(journeyPath('catalogo'), '/tienda?vista=catalogo')
})

test('a different product never inherits an unrelated mood', () => {
  assert.equal(resolveMoment(moods, { moodId: 'calma', thoughtIndex: 0 }, 'cafe-b'), null)
})

test('malformed, unknown and out-of-range persisted selections are ignored', () => {
  for (const value of [null, undefined, 3, 'calma', {}, { moodId: 'unknown', thoughtIndex: 0 }, { moodId: 'calma', thoughtIndex: -1 }, { moodId: 'calma', thoughtIndex: 2 }, { moodId: 'calma', thoughtIndex: 0.5 }, { moodId: 'calma', thoughtIndex: '1' }]) {
    assert.equal(resolveMoment(moods, value), null)
  }
})

test('invalid URL thought values do not silently become a valid selection', () => {
  for (const query of ['mood=calma', 'mood=calma&pensamiento=', 'mood=calma&pensamiento=-1', 'mood=calma&pensamiento=1.5', 'mood=calma&pensamiento=Infinity', 'mood=calma&pensamiento=texto']) {
    assert.equal(readMoment(moods, new URLSearchParams(query)), null)
  }
})

test('cart identities retain legacy compatibility and separate different moments', () => {
  const base = cartItemKey('cafe-a', '250 g', 'Grano entero')
  assert.equal(base, 'cafe-a|250 g|Grano entero')
  const first = cartItemKey('cafe-a', '250 g', 'Grano entero', undefined, { moodId: 'calma', thoughtIndex: 0 })
  const second = cartItemKey('cafe-a', '250 g', 'Grano entero', undefined, { moodId: 'calma', thoughtIndex: 1 })
  const third = cartItemKey('cafe-a', '250 g', 'Grano entero', undefined, { moodId: 'enfoque', thoughtIndex: 0 })
  assert.equal(new Set([base, first, second, third]).size, 4)
  assert.equal(first, cartItemKey('cafe-a', '250 g', 'Grano entero', undefined, { moodId: 'calma', thoughtIndex: 0 }))
})
