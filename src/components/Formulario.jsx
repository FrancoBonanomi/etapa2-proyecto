import { useContext, useEffect, useState } from "react";
import ProductoContext from "../contexts/ProductoContext";
import { useForm } from "../hooks/useForm";

const formInicial = {
  id: null,
  nombre: "",
  precio: "",
  stock: "",
  marca: "",
  categoria: "",
  detalles: "",
  foto: "",
  envio: false,
};

const Formulario = ({ productoAEditar, setProductoAEditar }) => {
  const [form, setForm, handleChange] = useForm(formInicial);
  const { crearProductoContext, actualizarProductoContext } =
    useContext(ProductoContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInicial);
  }, [productoAEditar, setProductoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Detener el comportamiento del formulario
    try {
      if (form.id === null) {
        await crearProductoContext(form);
      } else {
        await actualizarProductoContext(form);
      }
      handleReset();
    } catch (error) {
      console.error("Ocurrió un error en el handleSubmit", error);
    }
  };

  const handleReset = () => {
    setForm(formInicial);
    setProductoAEditar(null);
  };

  return (
    <>
      <h3 className="alta-h3">{productoAEditar ? "Editando" : "Agregando"}</h3>

      <form onSubmit={handleSubmit} className="form-alta">
        <div>
          <label htmlFor="lbl-nombre" className="alta-label">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="lbl-nombre"
            value={form.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-precio" className="alta-label">
            Precio
          </label>
          <input
            type="text"
            name="precio"
            id="lbl-precio"
            value={form.precio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-stock" className="alta-label">
            Stock
          </label>
          <input
            type="text"
            name="stock"
            id="lbl-stock"
            value={form.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-marca" className="alta-label">
            Marca
          </label>
          <input
            type="text"
            name="marca"
            id="lbl-marca"
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-categoria" className="alta-label">
            Categoría
          </label>
          <input
            type="text"
            name="categoria"
            id="lbl-categoria"
            value={form.categoria}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-detalles" className="alta-label">
            Detalles
          </label>
          <input
            type="text"
            name="detalles"
            id="lbl-detalles"
            value={form.detalles}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-foto" className="alta-label">
            Foto
          </label>
          <input
            type="text"
            name="foto"
            id="lbl-foto"
            value={form.foto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lbl-envio" className="alta-label">
            Envío
          </label>
          <input
            type="checkbox"
            name="envio"
            id="lbl-envio"
            checked={form.envio}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button type="submit">Guardar</button>
          <button type="reset" onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
