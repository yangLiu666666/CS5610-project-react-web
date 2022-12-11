import {createContext, useContext, useState} from 'react';
import store from "./redux/store";
export const MyContext = createContext();

function AppContext({children}) {
    const [research, setResearch] = useState([]);
    const [meals, setMeals] = useState([]);
    const[user, setUser] = useState(null);
    return (
        <MyContext.Provider store={store} value={{meals, setMeals, user, setUser, setResearch, research }}>
            {children}
        </MyContext.Provider>
    )

}
export default AppContext;