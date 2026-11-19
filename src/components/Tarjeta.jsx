import { useState } from 'react'
import { ELEMENTOS } from '../data/criaturas'

function Tarjeta({ criatura }) {
  const [volteada, setVolteada] = useState(false)
  const elemento = ELEMENTOS[criatura.elemento]
  const numero = String(criatura.id).padStart(3, '0')
  const elementoMin = elemento.nombre.toLowerCase()

  return (
    <li className="tarjeta-item" style={{ '--acento': elemento.color }}>
      <button
        type="button"
        className={`tarjeta${volteada ? ' volteada' : ''}`}
        onClick={() => setVolteada((v) => !v)}
        aria-pressed={volteada}
        aria-label={`${criatura.nombre}, ${elemento.nombre}. ${
          volteada ? `Poder: ${criatura.descripcion} Pulsa para volver.` : 'Pulsa para ver su poder.'
        }`}
      >
        <span className="tarjeta-interior">
          {/* Cara frontal */}
          <span className="cara frente">
            <span className="tarjeta-top">
              <span className="numero">#{numero}</span>
              <span className="badge">
                <span aria-hidden="true">{elemento.emoji}</span> {elemento.nombre}
              </span>
            </span>
            <span className="marco">
              <img
                src={criatura.imagen}
                alt={`Ilustración de ${criatura.nombre}, criatura de ${elementoMin}`}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="info">
              <span className="nombre">{criatura.nombre}</span>
              <span className="meta">
                {criatura.tipo} · Color {criatura.color.toLowerCase()}
              </span>
              <span className="pista">Toca para ver su poder ↻</span>
            </span>
          </span>

          {/* Cara trasera */}
          <span className="cara reverso">
            <span className="tarjeta-top">
              <span className="numero">#{numero}</span>
              <span className="badge">
                <span aria-hidden="true">⚡</span> Poder
              </span>
            </span>
            <span className="marco">
              <img
                src={criatura.imagenPoder}
                alt={`${criatura.nombre} usando su poder de ${elementoMin}`}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="info">
              <span className="nombre">{criatura.nombre}</span>
              <span className="descripcion">{criatura.descripcion}</span>
              <span className="pista">Toca para volver ↺</span>
            </span>
          </span>
        </span>
      </button>
    </li>
  )
}

export default Tarjeta
