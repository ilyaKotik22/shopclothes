import React from "react";
import {createPortal} from "react-dom";
import './AuthPopup.css'
import {MyButton} from "../../../shared/ui";
import cross from  '../../../../public/crossIcon.png'
export const AuthPopup: React.FC = () => {
    return createPortal(
        <div className={'AuthPopup'}>
            <div className="AuthPopup__content">
                <div className="AuthPopup__cross"><img src={cross} alt={'d'}/></div>
                <div className="AuthPopup__header">Авторизация</div>
                <input placeholder={'Ваш e-mail*'} type="text"/>
                <input placeholder={'Ваш пароль*'} type="password"/>
                <div className="AuthPopup__underSection">
                    <div className=""><a href="">Забыли пароль?</a></div>
                    <div className=""><a href="">Нет аккаунта?</a></div>
                </div>
                <MyButton classMod={'AuthPopup__button'} text={'Войти'}/>
            </div>
        </div>,document.body);
};