import React, { useEffect, useState } from "react";
import {Filter} from "../filter/FIlter.tsx";
import {ItemBody} from "../itemBody/ItemBody.tsx";
import './ItemsArea.css'
import {useSelector} from "react-redux";
import type {RootState} from "../../../app/store/store.ts";
type clothingProductsType = {
    id: string,
    name: string,
    price: number,
    category: string,
    sizes: string[],
    colors: string[],
    care: string[]
}
import { db } from "../../../../server/server.ts";
import { collection,getDocs  } from 'firebase/firestore';

export const ItemsArea: React.FC = () => {
    const navigationSelector = useSelector((state:RootState)=> state.NavigationSlice.changeNavigation) || ''
    const filterSelector = useSelector((state:RootState)=> state.FilterSlice)
    const [items,setItems] = useState<clothingProductsType[]>([])

    async function fetchProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  setItems(list as clothingProductsType[])
}

    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <>
         <div className={'ItemsArea'}>
            
            <Filter/>
            {items.sort((a,b)=> filterSelector['Цена']?.status ? b.price - a.price : a.price - b.price).map((el:clothingProductsType)=>{

                if ((el.category === navigationSelector) &&
                    (el.sizes.includes(filterSelector['Размер']?.changed) || filterSelector['Размер']?.changed === '')
                    && (el.colors.includes(filterSelector['Цвет']?.changed) || filterSelector['Цвет']?.changed === '')){
                    return(
                        <ItemBody key={el.id}

                        id={el.id} price={el.price} name={el.name} colorsArr={el.colors} sizeArr={el.sizes} />
                    )
                }
            })}
        </div>
        </>
       );
};