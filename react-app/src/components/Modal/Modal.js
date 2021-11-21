import React, { useContext, useRef, useState, useEffect } from "react";
// import { ModalContainer } from "../../Styles/Modal/ModalContainer.style";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ type, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" />
      <div
        id={
          type === "create"
            ? "create"
            : type === "edit"
            ? "edit"
            : "modal-content"
        }
      >
        {children}
      </div>
    </div>,
    modalNode
  );
}

//  export default function Modal({ component: Component, ...rest }) {

//   return (
//     <ModalContainer>
//       <Component {...rest} />
//     </ModalContainer>
//   )
//  }
