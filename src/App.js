import {useContext, useEffect} from "react";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import usersReducer from "./redux/reducer/users-reducer";
import omdbReducer from "./redux/reducer/omdb-reducer";
import {likesReducer} from "./redux/reducer/likes-reducer";
import AppNavbar from "./components/Navbar"
import Home from "./screens/Home";
import AppContext, {MyContext} from "./context";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import {Routes, Route} from "react-router";
import Login from "./screens/Login";
import Register from "./screens/Register";
// import axios from "axios";
import Favorites from "./screens/Favorites";
import axios from './Axios';


const store = configureStore({
  reducer: {
      omdb: omdbReducer,
      likes: likesReducer,
      users: usersReducer
  }
})

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
                    {user && <Route path="/my-favorites" element={<Favorites/>}/>}
                </Routes>
      </BrowserRouter>
  );
}
export default App;
// <div className="container mt-4 mb-4">
//   <Provider store={store}>
//     {/*<CurrentUser>*/}
//       <BrowserRouter>
//         {/*<Navigation/>*/}
//           <Routes>
//               <Route path="/search" element={<SearchScreen/>}/>
//             <Route path="/register" element={<Register/>}/>
//             <Route path="/users" element={<UserList/>}/>
//             <Route path="/login" element={<Login/>}/>
//           </Routes>
//       </BrowserRouter>
//     {/*</CurrentUser>*/}
//   </Provider>
// </div>