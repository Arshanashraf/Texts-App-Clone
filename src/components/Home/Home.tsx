import './Home.css'
import Img1 from '../../assets/Images/msg1.png'
import Img2 from '../../assets/Images/msg2.png'
import Img3 from '../../assets/Images/msg3.png'
import Img4 from '../../assets/Images/msg4.png'

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
        <div>arshanDev</div>

    </div>
  )
}

export default Home
