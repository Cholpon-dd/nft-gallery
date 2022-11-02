import React from 'react'
import './Header.css'
import logo from '../assets/img/nft_art.svg'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                {/*<img src={logo} alt="logo"/>*/}
                NFT
            </div>
            <ul className="list">
                <li>Home</li>
                <li><a href="https://opensea.io/">About</a></li>
                <li>
                    <a href="https://opensea.io/">Market Place</a></li>

            </ul>
        </div>
    )
}

export default  Header