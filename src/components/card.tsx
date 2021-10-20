import React from 'react';
import './card.css';
import { PriceHistoryPoint, Item } from '../types/types';

interface Props {
    item: Item
}

function renderCardContent(item: Item):JSX.Element {
    return (
        <div className="card-content" onClick={() => window.open(item.link)}>
            <div className="item-text">{item.itemName}</div>
            <div className="item-text">{item.currPrice}</div>
        </div>
    );
}

const Card: React.FC<Props> = ({item}) => {
    return(
        <div className="card-container">
            {
                item ? renderCardContent(item) : null
            }
        </div>
    );
};

export default Card;