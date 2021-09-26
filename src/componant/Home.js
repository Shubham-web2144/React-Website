import React from 'react';
import './style.css';

const Home = () => {
    return (
        <div className="home">
            {/* Banner */}
            <div className='home_banner'>

            </div>

            {/* home info */}
            <div className='home_info'>
                {/* title */}
                <h3>Web Development </h3>
                {/* desc */}
                <p className='home_info_p_desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maiores. Facere, enim! Consequatur et eos delectus culpa, corporis cupiditate sint tempore adipisci voluptates ea! Exercitationem delectus qui tempore accusantium praesentium?
                </p>
                {/* btn */}
                <button className='home_info_btn'>Read More</button>
            </div>
        </div>
    )
}

export default Home
