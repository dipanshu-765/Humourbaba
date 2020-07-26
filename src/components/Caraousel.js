import React from 'react';

class Caraousel extends React.Component{
    render(){
        return<div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
                <div class="item active">
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/25/15f0ea41-02f0-4b81-ac21-f3bfeb8d617e1595682003225-Dk.jpg" alt="Los Angeles" />
                </div>

                <div class="item">
                <img src="chicago.jpg" alt="Chicago"/>
                </div>

                <div class="item">
                <img src="ny.jpg" alt="New York"/>
                </div>
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    }
}

export default Caraousel;