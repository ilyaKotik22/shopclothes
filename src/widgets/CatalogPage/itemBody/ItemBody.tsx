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
                <div className="ItemBody__name">Белая куртка</div>
                <div className="ItemBody__price">2300p</div>
                <ul className={'ItemBody__sizes'}>
                    <li>s</li>
                    <li>m</li>
                    <li>l</li>
                </ul>
                <ul className={'ItemBody__colors'}>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </a>
    );
};