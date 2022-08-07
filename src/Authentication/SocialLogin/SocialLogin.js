import React from 'react';
import google from '../../Images/Social/google.png';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLogin.css'
import Loading2 from '../Loading/Loading2';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    if (loading) {
        return <Loading2></Loading2>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='mb-5 mt-4'>
                <p className='text-center'>Sign In With Another Account</p>

                <div className='social-media-signin'>
                    <div className='social-div'>
                        <button onClick={() => signInWithGoogle()} className='google-button btn btn-light w-50 p-2 d-block mx-auto my-2  '>
                            <img style={{ width: '30px' }} src={google} alt='' />
                            <span className='mx-3 google'>Google Sign In</span>
                        </button>
                    </div>
                    <div>
                        <p className='text-center'>{errorElement}</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SocialLogin;