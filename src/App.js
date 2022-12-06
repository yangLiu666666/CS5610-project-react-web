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
import axios from "axios";
import AppContext, {MyContext} from "./context";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import {Routes, Route} from "react-router";
import Login from "./screens/Login";
import Register from "./screens/Register";

const store = configureStore({
  reducer: {
      omdb: omdbReducer,
      likes: likesReducer,
      users: usersReducer
  }
})

function App() {
    const {user} = useContext(MyContext);
    useEffect(()=>{
        axios.post('/auto-login');

    }, [])

  return (
      <BrowserRouter>
            <AppNavbar />
                <Routes>
                    <Route index path="/home" element={<Home />}/>
                    {!user && (
                    <>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    </>
                    )}
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