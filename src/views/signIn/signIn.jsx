import {useDispatch, useSelector} from "react-redux";
import {selectToken, tokenAsync} from "../../features/user/userSlice.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userToken = useSelector(selectToken)

    useEffect(() => {
        if(userToken) return navigate("/profil")
    }, [userToken])

    const handleSubmit = (e) => {
        e.preventDefault()
        const {username, password } = e.target.elements
        dispatch(tokenAsync(username.value,password.value))
            .then(() => {
                navigate("/profil")
            })
    }


    return (
        <>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </>
    )
}
