import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './login.css'; 
import Swal from "sweetalert2";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            
            const res = await axios.post("http://localhost:3003/auth/login", { email, password });
            if (res.data.success) {
                Swal.fire({
                    title: "Hi, Arun",
                    text: "Successfully Logged In!",
                    icon: "success"
                  });
                navigate("/"); 
            } else {
                Swal.fire({
                    title: 'Error!',
                    text:"Invalid login credentials",
                    icon: 'error',
                    confirmButtonText: 'Tru Again'
                });
            }
        } catch (error) {
            
            console.error("An error occurred during login:", error);
            alert(`An error occurred during login: ${error.response?.data?.message || error.message}`);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={submit} className="loform">
             Enter your Email id: <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                /><br></br>
                Enter your Password<input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                /><br></br>
                <input type="submit" value="Login" className="sumbut" />
            </form>
           
            <p>OR</p>
          
            Don't have an account  <Link to="/signup" className="click">Click here</Link>
        </div>
    );
}

export default Login;
