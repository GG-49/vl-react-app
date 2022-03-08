import EditCard from './EditCard'
import { Formik, Field, Form, FormikHelpers } from 'formik';


const Modal = ({setShowModal, userId, eMail, firstName, lastName, phoneNumber}: any) => { 


    // console.log('Modal',firstName)

    return (
      <div className="fixed z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-left w-full h-full whitespace-normal"
          style={{backgroundColor: 'rgba(0,0,0,.5)'}} onClick={() => setShowModal(false)}>  
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
        <>
        <div>
          <EditCard userId={userId} eMail={eMail} firstName={firstName} lastName={lastName} />
        </div>
  
  
          <div className="footer">
            <button
              onClick={() => {
                setShowModal(false);
              }}
              id = "cancelBtn"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Save
            </button>
          </div>
  
        </>
      </div>
      </div>
      </div>
    );
  };

export default Modal;

  