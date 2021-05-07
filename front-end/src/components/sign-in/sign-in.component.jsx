import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";

import { signInUser } from '../../redux/user/user.actions';

import google from "../../assets/google.svg";

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signInUser(email,password))
    }

    return (
        <>
            <h2 className="h1">Log In</h2>
            <form onSubmit={submitHandler}>
                <Input 
                type="email" 
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <Input 
                type="password" 
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <Button 
                text="Log In" 
                type="submit"
                />
            </form>
            <div className="separator">
                <span className="line"></span>
                <span className="or">OR</span>
                <span className="line"></span>
            </div>
            <Button text="Log In With Google" icon={google}/>
        </>
    )
}

export default SignIn
