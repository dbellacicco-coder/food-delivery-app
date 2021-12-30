import React from 'react';
import HeroImg from "../assets/img/deliverLogo.jpg"
const Hero = () => {
    return ( 
       
        <div className='mt-2 p-2 h-48 items-center text-center flex flex-col gap-7' >
            <h2 className='font-bold text-xl h2'> Experience the fastest food <span className='text-green-600 '>Delivery</span>  </h2>
            <p className='text-lg'> We deliver food as Fast you expect we care abaout your time so that you can get the best quality food deliverd at time. We are the best and fastes in town</p>
            <button className='text-white p-2 bg-green-600 rounded-md hover:bg-green-800'>Order Now</button>
        </div>
       
        
     );
}
 
export default Hero;