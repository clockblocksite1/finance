import React from 'react';
import "./Row.css";
import bannerImg from "./../img/Баннер05.png";
import banner2Img from "./../img/Баннер04.png";
import banner3Img from "./../img/Баннер03.png";
import banner4Img from "./../img/Баннер02.png";
import banner5Img from "./../img/Баннер01.png";
import icon1Img from "./../img/icon (6).png";
import vector1Img from "./../img/Vector (15).png";
import icon2Img from "./../img/icon (7).png";
import icon3Img from "./../img/икон.png";
import setkaImg from "./../img/Сетка главная.png";
import setka2Img from "./../img/Левый мини график.png";
import setka3Img from "./../img/Трендинг.png";
import fotoImg from "./../img/Фотка.png"
function Row({ tableData }) {
  return (
    <div className='row'>
        <div className='banner'>
    <img src={bannerImg} alt=''/> 
    <img src={banner2Img} alt=' ' className='banner2'/>
    <img src={banner3Img} alt='' />
    <img src={banner4Img} alt=''/>
    <img src={banner5Img} alt=''/>
    </div>
    <div className='gap'></div>
    <div className='gap2'></div>
    <div className='gap3'></div>
    <div className='gap4'></div>
    <div className='gap5'></div>
    <div className='gap6'></div>
    <div className='gap7'></div>
    <div className='gap8'></div>
    <div className='gap9'></div>
    <div className='gap10'></div>
    <img src={icon1Img} alt=''  className='icon1'/>
    <img src={vector1Img} alt='' className='vector1'/>
    <div className='real'>Real-time Price Charts</div>
    <div className='display'>Display interactive price charts for</div>
    <div className='various'>various cryptocurrencies, allowing</div>
    <div className='user'>users to track price changes over</div>
    <div className='dif'>different time intervals.</div>
    <img src={icon2Img} alt='' className='icon2'/>
    <img src={vector1Img} className='vector2'/>
    <div className='easy'>Easy Transactions</div>
    <div className='we'>We have an easy to understand</div>
    <div className='app'>application flow for you to use for</div>
    <div className='tran'>transactions</div>
    <img src={icon3Img} alt='' className='icon3'/>
    <img src={vector1Img} alt='' className='vector4'/>
    <div className='portfolio'>Portfolio Tracking</div>
    <div className='allow'>Allow users to create and manage</div>
    <div className='the'>their cryptocurrency portfolios by</div>
    <div className='the2'>adding transactions and holdings.</div>
    <button className='Integrations'>Integrations</button>
    <div className='focus'>Focus on the essentials.</div>
    <div className='well'>We’ll do the rest!</div>
    <div className='stay'>Stay ahead of the crypto game with real-time data, insightful analytics, and a user-friendly</div>
    <div className='ex2'>experience. Join us today and let’s navigate the crypto world together.</div>
    <img src={setkaImg} alt='' className='setka'/>
    <img src={setka2Img} alt='' className='setka2'/>
    <img src={setka3Img} alt='' className='setka3'/>
   <div className='wide'>Wide Range of Assets</div>
   <div className='wide2'>We rank top among first tier exchanges with highest number of listed crypto</div>
   <table className='table'>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td><img src={item.img} alt={item.name} /></td>
              <td className='name'>{item.name}</td>
              <td className='title'>{item.title}</td>
              <td className='price'>{item.price}</td>
              <td className='change' style={{ color: item.change < 0 ? '#DB5748' : '#49A485' }}>{item.change}%</td>
              <td className='graph'><img src={item.graf} alt="graph" /></td>
              <td className='Trade'><button className='trade'>Trade</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='rom'>What people say about us</div>
      <div className='jo'>Join the Community: Connect with Like-Minded Traders</div>
      <img src={fotoImg} alt='' className='foto'/>
      <div className='john'>
        <div className='John'>John D.</div>
        <div className=' Enthusiast'>Cryptocurrency Enthusiast</div>
        <div className='for'>I've traded for years, and [Exchange Name] is</div>
        <div className='for2'>a game-changer. The user-friendly interface,</div>
        <div className='for3'>robust security, and rewarding loyalty</div>
        <div className='for4'>program make it stand out. This platform</div>
        <div className='for5'>sets the standard for excellence in the crypto</div>
        <div className='for6'>world.</div>
      </div>
      <img src={fotoImg} alt='' className='foto2'/>
      <div className='john2'>
        <div className='John'>John D.</div>
        <div className=' Enthusiast'>Cryptocurrency Enthusiast</div>
        <div className='for'>I've traded for years, and [Exchange Name] is</div>
        <div className='for2'>a game-changer. The user-friendly interface,</div>
        <div className='for3'>robust security, and rewarding loyalty</div>
        <div className='for4'>program make it stand out. This platform</div>
        <div className='for5'>sets the standard for excellence in the crypto</div>
        <div className='for6'>world.</div>
      </div>
      <img src={fotoImg} alt='' className='foto3'/>
      <div className='john3'>
        <div className='John'>John D.</div>
        <div className=' Enthusiast'>Cryptocurrency Enthusiast</div>
        <div className='for'>I've traded for years, and [Exchange Name] is</div>
        <div className='for2'>a game-changer. The user-friendly interface,</div>
        <div className='for3'>robust security, and rewarding loyalty</div>
        <div className='for4'>program make it stand out. This platform</div>
        <div className='for5'>sets the standard for excellence in the crypto</div>
        <div className='for6'>world.</div>
      </div>
      <div className='Exchange1'>
      <div className='exc1'>EXCHANGE</div>
      <div className='in'>Innovative cryptocurrency exchange with</div>
      <div className='in2'>advanced financial services. We rely on</div>
      <div className='in3'>blockchain technology to provide</div>
      <div className='in4'>everything you need for wise trading and</div>
      <div className='in5'>investment.</div>
      <div className='pod'>Listing Request: <b>listing@exchange.com</b></div>
      <div className='pod2'>Partnership: <b>partnership@exchange.com</b></div>
      <div className='sub'>Subscribe to our newsletter</div>
      <input className='email' placeholder='Enter email'/>
      <button className='Subscribe'>Subscribe</button>
     <div className='tr'></div>
      <div className='acc'>In acceding to or using the Platform and the Site, you represent and warrant that you are fully aware of the risks associated with the transactions involving Digital Assets or the use of Platform. You agree and understand that you are solely responsible for determining the nature, potential value,</div>
      <div className='acc2'>suitability, and appropriateness of these risks for yourself, and that the Company does not give advice or recommendations regarding any Digital Asset, including the suitability and appropriateness of, and investment strategies for, any Digital Asset. You agree and understand that you access and use</div>
      <div className='acc3'>the Platform and the Site at your own risk.</div>
      <div className='rod'>Exchange 2024 © All right reserved</div>
      <div className='Products'>Products</div>
      <div className='eq'>
        <div>Spot trading</div>
        <div>Futures trading</div>
        <div>Options trading</div>
        <div>Wallet</div>
        <div>Instant swap</div>
        <div>P2P trading</div>
        <div>DeFi Staking</div>
        <div>Igzk Visa Card</div>
      </div>
      <div className='Services'>Services</div>
      <div className='eq2'>
        <div>24/7 Support chat</div>
        <div>Copy trading</div>
        <div>Trading bots</div>
        <div>ETH 2.0 staking</div>
        <div>Launchpad</div>
        <div>Savings</div>
        <div>Igzk ventures</div>
        <div>Buy crypto</div>
      </div>
      <div className='Information'>Information</div>
      <div className='eq3'>
        <div>Fees</div>
        <div>Platform status</div>
        <div>Wallet security</div>
        <div>Indices</div>
        <div>Trading API</div>
        <div>Token listing</div>
        <div>Referral system</div>
        <div>Referral system</div>
      </div>
      <div className='Legal'>Legal</div>
      <div className='eq4'>
        <div>Terms of service</div>
        <div>Privacy notice</div>
        <div>Cookies policy</div>
        <div>AML & KYC policy</div>
        <div>Risk Disclosure Statement</div>
        <div>Regulatory License</div>
        <div>Special Treatment</div>
        <div>Law Enforcement Requests</div>
      </div>
      </div>
    </div>
  )
}

export default Row