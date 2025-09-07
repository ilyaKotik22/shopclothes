import React from "react";
import img1 from '../../../../public/fon.png'
import './HeadBlock.css'
import img2 from '../../../../public/Frame.png'
export const HeadBlock: React.FC = () => {
    return (
        <div className={'headBlock'}>
            <img src={img1} alt=""/>
            <div className="headBlock__text-content">
                <div className="headBlock__head">  Новая коллекция</div>
                <div className="headBlock__stick"></div>
                <div className="headBlock__desc">Смотреть Новинки <img src={img2} alt={'ds'}/></div>
            </div>
        </div>);
};