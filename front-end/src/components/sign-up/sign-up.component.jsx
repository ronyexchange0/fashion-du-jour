import React, { useState} from 'react';
import {useDispatch} from "react-redux";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";


import google from "../../assets/google.svg";
import { registerUser } from '../../redux/user/user.actions';

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            console.log(name, email, password, confirmPassword)
            dispatch(registerUser(name, email, password))
        } else {
            console.log("not correct")
        }
    }

    return (
        <>
            <h2 className="h1">Sign Up</h2>
            <form className="row" onSubmit={submitHandler}>
                {/* <div className="col-md-6">
                    <Input type="text" placeholder="First Name"/>
                </div> */}

                <div className="col-md-12">
                    <Input type="text" placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>

                {/* <div className="col-md-6">
                    <Input type="text" placeholder="User Name"/>
                </div> */}

                <div className="col-md-12">
                    <Input 
                    type="email" 
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>

                <div className="col-md-6">
                    <Input 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>

                <div className="col-md-6">
                    <Input 
                    type="password"
                     placeholder="Repeat Password"
                     onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}/>
                </div>
                <Button text="Sign Up" type="submit"/>
            </form>
            <div className="separator">
                <span className="line"></span>
                <span className="or">OR</span>
                <span className="line"></span>
            </div>
            <Button text="Sign Up With Google" icon={google}/>
        </>
    )
}

export default SignUp
