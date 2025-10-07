import React, { useEffect } from "react";
import './Basket.css'
import {BasketItem} from "./BasketItem.tsx";
import {PayBlock} from "./payBlock/PayBlock.tsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../server/server.ts";
import { useDispatch, useSelector } from "react-redux";
import { getFromFirebase } from "./BasketStore/store.ts";
import type { RootState } from "../../app/store/store.ts";


export const Basket: React.FC = () => {
    const itemsSelector = useSelector((state:RootState)=> state.basketSlice.items)
    const user = localStorage.getItem('login');
    const dispatch = useDispatch()

    async function getItems(user) {
    const docRef = doc(db, "baskets", `${user}_basket`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const items = docSnap.data().items;
        dispatch(getFromFirebase(items))
        console.log("Items:", items);
        return items;
    } else {
        console.log("Документ не найден");
        return null;
    }
    }

    useEffect(() => {
    if (user) {
        getItems(user);
    }
    }, []); 
    
    return (
        <div className={'container'}>
            <div className={'Basket'}>
                <h1 className={'Basket__header'}>Ваш заказ</h1>
                <div className="Basket__itemsArea">
                    {itemsSelector && Object.keys(itemsSelector).map((el)=>{
                        if (typeof itemsSelector[el] === 'object'){
                            
                            return(
                            <BasketItem 
                            id={itemsSelector[el].id}
                            name={itemsSelector[el].name} 
                            size={itemsSelector[el].size} 
                            count={itemsSelector[el].count} 
                            color={itemsSelector[el].color} 
                            price={itemsSelector[el].price}/>
                        )
                        }
                        
                    })}
                </div>
                <PayBlock/>
            </div>
        </div>
    );
};