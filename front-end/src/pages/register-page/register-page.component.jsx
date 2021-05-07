import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import "./register-page.style.scss";

const RegisterPage = ({history}) => {

    const user = useSelector(state => state.user)
    const {currentUser} = user

    useEffect(() => {
        if (currentUser) {
            history.push("/profile")
        }
    }, [history, currentUser])

    return (
        <main className="register-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 log-in">
                        <SignIn/>
                    </div>

                    <div className="col-md-6">
                        <SignUp/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage
