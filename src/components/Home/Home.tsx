import './Home.css'
import Img1 from '../../assets/Images/msg1.png'
import Img2 from '../../assets/Images/msg2.png'
import Img3 from '../../assets/Images/msg3.png'
import Img4 from '../../assets/Images/msg4.png'
import Parallax from './ParallaxEffect/Parallax'
import SocialIconEffet from './SocialIconEffet/Icon'

import I1 from "../../assets/Images/social-icons/Discord.svg";
import I2 from "../../assets/Images/social-icons/Instagram.svg";
import I3 from "../../assets/Images/social-icons/LinkedIn.svg";
import I4 from "../../assets/Images/social-icons/Messenger.svg";
import I5 from "../../assets/Images/social-icons/Signal.svg";
import I6 from "../../assets/Images/social-icons/Slack.svg";
import I7 from "../../assets/Images/social-icons/Telegram.svg";
import I8 from "../../assets/Images/social-icons/WhatsApp.svg";
import I9 from "../../assets/Images/social-icons/X.svg";
import I10 from "../../assets/Images/social-icons/iMessage.svg";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Privacy from './Privacy/Privacy'
import Products from './Products/Products'
import Tweets from './Tweets/Tweets'
const Home = () => {
  return (
    <div>
      <div className="homeContent mx-auto">
        <h1>All of your <span>messages </span><br />in our Inbox</h1>
        <a className='download' href="#">Download for windows &#8594;</a>
        <p><span> Free for 10 seconds.</span>
        <a href="#">See plans&#8594;</a></p>
      </div>
      
      <div className="floatingImages">
        <div className='floating1'><img src={Img1} alt="" /></div>
        <div className='floating2'><img src={Img4} alt="" /></div>
        <div className='floating3'><img src={Img3} alt="" /></div>
        <div className='floating4'><img src={Img2} alt="" /></div>
        </div>
      <Parallax/>
      <SocialIconEffet/>
      <div className='allicons'>
        <h5>Texts lets you send and receive messages from all major messaging platforms:</h5>
        <div className='iconall'>
        <Row>
          <Col xl="2" lg='2'>
            <div className='icons2'>
            <img src={I10} alt="" />
            <p>iMessage</p> 
            </div>
          </Col>
          <Col xl="2" lg='2'>
            <div className='icons2'>
            <img src={I8} alt="" />
            <p>WhatsApp</p> 
            </div>
          </Col>
          <Col xl="2" lg='2'>
            <div className='icons2'>
            <img src={I7} alt="" />
            <p>Telegram</p> 
            </div>
          </Col>
          <Col xl='2'lg='2'>
            <div className='icons2'>
            <img src={I5} alt="" />
            <p>Signal</p> 
            </div>
          </Col>
          <Col xl="2" lg='2'>
            <div className='icons2'>
            <img src={I4} alt="" />
            <p>Messenger</p> 
            </div>
          </Col>
          <Col xl="2" lg='3'>
            <div className='icons2'>
            <img src={I9} alt="" />
            <p>X</p> 
            </div>
          </Col>

          <Col xl="2" lg='2'>
            <div className='icons2 icons2a'>
            <img src={I2} alt="" />
            <p>Instagram</p> 
            </div>
          </Col>
          <Col xl="2" lg='2'>
            <div className='icons2 icons2a'>
            <img src={I3} alt="" />
            <p>LinkedIn</p> 
            </div>
          </Col>
          <Col xl="2" lg='2'>
            <div className='icons2 icons2a '>
            <img src={I6} alt="" />
            <p>Slack</p> 
            </div>
          </Col>
          <Col xl="2" lg='2'>
            <div className='icons2  icons2a'>
            <img src={I1} alt="" />
            <p>Discord Dms</p> 
            </div>
          </Col>
        </Row>
        </div>
        
      </div>

      <Privacy/>
      <Products/>
      <Tweets/>
    </div>
  )
}

export default Home
