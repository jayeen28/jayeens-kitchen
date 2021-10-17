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
                setreqResponse(data.filter(elem => elem.catagory === 'breakfast'))
            })
    }, []);
    //tab buttons color management
    const manageTabBtnColor = (setColor, removeColor1, removeColor2) => {
        document.getElementById(`${setColor}-btn`).style.borderBottom = '2px solid #E51A4B';
        document.getElementById(`${removeColor1}-btn`).style.border = 'none';
        document.getElementById(`${removeColor2}-btn`).style.border = 'none';
    }
    //tabs management
    const sendTabReq = req => {
        const reqResult = []
        const outOfResult = []
        allFood.forEach(elem => {
            if (elem.catagory === req) {
                reqResult.push(elem);
            }
            else {
                outOfResult.push(elem);
            }
        })
        setreqResponse(reqResult);
        manageTabBtnColor(req, outOfResult[0].catagory, outOfResult[7].catagory);
    }
    return (
        <main>
            {/* banner-section */}
            <section className="banner-section">
                <div className="b-head">
                    <h1>Best food waiting for your belly</h1>
                </div>
                <div className="b-body">
                    <form action="" className="b-search">
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
                            {
                                reqResponse.map(elem => <Tab foodData={elem} key={elem._id} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;