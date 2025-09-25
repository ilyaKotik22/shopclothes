import React from "react";
import './Navogation.css'
import {useDispatch, useSelector} from "react-redux";
import {changeNavigation} from "./store/NavigationSlice.ts";
import type {RootState} from "../../../app/store/store.ts";


export const Navigation: React.FC = () => {
    const mas = ['New','Bestsellers','Верхняя одежда','Шубы','Тренчи','Пальто','Пуховики и жилеты','Костюмы','Жакеты','Платья','Рубашки и блузы','Юбки','Футболки и топы','Аксессуары','Sale','Summer','Посмотреть всё']
    const dispatch = useDispatch()
    const navigationSelector = useSelector((state:RootState)=> state.NavigationSlice.changeNavigation)
    const handleOnClick = (e:React.MouseEvent<HTMLUListElement>)=>{
        if (e.target instanceof HTMLLIElement){
            dispatch(changeNavigation(e.target.textContent as string))

        }
    }
    return (
        <ul onClick={handleOnClick} className={'navigation'}>
            {mas.map((el)=>{
                return(
                    <li key={el} className={el === navigationSelector ? 'navPick' : ''}>
                        {el}
                    </li>
                )
            })}
        </ul>);
};