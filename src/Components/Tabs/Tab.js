import React from 'react';
import './Tab.css'

const Tab = ({ foodData, tabClicked }) => {
    const { catagory, _id, img, title, price } = foodData;
    return (
        <div className="tab" onClick={() => tabClicked(_id, catagory)}>
            <div className="tab-img">
                <img src={img} alt="foodImage" className="img-fluid" />
            </div>
            <div className="tab-content">
                <h3>{title}</h3>
                <p>How we dream about our future</p>
                <p className="tab-price">Price: ${price}</p>
            </div>
        </div>
    );
};

export default Tab;