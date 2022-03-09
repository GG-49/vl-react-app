import { useState, useEffect } from "react";
import Cards from './Cards'
import Modal from './Modal'
import './Modal.css'
import { data } from './lib/data';

// const theAddress = "https://random-data-api.com/api/users/random_user?size=20";
// const response = await fetch(theAddress);
// const data = await response.json();
// console.log(data);

const Dashboard = (props: any) => {
  const [users, setUsers] = useState<any>([]);

  const getUsers = async () => {
    setUsers(data);
  };

  const updateUser = (values: any) => {
    const { id, first_name, last_name, email, phone_number} = values;

    // 3946
    console.log('DashB users ', users)
    // get the user you would like to change
   

    const array1 = users;

    const found = array1.find((id: any) => users.id = id);
    console.log('found ', found)
    
    const userToUpdate: any = users.find((user: any) => user.id == id);
    if (userToUpdate) {
      userToUpdate.first_name = first_name;
      userToUpdate.last_name= last_name;
      userToUpdate.phone_number= phone_number;

      // get the users array without the user you would like to change
      const arrayWithoutChangedUser = users.filter((user: any) => user.id !== id);

      {/* <div>
        {people.filter(person => person.age < 60).map(filteredPerson => (
          <li>
            {filteredPerson.name}
          li>
        ))}
      div></li> */}


      // const handleChange = (e) => {
      //   const id = hospitalsDetails.filter(obj => obj.hospitalName == e.target.value)
      //   setCurrentApp({ ...currentApp, [e.target.id]: e.target.value, ["hospitalID"]: id.hospitalID })  
      // }



      //set the users to the array and add the changed user to the array
      setUsers([...arrayWithoutChangedUser, userToUpdate]);
      
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <button onClick={() => updateUser({ id:3946, first_name: 'test fn', last_name: 'test ln', email: 'email.com', phone_number: '+27 21 1234 5678' })}>TESTING</button>


      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.sort((a: any, b:any) => a.id - b.id).map((user: any) => {
          <li>{user}</li>
          return <Cards user={user} />;
      })}
      </ul>
    </>
  );

};
export default Dashboard;
