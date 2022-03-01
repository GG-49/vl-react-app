import React, { useState, useEffect } from "react";
import Cards from './Cards'


const theAddress = "https://random-data-api.com/api/users/random_user?size=20";

const Dashboard = (props: any) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(theAddress);
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    // <div>Dashboard Display</div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => {
          <li>{user}</li>
          // console.log(user);
          return <Cards user={user} />;
      })}
      </ul>
  );
};

export default Dashboard;