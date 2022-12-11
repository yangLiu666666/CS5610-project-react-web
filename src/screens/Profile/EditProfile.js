import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {editProfile} from "../../redux/profile-reducer";

const EditProfile = ({profile, setEditProfile}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const params = useParams();

    const saveProfileHandler = () => {
        const newProfile = {
            ...profile,
            name: name,
            country: country
        }
        dispatch(editProfile(newProfile));
        setEditProfile(false);
    }

    const handleBack = () => {
        const uid = params.uid;
        navigate(`/profile/${uid}`);
        setEditProfile(false);
    }

    return (
        <div>
            <div className="row align-items-center ">
                <div className="col-1" onClick={handleBack}>
                    <Link to={`./`} className="bi bi-x-lg"/>
                </div>
                <div className="col-9 ps-0 fw-bold fs-5">
                    Edit Profile
                </div>
                <button onClick={saveProfileHandler} className="col-2 btn border-secondary fw-bold rounded-pill text-white bg-black">
                    Save
                </button>
            </div>
            <div className="row position-relative mt-2">
                <div className="jumbotron" style={{height:"300px"}}/>
            </div>
            <div className="row pt-5 mt-2"/>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="firstname" className="form-label text-secondary">Name:</label>
                <input onChange={(event) => setName(event.target.value)}
                       id="firstname"
                       type="text"
                       className="form-control"
                       value={name}/>
            </div>

            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="location" className="form-label text-secondary">Country:</label>
                <input onChange={(event) => setCountry(event.target.value)}
                       id="location"
                       type="text"
                       className="form-control"
                       value={country}/>
            </div>
        </div>
    )
}
export default EditProfile;