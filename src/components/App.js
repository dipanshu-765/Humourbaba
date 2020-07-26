import React from 'react';
import NavBar from './NavBar.js';
import Caraousel from './Caraousel';
import Footer from './Footer.js';
import Arrows from './Arrows.js';
import HotItems from './HotItems';
import PopularThemes from './PopularThemes';

class App extends React.Component{
    state = {
        image_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        current_img_id: [1, 2, 3]
    };

    goToPrevSlide = current => {
        if(current[0]===1){
            current[0]=1;
        }
        else{
            current[0] = current[0]-3;
            current[1] = current[1]-3;
            current[2] = current[2]-3;
            this.setState({current_img_id:current});
        }
    }

    goToNextSlide = current => {
        if(current[0]===10){
            current[0]=10;
        }
        else{
            current[0] = current[0]+3;
            current[1] = current[1]+3;
            current[2] = current[2]+3;
            this.setState({current_img_id:current});
        }
    }

    render(){
        return(
            <div className="ui container">
                <NavBar></NavBar>
                <Arrows goToPrevSlide={this.goToPrevSlide} goToNextSlide={this.goToNextSlide}></Arrows>
                <HotItems currentImages={this.state.current_img_id}></HotItems>
                <PopularThemes></PopularThemes>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;