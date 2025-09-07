import React, {useState} from "react";
import './AccountPageBody.css'
import {MyButton} from "../../shared/ui";
import {AuthPopup} from "./AuthPopup/AuthPopup.tsx";

export const AccountPageBody: React.FC = () => {
    const [navigation,setNAvigation] = useState('Личные данные')
    const masNavigation = ['История заказов','Личные данные','Выйти']
    return (
        <div className={'container'}>
            <div className={'AccountPage'}>
                <div className="AccountPage__navigation">
                    {masNavigation.map(el=>{
                        return (
                            <div className={navigation === el ? 'checkedNav' : ''} onClick={()=> setNAvigation(el)}>
                                {el}
                            </div>
                        )
                    })}
                </div>
                {/*{<AuthPopup/>}*/}
                {navigation === 'Личные данные' ?
                    <form className={'AccountPage__accountData'}>
                        <div className="AccountPage__head">Персональные данные:</div>
                        <div className="AccountPage__section">
                            <div className="">
                                <input type="text"/>
                            </div>
                            <div>
                                <input type="text"/>
                            </div>
                            <div className="">
                                <input type="text"/>
                            </div>
                            <div className="">
                                <input type="text"/>
                            </div>

                        </div>
                        <div className={'AccountPage__head'}>Адрес доставки:</div>
                        <div className="AccountPage__section">
                            <div className="">
                                <input type="text"/>
                            </div>
                            <div className="">
                                <input type="text"/>
                            </div>
                        </div>
                        <MyButton classMod={'AccountButton'} text={'ОБНОВИТЬ ИНФОРМАЦИЮ'}/>
                    </form>
                    : <div></div>}
            </div>
        </div>

    );
};