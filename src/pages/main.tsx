import React, { useEffect, useState } from 'react';
import './main.css';
import { ItemData } from '../types/types';
import Card from '../components/card';
import NavBar from '../components/navbar';


const getAllItems = (setItemsList: React.Dispatch<React.SetStateAction<ItemData[]>>) => {
  let items:ItemData[];
  items = [{
    id: 0,
    logo: '',
    link: 'https://www.amazon.com/ANNE-PRO-Wireless-Mechanical-Keyboard/dp/B07Y53G7B6/ref=as_li_ss_tl?dchild=1&keywords=anne%2Bpro%2B2&qid=1598298487&sr=8-2&linkCode=sl1&tag=gearscope08-20&linkId=85950e477fdc4f5b340c409f37d663aa&language=en_US&th=1',
    company: 'Amazon',
    itemName: 'ANNE PRO 2, 60% Wired/Wireless Mechanical Keyboard (Gateron Brown Switch/White Case)',
    currPrice: 24.95,
    priceHistory: [{ price: 24.95, date: "2021-10-19" }, { price: 23.95, date: "2021-9-10" }],
    priceIncrease: true
  }, {
    id: 1,
    logo: '',
    link: 'https://www.amazon.com/ANNE-PRO-Wireless-Mechanical-Keyboard/dp/B07Y53G7B6/ref=as_li_ss_tl?dchild=1&keywords=anne%2Bpro%2B2&qid=1598298487&sr=8-2&linkCode=sl1&tag=gearscope08-20&linkId=85950e477fdc4f5b340c409f37d663aa&language=en_US&th=1',
    company: 'Amazon',
    itemName: 'ANNE PRO 2, 60% Wired/Wireless Mechanical Keyboard (Gateron Brown Switch/White Case)',
    currPrice: 24.95,
    priceHistory: [{ price: 24.95, date: "2021-10-19" }, { price: 23.95, date: "2021-9-10" }],
    priceIncrease: false
  }];

  setItemsList(items);
}

export const Main: React.FC = () => {
    const [itemsList, setItemsList] = useState<ItemData[]>([]);

    // Fetch all arrays when this component initially renders
    useEffect(() => {
      getAllItems(setItemsList);
    }, []);
    
    return (
      <div className='page-container'>
        <NavBar currPage={"home"} />
        <p className="header-text page-title">Your items ({itemsList.length})</p>
        <div className="card-list-container">
        {
          itemsList ? itemsList.map(item => <Card itemData={item} />) : null
        }
        </div>
      </div>
    );
};