import React from 'react';
import './Specials.css';
import Button from './Button';

function Specials() {
    return (
        <section className="specials-section">
            <p>This week's Specials!</p>
            <Button label="Online Menu" onClick={() => console.log('Button clicked')} />
        </section>
    );
}

export default Specials;
