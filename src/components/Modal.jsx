import "./Modal.scss";

const Modal = ({ children, visible, ocultarModal }) => {
  const detenerPropagacion = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${visible && "flex"}`} onClick={ocultarModal}>
      <div className="modal__container" onClick={detenerPropagacion}>
        {children}
        <button className="modal__cerrar" onClick={ocultarModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
