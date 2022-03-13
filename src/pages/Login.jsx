import '../css/login.css'
import {Link} from "react-router-dom";
const Login =()=>
{
    return(
        <div>
            <img src="https://res.cloudinary.com/diallo/image/upload/v1646879082/assets/images/log_klcxta.gif" alt="akn" className="leaf"/>
            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                    <label htmlFor="tab-1"   className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                    <label htmlFor="tab-2"   className="tab">Sign Up</label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label" >Username</label>
                                <input id="user" type="text" className="input" placeholder="Username"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label" >Password</label>
                                <input id="pass" type="password" className="input" name="password" placeholder="password"/>
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" />
                                <label htmlFor="check"><span className="icon"> </span> Keep me Signed
                                    in</label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In"/>
                            </div>
                            <div className="hr"> </div>
                            <div className="foot-lnk">
                                <Link to="#" className="already">Forgot Password?  </Link>or
                                <label htmlFor="tab-2" className="already"> <b style={{marginLeft:8}} >Register --></b></label>
                            </div>
                        </div>
                        {/*Sign up*/}
                        <div className="sign-up-htm">
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
                                <label htmlFor="tab-1" className="already">Already a Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
