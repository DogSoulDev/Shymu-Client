// import Login from "./UI/views/pages/Login/Login.jsx";
import { useState, useEffect } from "react";
import Axios from "axios";
// import Login from "./UI/views/pages/Login/Login";

//* Instalamos Axios para hacer peticiones a la api/back de una manera sencilla.
//* Creamos un map para recorrer el Array que creamos con el useState llamado listOfUsers.
//* Dentro del useEffect vamos ha hacer una llamada a la api a nuestro backend.

const App = () => {
	const [listOfusers, setListOfUsers] = useState([]);
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [username, setUsername] = useState(""); //* él response es = a nuestro 'res' del back, este es el endpoint de nuestra Api Se pone así porque funciona de manera local, si fuese en un servidor habría que poner la dirección.

	useEffect(() => {
		Axios.get("http://localhost:3001/getUsers").then((response) => {
			setListOfUsers(response.data); //*una vez recibida la respuesta del back para acceder a esos datos, ponemos:
		});
	}, []);
	//* Habíamos indicado en el back que en nuestro archivo index.js en app.post especificamos que había req.body y eso es lo que tiene que mandar el front, //*Dentro la funcion createUser,
	//* Después de agregar la dirección, tenemos que decirle que mandamos un objeto con los siguientes datos {} //*Ahora, para guardar la información que el usuario ponga en nuestros inputs de abajo, tenemos que crear un estado(useState) para cada uno de los campos, name,age,username...etc //!creamos los useState arriba donde corresponde. //*Una vez funcionando nuestra petición para no tener que refrescar la página cada vez que creemos un usuario, podemos poner: //*setListOfUsers([...listOfusers, {name,age,username}])  y aunque refresquemos la página seguirán ahí porque ya estarán en nuestra base de datos de mongodb.
	const createUser = () => {
		Axios.post("http://localhost:3001/createUser", {
			name,
			age,
			username,
		}).then((response) => {
			alert("User created.");
			setListOfUsers([...listOfusers, { name, age, username }]);
		});
	};

	return (
		<div className='App'>
			{/* <Login/> */}
			<div className='usersDisplay'>
				{listOfusers.map((user) => {
					return (
						<div>
							<h1>Name:{user.name}</h1>
							<h1>Age:{user.age}</h1>
							<h1>Username:{user.username}</h1>
						</div>
					);
				})}
			</div>

			<div>
				<input
					type='text'
					placeholder='Name...'
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>

				<input
					type='number'
					placeholder='Age...'
					onChange={(event) => {
						setAge(event.target.value);
					}}
				/>

				<input
					type='text'
					placeholder='username...'
					onChange={(event) => {
						setUsername(event.target.value);
					}}
				/>
				<button onClick={createUser}>Create User</button>
			</div>
		</div>
	);
};
//* Para poder enviar datos al back lo primero es la estructura de los imputs y el botón:
//* Configuramos el create user para meterlo en el onClick
//* Si nos fijamos para recibir la información que el usuario ponga en el input usamos event y le metemos al input setName(event.target.value);
//* Despues de poder mover la información que ponga el usuario con el setName,setAge,setUsername de nuestro hook useState, tenemos que ponerle el valor fijo a nuestra petición en el Axios.post y así se usara el useState completo.
//* Podemos abreviar en la petición post, en vez de name: name, con poner solo name ya nos recoge esos datos.
export default App;
