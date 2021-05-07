import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"; 

import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import {editUserAction} from "../../redux/user/user.actions";

import "./profile-edit-page.style.scss";

const ProfileEditPage = ({history}) => {

    const user = useSelector(state => state.user)
    const {currentUser, success} = user

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    
    const dispatch = useDispatch() 
    
    useEffect(() => {
        if (!currentUser) {
            history.push("/")
        } else {
            setName(currentUser.name)
            setEmail(currentUser.email)
        }
    }, [history, currentUser])
    
    const editUser = (e) => {
        e.preventDefault()
        dispatch(editUserAction({id: currentUser.id, name, email, password}))
    }

    return (
        <main className="profile-edit-page">
            <div className="container">
                <h1>Edit Profile</h1>
                {success && <h3>Your profile was updated successfully</h3>}
                <form onSubmit={editUser}>
                    <div className="input">
                        <Input 
                        type="text" 
                        placeHolder="name" 
                        value={name}
                        onChange={event => {
                            setName(event.target.value)
                        }}
                        />                
                    </div>

                    <div className="input">
                        <Input 
                        type="text"
                        placeHolder="email" 
                        value={email}
                        onChange={event => {
                            setEmail(event.target.value)
                        }}
                        />                
                    </div>

                    <div className="input">
                        <Input 
                        type="text" 
                        placeHolder="password"
                        onChange={event => {
                            setPassword(event.target.value)
                        }}
                        />                
                    </div>
               
                    <Button 
                    type="submit" 
                    text="submit" 
                    />
                </form>
            </div>
        </main>
    )
}

export default ProfileEditPage
