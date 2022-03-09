import EditCard from './EditCard'
import { Formik, Field, Form, FormikHelpers } from 'formik';

const Modal = ({setShowModal, userId, firstName, lastName, eMail, phoneNumber, user}: any) => { 
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
                <EditCard setShowModal={setShowModal} userId={userId} firstName={firstName} lastName={lastName} eMail={eMail} phoneNumber={phoneNumber} user={user} />
              </div>
              {/* <div className="footer">
                  <button
                      onClick={() => {
                        setShowModal(false);
                        setUserUpdate(false);
                      }}
                      id = "cancelBtn"
                  >
                      Cancel
                  </button>

                  <button
                    onClick={() => {
                        setShowModal(false);
                        setUserUpdate(true);
                        // updateUser(userId: values.userid, first_name: values.firstname, last_name: values.lastname, email: values.email, phone_number: values.phonenumber);
                    }}
                  >
                    Submit
                  </button>
              </div> */}
            </>
          </div>
        </div>
      </div>
    );
  };

export default Modal;
