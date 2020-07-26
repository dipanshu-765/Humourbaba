import React from 'react';

class HotItems extends React.Component{
    state = {
        images: [
            
        ]
    }
    render(){
        return (
            <div className="hot-items">
                <h4 id="hot-items-text">
                    HOT-SELLING ITEMS
                </h4>
                <div className="hot-item">

                </div>
                <div className="hot-item">

                </div>
                <div className="hot-item">

                </div>
            </div>
            )
    }
}

export default HotItems;