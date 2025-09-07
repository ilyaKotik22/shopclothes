import React from "react";
import './Navogation.css'


export const Navigation: React.FC = () => {
    const mas = ['New','Bestsellers','Верхняя одежда','Шубы','Тренчи','Пальто','Пуховики и жилеты','Костюмы','Жакеты','Платья','Рубашки и блузы','Юбки','Футболки и топы','Аксессуары','Sale','Summer','Посмотреть всё']

    const handleOnClick = (e:React.MouseEvent<HTMLUListElement>)=>{
        if (e.target instanceof HTMLLIElement){
            console.log(e.target.textContent)
        }
    }
    return (
        <ul onClick={handleOnClick} className={'navigation'}>
            {mas.map((el)=>{
                return(
                    <li>
                        {el}
                    </li>
                )
            })}
        </ul>);
};