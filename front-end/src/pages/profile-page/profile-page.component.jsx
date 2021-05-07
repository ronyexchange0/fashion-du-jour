import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"; 
import {Link} from "react-router-dom";

import {logOutUser} from "../../redux/user/user.actions";

import "./profile-page.style.scss";

const ProfilePage = ({history}) => {

    const user = useSelector(state => state.user)
    const {currentUser} = user
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser) {
            history.push("/")
        }
    }, [history, currentUser])
    
    return (
        <main className="profile-page">
            <div className="container">
                <Link to="/profile/edit">
                    <div className="option edit">
                        Edit Profile
                    </div>
                </Link>
                
                <Link to="/profile/orders">
                    <div className="option orders">
                        Orders
                    </div>  
                </Link>

                <div onClick={() => dispatch(logOutUser())} className="option log-out">
                    <span >Log Out</span>
                </div>
            </div>
        </main>
    )
}

export default ProfilePage
