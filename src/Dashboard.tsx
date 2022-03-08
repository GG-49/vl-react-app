import { useState, useEffect } from "react";
import Cards from './Cards'
import Modal from './Modal'
import './Modal.css'




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
        {users.map((user: any) => {
          <li>{user}</li>
          return <Cards user={user} showModal={showModal} setShowModal={setShowModal}  />;
      })}
      </ul>
      {/* {showModal && <Modal setShowModal={setShowModal} />} */}
    </>
  );

};


export default Dashboard;
