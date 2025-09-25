import React, {useEffect, useState} from "react";
import './AccountPageBody.css'
import {MyButton} from "../../shared/ui";
import {AuthPopup} from "./AuthPopup/AuthPopup.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../app/store/store.ts";
import {ChangeStatus} from "./AuthPopup/store/authPopup.ts";
import {updateUser} from "./store/appSlice.ts";



export const AccountPageBody: React.FC = () => {
    const AuthPopupSelector = useSelector((state:RootState)=> state.AuthPopupSlice.AuthPopup)
    const loginSelector = useSelector((state:RootState)=> state.appSlice.user)
    const login = localStorage.getItem('login')
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(login)
        if (login) dispatch(ChangeStatus())
    }, [login]);


    const [navigation,setNAvigation] = useState('Личные данные')
    const masNavigation = ['История заказов','Личные данные','Выйти']

    useEffect(() => {
        if (navigation === 'Выйти') {
            localStorage.removeItem('login')
            dispatch(updateUser({login:'',password:''}))
        }
    }, [navigation]);
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
                {AuthPopupSelector ?<></> : <AuthPopup/> }
                {navigation === 'Личные данные' ?
                    <form className={'AccountPage__accountData'}>
                        <div className="AccountPage__head">Персональные данные:</div>
                        <div className="AccountPage__section">
                            <div className="">
                                <input  value={loginSelector.login}  type="text"/>
                            </div>
                            <div>
                                <input value={loginSelector.password} type="text"/>
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
                        <MyButton typeButton={'button'} classMod={'AccountButton'} text={'ОБНОВИТЬ ИНФОРМАЦИЮ'}/>
                    </form>
                    : <div></div>}

            </div>
        </div>

    );
};