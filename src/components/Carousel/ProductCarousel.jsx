import React from 'react'
import Carousel from "react-multi-carousel";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../Carousel/Carousel.css"

export default function ProductCarousel(props){

      return(
    
                    <Link style={{color:'black',textDecoration:'none'}} to={`/singleproduct/${props.id}`} params={{ id: props.id }} className="card_container">
                    <img className="product--image"
                    src={props.url}
                    alt="product image"
                        />
                    <h2>{props.name}</h2>
                    <p className="price">${props.price}</p>

                    </Link>

                    
      );

}
