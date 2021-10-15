import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Tab from '../../Components/Tabs/Tab'
import './Home.css'

const Home = () => {
    const [allFood, setallFood] = useState([]);
    const [reqResponse, setreqResponse] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Jayeen29/jayeens-kitchen/main/foodData-and-images/food-data.json')
            .then(res => res.json())
            .then(data => {
                setallFood(data);
                setreqResponse(data.breakfast)
            })
    }, []);
    const sendTabReq = req => {
        for (const elem in allFood) {
            document.getElementById(`${req}-btn`).style.borderBottom = '2px solid #E51A4B';
            if (elem === req) {
                setreqResponse(allFood[req]);
            }
            else {
                document.getElementById(`${elem}-btn`).style.border = 'none';
            }
        }
    }
    //tab click
    console.log(allFood);
    const tabClicked = (id) => {
        console.log(id);
    }
    return (
        <main>
            {/* banner-section */}
            <section className="banner-section">
                <div className="b-head">
                    <h1>Best food waiting for your belly</h1>
                </div>
                <div className="b-search">
                    <form action="">
                        <input type="text" id="bs-input" placeholder="Search food items" className="bs-input" />
                        <input type="submit" value="Search" className="bs-submit" />
                    </form>
                </div>
            </section>
            {/* food tabs section */}
            <section className="food-tabs-section">
                <div className="container">
                    <div className="food-tabs">
                        <div className="tab-menu">
                            <button id="breakfast-btn" onClick={() => sendTabReq('breakfast')} style={{ borderBottom: '2px solid #E51A4B' }}>Breakfast</button>
                            <button id="lunch-btn" onClick={() => sendTabReq('lunch')}>Lunch</button>
                            <button id="dinner-btn" onClick={() => sendTabReq('dinner')}>Dinner</button>
                        </div>
                        <div className="tab-items">
                            {reqResponse.map(elem => <Tab foodData={elem} tabClicked={tabClicked} key={elem._id}></Tab>)}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;