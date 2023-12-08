import React from 'react';
import './Main.css';
import Card from './Card';
import bruchetta from './assets/bruchetta.svg';
import greek from './assets/greek salad.jpg';
import lemon from './assets/lemon dessert.jpg';



function Main() {

    let priceBruschetta = '$5.99';
    let priceGreekSalad = '$12.99';
    let priceLemonDessert = '$5.00';

    const cardsData = [
        {
            image: greek,
            title: 'Greek Salad',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: priceGreekSalad,
        },
        {
            image: bruchetta,
            title: 'Bruschetta',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: priceBruschetta,
        },
        {
            image: lemon,
            title: 'Lemon Dessert',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: priceLemonDessert,
        },
    ];

    return (
        <main className="grid-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image} // Pass the image URL as a prop
                    title={card.title}
                    price={card.price}
                    content={card.content}
                />
            ))}
        </main>
    );
}

export default Main;
