import React, { useState, useEffect } from "react";
import Cards from './Cards'
import './Modal.css'
import EditCard from './EditCard'
import { useFormik } from 'formik';


const theAddress = "https://random-data-api.com/api/users/random_user?size=20";

const Dashboard = (props: any) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(theAddress);
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };

    const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    getUsers();
  }, []);

  return (
    // <div>Dashboard Display</div>
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => {
          <li>{user}</li>
          console.log(user);
          return <Cards user={user} setShowModal={setShowModal} />;
      })}
      </ul>
      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );

};

const Modal = ({setShowModal}: any) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center w-full h-full whitespace-normal"
        style={{backgroundColor: 'rgba(0,0,0,.5)'}} onClick={() => setShowModal(false)}>  
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </button>
      </div>
      {/* <EditCard /> */}
      <div className="title">
        {/* <h1>Display heading here</h1> */}
      </div>
      <div className="body">
        <EditCard />
        {/* <ul>
          <li>First item and the correction</li>
          <li>Second item and the correction</li>
        </ul> */}
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
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
