import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const NewBeer = () => {
    return (
        <div>
        <Link to="/">Home</Link>

             <h1>New Beer</h1>
        </div>
    );
};

export default NewBeer;