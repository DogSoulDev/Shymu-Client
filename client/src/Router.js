import App from "./App";
import Login from "./UI/views/pages/Login/Login.jsx";
import Register from "./UI/views/pages/SignUp/Register"
import Error404 from "./UI/views/pages/Error404/Error404.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDataContextProvider } from "./contexts/UserDataContext";

const Router = () => {
	return (
		<UserDataContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/src/UI/views/pages/Login/Login.jsx' element={<Login />} />
				</Routes>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/success' element={<App />} />
					<Route path='/cancel' element={<App />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</UserDataContextProvider>
	);
};

export default Router;
