import React, {useState} from "react";
import './CardBody.css'
import img1 from '../../../public/cardPage1.png'
import img2 from '../../../public/cardPage2.png'
import img3 from '../../../public/cardPage3.png'
import img4 from '../../../public/cardPage4.png'
import img5 from '../../../public/cardPage5.png'
import img6 from '../../../public/cardPage6.png'

import {MyButton} from "../../shared/ui";

export const CardBody: React.FC= () => {
    const masSizes = ['XXS','XS','S','M']
    const [detailsSection,setDetailsSection] = useState(false)
    const [compound, setCompound] = useState(false)
    const [size,setSize] = useState('')
    const [sizeSection,setSizeSection] = useState(false)
    const sizeHandler = (e) =>{
        setSizeSection(e=> !e)
        setSize(e.target.innerText)
    }
    const mas = [img1,img2,img3,img4,img5]
    return (
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
                    <div className="CardBody__header">Кремовое пальто</div>
                    <div className="CardBody__price">3333p</div>
                    <ul className={'CardBody__colors'}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className={'CardBody__color-name'}>Цвет: Кофе с молоком меланж</div>
                    <div onClick={() => setSizeSection(el=>!el)} className="CardBody__size">
                        <label >
                            <input type="text"/>
                            <span onClick={() => setSizeSection(el=>!el)} >{size ? size : 'Выберите размер'}</span>
                        </label>

                    </div>
                    <ul onClick={sizeHandler}  style={{display: (sizeSection ? 'flex' : 'none')}} className={'CardBody__dropdown'}>
                        {masSizes.map((el)=> {
                            return (
                                <li className={(size === el ? 'changedSize': '')}>{el}</li>
                            )
                        })}
                    </ul>
                    <div className="CardBody__section modeButton">
                        <MyButton text={'В КОРЗИНУ'}/>
                        <MyButton text={'В ИЗБРАННОЕ'}/>
                    </div>
                    <div className="CardBody__description">
                        <div className="CardBody__header">Подробности</div>
                        <div onClick={()=> setCompound(e=>!e)} className="CardBody__description-size">
                            <div className="CardBody__header-size">
                                Состав и уход
                            </div>

                            <div className="justLine"></div>
                            <div style={{display: (compound ? 'block' : 'none')}} className="CardBody__dropdown-desc">
                                <div className="">Состав: 50% Шерсть, 50% Полиэстер</div>
                                <div className="">Подкладка: 100% Полиэстер</div>
                                <div className="">Утеплитель: 90% Пух, 10% Перо</div>
                                <br/>
                                <div className="">- Не стирать</div>
                                <div className="">- Гладить при температуре утюга до 110°C</div>
                                <div className="">- Не отбеливать</div>
                                <div className="">- Сухая чистка (химчистка)</div>
                                <div className="">- Барабанная сушка запрещена</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};