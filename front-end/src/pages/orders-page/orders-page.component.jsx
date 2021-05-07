import React, {useEffect} from 'react';
import {useSelector} from "react-redux"; 

const OrdersPage = ({history}) => {
    
    const user = useSelector(state => state.user)
    const {currentUser} = user

    useEffect(() => {
        if (!currentUser) {
            history.push("/")
        }
    }, [history, currentUser])

    return (
        <div>
            OrdersPage
        </div>
    )
}

export default OrdersPage
