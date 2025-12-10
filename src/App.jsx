import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/gurukulias_logo.png'
import facebook from './assets/Facebook.png'
import insta from './assets/Instagram.png' 
import form from './assets/from.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main container mx-auto p-10 box-border h-screen ">
        <div className="logo  w-2/6 mx-auto h-[40%] flex justify-center max-sm:w-[70%]">
         <img className=' h-[100%] object-contain' src={logo} alt="" />
        </div>
        <div className="msg w-[95%] mx-auto my-5 text-center text-lg font-bold sm:text-2xl md:text-3xl ">
          <h2 className='text-orange-400'>We’re Building Something Great for Your Success.</h2>
          <h2 className='text-blue-950 font-extrabold font-stretch-90%'>GURUKUL IAS — New Website Coming Soon !</h2>
        </div>
        <div className="socialhandels p-5 box-border  mx-auto w-[95%] h-[30%] text-blue-950 font-black text-xl sm:w-[50%] ">
          <div className="text text-center border border-2  rounded-2xl">Connect us on</div>
          <div className="logos  my-5 box-border flex h-2/5 gap-3 justify-center">
             <div className="box">
              <a href="https://www.instagram.com/gurukulias.in/"><img className='mlogo h-[80%] object-contain' src={insta} alt="instagram logo" /></a>
             </div>
             <div className="box">
              <a href="https://www.facebook.com/gurukulias.in/"><img className='mlogo h-[80%] object-contain' src={facebook} alt="instagram logo" /></a>
             </div>
             <div className="box">
              <a href="https://q.me-qr.com/ohKjjwR5"><img className='mlogo h-[80%] object-contain hover:scale-3d ' src={form} alt="instagram logo" /></a>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
