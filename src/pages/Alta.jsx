import { useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import "./Alta.scss"

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)

  return (
    <>
      <h1 className='alta-titulo'>Formulario de alta de productos</h1>
      <h2 className='alta-subtitulo'>Agregar producto</h2>
      <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar} />
      <hr />
      <Tabla setProductoAEditar={setProductoAEditar} />
    </>
  )
}

export default Alta