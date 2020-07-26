import React from 'react';
import Searchbar from './Searchbar';
import Popup from "reactjs-popup";
import Content from "./Content.js";

class NavBar extends React.Component{
    onSearchSubmit = query => {
        return query;
    }

    render(){
        return(
            <div id="header">
                <div id="contact">
                    <p id="fact">
                        India's largest Pop Culture E-Commerce
                        </p>
                    <p id="contact-details">
                        Contact Us
                        </p>
                    <p id="track">
                        Track Order
                        </p>
                </div>
                <h4 id="brand-name">
                    <a href="https://imgur.com/HsmHV6i">Humourbaba</a>
                </h4>
                <p id="menu">
                    <a href="https://imgur.com/HsmHV6i">Shop</a>
                    <a href="https://imgur.com/HsmHV6i">Themes</a>
                    <a href="https://imgur.com/HsmHV6i">Offers</a>
                    <a href="https://imgur.com/HsmHV6i">Spotlight</a>
                    <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
                    <Popup modal trigger={<button id="login-button">Log In/Sign Up</button>}>
                        {close => <Content close={close} />}
                    </Popup>
                </p>
                <img id="bg-img" src="offer.jpg" alt="offer img">

                </img>
            </div>
        )
    }
}

export default NavBar;