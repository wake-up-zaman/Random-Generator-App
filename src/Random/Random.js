import React, { useEffect, useState } from 'react';
import '../Home/Home.css';
const Random = () => {
    const [randomNum, setRandomNum] = useState(0);

    const handleRandomNum = () => {
        setRandomNum(Math.floor(Math.random() * (100000 - 10000 + 1) + 10000));
        localStorage.setItem('Your Number', JSON.stringify((Math.floor(Math.random() * (100000 - 10000 + 1) + 10000))));

    }
    useEffect(() => {
        const forms = JSON.parse(localStorage.getItem('Your Number'));
        if (randomNum !== 0) {
            setRandomNum(forms)
        }
    }, [])

    return (
        <div className='random-main'>
            <div className='d-flex justify-content-center '>
                <div className='random-content'>

                    <div className='d-flex justify-content-around mb-2'>
                    </div>

                    <div className='mt-4 text-primary'>
                        <h3>Your Random Number: {localStorage.getItem('Your Number')}</h3>
                    </div>
                    <div className='mt-5'>
                        <button className='random-button2' onClick={handleRandomNum}>Get Your Number</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Random;