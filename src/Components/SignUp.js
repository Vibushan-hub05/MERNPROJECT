import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css"; 
import Swal from 'sweetalert2'

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3003/auth/signup", { username, email, password, confirmPassword });
            if (res.data.success) {
                Swal.fire({
                    title: "Signed Up!",
                    text: "Successfully Registered!",
                    icon: "success"
                  });
                navigate("/login"); 
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: res.data.message || "Signup failed",
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: "An error occurred during signup",
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error(error);
        }
    }

    return (
        
        <div className="signup">
            <h1>Signup</h1>
            <form onSubmit={submit} className="siform">
               Create your Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required /><br></br>
                Enter your Email id: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br></br>
                Enter your Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br></br>
                Confirm Your Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required /><br></br>
                <input type="submit" value="Signup" />
            </form>
           
            <p>OR</p>
            Already have an account
            <Link to="/" className="click">Click here</Link>
        </div>
    );
}

export default Signup;
