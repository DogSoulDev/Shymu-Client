import App from "./App";
import Login from "./UI/views/components/Login/Login.jsx";
import Register from "./UI/views/components/SignUp/Register"
import Onboarding from "./UI/views/pages/Onboarding/Onboarding";
import Error404 from "./UI/views/pages/Error404/Error404.jsx";
import Dashboard from "./UI/views/pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDataContextProvider } from "./contexts/UserDataContext";

const Router = () => {
	return (
		<UserDataContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/onboarding' element={<Onboarding />} />				</Routes> 
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/success' element={<App />} />
					<Route path='/cancel' element={<App />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/dashboard' element={<Dashboard />} />
					
					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</UserDataContextProvider>
	);
};

export default Router;
