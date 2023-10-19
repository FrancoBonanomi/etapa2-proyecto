import React, { useContext } from "react";
import "./Nosotros.scss";
import Modal from "../components/Modal";
import { useModal } from "../hooks/useModal";
import Contacto from "./Contacto";

const Nosotros = () => {
  const [visible, ocultarModal, mostrarModal] = useModal();
  const [visible2, ocultarModal2, mostrarModal2] = useModal();

  return (
    <section className="nosotros">
      <h1>Sobre nosotros</h1>
      <button onClick={mostrarModal} className="nosotros__btn">
        Quienes Somos?
      </button>
      <Modal visible={visible} ocultarModal={ocultarModal}>
        <h2>Sobre nosotros</h2>
        <img src="../../img/apple-iphone-12.jpg" alt="iphone" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          aliquid ab a possimus reprehenderit nisi ipsa! Soluta ab ducimus,
          cupiditate, quidem natus illo maxime tempora reiciendis corrupti alias
          aliquid. Quibusdam sint iure omnis saepe illum ea nihil est veniam
          tempore aperiam. Repellendus ducimus suscipit error sequi harum.
          Autem, dolore labore!
        </p>
      </Modal>
      <button onClick={mostrarModal2} className="nosotros__btn">
        Ubicacion
      </button>
      <Modal visible={visible2} ocultarModal={ocultarModal2}>
        <h2>Ubicacion</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13131.313205089942!2d-58.64868841284182!3d-34.63377899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb96309f91a61%3A0xccc89d17fbe0c40d!2sTecno%20Compra!5e0!3m2!1ses!2sar!4v1697741143743!5m2!1ses!2sar"
         
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </Modal>
    </section>
  );
};

export default Nosotros;
