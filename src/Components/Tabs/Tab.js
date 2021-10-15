import React from 'react';
import { useHistory } from 'react-router';
import './Tab.css'

const Tab = ({ foodData }) => {
    let history = useHistory();
    const { catagory, _id, img, title, price, } = foodData;
    //tab click
    const tabClicked = (catagory, id) => {
        history.push(`/foods/${id}`);
        console.log(catagory);
    }
    return (
        <div className="tab" onClick={() => tabClicked(catagory, _id)}>
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