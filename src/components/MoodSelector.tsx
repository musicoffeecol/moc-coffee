import type { Mood } from '../types'

export function MoodSelector({ moods, selectedId, onSelect, compact = false }: { moods: Mood[]; selectedId: string; onSelect: (mood: Mood) => void; compact?: boolean }) {
  return (
    <div className={`mood-selector ${compact ? 'is-compact' : ''}`} role="radiogroup" aria-label="Selecciona cómo te sientes">
      {moods.map((mood, index) => (
        <button key={mood.id} role="radio" aria-checked={selectedId === mood.id} className={selectedId === mood.id ? 'is-selected' : ''} onClick={() => onSelect(mood)}>
          <span className="mood-number">0{index + 1}</span>
          <span>{mood.name}</span>
          {!compact && <small>{mood.description}</small>}
        </button>
      ))}
    </div>
  )
}
