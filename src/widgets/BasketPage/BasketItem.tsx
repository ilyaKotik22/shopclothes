import React, {useEffect, useState} from "react";
import img1 from "../../../public/strelka.png";
import trash from "../../../public/trash.png";
import { changeCountForItem, changeSizeForItem, deleteItemFromBasket } from "../../features";
import { useDispatch } from "react-redux";
import { updateBasket } from "./BasketStore/store";

export type ItemInBasket = {
    id: string,
    name: string,
    count: number,
    color: string,
    price: number,
    size: string

}

export const BasketItem: React.FC<ItemInBasket> = ({id,name,size,count,color,price}) => {
    const [sizeDropdown,setSizeDropDown] = useState(false)
    const mail = localStorage.getItem('login')
    const [countLocal,setCountLocal] = useState(count)
    const [sizeLocal, setSizeLocal] = useState(size)
    const dispatch = useDispatch()
    const sizeHandle = (ev)=>{
        changeSizeForItem(mail,id,ev.target.textContent)
        setSizeLocal(ev.target.textContent)
        setSizeDropDown(e=>!e)
      
    }
    const countHandle = (mail,id,action)=>{
        const update = action === '+' ? countLocal+1 : countLocal-1
        changeCountForItem(mail,id,action,update)
        setCountLocal(action === '+' ? countLocal+1 : countLocal-1)
    }
    const trashHandle = () =>{
        dispatch(updateBasket({id}))
        deleteItemFromBasket(mail,id)
    }
    return (
            <div className="Basket__item">
                <div className="Basket__right-section">
                    <div className="Basket__img">
                        <img src="" alt=""/>
                    </div>
                    <div className="Basket__name">{name}</div>
                </div>

                <div className="Basket__colors">
                    <div className="Basket__show-Color"></div>
                </div>
                <div onClick={()=> setSizeDropDown(e=>!e)} className="Basket__size">
                    <div className="Basket__show-size">{sizeLocal} <img className={(sizeDropdown ? 'clicked' : '')} src={img1} alt=""/></div>
                    <ul style={{display: (sizeDropdown ? 'block' :'none')}}  onClick={sizeHandle} className="Basket__dropdown">
                        <li>xxl</li>
                        <li>xl</li>
                        <li>l</li>
                        <li>m</li>
                    </ul>
                </div>
                <div className="Basket__count">
                    <div onClick={()=>countHandle(mail,id,'+')} className="">+</div>
                    <div className=" value">{countLocal}</div>
                    <div onClick={()=>countHandle(mail,id,'-')} className="">-</div>
                </div>
                <div className="Basket__right-section">
                    <div className="Basket__price">{price}</div>
                    <div onClick={trashHandle} className="Basket__trash">
                        <img src={trash} alt=""/>
                    </div>
                </div>
                <div className="justLine"></div>
            </div>
        );
};