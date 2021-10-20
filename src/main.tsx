import React, { useEffect, useState } from 'react';
import './main.css';
import { PriceHistoryPoint, Item } from './types/types';
import Card from './components/card';
import NavBar from './components/navbar';


const getAllItems = (setItemsList: React.Dispatch<React.SetStateAction<Item[]>>) => {
  let items:Item[];
  items = [{
    logo: '',
    link: 'https://www.amazon.com/ANNE-PRO-Wireless-Mechanical-Keyboard/dp/B07Y53G7B6/ref=as_li_ss_tl?dchild=1&keywords=anne%2Bpro%2B2&qid=1598298487&sr=8-2&linkCode=sl1&tag=gearscope08-20&linkId=85950e477fdc4f5b340c409f37d663aa&language=en_US&th=1',
    company: 'Amazon',
    itemName: 'ANNE PRO 2, 60% Wired/Wireless Mechanical Keyboard (Gateron Brown Switch/White Case)',
    currPrice: 24.95,
    priceHistory: []
  }];

  setItemsList(items);
}

export const Main: React.FC = () => {
    const [itemsList, setItemsList] = useState<Item[]>([]);

    // Fetch all arrays when this component initially renders
    useEffect(() => {
      getAllItems(setItemsList);
    }, []);
  
    console.log(itemsList);
  
    return (
      <div className='app-container'>
        <NavBar currPage={"home"} />
        <h1 className="title">Your items ({itemsList.length})</h1>
        {
          itemsList ? itemsList.map(item => <Card item={item} />) : null
        }
      </div>
    );
};