import Popup from 'reactjs-popup'
import {IoMdClose, IoIosArrowForward} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle, AiOutlineMail} from 'react-icons/ai'
import {FaInstagramSquare, FaSnapchat, FaPhoneAlt} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'
import {VscGlobe} from 'react-icons/vsc'

import './index.css'

const Profile = () => (
  <div className="profile-container">
    <div className="banner-container">
      <img
        className="company-image"
        src="https://res.cloudinary.com/dxm2oqlbo/image/upload/v1663507340/image001_1_ifcgtt.png"
        alt="company name"
      />
    </div>
    <div className="profile-details-section">
      <div className="profile">
        <img
          className="image"
          src="data:image/png;base64,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"
          alt="pic"
        />
      </div>
      <div className="profile-info">
        <h1 className="name">Akhil Chakravarthy</h1>
        <p className="role">CEO / Managing Director</p>
        <p className="company">Techno Soft Solutions</p>
        <div className="icons-container">
          <BsFacebook className="icon fb" />
          <AiFillTwitterCircle className="icon twi" />
          <FaInstagramSquare className="icon" />

          <BsLinkedin className="icon lin" />
          <FaSnapchat className="icon snp" />
        </div>
      </div>
    </div>
    <div className="button-container">
      <Popup
        modal
        trigger={
          <button type="button" className="share-button">
            SHARE
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="input-container">
              <h1 className="share-heading">
                Sharing <span className="span">Akhil Chakravarthy`s</span> Tako
                Card
              </h1>
              <input placeholder="Full Name" type="text" className="input" />
              <form className="form">
                <div>
                  <input type="radio" id="whatsapp" />
                  <label htmlFor="whatsapp">Whatsapp</label>
                </div>
                <div>
                  <input type="radio" id="sms" />
                  <label htmlFor="sms">SMS</label>
                </div>

                <div>
                  <input type="radio" id="email" />
                  <label htmlFor="email">Email</label>
                </div>
              </form>
              <input
                placeholder="Enter Phone Number / Enter Email"
                type="text"
                className="input"
              />
              <div className="submit-container">
                <button type="button" className="submit-button">
                  Submit
                  <IoIosArrowForward className="arrow" />
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
    <div className="large-icon-section">
      <FaPhoneAlt className="large-icon" />
      <RiWhatsappFill className="large-icon-wat" />
      <AiOutlineMail className="large-icon" />
      <VscGlobe className="large-icon" />
    </div>
  </div>
)

export default Profile
