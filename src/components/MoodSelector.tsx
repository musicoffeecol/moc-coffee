import type { Mood } from '../types'

export function MoodSelector({ moods, selectedId, onSelect, compact = false }: { moods: Mood[]; selectedId: string; onSelect: (mood: Mood) => void; compact?: boolean }) {
  return (
    <div className={`mood-selector ${compact ? 'is-compact' : ''}`} role="radiogroup" aria-label="Elige cómo quieres sentirte">
      {moods.map((mood, index) => (
        <button key={mood.id} role="radio" aria-checked={selectedId === mood.id} tabIndex={selectedId === mood.id ? 0 : -1} className={selectedId === mood.id ? 'is-selected' : ''} onClick={() => onSelect(mood)} onKeyDown={(event) => {
          const moves: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }
          if (!(event.key in moves) && event.key !== 'Home' && event.key !== 'End') return
          event.preventDefault()
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? moods.length - 1 : (index + moves[event.key] + moods.length) % moods.length
          onSelect(moods[next])
          event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="radio"]')[next]?.focus()
        }}>
          <span className="mood-number">0{index + 1}</span>
          <span>{mood.name}</span>
          {!compact && <small>{mood.description}</small>}
        </button>
      ))}
    </div>
  )
}
