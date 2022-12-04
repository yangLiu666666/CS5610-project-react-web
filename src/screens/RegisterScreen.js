import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../redux/reducer/users-thunks";

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        setError(null)
        const newUser = {username, password}
        dispatch(registerThunk(newUser))
    }
    return(
        <div className="row m-3 p-2">
            <div className="col-12">
                <div className="row justify-content-center">
                    <h1 className="col-6 col-md-4 text-center">Register</h1>
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
                    <button className="col-4 col-md-2 btn btn-primary m-3" onClick={handleRegisterBtn}>Register</button>
                </div>
            </div>
            {
                currentUser &&
                <h2>Welcome {currentUser.username}</h2>
            }
        </div>
    )
}
export default Register
