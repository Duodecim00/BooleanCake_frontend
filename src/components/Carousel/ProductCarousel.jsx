import React from 'react'
import Carousel from "react-multi-carousel";
import { useState, useEffect } from 'react';
import "../Carousel/Carousel.css"

export default function ProductCarousel(props){

      return(
    
                    <div className="card_container">
                    <img className="product--image"
                    src={props.url}
                    alt="product image"
                        />
                    <h2>{props.name}</h2>
                    <p className="price">${props.price}</p>

                    </div>

                    
      );

}
