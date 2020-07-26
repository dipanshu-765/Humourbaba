import React from 'react';

class PopularThemes extends React.Component{
    render(){
        return(
            <div className="themes">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <h4 id="popular-themes-text">POPULAR THEMES</h4>
                <br></br>
                <div id="theme1">
                    <img src="photo10.jpg" alt="image-10"></img>
                </div>
                <div id="theme2">
                    <img src="photo11.jpg" alt="image-11"></img>
                </div>
            </div>
        )
    }
}

export default PopularThemes;