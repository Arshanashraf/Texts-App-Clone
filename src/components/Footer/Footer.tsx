import foologo from '../../assets/Images/icon.png'
import fooImage from '../../assets/Images/footerimage.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="foo1">
        <div className="foologo">
            <img src={foologo} alt="" />Texts
        </div>
        <div className="fooContents">
            <ul >
                <li><a href="#">Support</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">@TextsHQ</a></li>
            </ul>
        </div>
      </div>
      <div className="foo2">
        <div className="foologo1"> An 
            <img src={fooImage} alt="" />mix
        </div>
        <div className="fooContents1">
            <ul >
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Work With Us</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
