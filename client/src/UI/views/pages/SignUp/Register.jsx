import "../Login/Login.css";
import { useState, useEffect } from "react";
import Axios from "axios";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const createUser = () => {
		Axios.post("http://localhost:3001/createUser", {
			name,
			email,
			username,
			password,
		}).then((response) => {
			alert("User created.");
		});
	};

	return (
		<div className='body'>
			<div className='boxRegister'>
				<form className='singInForm'>
					<h1>
						Welcome to <span style={{ color: "#7E98F4" }}>SHYMU!</span>
					</h1>
					<div className='inputBox'>
						<input
							type='text'
							name='name'
							onChange={(event) => {
								setName(event.target.value);
							}}
							required
						/>
						<span>Name</span>
						<i></i>
					</div>

					<div className='inputBox'>
						<input
							type='text'
							name='username'
							onChange={(event) => {
								setEmail(event.target.value);
							}}
							required
						/>
						<span>UserName</span>
						<i></i>
					</div>
					<div className='inputBox'>
						<input
							type='text'
							name='email'
							onChange={(event) => {
								setUsername(event.target.value);
							}}
							required
						/>
						<span>Email</span>
						<i></i>
					</div>
					<div className='inputBox'>
						<input
							type='text'
							name='pass'
							onChange={(event) => {
								setPassword(event.target.value);
							}}
							required
						/>{" "}
						<span>Password</span>
						<i></i>
					</div>
					<div className='inputBox'>
						<input
							type='userpassword'
							name='pass'
							autoComplete='new-password'
							required
						/>{" "}
						<span>ConfirmPassword</span>
						<i></i>
					</div>
					<h6>
						By creating an account, I consent to the processing of my personal
						data in accordance with the PRIVACY POLICY
					</h6>
					<button onClick={createUser}>Create User</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
