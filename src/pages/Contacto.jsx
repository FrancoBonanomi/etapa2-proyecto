import React from "react";
import "./Contacto.scss";
import { useContacto } from "../hooks/useContacto";
import Spinner from "../components/Spinner";

const inicial = {
  nombre: "",
  email: "",
  asunto: "",
  comentarios: "",
};
const Contacto = () => {
  const validaciones = (form) => {
    //expresiones regulares

    let expRegNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let expRegEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let expRegComentarios = /^.{1,255}$/;

    const error = {};
    if (!form.nombre) {
      error.nombre = "el campo nombre es requerido";
    } else if (!expRegNombre.test(form.nombre)) {
      error.nombre = "el nombre solo puede contener letras y espacios";
    }
    if (!form.email) {
      error.email = "el campo email es requerido";
    } else if (!expRegEmail.test(form.email)) {
      error.email = "email invalido";
    }
    if (!form.asunto) {
      error.asunto = "el campo asunto es requerido";
    }
    if (!form.comentarios) {
      error.comentarios = "el campo comentarios es requerido";
    } else if (!expRegComentarios.test(form.nombre)) {
      error.comentarios = "el nombre solo puede contener letras y espacios";
    }
    return error;
  };

  const estilos = {
    color: "darkred",
    fontWeight: "bold",
  };

  let { Cambio, form, Blur, errors, Envio, data, cargando } = useContacto(
    inicial,
    validaciones
  );
  return (
    <section className="seccion-formulario">
      <form className="seccion-formulario__form" onSubmit={Envio}>
        <legend>Envianos tus comentarios</legend>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          name="nombre"
          required
          onChange={Cambio}
          value={form.nombre}
          onBlur={Blur}
        />
        {errors.nombre && <p style={estilos}>{errors.nombre}</p>}
        <input
          type="email"
          placeholder="Escribe tu email"
          name="email"
          required
          onChange={Cambio}
          value={form.email}
          onBlur={Blur}
        />
        {errors.email && <p style={estilos}>{errors.email}</p>}
        <input
          type="text"
          placeholder="asunto a tratar"
          name="asunto"
          required
          onChange={Cambio}
          value={form.asunto}
          onBlur={Blur}
        />
        {errors.asunto && <p style={estilos}>{errors.asunto}</p>}
        <textarea
          cols="50"
          rows="5"
          name="comentarios"
          required
          placeholder="Comentarios..."
          onChange={Cambio}
          value={form.comentarios}
          onBlur={Blur}
        ></textarea>
        {errors.comentarios && <p style={estilos}>{errors.comentarios}</p>}
        <input type="submit" value="enviar" />
        {data && (
          <p style={{ fontSize: "20px", color: "#ffce00" }}>
            Gracias por enviar tus comentarios!😁
          </p>
        )}
        {cargando && <Spinner />}
      </form>
    </section>
  );
};

export default Contacto;
