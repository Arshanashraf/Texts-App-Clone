import Screen from '../../../assets/Images/hero-light-v3.png'
import Plx from 'react-plx'
import './Parallax.css'
const Parallax = () => {
  return (
    <div >
      <div className='tab' >
      <Plx className='parallax ' parallaxData={[{
         start: 0,
         easing: "easeIn",
          end: 500,
    properties: [
      {
        startValue: 100,
        endValue: -150,
        property: "translateY",
      },
    ],
      }]}><img  src={Screen} /> </Plx>
      </div>
      <div><Plx className='parallax1 ' parallaxData={[{
         start: 100,
         easing: "easeIn",
          end: 0,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY",
      },
    ],
      }]}> <h2>All In One.</h2></Plx></div>
      
      
      
    </div>
    

  )
}

export default Parallax
