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
                    <a href="#">Humourbaba</a>
                </h4>
                <p id="menu">
                    <a href="#">Shop</a>
                    <a href="#">Themes</a>
                    <a href="#">Offers</a>
                    <a href="#">Spotlight</a>
                    <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
                    <Popup modal trigger={<button id="login-button">Log In/Sign Up</button>}>
                        {close => <Content close={close} />}
                    </Popup>
                </p>
                <img id="bg-img" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/25/15f0ea41-02f0-4b81-ac21-f3bfeb8d617e1595682003225-Dk.jpg">

                </img>
            </div>
        )
    }
}

export default NavBar;