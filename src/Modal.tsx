import EditCard from "./EditCard";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";

const Modal = ({ setShowModal, userdetail, updateUser }: any) => {
  console.log("Modal params - ", userdetail);

  return (
    <div
      className="fixed z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-left w-full h-full whitespace-normal"
      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div className="modalBackground">
        <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              X
            </button>
          </div>

          <div>
            <div>
              <EditCard
                setShowModal={setShowModal}
                updateUser={updateUser}
                userdetail={userdetail}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
