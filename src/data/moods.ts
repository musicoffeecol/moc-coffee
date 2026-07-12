import type { Mood } from '../types'

export const moods: Mood[] = [
  {
    id: 'energia', name: 'Energía', description: 'Necesito impulso sin ruido.', accent: '#E2AA75',
    quote: 'Que el día te encuentre en movimiento.', ritual: 'Abre la ventana, sirve el café y escucha la primera canción de pie.',
    recommendedProductId: 'huila-luz', playlist: { name: 'Primer pulso', url: 'https://open.spotify.com/' },
  },
  {
    id: 'enfoque', name: 'Enfoque', description: 'Quiero entrar en ritmo.', accent: '#C8B98C',
    quote: 'Una cosa a la vez también es avanzar.', ritual: 'Silencia las notificaciones durante una taza. Define una sola intención.',
    recommendedProductId: 'huila-luz', playlist: { name: 'Línea continua', url: 'https://open.spotify.com/' },
  },
  {
    id: 'inspiracion', name: 'Inspiración', description: 'Necesito una idea nueva.', accent: '#D89A69',
    quote: 'Cambia el ritmo y aparece otra perspectiva.', ritual: 'Prepara el café sin prisa y escribe tres ideas antes de juzgarlas.',
    recommendedProductId: 'tolima-pulso', playlist: { name: 'Ideas en estéreo', url: 'https://open.spotify.com/' },
  },
  {
    id: 'calma', name: 'Calma', description: 'Quiero bajar el volumen.', accent: '#A8B8AD',
    quote: 'La pausa no interrumpe el día. Lo afina.', ritual: 'Deja el teléfono lejos. Respira entre cada sorbo y escucha la canción completa.',
    recommendedProductId: 'cundinamarca-pausa', playlist: { name: 'Después de la lluvia', url: 'https://open.spotify.com/' },
  },
  {
    id: 'sorpresa', name: 'Sorpresa', description: 'Elige por mí.', accent: '#C7987A',
    quote: 'Lo inesperado también puede sentirse familiar.', ritual: 'Usa un método distinto al habitual y deja que la playlist decida el resto.',
    recommendedProductId: 'edicion-julio', playlist: { name: 'Lado B', url: 'https://open.spotify.com/' },
  },
]
