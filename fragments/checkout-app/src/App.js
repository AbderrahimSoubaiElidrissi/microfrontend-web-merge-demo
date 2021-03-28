import React from 'react';

import logo from './logo.svg';

import { useState, useEffect } from 'react'
export default function App() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart([]);

        const handleMessage = (e) => {
            setCart(e.data);
        }

        if (window.addEventListener) {
            window.addEventListener('message', handleMessage, false);
        } else if (window.attachEvent) { // ie8
            window.attachEvent('onmessage', handleMessage);
        }

    }, []);
    return <div>
        <h4>Checkout App</h4>
        <img width="90" src={logo} alt="Logo" />
        <div>
            <button>Checkout $ {cart.map(p => p.price).reduce((a, b) =>
                a + b, 0)} </button>


        </div>
    </div>

}

