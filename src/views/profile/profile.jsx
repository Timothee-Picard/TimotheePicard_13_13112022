import {useDispatch, useSelector} from "react-redux";
import {getUserAsync, selectToken, selectUser, updateUserAsync} from "../../features/user/userSlice.js";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Profile() {
    const userToken = useSelector(selectToken)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if(!userToken) return navigate("/connexion")
        dispatch(getUserAsync(userToken))

    }, [userToken, getUserAsync])

    const handleSubmit = (e) => {
        e.preventDefault()
        const {firstname, lastname } = e.target.elements
        dispatch(updateUserAsync(userToken, firstname.value, lastname.value
        )).then(() => {
            setEditMode(false)
        })
    }

    return (
        <>
            <div className="header">
                {
                    (!editMode)? (
                        <>
                            <h1>Welcome back<br/>{user.firstName + " " + user.lastName} !</h1>
                            <button className="edit-button" onClick={() => setEditMode(true)}>Edit Name</button>
                        </>
                    ) : (
                       <>
                           <h1>Welcome back</h1>
                           <form onSubmit={handleSubmit} className="profilForm">
                               <div className="profilFormInputList">
                                   <input type="text" id="firstname" name="firstname" placeholder="firstname" defaultValue={user.firstName} />
                                   <input type="text" id="lastname" name="lastname" placeholder="lastname" defaultValue={user.lastName} />
                               </div>
                               <div className="profilFormBottom">
                                   <input type="submit" value="save" />
                                   <button onClick={(e) => {
                                       e.preventDefault()
                                       setEditMode(false)
                                   }}>cancel</button>
                               </div>
                           </form>
                       </>
                    )
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </>
    )
}
