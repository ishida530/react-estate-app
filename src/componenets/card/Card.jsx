import { Link } from 'react-router-dom'
import './card.scss'
const Card = ({ item }) => {
    // { id , img, title, address, price, bedroom, bathroom }
    console
    return (
        <div className='card'>

            <Link to={`/${item.id}`} className="imgContainer" >
                <img src={`${item.img}`} alt="location icon" />
            </Link>
            <div className="textContainer">
                <h2 className='title'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className='address'>
                    <img src="/pin.png" alt="location icon" />
                    <span>{item.address}</span>
                </p>
                <p className='price'>$ {item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" alt="" />
                            <span>{item.bedroom} {item.bedroom > 1 ? 'bedrooms' : 'bedroom'} </span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" alt="" />
                            <span>{item.bathroom}  {item.bathroom > 1 ? 'bathroom' : 'bathroom'}</span>
                        </div>
                    </div>
                    <div className='icons'>
                        <div className="icon">
                            <img src="/save.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card