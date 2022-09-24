import {Ri24HoursFill} from 'react-icons/ri'
import {AiFillStar} from 'react-icons/ai'
import {GiSevenPointedStar} from 'react-icons/gi'

import './index.css'

const Home = () => (
  <>
    <div className="about-container">
      <h1 className="heading">About</h1>
      <p className="description">
        Lorem Ipsum is simply dummy text of the parinting and typesettig
        industry. Lorem Ipsum has been the industry`s standard dummy te ever
        since the 1500s, when an unknown printer took a gallery of ty and
        scrambled it to make a type specimen book. It has survived n only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing.
        </p>
        <p>
          Lorem Ipsum passages, and more recently with desktop publish softwares
          like Aldus Pagemaker including versions of Lorem Ipsu.Developed by{' '}
          <b>vijay reddy</b>
        </p>
      </p>
    </div>
    <div className="services-container">
      <h1 className="ser-heading">Services</h1>
      <p className="ser-description">
        Lorem Ipsum is simply dummy text of the parinting and typesettig
        industry. Lorem Ipsum has been the industry`s standard dummy te ever
        since the 1500s.
      </p>
      <div className="services-list">
        <div className="services">
          <div className="each-service">
            <Ri24HoursFill className="logo" />
            <p className="services-name">
              Websites <br /> Development
            </p>
          </div>
          <div className="each-service">
            <Ri24HoursFill className="logo" />
            <p className="services-name">
              Digital <br /> Marketing
            </p>
          </div>
          <div className="each-service">
            <Ri24HoursFill className="logo" />
            <p className="services-name">
              Application <br /> Development
            </p>
          </div>
        </div>
        <div className="services">
          <div className="each-service">
            <Ri24HoursFill className="logo" />
            <p className="services-name">
              Websites <br /> Development
            </p>
          </div>
          <div className="each-service">
            <Ri24HoursFill className="logo" />
            <p className="services-name">
              Digital <br /> Development
            </p>
          </div>
          <div className="each-service">
            <Ri24HoursFill className="logo" />
            <p className="services-name">
              Application <br /> Development
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-container">
      <h1 className="por-heading">Portfolio</h1>
      <p className="por-description">
        Lorem Ipsum is simply dummy text of the parinting and typesettig
        industry. Lorem Ipsum has been the industry`s standard dummy te ever
        since the 1500s.
      </p>
      <div className="images-container">
        <div className="first-set">
          <img
            className="image-port"
            src="https://img.freepik.com/premium-photo/cosmetic-products-water-splash-realistic-3d-illustration-packaging-mockup-design-natural-moisturizing-cosmetics-cleansing-toner-skincare-gel-blue-bottles-tube-falling-water-surface_645257-230.jpg?w=2000"
            alt="facewash"
          />
          <img
            className="image-port"
            src="https://www.mimmynvovo.com/wp-content/uploads/2022/02/sunglasses-1170x800.jpg"
            alt="specs"
          />
          <img
            className="image-port"
            src="https://res.cloudinary.com/dsapqoyse/image/upload/v1663479319/125Background_Podium_generated_dabb3b.jpg"
            alt="3d"
          />
        </div>
        <div className="second-set">
          <img
            className="image-port1"
            src="https://res.cloudinary.com/dsapqoyse/image/upload/v1663479624/60f071d7ab6cdb7011e82390_ai-product-photography-12_qhjpup.jpg"
            alt="paste"
          />
          <img
            className="image-port"
            src="https://img.freepik.com/premium-photo/cosmetic-spa-medical-skin-care-glass-serum-bottle-micellar-tonic-with-collagen-blue-water-with-waves-advertising-medical-serum-anti-aging-care-moisturizing-cleansing_296062-517.jpg?w=1800"
            alt="paste"
          />
        </div>
      </div>
    </div>
    <div className="videos-container">
      <h1 className="vid-heading">Videos</h1>
      <p className="vid-description">
        Lorem Ipsum is simply dummy text of the parinting and typesettig
        industry. Lorem Ipsum has been the industry`s standard dummy te ever
        since the 1500s.
      </p>
      <div className="videos">
        <div className="videos-set">
          <iframe
            title="video"
            className="embed-responsive-item vid-margin"
            src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
            allowFullScreen
          >
            video
          </iframe>
          <iframe
            title="video"
            className="embed-responsive-item vid-margin"
            src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
            allowFullScreen
          >
            video
          </iframe>
        </div>
        <div className="videos-set">
          <iframe
            title="video"
            className="embed-responsive-item vid-margin"
            src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
            allowFullScreen
          >
            video
          </iframe>
          <iframe
            title="video"
            className="embed-responsive-item vid-margin"
            src="https://www.youtube.com/embed/vKJ6nXE_6Hc?rel=0"
            allowFullScreen
          >
            video
          </iframe>
        </div>
      </div>
    </div>
    <div className="clients-container">
      <h1 className="cli-heading"> Clients</h1>
      <p className="cli-description">
        Lorem Ipsum is simply dummy text of the parinting and typesettig
        industry. Lorem Ipsum has been the industry`s standard dummy te ever
        since the 1500s.
      </p>
    </div>
    <div className="reviews-container">
      <h1 className="rew-heading">Reviews</h1>
      <div className="all-reviews-container">
        <div className="rating-container">
          <div className="all-stars">
            <div className="rating-star">
              <img
                className="star-size"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
              />
              <img
                className="star-size"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
              />
              <img
                className="star-size"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
              />
              <img
                className="star-size"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
              />
              <img
                className="star-size"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                alt="star"
              />
              <h1 className="rew-rating">5/5</h1>
            </div>
            <p className="all-reviews"> 136 Reviews</p>
          </div>
          <p className="review-text"> Write a review</p>
        </div>
        <div className="comments-container">
          <div className="each-comment">
            <div>
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
                alt="person"
              />
              <AiFillStar className="img-star-size" />
            </div>
            <div className="reply">
              <p className="person-comment">
                Truly a professional <span className="span">people</span> to get
                your service done with them
              </p>
              <div className="full-stars">
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
              </div>
            </div>
          </div>
          <div className="each-comment">
            <div>
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
                alt="person"
              />
            </div>
            <div className="reply">
              <p className="person-comment">
                The <span className="span">quality</span> of their work is
                impeccable and amazing
              </p>
              <div className="full-stars">
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
              </div>
            </div>
          </div>
          <div className="each-comment">
            <div>
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png"
                alt="person"
              />
              <GiSevenPointedStar className="img-star-size" />
            </div>
            <div className="reply">
              <p className="person-comment">
                Truly a professional <span className="span">people</span> to get
                your service done with them
              </p>
              <div className="full-stars">
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
                <AiFillStar className="full-stars-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="www.google.com" className="view-all">
        View all reviews
      </a>
    </div>
  </>
)

export default Home
