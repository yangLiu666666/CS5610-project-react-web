import {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from "./components/Navbar"
import Home from "./screens/Home";
import {MyContext} from "./context";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import {Routes, Route} from "react-router";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import axios from './Axios';
import {findAllLikes} from "./services/likeServices";

function App() {
    const {user, setUser, meals, setMeals} = useContext(MyContext);
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
      <BrowserRouter>
            <AppNavbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    {!user && (
                        <>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        </>
                    )}
                    {user && (
                        <>
                        <Route path="/profile/:uid" element={<Profile />}/>
                        </>
                        )}
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
      </BrowserRouter>
  );
};
export default App;