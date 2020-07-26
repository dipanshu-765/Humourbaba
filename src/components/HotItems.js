import React from 'react';

class HotItems extends React.Component{
    state = {
        images: [
            "photo1.jpg",
            "photo1.jpg",
            "photo2.jpg",
            "photo3.jpg",
            "photo4.jpg",
            "photo5.jpg",
            "photo6.jpg",
            "photo7.jpg",
            "photo8.jpg"
        ]
    }
    render(){
        return (
            <div className="hot-items">
                <h4 id="hot-items-text">
                    HOT-SELLING ITEMS
                </h4>
                <div className="hot-item">
                    <img src={this.state.images[this.props.currentImages[0]]} alt="image-1"></img>
                </div>
                <div className="hot-item">
                    <img src={this.state.images[this.props.currentImages[1]]} alt="image-2"></img>
                </div>
                <div className="hot-item">
                    <img src={this.state.images[this.props.currentImages[2]]} alt="image-3"></img>
                </div>
            </div>
            )
    }
}

export default HotItems;