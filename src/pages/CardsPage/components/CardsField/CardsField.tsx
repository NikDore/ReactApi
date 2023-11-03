import React from 'react';
import { CardsFieldProps } from './type';

const CardsField = ({ isDataLoaded, cardsData }: CardsFieldProps) => {
    if (!isDataLoaded) {
        return <h3>Loading!</h3>;
    }

    if (cardsData.data.length === 0) {
        return <h3>Not Found</h3>;
    }

    return (
        <div className="card-field">
            {cardsData.data.map((card, index) => (
                <div className="card" key={index}>
                    <div>
                        Name: <span className="card-data">{card.name}</span>
                    </div>
                    <div>
                        Health power:
                        <span className="card-data"> {card.hp ? card.hp : 'none'}</span>
                    </div>
                    <div>
                        Attacks:
                        <span className="card-data"> {card.attacks?.[0] ? card.attacks?.[0].name : 'none'}</span>
                    </div>
                    <img width="250px" src={card.images.large} alt={card.name} />
                </div>
            ))}
        </div>
    );
};

export default CardsField;
