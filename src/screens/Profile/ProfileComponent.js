import React, {useContext, useEffect, useState} from 'react';
import {MyContext} from "../../context";
import Button from "react-bootstrap/Button";
import MealCard from "../../components/MealCard";
import {Link, useNavigate} from "react-router-dom";
import {
    findFollowersByUserId,
    findFollowingsByUserId, findUserById,
    userAFollowUserB,
    userARemoveFollowUserB
} from "../../services/userServices";
import {useParams} from "react-router";
import FollowComponent from "./FollowComponent";
import {ListGroup} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {useSelector} from "react-redux";

const ProfileComponent = ({profile, setEditProfile}) =>{
    const navigate = useNavigate();
    const {user, meals, setUser} = useContext(MyContext);
    const [following, setFollowing] = useState([]);
    const [follower, setFollower] = useState([]);
    const [userProfile, setProfile] = useState(null);
    const [follow, setFollow] = useState(false);
    const params = useParams();

    const findFollowers = () => {
        findFollowersByUserId(userProfile._id)
            .then((data) => {
                setFollower(data)
            })
            .catch((error) => {console.log(error)
            })
    }

    const findFollowings = () => {
        findFollowingsByUserId(userProfile._id)
            .then((data) => {
                setFollowing(data)
            })
            .catch((error) => {console.log(error)
            })
    }

    const handleFollow = () => {
        userAFollowUserB(user._id, userProfile._id)
            .then(() => {
                setFollow(true)
            })
    }

    const handleRemoveFollow = () => {
        userARemoveFollowUserB(user._id, userProfile._id)
            .then((data) => {
                setFollow(false)
            })
    }

    const handleEditProfile = () => {
        if (user) {
            const uid = params.uid;
            navigate(`/profile/${uid}/edit`);
            user.name = profile.name;
            user.country = profile.country;
        }
    }


    useEffect(() => {
        const uid = params.uid;
        findUserById(uid).then((data) => {
            setProfile(data);
        })
    },[])

    useEffect(() => {
        if (userProfile) {
            findFollowers();
            findFollowings();
        }
    },[userProfile])

    return(
        <div>
            {userProfile &&
            <div>
                <div className="row align-items-center">
                    <Link to="/" className="col-1"><i className="bi bi-arrow-left"></i></Link>
                    <div className={"col-12 col-md-4 col-lg-3 text-end"}>
                        <div>
                            <Button onClick={handleFollow}>Follow</Button>
                        </div>
                        <i className="fa-solid fa-address-card pe-2"/>
                        <span className={"fw-bold"}><h1>{user.name}'s Profile</h1></span>
                        {user && <Button onClick={handleEditProfile}>Edit your profile</Button>}

                        {/*<div>*/}
                        {/*<Button variant="primary" onClick={handleShow}>*/}
                        {/*    Followers<span> {userProfile.followers.length}</span>*/}
                        {/*</Button>*/}

                        {/*<Modal show={show} onHide={handleClose}>*/}
                        {/*    <Modal.Header closeButton>*/}
                        {/*        <Modal.Title>Followers</Modal.Title>*/}
                        {/*    </Modal.Header>*/}
                        {/*    <Modal.Body>*/}
                        {/*        {follower.map((u)=>*/}
                        {/*            <ListGroup>*/}
                        {/*                <ListGroup.Item>{u.email}</ListGroup.Item>*/}
                        {/*            </ListGroup>*/}
                        {/*    )}</Modal.Body>*/}
                        {/*</Modal>*/}
                        {/*</div>*/}

                        {/*<Button variant="primary" onClick={handleShow}>*/}
                        {/*    Followings<span> {userProfile.followings.length}</span>*/}
                        {/*</Button>*/}
                        {/*<Modal show={show} onHide={handleClose}>*/}
                        {/*    <Modal.Header closeButton>*/}
                        {/*        <Modal.Title>Followings</Modal.Title>*/}
                        {/*    </Modal.Header>*/}
                        {/*    <Modal.Body>*/}
                        {/*        {following.map((u)=>*/}
                        {/*            <ListGroup>*/}
                        {/*                <ListGroup.Item>{u.email}</ListGroup.Item>*/}
                        {/*            </ListGroup>)}*/}
                        {/*    </Modal.Body>*/}
                        {/*</Modal>*/}
                    </div>
                </div>

                <ListGroup>
                    <ListGroup.Item><h3>User Information</h3></ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Email: {user.email}</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Name: {user.name} </h5>
                        {/*{setEditProfile && <h5>Name: {profile.name}</h5>}*/}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>Country: {user.country}</h5>
                        {/*{setEditProfile && <h5>Country: {profile.country}</h5>}*/}
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup>
                    <ListGroup.Item><h3>Favorite Food</h3></ListGroup.Item>
                </ListGroup>
                <div className="meals-container">
                    {meals.map((meal) => (
                        <MealCard key={meal.mealId} {...meal} idMeal={meal.mealId}/>
                    ))}
                </div>

                <ListGroup>
                    <h3>Followers<span> {userProfile.followers.length}</span></h3>
                    <FollowComponent users={follower} userType={'Follower'}/>
                </ListGroup>

                <ListGroup>
                    <h3>Followings<span> {userProfile.followings.length}</span></h3>
                    <FollowComponent users={following} userType={'Following'}/>
                </ListGroup>

            </div>
            }
        </div>

    )
};
export default ProfileComponent;
