import React from 'react';
import './Tab.css'

const Tab = ({ foodData }) => {
    const { _id, img, title, price, description } = foodData;
    console.log(_id, img, title, price, description)
    return (
        <div className="tab">
            <div className="tab-img">
                <img src={img} alt="foodImage" className="img-fluid" />
            </div>
            <div className="tab-content">
                <h3>{title}</h3>
                <p>How we dream about our future</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Tab;