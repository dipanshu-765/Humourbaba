import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Arrows from './Arrows.js';
import HotItems from './HotItems';
import PopularThemes from './PopularThemes';

class App extends React.Component{
    state = {
        image_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        current_img_id: [1, 2, 3]
    };

    goToPrevSlide = () => {
        if(this.state.current_img_id[0]===1){
            console.log("Can't go back");
        }
        else{
            let temp = this.state.current_img_id;
            temp[0] = temp[0]-1;
            temp[1] = temp[1]-1;
            temp[2] = temp[2]-1;
            this.setState({current_img_id:temp});
        }
    }

    goToNextSlide = () => {
        if(this.state.current_img_id[2]===8){
            console.log("No More items");
        }
        else{
            let temp = this.state.current_img_id;
            temp[0] = temp[0]+1;
            temp[1] = temp[1]+1;
            temp[2] = temp[2]+1;
            this.setState({current_img_id:temp});
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