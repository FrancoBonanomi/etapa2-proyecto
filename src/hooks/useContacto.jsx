import { useState } from "react";

export function useContacto(inicial, validaciones) {
  const [form, setForm] = useState(inicial);
  const [cargando, setCargando] = useState(false);
  const [data, setData] = useState(false);
  const [errors, setErrors] = useState({});

  const Cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const Blur = (e) => {
    setErrors(validaciones(form));
  };
  const Envio = (e) => {
    e.preventDefault();
    setErrors(validaciones(form));
    if (Object.keys(errors).length === 0) {
      setCargando(true);
      fetch("https://formsubmit.co/ajax/franbonanomi@gmail.com", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          setData(true);
          setCargando(false);
          setForm(inicial);
          setTimeout(() => {
            setData(false);
          }, 3000);
        });
    } else {
      return;
    }
  };

  return { Cambio, form, Blur, errors, Envio, data, cargando };
}
