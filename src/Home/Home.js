import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data.json'
import Lottie from 'react-lottie';
import './Home.css';
const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='home-main'>
            <div class="d-flex justify-content-center">
                <div class="d-flex flex-column-reverse">
                    <div class="home">
                        <h3 className='text-center random'>Random Generator Application</h3>
                        <h4 className='text-center text-light'>Find Unique Random Number Among All The Registered Users</h4>
                        <div className='d-flex justify-content-center mt-3'>
                            <Link to='/random'><button className='random-button'>Get Random Number</button></Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <div class="mt-3 lotti">
                        <Lottie options={defaultOptions} />
                    </div>
                    </div>


                </div>
            </div>

        </div>


    );
};

export default Home;