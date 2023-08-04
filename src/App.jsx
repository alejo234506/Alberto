import { useState } from 'react'
import "../src/App.css";
import React from "react";
import Tarjetas from "./components/tarjetas"
import testimonios from "./components/testimonios"
import '../src/style/testimonios.css'
import '../src/style/tarjetas.css'
function App() {
  return (
    <div className="App">

      <div className="container">
        <Tarjetas
        imagen='AGUA1'
        name='CONGELADORA'
        numero='1'
        color='AZUL'
        tipo='LEGENDARIA  Y ELEMENTAL'
        imagenes="AGUA3"
        descripcion="TIRA AGUA Y ES LEGENDARIA"
        />
      </div>

      <div className="container">
        <Tarjetas
        imagen='AIRE'
        name='AIRE'
        numero='2'
        color='Agris'
        tipo='LEGENDARIA  Y ELEMENTAL'
        imagenes="AIRE 1"
        descripcion='HECHA VIENTO EN GRAN FUERZA'
        />
      </div>

      <div className="container">
        <Tarjetas
        imagen='ENERGIA'
        name='SANADORA'
        numero='3'
        color='VERDE'
        tipo='LEGENDARIA  Y ELEMENTAL'
        imagenes="SANADORA1"
        descripcion="SANA A LAS DEMAS BABAOSAS Y ES LA MEJOR "
        />
      </div>

      <div className="container">
        <Tarjetas
        imagen='FUEGO2'
        name='FUEGO'
        numero='4'
        color='ROJO FUEGO'
        tipo='LEGENDARIA  Y ELEMENTAL'
        imagenes="FUEGO"
        descripcion="HECHA FUEGO Y ES LEGENDARIA  "
        />
      </div>

      <div className="container">
        <Tarjetas
        imagen='TIERRA'
        name='TIERRA'
        numero='5'
        color='GRIS CON MARRON'
        tipo='LEGENDARIA  Y ELEMENTAL'
        imagenes="TIERRA2"
        descripcion ="TIRA PIEDRA Y ES LEGENDARIA"
        />
      </div>

      
      
     
    </div>
  )
}

export default App
