import React, { useState } from "react";

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  const ocultarModal = () => {
    setVisible(false);
  };
  const mostrarModal = () => {
    setVisible(true);
  };

  return [ visible ,ocultarModal,mostrarModal];
};
