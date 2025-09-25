import React, {useEffect} from "react";
import './Filter.css'
import img1 from '../../../../public/strelka.png'
import {useDispatch, useSelector} from "react-redux";
import {changeItemFilter, changeStatusFilter, spawnFilter} from "./store/FilterSlice.ts";
import type {RootState} from "../../../app/store/store.ts";
export const Filter: React.FC = () => {
    const dispatch = useDispatch()
    const masFilter = [
        {nameCatalog: 'Размер', content:['S','M','L']},
        {nameCatalog: 'Цвет', content:['белый','чёрный','бежевый']},
        {nameCatalog: 'Цена', content:[]},
        {nameCatalog: 'Сортировать по', content:[]},
    ]
    useEffect(() => {
        masFilter.map(el=>dispatch(spawnFilter({nameCatalog: el.nameCatalog, content: el.content, status: false,changed:''})))
    }, []);
    const filterSelector = useSelector((state:RootState)=>state.FilterSlice) || []

    return (
        <div className={'Filter'}>
            {filterSelector && Object.keys(filterSelector).map((el)=>{

                return(
                    <div>
                        <div onClick={()=>dispatch(changeStatusFilter(filterSelector[el].nameCatalog))} key={filterSelector[el].nameCatalog} className="">
                            {filterSelector[el].nameCatalog}
                            <img className={(filterSelector[el].status ? 'drop' : '')} src={img1} alt={'csa'}/>
                        </div>
                        <ul style={{display: (filterSelector[el].status ? 'block': 'none')}} >
                            {filterSelector[el].content.map(ell=><li onClick={()=>{
                                dispatch(changeItemFilter({nameCatalog:el, item:ell}))
                                dispatch(changeStatusFilter(el))}
                            } key={ell}>{ell}</li>)}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};