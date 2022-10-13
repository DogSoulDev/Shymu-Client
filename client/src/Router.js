import App from "./App";
import Login from "./UI/views/components/Login/Login.jsx";
import ForgotPassword from "./UI/views/components/ForgotPassword/ForgotPassword"
import Signup from "./UI/views/components/SignUp/Signup"
import Onboarding from "./UI/views/pages/Onboarding/Onboarding";
import Error404 from "./UI/views/pages/Error404/Error404.jsx";
import Dashboard from "./UI/views/components/Dashboard/Dashboard";
import UpdateProfile from "./UI/views/components/UpdateProfile/UpdateProfile"

import PrivateRoute from "./UI/views/components/PrivateRoute/PrivateRoute"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDataContextProvider } from "./contexts/UserDataContext";
import { AuthProvider } from "./contexts/AuthContext"

const Router = () => {
	return (
		<UserDataContextProvider>
			<BrowserRouter>

				<AuthProvider>
					<Routes>
						<Route path='/onboarding' element={<Onboarding />} />				</Routes> 
					<Routes>
						<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>

						<Route path='/' element={<App />} />
						<Route path='/success' element={<App />} />
						<Route path='/cancel' element={<App />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>

						<Route path="/forgot-password" element={<ForgotPassword />}></Route>

						
						<Route path='*' element={<Error404 />} />
					</Routes>
					</AuthProvider>
			</BrowserRouter>
		</UserDataContextProvider>
	);
};

export default Router;
