import React from 'react';
import './Main.css';
import Card from './Card';
// Import your card data and assets
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
            content: 'The famous greek salad of crispy lettuce, peppers, olives,' +
                'and our Chicago style feta cheese, garnished with crunchy garlic' +
                'and rosemary croutons.',
            price: priceGreekSalad,
        },
        {
            image: bruchetta,
            title: 'Bruschetta',
            content: 'Our Bruchetta is made from grilled bread that has been smeared ' +
                'with garlic and seasoned with salt and olive oil.',
            price: priceBruschetta,
        },
        {
            image: lemon,
            title: 'Lemon Dessert',
            content: 'This comes straight from grandma\'s recipe book, every last ' +
                'ingredient has been sourced and is as authentic as can be ' +
                'imagined.',
            price: priceLemonDessert,
        },
    ];

    return (
        <main className="grid-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    price={card.price}
                    content={card.content}
                />
            ))}
        </main>
    );
}

export default Main;
