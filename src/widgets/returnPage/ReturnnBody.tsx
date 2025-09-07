import React from "react";
import './ReturnBody.css'

import img1 from '../../../public/return1.png'
import img2 from '../../../public/return2.png'
import img3 from '../../../public/return3.png'
import img4 from '../../../public/return4.png'
import img5 from '../../../public/return5.png'
import img6 from '../../../public/return6.png'

type ItemReturn = {
    image: string
    text:string
}
export const ReturnBody: React.FC = () => {
    const masContent:ItemReturn[] = [
        {image: img1,text:'если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)'},
        {image: img2,text:'возврат и обмен осуществляется в течение двух дней с момента получения заказа'},
        {image: img3,text:'возврат и обмен товара возможен только при отправке по Украине'},
        {image: img4,text:'бланк возврата присутствует в каждой посылке '},
        {image: img5,text:'все расходы по обмену и возврату товара несет покупатель'},
        {image: img6,text:'после получения возврата мы делаем перевод денежных средств на карту клиента'}
    ]
    return (
        <div className={'container'}>
            <div className={'returnBlock'}>
                <div className="returnBlock__upBlock">
                    <div className="returnBlock__header">Обмен и возврат</div>
                    <div className="returnBlock__content">
                        Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат
                    </div>
                    <div className="returnBlock__content">
                        Обмен и возврат возможен в случае :
                    </div>
                </div>
                <ul>
                    {masContent.map((el:ItemReturn)=>{
                        return(
                            <li>
                                <img src={el.image} alt=""/>
                                <div className="">{el.text}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};