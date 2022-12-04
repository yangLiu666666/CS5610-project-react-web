import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, registerThunk} from "../redux/reducer/users-thunks";
import {ADMIN, USER} from "../services/utils";

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    let [role, setRole] = useState(USER);
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        setError(null)
        const loginUser = {username, password}
        dispatch(loginThunk(loginUser));
    }
    return(
        <div className="row m-3 p-2 justify-content-center">
            <div className="col-12">
                <div className="row justify-content-center">
                    <h1 className="col-6 col-md-4 text-center">Login</h1>
                </div>
            </div>
            <div className="col-12">
                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 form-label fw-bold m-1">
                        Username:
                        <input className="form-control m-1" type="text"
                               onChange={(e) => setUsername(e.target.value)}
                               placeholder="name"
                        />
                    </label>
                </div>
            </div>
            <div className="col-12">
                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 form-label fw-bold m-1">
                        Password:
                        <input className="form-control m-1" type="password"
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="password"
                        />
                    </label>
                </div>
            </div>
            <div className="col-12">
                <div className="row justify-content-center">
                    <label className="col-6 col-md-4 form-label fw-bold m-1">
                        Role:
                        <select defaultValue={"user"} className="form-select form-select-sm m-1" aria-label="Default select example"
                                onChange={(e) => setRole(e.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="col-12">
                <div className="row justify-content-center">
                    <button className="col-4 col-md-2 btn btn-primary m-3" onClick={handleLoginBtn}>Login</button>
                </div>
            </div>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </div>
    )
}
export default LoginScreen;