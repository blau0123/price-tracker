import React from 'react';
import './item.css';
import { ItemData } from '../types/types';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/navbar';

interface Props {

};

interface stateType {
    itemData: ItemData;
 }

export const Item: React.FC<Props> = ({}) => {
    const location = useLocation<stateType>();
    const { itemData } = location.state || { itemData: {} };

    return (
        <div className="page-container">
            <NavBar currPage='' />
            <div className="item-container">
                <div className="header-text item-header">
                    <span className="item-name">{ itemData.itemName }</span>
                    <span className="item-price-container">
                        Current price: 
                        <span className={`price ${ itemData.priceIncrease ? "increased" : "decreased" }`}>{ `$${itemData.currPrice}` }</span>
                    </span>
                </div>
                <div className="item-price-history-container">

                </div>
            </div>
        </div>
    );
}