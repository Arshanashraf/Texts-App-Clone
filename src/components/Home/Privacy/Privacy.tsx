import './Privacy.css'
import Line from '../../../assets/Images/PrivacyComp/line.svg'
import pIcon from '../../../assets/Images/PrivacyComp/cloud.45273408.svg'
import pIcon2 from '../../../assets/Images/PrivacyComp/lock.513301c3.svg'
import pIcon3 from '../../../assets/Images/PrivacyComp/currency-dollar.ad0e1037.svg'
const Privacy = () => {
  return (
    <div>
        <div className='privacy'>
        <h2>Privacy First.</h2>
        <div className="privacyContent">
            <img src={Line} alt="" />
            <div className="privacyItems">
            <div className="privacyItem pi1 ">
                <div className="privacyIcon ">
                    <img src={pIcon} alt="" />
                </div>
                <p>Your messages <b>never </b> <br />touch the Texts servers. </p>
            </div>
            <div className="privacyItem">
                <div className="privacyIcon">
                    <img src={pIcon2} alt="" />
                </div>
                <p>They’re <b> encrypted</b> and sent <br />directly to the messaging platforms </p>
            </div>
            <div className="privacyItem">
                <div className="privacyIcon">
                    <img src={pIcon3} alt="" />
                </div>
                <p>Texts makes money through a monthly <br /> subscription, <b>not through your data.</b> </p>
            </div>
            </div>
            
        </div>
        </div>
      
    </div>
  )
}

export default Privacy
