import React, { Component } from 'react';

class Arrows extends Component {
  render() {
    return(
      <div className="arrows">
        <div className="backArrow" onClick={this.props.goToPrevSlide}>
          <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
        </div>
        <div className="forwardArrow" onClick={this.props.goToNextSlide}>
          <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
        </div>
      </div>
    )
  }
}

export default Arrows;