import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './card';

const App = props => {
    const [cartas, setCartas] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    const [pintas, setPintas] = useState(["spades", "clubs", "hearts", "diamonds"]);
    const [randomNumberCarta, setRandomNumberCarta] = useState(null);
    const [randomNumberPinta, setRandomNumberPinta] = useState(null);
    /* const [state, setState] = useState({
        cartas: [],
        pintas: []
    }) */

    useEffect(() => {
        // componendDidMount
        console.log("App Rendered")
        setRandomNumberCarta(randomNumber(cartas));
        setRandomNumberPinta(randomNumber(pintas));


        return () => {
            console.log("Unmounted Component...");
        }

    }, [])

    useEffect(() => {
        // componendDidUpdate
        console.log("App Updated")
    }, [randomNumberCarta, randomNumberPinta])

    const randomNumber = arr => {
        return Math.floor(Math.random() * arr.length);
    }

    return (
        <>
            <Card numero={cartas[randomNumberCarta]} pinta={pintas[randomNumberPinta]}/>
        </>
    )
}

export default App;
