import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useLogin } from "../context/login-context";
import { Login } from "../services/login-service";


export const LoginPage = () => {

    const [inputValue, setInputValue] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { State: { isLogin, error }, dispatch } = useLogin();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    };

    const Submit = () => {
        Login(dispatch, inputValue);
    };

    const logoutHandler = () => {
        dispatch({ type: "LOGOUT" })
    }

    if (isLogin) {
        navigate("/dashboard")
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center  m-2" style={{ height: "100vh" }}>

            <img src="./pushpak.jpeg" alt="logo img" />

            <div className="d-flex  justify-content-center align-items-center  m-3 " style={{ width: "100%" }}>
                <div class="card p-3 rounded-4" style={{ width: "40rem" }}>

                    <div class="card-body d-flex align-items-start flex-column " >

                        <div className="d-flex justify-content-center align-items-center " style={{ width: "100%", textDecoration: "underline" }}>
                            <h1>Sign In</h1>
                        </div>


                        <h5>Email</h5>
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                name="username"
                                class="form-control rounded-4"
                                placeholder="Enter Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={e => inputHandler(e)}
                            />
                        </div>


                        <h5>Password</h5>
                        <div class="input-group mb-3 ">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="form-control rounded-4 rounded-end border-end-0"
                                placeholder="Enter Password"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={e => inputHandler(e)}
                            />
                            <span
                                className="input-group-text rounded-4 rounded-start border-start-0"
                                id="basic-addon2"
                                onClick={() => setShowPassword(!showPassword)}
                            >Show</span>
                        </div>


                        {error &&
                            <div className="d-flex flex-column justify-content-center align-items-center m-3" style={{color:"red",width:"100%"}}>
                                Incorrect Username or Password!
                            </div>
                        }


                        {isLogin ?
                            <button
                                type="button"
                                className="btn btn-primary mb-3 rounded-4"
                                onClick={logoutHandler}
                                style={{ width: "100%" }}>Log Out</button>
                            :
                            <button
                                type="button"
                                className="btn btn-primary mb-3 rounded-4"
                                onClick={Submit}
                                style={{ width: "100%" }}>Sign In</button>
                        }


                        <div className="d-flex justify-content-center align-items-center flex-column mb-3" style={{ width: "100%" }}>
                            <Link to="/">Forgot Password ?</Link>
                            <p className="m-3">Don't have an account? <Link to="#">Sign_Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}