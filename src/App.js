import {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from "./components/Navbar"
import Home from "./screens/HomeAndSearch";
import {MyContext} from "./context";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import {Routes, Route} from "react-router";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import axios from './Axios';
import {findAllLikes} from "./services/likeServices";
import EditProfile from "./screens/Profile/EditProfile";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import profileSlice from "./redux/profile-reducer";

function App() {
    const {user, setUser, meals, setMeals} = useContext(MyContext);

    const store = configureStore({
        reducer: {
            profile: profileSlice
        }
    })

    useEffect(()=>{
        axios.post('/auto-login')
            .then(({data}) => setUser(data))
    }, [])


    useEffect(()=>{
        if(user) {
            console.log(user)
            findAllLikes(user._id)
                .then((data)=> {
                    setMeals(data)
                })
        }
    },[user])

  return (
      <Provider store={store}>
      <BrowserRouter>
            <AppNavbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />}/>
                            <Route path="/register" element={<Register />}/>
                            {/*<Route path="/details/:mid" element={<MealsContainer/>}/>*/}
                        </>
                    )}
                    {user && (
                        <>
                            <Route path="/profile/:uid" element={<Profile />}/>
                            <Route path="/profile/:uid/edit" element={<EditProfile />}/>
                        </>
                        )}
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
      </BrowserRouter>
      </Provider>
  );
}
export default App;