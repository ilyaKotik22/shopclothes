import React from "react";
import './PayBlock.css'
import {MyButton} from "../../../shared/ui";

export const PayBlock: React.FC = () => {
    return (
        <>
            <h2>Оформление заказа</h2>
            <div className="underHeadPay">Персональные данные:</div>
            <div className={'PayBlock'}>
                <div className="PayBlock__section">
                    <div className="PayBlock__element">
                        <input placeholder={'Ваше имя*'} type="text"/>
                        <input placeholder={'Ваш e-mail*'} type="text"/>
                        <div className="">Способ доставки</div>
                        <div className="PayBlock__location">
                            <div className="dd">По России</div>
                            <div className="">
                                <label>
                                    <input type="checkbox"/>
                                    <span className="dote"></span>
                                    <span>Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</span>
                                </label>
                            </div>
                            <div className="">
                                <label>
                                    <input type="checkbox"/>
                                    <span className="dote"></span>
                                    <span>Новая Почта</span>
                                </label>
                            </div>

                            <div className="p">Адресс доставки</div>
                            <input placeholder={'Город'} type="text"/>
                        </div>

                    </div>
                    <div className="PayBlock__element">
                        <input placeholder={'Ваша фамилия*'} type="text"/>
                        <input placeholder={'Ваш телефон*'} type="text"/>
                        <div className="voidArea"></div>
                        <div className="PayBlock__location">
                            <div className="dd">Междунвродная доставка</div>
                            <div className="">
                                <label>
                                    <input type="checkbox"/>
                                    <span className="dote"></span>
                                    <span>Украпочта / 1-3 недели / 30$</span>
                                </label>
                            </div>
                            <div className="voidArea"></div>
                            <div className="">
                                <label>
                                    <input type="checkbox"/>
                                    <span className="dote"></span>
                                    <span>DHL / 3-7 дней / 60$</span>
                                </label>
                            </div>

                            <div className="voidArea"></div>
                            <div className="voidArea"></div>
                            <div className="voidArea"></div>

                            <input placeholder={'Отделение почты*'} className={'input1'} type="text"/>
                        </div>

                    </div>

                </div>

                <div className="payBlockSec">
                    <div className="pay__nav">
                        <div className=""><a href="">Войти в личный кабинет</a></div>
                        <div className=""><a href="">УСЛОВИЯ ДОСТАВКИ</a></div>
                        <div className=""><a href="">УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</a></div>
                        <div className=""><a href="">ИНФОРМАЦИЯ ОБ ОПЛАТЕ</a></div>
                    </div>


                    <div className="PayBlock__payBar">
                        <div className="PayBlock__left">ДОСТАВКА:</div>
                        <div className="PayBlock__right">По тарифам перевозчика</div>
                    </div>
                    <div className="PayBlock__payBar">
                        <div className="PayBlock__left">БОНУСЫ:</div>
                        <div className="PayBlock__right">-69 грн</div>
                    </div>
                    <div className="PayBlock__payBar">
                        <div className="PayBlock__left">ИТОГО:</div>
                        <div className="PayBlock__right">15250 грн</div>
                    </div>
                    <div className="butSection">
                        <MyButton classMod={'payButton'} text={'ОФОРМИТЬ ЗАКАЗ'}/>
                    </div>
                </div>
            </div>
        </>


    );
};