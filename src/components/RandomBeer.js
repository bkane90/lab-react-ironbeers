import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const RandomBeer = () => {
    return (
        <div>
        <Link to="/">Home</Link>

            <h1>Random Beer</h1>
        </div>
    );
};

export default RandomBeer;