import type { Mood } from '../types'

export const moods: Mood[] = [
  {
    id: 'energia', name: 'Energía', description: 'Necesito impulso sin ruido.', accent: '#E2AA75',
    thoughts: [
      'No necesitas resolver todo el día. Empieza por el siguiente paso posible.',
      'La energía también se construye: una acción pequeña puede cambiar el ritmo.',
      'Avanzar con intención vale más que correr sin dirección.',
      'Tu atención es limitada. Entrégasela primero a lo que sí depende de ti.',
    ],
    ritual: 'Abre la ventana, sirve el café y escucha la primera canción de pie.',
    recommendedProductId: 'huila-luz', playlist: { name: 'Primer pulso', url: 'https://open.spotify.com/' },
  },
  {
    id: 'enfoque', name: 'Enfoque', description: 'Quiero entrar en ritmo.', accent: '#C8B98C',
    thoughts: [
      'Una cosa a la vez también es avanzar.',
      'Elegir qué no atender es parte de cuidar tu atención.',
      'La claridad aparece cuando una prioridad deja de competir con diez urgencias.',
      'No busques concentración perfecta. Crea un entorno donde volver sea más fácil.',
    ],
    ritual: 'Silencia las notificaciones durante una taza. Define una sola intención.',
    recommendedProductId: 'huila-luz', playlist: { name: 'Línea continua', url: 'https://open.spotify.com/' },
  },
  {
    id: 'inspiracion', name: 'Inspiración', description: 'Necesito una idea nueva.', accent: '#D89A69',
    thoughts: [
      'La curiosidad abre posibilidades que la exigencia suele cerrar.',
      'Una idea no tiene que ser perfecta para merecer espacio.',
      'Cambiar el ritmo puede mostrar una perspectiva que la prisa ocultaba.',
      'Antes de corregir una idea, deja que termine de aparecer.',
    ],
    ritual: 'Prepara el café sin prisa y escribe tres ideas antes de juzgarlas.',
    recommendedProductId: 'tolima-pulso', playlist: { name: 'Ideas en estéreo', url: 'https://open.spotify.com/' },
  },
  {
    id: 'calma', name: 'Calma', description: 'Quiero bajar el volumen.', accent: '#A8B8AD',
    thoughts: [
      'Descansar no es abandonar el día. Es recuperar la capacidad de habitarlo.',
      'La pausa no interrumpe el día. Lo afina.',
      'No todo pensamiento requiere una respuesta inmediata.',
      'Bajar el ritmo también puede ser una forma de avanzar con cuidado.',
    ],
    ritual: 'Deja el teléfono lejos. Respira entre cada sorbo y escucha la canción completa.',
    recommendedProductId: 'cundinamarca-pausa', playlist: { name: 'Después de la lluvia', url: 'https://open.spotify.com/' },
  },
  {
    id: 'sorpresa', name: 'Sorpresa', description: 'Quiero descubrir algo nuevo.', accent: '#C7987A',
    thoughts: [
      'La novedad no exige empezar de cero; a veces basta con mirar distinto.',
      'Dejar un pequeño espacio a lo inesperado entrena la flexibilidad.',
      'No saber todavía puede ser el comienzo de una conversación más honesta.',
      'Probar algo nuevo no borra lo conocido. Amplía tus opciones.',
    ],
    ritual: 'Usa un método distinto al habitual y deja que la playlist decida el resto.',
    recommendedProductId: 'edicion-julio', playlist: { name: 'Lado B', url: 'https://open.spotify.com/' },
  },
]

export const createThoughtSelections = () =>
  Object.fromEntries(
    moods.map((mood) => [mood.id, mood.thoughts[Math.floor(Math.random() * mood.thoughts.length)]])
  ) as Record<string, string>
