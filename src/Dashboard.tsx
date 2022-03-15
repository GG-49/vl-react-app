import { useState, useEffect } from "react";
import Cards from "./Cards";
import Modal from "./Modal";
import "./Modal.css";
import { data } from "./lib/data";

const Dashboard = (props: any) => {
  const [users, setUsers] = useState<any>([]);

  const getUsers = async () => {
    setUsers(data);
  };

  const updateUser = (values: any) => {
    console.log("updateuser-values", values);

    const findUser = users.find((uitem: any) => uitem.id == values.userid);
    console.log("findUser", findUser);
    findUser.first_name = values.firstname;
    findUser.last_name = values.lastname;
    findUser.email = values.email;
    findUser.phone_number = values.phonenumber;
    console.log("changedUser", findUser);

    const usersFiltered = users.filter((uitem: any) => uitem.id != values.userid);
    console.log("usersFiltered", usersFiltered);

    const newUsersList = [...usersFiltered, {...findUser, ...values}];
    console.log('newuserslist', newUsersList);

    setUsers(newUsersList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {/* <button onClick={() => updateUser({ id:3946, first_name: 'test fn', last_name: 'test ln', email: 'email.com', phone_number: '+27 21 1234 5678' })}>TESTING</button> */}

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users
          .sort((a: any, b: any) => a.id - b.id)
          .map((user: any) => {
            <li>{user}</li>;
            return <Cards user={user} updateUser={updateUser} />;
          })}
      </ul>
    </>
  );
};
export default Dashboard;
