import '../css/login.css'
import {Link} from "react-router-dom";
const Register =()=>
{
    return(
        <div className="container">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-xl-4 lea ">
                    <img src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png" alt="akn do" className=""/>
                </div>
                <div className="col-xl-4 login-wrap">
                    <div className="register-form">
                        <div className="sign ">
                            <h2  className="d-flex  mb-2 text-center">Sign In</h2>

                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" placeholder="Username"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" name="password" placeholder="Password"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Repeat Password</label>
                                <input id="pass" type="password" className="input" name="password" placeholder="confirm"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input" placeholder="Email address"/>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up"/>
                            </div>
                            <div className="hr"> </div>
                            <div className="foot-lnk">
                                <Link to="/login" className="already">Already a Member?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register
