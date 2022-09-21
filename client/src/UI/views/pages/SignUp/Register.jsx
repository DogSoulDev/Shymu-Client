import "../Login/Login.css";
import Logo from "../../../assets/img/Logo.png";

const Register = () => {
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
							autoComplete='new-password'
							required
						/>
						<span>Name</span>
						<i></i>
					</div>

					<div className='inputBox'>
						<input
							type='text'
							name='username'
							autoComplete='new-password'
							required
						/>
						<span>UserName</span>
						<i></i>
					</div>
					<div className='inputBox'>
						<input
							type='email'
							name='email'
							autoComplete='new-password'
							required
						/>
						<span>Email</span>
						<i></i>
					</div>
					<div className='inputBox'>
						<input
							type='password'
							name='pass'
							autoComplete='new-password'
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
					<input type='submit' value='SingUp' />
				</form>
			</div>
		</div>
	);
};

export default Register;
