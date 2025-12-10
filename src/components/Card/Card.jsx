import './Card.css'
import Laptop from '../../assets/laptop.jpg'

// const Card = (props) => {
const Card = ({title, text, btn, btnBg, color}) => {
  return (
    <div className='card-container'>
        <div className='img-div'>
            <img src={Laptop} alt="" className=''/>

        </div>
        <h2 className='card-heading'>{title}</h2>
        <p className='card-text'>
            {text}
        </p>
        <button style={{backgroundColor: btnBg, color: color}} className='card-btn'>{btn}</button>
    </div>
  )
}

export default Card