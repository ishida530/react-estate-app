import { useState } from 'react'
import './navbar.scss'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='navbar'>


            <div className='left'>
                <a href="/" className='logo'>
                    <img src="./logo.png" alt="logo" />
                    <span>Mtsouthwestproperty</span>
                </a>

                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/home">Contact</a>
                <a href="/">Agents</a>

            </div>
            <div className='right'>
                <a href="/home">Sign in</a>
                <a href="/home" className='register'>Sign up</a>

                <div className='menuIcon'>
                    <img src="/menu.png" alt="menu icon" onClick={() => setIsOpen(prev => !prev)} />
                </div>
                <div className={isOpen ? 'menu active' : 'menu'}>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar