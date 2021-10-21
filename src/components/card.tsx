import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { ItemData } from '../types/types';

interface Props {
    itemData: ItemData;
}

function renderCardContent(item: ItemData):JSX.Element {
    return (
        <Link to={{pathname: `/${item.id}`, state: {itemData: item}}}>
            <div className="card-content">
                <div className="item-text name">{item.itemName}</div>
                <div className={item.priceIncrease ? "item-text increased" : "item-text decreased"}>{ `$${item.currPrice}` }</div>
            </div>
        </Link>
    );
}

const Card: React.FC<Props> = ({itemData}) => {
    return(
        <div className="card-container">
            {
                itemData ? renderCardContent(itemData) : null
            }
        </div>
    );
};

export default Card;