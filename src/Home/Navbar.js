import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Home.css';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('Your Number');
    };
    return (
        <nav class="navbar navbar-light nav-main">
            <div class="container-fluid">
                <Link to='/'><button class="title">Random Generator</button></Link>
                { user ?<span onClick={logout}><Link to="/"><button className='login'>Sign Out</button></Link></span> :<Link to="/login"><button className='login'>Login</button></Link>}
                    
            </div>
        </nav>
    );
};

export default Navbar;