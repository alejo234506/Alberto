import { useDeferredValue, useMemo, useState } from 'react'
import Tarjeta from './components/Tarjeta'
import { CRIATURAS, ELEMENTOS } from './data/criaturas'
import './App.css'

const normalizar = (texto) =>
  texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

function App() {
  const [filtro, setFiltro] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const busquedaDiferida = useDeferredValue(busqueda)

  const visibles = useMemo(() => {
    const q = normalizar(busquedaDiferida)
    return CRIATURAS.filter((c) => {
      const coincideElemento = filtro === 'todos' || c.elemento === filtro
      const texto = normalizar(
        `${c.nombre} ${c.descripcion} ${c.color} ${ELEMENTOS[c.elemento].nombre}`,
      )
      return coincideElemento && (q === '' || texto.includes(q))
    })
  }, [filtro, busquedaDiferida])

  const limpiar = () => {
    setFiltro('todos')
    setBusqueda('')
  }

  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">Colección de criaturas elementales</p>
        <h1>
          Tarjetas <span className="degradado">Legendarias</span>
        </h1>
        <p className="subtitulo">
          {CRIATURAS.length} criaturas de agua, aire, energía, fuego y tierra. Toca
          cualquier tarjeta para darle la vuelta y descubrir su poder.
        </p>
      </header>

      <main>
        <section className="controles" aria-label="Buscar y filtrar">
          <label className="buscador">
            <span className="sr-only">Buscar criatura</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M10 2a8 8 0 0 1 6.32 12.9l5.39 5.4-1.41 1.4-5.4-5.39A8 8 0 1 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
              />
            </svg>
            <input
              type="search"
              placeholder="Buscar por nombre o poder…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </label>

          <div className="chips" role="group" aria-label="Filtrar por elemento">
            <button
              type="button"
              className="chip"
              aria-pressed={filtro === 'todos'}
              onClick={() => setFiltro('todos')}
            >
              <span aria-hidden="true">✨</span> Todos
            </button>
            {Object.entries(ELEMENTOS).map(([clave, el]) => (
              <button
                key={clave}
                type="button"
                className="chip"
                style={{ '--acento': el.color }}
                aria-pressed={filtro === clave}
                onClick={() => setFiltro(clave)}
              >
                <span aria-hidden="true">{el.emoji}</span> {el.nombre}
              </button>
            ))}
          </div>
        </section>

        <p className="contador" aria-live="polite">
          Mostrando {visibles.length} de {CRIATURAS.length} criaturas
        </p>

        {visibles.length > 0 ? (
          <ul className="grid">
            {visibles.map((criatura) => (
              <Tarjeta key={criatura.id} criatura={criatura} />
            ))}
          </ul>
        ) : (
          <div className="vacio">
            <p>No encontramos criaturas con ese filtro.</p>
            <button type="button" className="chip" onClick={limpiar}>
              Limpiar filtros
            </button>
          </div>
        )}
      </main>

      <footer className="pie">
        Hecho con React + Vite · Práctica de componentes, props y estado
      </footer>
    </div>
  )
}

export default App
