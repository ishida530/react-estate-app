
import { useContext } from 'react'
import SearchBar from '../../componenets/searchBar/SearchBar'
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext'
const HomePage = () => {
    const { currentUser } = useContext(AuthContext)

    console.log(currentUser)
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Esate & Get Your Dream
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat id, ipsam inventore ipsa assumenda nihil veritatis unde deleniti quam commodi cupiditate labore incidunt officia eius nam cum dolores accusamus!
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src='/bg.png' />
            </div>
        </div>
    )
}

export default HomePage