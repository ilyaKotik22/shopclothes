import React from "react";
import './PayDelivery.css'
import img1 from '../../../../public/payDev1.png'
import img2 from '../../../../public/payDev2.png'
import img3 from '../../../../public/payDev3.png'

export const PayDelivery: React.FC = () => {
    return (
        <div className={'container'}>
            <div className={'PayDelivery'}>
                <div className="PayDelivery__header">
                    Оплата и доставка
                </div>
                <div className="PayDelivery__content">
                    <ul className={'PayDelivery__block'}>
                        <li> Вы можете оплатить покупку одним из ниже перечисленных способов:</li>
                        <li>• наложенным платежом в отделении Новой Почты</li>
                        <li>• денежным переводом Visa/MasterCard</li>
                        <li>• полная предоплата через Приват 24</li>
                    </ul>
                    <ul className={'PayDelivery__block'}>
                        <li> Мы готовы предложить несколько вариантов доставки:</li>
                        <li>• отправка по всей Украине в отделение Новой Почты(1-2 дня)</li>
                        <li>• международные сервисы доставки для жителей зарубежья: Укрпочта( 1-3 недели ,DHL(3-7
                            дней)
                        </li>
                        <li>• Срок доставки: 1–2 дня с момента заказа</li>
                    </ul>
                </div>
                <div className="PayDelivery__header">
                    Процесс оформления заказа с помощью LIQPAY:
                </div>
                <div className="PayDelivery__content">
                    <div className="PayDelivery__block mod__Block">
                        <img src={img1} alt=""/>
                        <p>Выбрать в корзине способ оплаты "LIQPAY";</p>
                    </div>
                    <div className="PayDelivery__block mod__Block">
                        <img src={img2} alt=""/>
                        <p>Подтвердить заказ;</p>
                    </div>
                    <div className="PayDelivery__block mod__Block">
                        <img src={img3} alt=""/>
                        <p>После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас способ оплаты: через Приват24, или с помощью карты Mastercard/VISA со всего мира. </p>
                    </div>
                </div>


            </div>
        </div>
    );
};