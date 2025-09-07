import React from "react";
import './CategorisBlock.css'
import img1 from '../../../../public/ct1.png'
import img2 from '../../../../public/ct2.png'
import img3 from '../../../../public/ct3.png'
import img4 from '../../../../public/ct4.png'
export const CategorisBlock: React.FC = () => {
    return (
        <div className={'container'}>
            <div className={'CategorisBlock'}>
                <div className="CategorisBlock__header">Категории</div>
                <div className="CategorisBlock__section">
                    <img src={img1} alt=""/>
                    <div className="">Kуртки</div>
                </div>
                <div className="CategorisBlock__section">
                    <img src={img2} alt=""/>
                    <div className="">Пальто</div>
                </div>
                <div className="CategorisBlock__section">
                    <img src={img3} alt=""/>
                    <div className="">Шубы</div>
                </div>
                <div className="CategorisBlock__section">
                    <img src={img4} alt=""/>
                    <div className="">Парки</div>
                </div>
            </div>
        </div>
    );
};