import {useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AppNavbar from "./components/Navbar"
import Home from "./screens/Home";
import AppContext, {MyContext} from "./context";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import {Routes, Route} from "react-router";
import Login from "./screens/Login";
import Register from "./screens/Register";
// import axios from "axios";
import Profile from "./screens/Profile";
import axios from './Axios';

function App() {
    const {user, setUser} = useContext(MyContext);
    // useEffect(()=>{
    //     axios.post('http://localhost:4000/auto-login')
    //         .then(({data}) => setUser(data));
    // }, [])
    useEffect(()=>{
        axios.post('/auto-login')
            .then(({data}) => setUser(data));
    }, [])

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
                        <Route path="/profile" element={<Profile />}/>
                        </>
                        )}
                </Routes>
      </BrowserRouter>
  );
}
export default App;