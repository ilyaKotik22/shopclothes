import React from "react";
import {MyButton} from "../../../shared/ui";
import './hpNewsBlcok.css'

export const HpNewsBlock: React.FC = () => {
    return (
        <div className={'hpNewsBlock'}>
            <div className="hpNewsBlock__header">Узнайте  первым о новинках</div>
            <input placeholder={'ваш email'} type="text"/>
            <MyButton classMod={'hpNewsBlock__button'} text={'ПОДПИСАТЬСЯ'}/>
            <div className="hpNewsBlock__polit">
                Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.

            </div>
        </div>);
};