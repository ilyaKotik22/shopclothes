import React, {useState} from "react";
import img1 from "../../../public/strelka.png";
import trash from "../../../public/trash.png";

export const BasketItem: React.FC = () => {
    const [size,setSize] = useState('')
    const [sizeDropdown,setSizeDropDown] = useState(false)
    const [value, setValue] = useState(1)
    const sizeHandle = (e)=>{
        setSize(e.target.innerHTML)
        setSizeDropDown(e=>!e)
        console.log(e.target.innerHTML)
    }
    const setValueHandle = (action: '+' | '-')=>{
        if (action === '+'){
            setValue(e=>e+1)
        }else if (action === '-' && value > 0){
            setValue(e=>e-1)
        }
    }
    return (
            <div className="Basket__item">
                <div className="Basket__right-section">
                    <div className="Basket__img">
                        <img src="" alt=""/>
                    </div>
                    <div className="Basket__name">Кремовое пальто</div>
                </div>

                <div className="Basket__colors">
                    <div className="Basket__show-Color"></div>
                </div>
                <div onClick={()=> setSizeDropDown(e=>!e)} className="Basket__size">
                    <div className="Basket__show-size">{size} <img className={(sizeDropdown ? 'clicked' : '')} src={img1} alt=""/></div>
                    <ul style={{display: (sizeDropdown ? 'block' :'none')}}  onClick={sizeHandle} className="Basket__dropdown">
                        <li>xxl</li>
                        <li>xl</li>
                        <li>l</li>
                        <li>m</li>
                    </ul>
                </div>
                <div className="Basket__count">
                    <div onClick={()=>setValueHandle('+')} className="">+</div>
                    <div className=" value">{value}</div>
                    <div onClick={()=>setValueHandle('-')} className="">-</div>
                </div>
                <div className="Basket__right-section">
                    <div className="Basket__price">2134p</div>
                    <div className="Basket__trash">
                        <img src={trash} alt=""/>
                    </div>
                </div>
                <div className="justLine"></div>
            </div>
        );
};