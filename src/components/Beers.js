import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import App from '../App'
import { Link } from 'react-router-dom';

const Beers = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        Axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => {
            console.log(res.data);
            setBeers(res.data)
        })

    }, [])
 
const showBeers = () => {
    return beers.map(eachBeer => { 
    return (
        <div>
        <img src={eachBeer.image_url} style={{width:"5rem"}} alt="Beer Image"></img>
        <h3>{eachBeer.name}</h3>
        <h5>{eachBeer.tagline}</h5>

            <h1>All Beers</h1>
        </div>
        );
    })
}
return (
    <div>
    <Link to="/">Home</Link>
        {showBeers()}
    </div>
    )
}

export default Beers;