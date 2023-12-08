import React from 'react';
import './Main.css';
import Card from './Card';

function Main() {
    const cardsData = [
        {
            title: 'Card Title 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Card Title 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Card Title 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    return (
        <main className="grid-container">
            {cardsData.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
            ))}
        </main>
    );
}

export default Main;
