import '../css/login.css'
import {Link} from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useContext, useRef} from "react";
import {Context} from "../context/Context";
import axios from "axios";
const Login =()=>
{
    const usernameRef = useRef()
    const passwordRef = useRef()
    const {dispatch, isFetching} = useContext(Context)

    const handleSubmit = async (e) =>
    {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try
        {
            const res = await axios.post('/login/',
                {
                    username:usernameRef.current.value,
                    password:passwordRef.current.value
                })
            console.log(res.data)
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        }
        catch (error)
        {
            dispatch({type:"LOGIN_FAILURE"})
        }

    }

    return(
        <div className="container">
            <div className="row w-100 login-form">
                <div className="col-xl-4 lea ">
                    <img src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png" alt="akn do" className=""/>
                </div>
                <div className="col-xl-4 login-wrap ">
                    <div className="login-form">
                        <form className="sign-in-htm" onSubmit={handleSubmit}>
                            <h2  className="d-flex  mb-3 text-center">Sign In</h2>

                            <div className="group">
                                <label htmlFor="user" className="label" >Username</label>
                                <input ref={usernameRef} id="user" type="text" className="input" placeholder="Username"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label" >Password</label>
                                <input ref={passwordRef} disabled={isFetching} id="pass" type="password" className="input" name="password" placeholder="password"/>
                            </div>
                            <div className="group">
                                <input id="check" type="checkbox" className="check" />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox />}
                                    label="Keep me Signed in?"
                                    labelPlacement="end"
                                />

                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign In"/>
                            </div>
                            <div className="hr"> </div>
                            <div className="foot-lnk">
                                <Link to="#" className="already">Forgot Password?  </Link>or
                                <Link to="/register" className="already"> <b style={{marginLeft:8}} >Register --></b></Link>
                            </div>
                        </form>
                        {/*Sign up*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
