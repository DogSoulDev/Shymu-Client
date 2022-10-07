import { useState, useEffect } from "react";
import "./profile.css";

const EditProfile = () => {
 const [name, setName] = useState("");
 const [lastName, setLastName] = useState("");
 const [userName, setUserName] = useState("");
 const [email, setEmail] = useState("");

 //Example id
 const id = 1;
 useEffect(() => {
  const getUserData = async () => {
   //!here is the path to be defined later in the backend
   const request = await fetch(`http://localhost:3005/userData/${id}`);
   const response = await request.json();
   setName(response.name);
   setLastName(response.lastName);
   setUserName(response.userName);
   setEmail(response.email);
  };
  getUserData();
 }, []);

 //this function is for each onChange of the inputs
 const handleSubmit = (e) => {
  e.preventDefault();
  //!this object will be sent to the backend with the patch method
  const objDataUser = {
   name,
   lastName,
   userName,
   email,
  };
 };

 return (
  <div className='editProfile'>
   <h2 className='prueba'>Edit your profile</h2>
   <form className='' onSubmit={handleSubmit}>
    <div className='editProfile__fields'>
     <label htmlFor='name' className=''>
      Name
     </label>
     <input
      id='name'
      type='text'
      placeholder='Complete Name'
      defaultValue={name}
      onChange={(e) => setName(e.target.value)}
      className=''
      required
     />
    </div>

    <div className='editProfile__fields'>
     <label htmlFor='lastname' className=''>
      Lastname
     </label>
     <input
      id='lastname'
      type='text'
      placeholder='Your lastname'
      defaultValue={lastName}
      onChange={(e) => setLastName(e.target.value)(e.target.value)}
      className=''
      required
     />
    </div>

    <div className='editProfile__fields'>
     <label htmlFor='username' className=''>
      Username
     </label>
     <input
      id='username'
      type='text'
      placeholder='Your lastname'
      defaultValue={userName}
      onChange={(e) => setUserName(e.target.value)}
      className=''
      required
     />
    </div>

    <div className='editProfile__fields'>
     <label htmlFor='email' className=''>
      Email
     </label>
     <input
      id='email'
      type='text'
      placeholder='example@example.com'
      defaultValue={email}
      onChange={(e) => setEmail(e.target.value)}
      className=''
      required
     />
    </div>
    <input value='Edit Profile' type='submit' className='' />
   </form>
  </div>
 );
};

export default EditProfile;
