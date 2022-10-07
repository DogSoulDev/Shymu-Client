import { useState, useEffect } from "react";
import Error from "../../components/Error/ErrorFields";
import "./profile.css";

const EditProfile = () => {
 const [id, setId] = useState("");
 const [name, setName] = useState("");
 const [lastName, setLastName] = useState("");
 const [userName, setUserName] = useState("");
 const [email, setEmail] = useState("");
 //error state message
 const [error, setError] = useState(false);

 //*Example id
 const exampleId = 1;
 useEffect(() => {
  const getUserData = async () => {
   //!here is the path to be defined later in the backend
   const request = await fetch(`http://localhost:3005/userData/${exampleId}`);
   const response = await request.json();
   setId(response.id);
   setName(response.name);
   setLastName(response.lastName);
   setUserName(response.userName);
   setEmail(response.email);
  };
  getUserData();
 }, []);
 const patchUserData = async () => {
  await fetch();
 };
 //this function is for each onChange of the inputs
 const handleSubmit = (e) => {
  e.preventDefault();

  if (
   name.length <= 0 ||
   lastName.length <= 0 ||
   userName.length <= 0 ||
   email.length <= 0 || !email.includes('@')
  ) {
   setError(true);
   return;
  }
  setError(false);
  //!this object will be sent to the backend with the patch method
  const objDataUser = {
   id,
   name,
   lastName,
   userName,
   email,
  };
  console.log(objDataUser);
 };

 return (
  <div className='editProfile'>
   <h2 className='prueba'>Edit your profile</h2>
   <form className='' onSubmit={handleSubmit} key={id}>
    {error && (
     <Error>
      <p>All fields are required</p>
     </Error>
    )}
    <div className='editProfile__fields'>
     <label htmlFor='name' className=''>
      Name
     </label>
     <input
      id='name'
      type='text'
      placeholder='Complete Name'
      value={name}
      onChange={(e) => setName(e.target.value)}
      className=''
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
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className=''
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
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      className=''
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
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className=''
     />
    </div>
    <input value='Edit Profile' type='submit' className='' />
   </form>
  </div>
 );
};

export default EditProfile;
