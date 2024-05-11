import React, { useState } from 'react';
import './Single.css'
import { FaMinus, FaXmark } from "react-icons/fa6";
import { FaLess, FaPlus, FaShippingFast, FaStar, FaStarHalf } from 'react-icons/fa';
import Image from '../../assets/categories/icon-vodka.webp';

import { dishes } from '../../../data';
import StoreItem from '../../pages/Store/StoreItem';

export default function Single() {
  const [inStore, setInStore] = useState(false);
  const data = dishes[3];
  const [items, setItems] = useState(1);

  const handleAdd = (type) => {
    if(type === 'add') {
      setItems(items + 1)
    
    } else if(type === 'less') {
      items != 1 && setItems(items - 1)
    }
  }
  


  return (
    <section>
      <div className="card single">
        <div className="image">
            <img src={data.image} alt="" />
        </div>
        <div className="content">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>
              {
                data.categories && data.categories.map(category =>{
                  return <div className="hash">{category}</div>
                })
              }
            </p>
            <span className='pricing'>
                <h3 className="sub-heading duration">$800.00</h3>
                <a className="badge"><FaStar className='star'/> 5.4K</a>
            </span>
            <span>
                <div className="disabled">
                  <a onClick={() => handleAdd('less')}><FaMinus /></a>
                  <h3 className="sub-heading">{items}</h3>
                  <a onClick={() => handleAdd('add')}><FaPlus /></a>
                </div>
              <a href="#" className="btn" onClick={() => setInStore(!inStore)}>
                {
                  inStore ? "Remove" : "Add"
                }
              </a>
            </span>
        </div>
      </div>
      <h1 className="heading">You Might Also Like</h1>
            <div className="container">
            {
              dishes && dishes.map(item => {
                return <StoreItem data={{...item}} key={item.id} />
              })
            }
          </div>
        
    </section>
  )
}