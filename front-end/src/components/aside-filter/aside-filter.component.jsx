import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Input from "../input/input.component";
import Button from "../button/button.component";
import { getCats } from '../../redux/categories/categories.actions';

import "./aside-filter.style.scss";
import { Link } from 'react-router-dom';

const AsideFilter = ({catToSelect}) => {

    //Filtering
    const [catToFilter, setCatToFilter] = useState("any")
    const [colorToFilter, setColorToFilter] = useState("any")
    const [fromToFilter, setFromToFilter] = useState(0)
    const [toToFilter, setToToFilter] = useState("any")
    
    //fetching all categories available
    const cat = useSelector(state => state.cat);
    const {categories} = cat;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCats())
    }, [dispatch]) 

    //Mobile menu toggle
    const addClass = (e) => {
        const mediaQuery = window.matchMedia('(max-width: 768px)')
        if (mediaQuery.matches) {
            document.querySelector(".filter").classList.toggle("mobile");
            console.log("text")
        }
    }
    //color select
    const selectColor = (color) => {
        const allColors = document.querySelectorAll(".color .color")
        allColors.forEach(color => (color.classList.remove("selected")))
        document.querySelector(color).classList.add("selected")
    }

    //cat select
    const selectCat = (cat) => {
        const allCats = document.querySelectorAll(".cats-inner .cat")
        allCats.forEach(cat => (cat.classList.remove("selected")))
        document.querySelector(cat).classList.add("selected")
    }

    return (
        <aside className="filter">
            <Button addClass={addClass} text="cancel"></Button>
            <div className="cats">
                <h2>Categories</h2>
                <div className="cats-inner">
                    
                    <h3 
                    className="cat all" 
                    onClick={() => {
                        setCatToFilter("any")
                        selectCat(".all")
                    }}>
                        ALL
                    </h3>
                    
                    {
                        categories.map(({name, _id}) => (
                            <h3 
                            className={`cat ${name} ${_id === catToSelect ? "selected" : ""}`} 
                            key={_id} 
                            onClick={() => {
                                setCatToFilter(_id)
                                selectCat(`.${name}`)
                            }}>
                                {name}
                            </h3>
                        ))
                    }
                </div>
            </div>

            <div className="price">
                <h2>Price</h2>
                <div className="price-inner">
                    <Input type="number" placeholder="From" onChange={(event) => setFromToFilter(event.target.value)}/>
                    <span className="dash">-</span> 
                    <Input type="number" placeholder="To" onChange={(event) => setToToFilter(event.target.value)}/> 
                </div>
            </div>

            <div className="color">
                <h2>Color</h2>

                    <span onClick={() => {
                        setColorToFilter("black")
                        selectColor(".black")
                    }} className="color black"></span>

                    <span onClick={() => {
                        setColorToFilter("white")
                        selectColor(".white")
                    }} className="color white"></span>

                    <span onClick={() => {
                        setColorToFilter("gray")
                        selectColor(".gray")
                    }} className="color gray"></span>

                    <span onClick={() => {
                        setColorToFilter("red")
                        selectColor(".red")
                    }} className="color red"></span>

                    <span onClick={() => {
                        setColorToFilter("blue")
                        selectColor(".blue")
                    }} className="color blue"></span>

                    <span onClick={() => {
                        setColorToFilter("green")
                        selectColor(".green")
                    }} className="color green"></span>

                    <span onClick={() => {
                        setColorToFilter("yellow")
                        selectColor(".yellow")
                    }} className="color yellow"></span>

            </div>

            <Button link={`/shop/${catToFilter}/${colorToFilter}/${fromToFilter}/${toToFilter}`} text="Submit"  addClass={addClass}></Button>
            
            {/*
            ONLY IF THE SHOP IS FOR BOTH GENDERS 
            <div className="types">
                <p className="type men">Men</p>
                <p className="type women">Women</p>
            </div> */}
        </aside>
    )
}

export default AsideFilter
