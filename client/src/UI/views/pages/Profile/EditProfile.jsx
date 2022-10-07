import { useState, useEffect } from "react";
import Error from "../../components/Error/ErrorFields";
import "./profile.css";

const EditProfile = () => {
 const [form, setForm] = useState({
  id: "",
  name: "",
  lastName: "",
  userName: "",
  email: "",
 });
 const { name, lastName, userName, email } = form;

 //Example id
 const id = 1;
 useEffect(() => {
  const getUserData = async () => {
   //!here is the path to be defined later in the backend
   const request = await fetch(`http://localhost:3005/userData/${id}`);
   const response = await request.json();
   setForm(response);
  };
  getUserData();
 }, [setForm]);

 //Error fields message
 //const [error, setError] = useState(false);
 //this function is for each onChange of the inputs
 const handleValueForm = (e) => setForm(e.target.value);

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(form);

  // if ({ name, lastName, userName, email }.includes('1')) {
  //   setError(true);
  //   return;
  // }
  // setError(false);
 };

 return (
  <div className='editProfile'>
   <h2 className='prueba'>Edit your profile</h2>
   <form className='' onSubmit={handleSubmit}>
    {/* {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )} */}
    <div className='editProfile__fields'>
     <label htmlFor='name' className=''>
      Name
     </label>
     <input
      id='name'
      type='text'
      placeholder='Complete Name'
      defaultValue={form.name}
      onChange={handleValueForm}
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
      defaultValue={form.lastName}
      onChange={handleValueForm}
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
      defaultValue={form.userName}
      onChange={handleValueForm}
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
      defaultValue={form.email}
      onChange={handleValueForm}
      className=''
     />
    </div>
    <input value='Edit Profile' type='submit' className='' />
   </form>
  </div>
 );
};

export default EditProfile;
