import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleFood.css'

const SingleFood = () => {
    const [foods, setfoods] = useState([]);
    const [foodData, setfoodData] = useState({})
    const { foodId } = useParams();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/jayeens-kitchen/main/foodData-and-images/food-data.json')
            .then(res => res.json())
            .then(data => setfoods(data))
    }, []);
    useEffect(() => {
        foods.forEach(elem => {
            if (elem._id === foodId) {
                setfoodData(elem);
            }
        })
    }, [foods, foodId]);
    const { img, title, description, price } = foodData;
    // console.log(_id, img, title, description, price)
    return (
        <div className="single-food-page">
            <div className="container">
                <div className="sf-food-contents">
                    <div className="sf-left">
                        <h1>{title}</h1>
                        <p>{description?.substring(0, 300)}</p>
                        <h2>{price}</h2>
                        <button>Add</button>
                    </div>
                    <div className="sf-right">
                        <div className="food-img">
                            <img src={img} alt="foodImg" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;