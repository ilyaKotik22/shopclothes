import React from "react";
import './ItemBody.css'
import img1 from '../../../../public/item11.png'

type Item ={
    id: string
    name:string
    price:number
    sizeArr: string[]
    colorsArr: string[]
}
export const ItemBody: React.FC<Item> = ({name,price,sizeArr,colorsArr}) => {
    return (
        <a href={'/Card/:id'}>
            <div className={'ItemBody'}>
                <img src={img1} alt=""/>
                <div className="ItemBody__name">{name}</div>
                <div className="ItemBody__price">{price}p</div>
                <ul className={'ItemBody__sizes'}>
                    {sizeArr.map(el=> <li>{el}</li>)}
                </ul>
                <ul className={'ItemBody__colors'}>
                    {colorsArr.map(el=> <li></li>)}
                   
                </ul>
            </div>
        </a>
    );
};