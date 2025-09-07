import React from "react";
import './Basket.css'
import {BasketItem} from "./BasketItem.tsx";
import {PayBlock} from "./payBlock/PayBlock.tsx";

export const Basket: React.FC = () => {



    return (
        <div className={'container'}>
            <div className={'Basket'}>
                <h1 className={'Basket__header'}>Ваш заказ</h1>
                <div className="Basket__itemsArea">
                    <BasketItem/>
                </div>
                <PayBlock/>
            </div>
        </div>
    );
};