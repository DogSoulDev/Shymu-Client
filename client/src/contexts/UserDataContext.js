import { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext({});
const userCacheStorage = JSON.parse(localStorage.getItem("userCache")) || {};

/**
 * It's a React Context Provider that stores user data in localStorage.
 * @returns The UserDataContextProvider is being returned.
 */
export const UserDataContextProvider = ({ children }) => {
	const [userCache, setUserCache] = useState(userCacheStorage);

	useEffect(() => {
		localStorage.setItem("userCache", JSON.stringify(userCache));
	}, [userCache]);

	return (
		<UserDataContext.Provider value={{ userCache, setUserCache }}>
			{children}
		</UserDataContext.Provider>
	);
};
