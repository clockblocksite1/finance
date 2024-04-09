import React from 'react'
import "./Header.css";
import nasImg from "./../img/settings-svgrepo-com 1.png";
import etnImg from "./../img/Frame 6.png";
import stImg from "./../img/_.png";
import monetaImg  from "./../img/tron moneta.png";
import bnbImg from "./../img/bnb moneta.png";
import streImg from "./../img/Rectangle 7 (3).png";
import { FaArrowDown } from "react-icons/fa";

function Header() {
  return (
    <div className='Header'>
        <div className='Exchange'>Exchange</div>
        <div className='shop'>
            <div>Trading</div>
            <div>Staking</div>
            <div>P2P</div>
            <div>Swap</div>
            <div>Wallet</div>
        </div>
        <div className='login'>Login</div>
        <button className='sig'>Sign Up</button>
       <div className='Unloc'>Unlock the</div>
       <div className='futere'>Future of Finance</div>
       <div className='with'>with Crypto</div>
       <div className='welcome'>Welcome to Empowering Your Digital Assets Journey</div>
       <div className='discover'>Discover a World of Secure and Seamless Cryptocurrency Trading</div>
     <div className='start'>Start trading</div>
     <div className='sig2'>Sign up</div>
     <div className='hot'>
     <img src={nasImg} alt='' className='nas'/>
        <div className='ex'>Exchange</div>
        <div className='buy'>Buy</div>
        <div className='hot2'>
            <div className='to'>To be paid</div>
            <div className='nol'>0</div>
            <div className='grom'>
           <img src={etnImg} alt=''/>
           <div>ETH</div> 
           <img src={stImg} alt='' className='st'/>
            </div>
        </div>
        <div className='hot3'>
        <div className='Connect'>Connect wallet</div>
        <div className='to'>To be received</div>
            <div className='nol'>0</div>
            <div className='choose'>Choose token
            <img src={stImg} alt='' className='st'/>
            </div>
        </div>
        <img src={streImg} alt='' className='stre'/>
        <FaArrowDown  className='drot'/>
     </div>
     <img src={monetaImg} alt='' className='moneta'/>
     <img src={bnbImg} alt='' className='bnb'/>
    </div>
  )
}

export default Header