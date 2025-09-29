import React, {use, useEffect, useState} from "react";
import './CardBody.css'
import img1 from '../../../public/cardPage1.png'
import img2 from '../../../public/cardPage2.png'
import img3 from '../../../public/cardPage3.png'
import img4 from '../../../public/cardPage4.png'
import img5 from '../../../public/cardPage5.png'
import img6 from '../../../public/cardPage6.png'

import {MyButton} from "../../shared/ui";
import { useLocation } from "react-router-dom";
import {doc,getDoc, serverTimestamp, updateDoc  } from 'firebase/firestore';
import { db } from "../../../server/server";
import type { clothingProductsType } from "../CatalogPage/itemsArea/ItemsArea";

export const CardBody: React.FC= () => {
    const user = localStorage.getItem('login')
    const [compound, setCompound] = useState(false)
    const [size,setSize] = useState()
    const [color,setColor] = useState<string>()
    const [sizeSection,setSizeSection] = useState(false)
    const [dataItem, setDataItem] = useState<clothingProductsType>()
    const [error,setError] = useState('')
    const location = useLocation()

async function fetchProductById() {

  const productRef = doc(db, "products", location.pathname.split('/')[location.pathname.split('/').length-1]);

  const snapshot = await getDoc(productRef);

  if (snapshot.exists()) {
    const product = { id: snapshot.id, ...snapshot.data() };
    setDataItem(product as clothingProductsType)
   
    return product;
  } else {
    console.log("Такого товара нет");
    return null;
  }
}
    const addToBasketItems = async (itemId, newItem,path) => {
  try {
    const basketRef = doc(db, "baskets", `${path}_basket`);
    
    await updateDoc(basketRef, {
      [`items.${itemId}`]: newItem,
    });
    
    console.log("Item added to basket");
  } catch (error) {
    console.error("Error adding item: ", error);
  }
};
    useEffect(()=>{
        fetchProductById()
    },[])


    const sizeHandler = (e) =>{
        setSizeSection(e=> !e)
        setSize(e.target.innerText)
    }
    const addInBasket = ()=>{
        
        setError('')
        
        const obj = {
            user: user,
            item: {
                id: dataItem?.id,
                size: size,
                name: dataItem?.name,
                color: color,
                price: dataItem?.price,
                count: 1
            }
            
        }
        let hasError = false
        Object.keys(obj.item).forEach((el:string)=>{
            if(obj.item[el] === undefined){
                hasError = true
            } 
        })
        
        if(hasError){
            setError('Заполните все поля')
            
        } else{
            addToBasketItems(dataItem?.id,obj.item,user)
        }
        
    }
    const mas = [img1,img2,img3,img4,img5]
    
    return dataItem ? (
        <div className={'container'}>
            <div className={'CardBody'}>
                <div className="CardBody__section">
                    <div className="CardBody__slice">
                        {mas.map((el) => {
                            return (
                                <img src={el}/>
                            )
                        })}
                    </div>
                    <div className="CardBody__slice">
                        <img src={img6} alt=""/>
                    </div>
                </div>
                <div className="CardBody__section mod__section">
                    <div className="CardBody__header">{dataItem?.name}</div>
                    <div className="CardBody__price">{dataItem?.price}p</div>
                    <ul className={'CardBody__colors'}>
                        {dataItem?.colors.map(el=> <li onClick={()=> setColor(el as string)}></li>)}
                        
                    </ul>
                    <div className={'CardBody__color-name'}>Цвет: Кофе с молоком меланж</div>
                    <div onClick={() => setSizeSection(el=>!el)} className="CardBody__size">
                        <label >
                            <input type="text"/>
                            <span onClick={() => setSizeSection(el=>!el)} >{size ? size : 'Выберите размер'}</span>
                        </label>

                    </div>
                    <ul onClick={sizeHandler}  style={{display: (sizeSection ? 'flex' : 'none')}} className={'CardBody__dropdown'}>
                        {dataItem?.sizes.map((el)=> {
                            return (
                                <li className={(size === el ? 'changedSize': '')}>{el}</li>
                            )
                        })}
                    </ul>
                    <div className="">{error}</div>
                    <div className="CardBody__section modeButton">

                        <MyButton onClick={()=>addInBasket()} typeButton="button" text={'В КОРЗИНУ'}/>
                        <MyButton typeButton="button" text={'В ИЗБРАННОЕ'}/>
                    </div>
                    <div className="CardBody__description">
                        <div className="CardBody__header">Подробности</div>
                        <div onClick={()=> setCompound(e=>!e)} className="CardBody__description-size">
                            <div className="CardBody__header-size">
                                Состав и уход
                            </div>

                            <div className="justLine"></div>
                            <div style={{display: (compound ? 'block' : 'none')}} className="CardBody__dropdown-desc">
                                {dataItem?.care.map(el=> <div>{el}</div>)}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    ) : (<div>загрузка товара...</div>);
};