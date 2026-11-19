import agua1 from '../imagenes/AGUA1.webp'
import agua3 from '../imagenes/AGUA3.webp'
import aire from '../imagenes/AIRE.webp'
import aire1 from '../imagenes/AIRE1.webp'
import energia from '../imagenes/ENERGIA.webp'
import sanadora1 from '../imagenes/SANADORA1.webp'
import fuego from '../imagenes/FUEGO.webp'
import fuego2 from '../imagenes/FUEGO2.webp'
import tierra from '../imagenes/TIERRA.webp'
import tierra2 from '../imagenes/TIERRA2.webp'

/** Elementos disponibles: etiqueta, emoji y color de acento. */
export const ELEMENTOS = {
  agua: { nombre: 'Agua', emoji: '💧', color: '#38bdf8' },
  aire: { nombre: 'Aire', emoji: '🌪️', color: '#a5b4c8' },
  energia: { nombre: 'Energía', emoji: '🌿', color: '#4ade80' },
  fuego: { nombre: 'Fuego', emoji: '🔥', color: '#f97316' },
  tierra: { nombre: 'Tierra', emoji: '🪨', color: '#c08a5b' },
}

export const CRIATURAS = [
  {
    id: 1,
    nombre: 'Congeladora',
    elemento: 'agua',
    color: 'Azul',
    tipo: 'Legendaria y elemental',
    imagen: agua1,
    imagenPoder: agua3,
    descripcion: 'Tira agua y es legendaria.',
  },
  {
    id: 2,
    nombre: 'Aire',
    elemento: 'aire',
    color: 'Gris',
    tipo: 'Legendaria y elemental',
    imagen: aire,
    imagenPoder: aire1,
    descripcion: 'Echa viento con gran fuerza.',
  },
  {
    id: 3,
    nombre: 'Sanadora',
    elemento: 'energia',
    color: 'Verde',
    tipo: 'Legendaria y elemental',
    imagen: energia,
    imagenPoder: sanadora1,
    descripcion: 'Sana a las demás babosas y es la mejor.',
  },
  {
    id: 4,
    nombre: 'Fuego',
    elemento: 'fuego',
    color: 'Rojo fuego',
    tipo: 'Legendaria y elemental',
    imagen: fuego2,
    imagenPoder: fuego,
    descripcion: 'Echa fuego y es legendaria.',
  },
  {
    id: 5,
    nombre: 'Tierra',
    elemento: 'tierra',
    color: 'Gris con marrón',
    tipo: 'Legendaria y elemental',
    imagen: tierra,
    imagenPoder: tierra2,
    descripcion: 'Tira piedra y es legendaria.',
  },
]
