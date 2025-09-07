import React from "react";
import './Filter.css'
import img1 from '../../../../public/strelka.png'
export const Filter: React.FC = () => {
    const mas = ['Размер', 'Цвет','Цена','Сортировать по']
    return (
        <ul className={'Filter'}>
            {mas.map((el)=>{
                return(
                    <li>

                        {el}
                        <img src={img1} alt={'csa'}/>
                    </li>
                )
            })}
        </ul>);
};