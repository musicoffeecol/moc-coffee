import { Navigate, useSearchParams } from 'react-router-dom'

// Keep previously shared Mood Lab URLs working inside the unified journey.
export function MoodLabPage() {
  const [params] = useSearchParams()
  const next = new URLSearchParams(params)
  next.set('vista', 'mood')
  return <Navigate to={`/tienda?${next.toString()}`} replace />
}
