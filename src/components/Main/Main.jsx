import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Cosmo</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello SIT,</span></p>
          <p>How can I help You?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see in mansoon</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Revise my writing and fix my grammar</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Help me get organized with a list of 10 tips</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Create a 12-week study plan for learning a new language</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder='Enter a prompt here' />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
        </div>
        <p className='bottom-info'>Cosmo may display inaccurate info, including about people, so double-check its responses. </p>
      </div>
      </div>

      
    </div>
  )
}

export default Main
