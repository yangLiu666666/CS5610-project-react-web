import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editProfile} from "../../redux/profile-reducer";

const EditProfileComponent = ({profile, setEditProfile}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(profile.name);
    const [country, setCountry] = useState(profile.country);

    const saveProfileHandler = () => {
        const newProfile = {
            ...profile,
            name: name,
            country: country
        }
        dispatch(editProfile(newProfile));
        setEditProfile(false);
    }

    return (
        <>
            <div className="row align-items-center ">
                <div className="col-1" onClick={() => setEditProfile(false)}>
                    <i className="bi bi-x-lg"/>
                </div>
                <div className="col-9 ps-0 fw-bold fs-5">
                    Edit Profile
                </div>
                <button onClick={saveProfileHandler} className="col-2 btn border-secondary fw-bold rounded-pill text-white bg-black">
                    Save
                </button>
            </div>
            <div className="row position-relative mt-2">
                <img src={profile.bannerPicture} className="img-fluid" style={{height:"300px"}}/>
                <img src={profile.profilePicture} className="img-fluid col-lg-3 col-sm-4 ms-4 rounded-circle position-absolute" style={{bottom:"-50px"}}/>

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
        </>
    )
}

export default EditProfileComponent;