import React from "react";
import {Filter} from "../filter/FIlter.tsx";
import {ItemBody} from "../itemBody/ItemBody.tsx";
import './ItemsArea.css'
import {useSelector} from "react-redux";
import type {RootState} from "../../../app/store/store.ts";
type clothingProductsType = {
    id: string,
    name: string,
    price: number,
    category: string,
    sizes: string[],
    colors: string[],
    care: string[]
}
const clothingProducts:clothingProductsType[] = [
    {
        id: "cl001",
        name: "Футболка хлопковая классическая",
        price: 1299,
        category:'Шубы',
        sizes: [ "M", "L", "XL", "XXL"],
        colors: ["белый", "черный"],
        care: ["Машинная стирка при 30°C", "Не отбеливать", "Гладить при средней температуре", "Не сушить в стиральной машине"]
    },
    {
        id: "cl002",
        name: "Джинсы скинни",
        price: 3499,
        category:'Тренчи',
        sizes: [ "M", "L", "XL"],
        colors: [ "черный"],
        care: ["Машинная стирка при 30°C", "Стирка внутри out", "Не отбеливать", "Гладить при низкой температуре"]
    },
    {
        id: "cl003",
        name: "Свитшот с капюшоном",
        price: 2499,
        category:'Пальто',
        sizes: [ "M", "L", "XL"],
        colors: ["черный", 'белый'],
        care: ["Машинная стирка при 30°C", "Не отбеливать", "Сушить в горизонтальном положении", "Гладить с изнанки"]
    },
    {
        id: "cl004",
        name: "Платье коктейльное",
        price: 5599,
        category:'Шубы',
        sizes: ["XS", "S", "M", ],
        colors: ["черный"],
        care: ["Только химчистка", "Не стирать", "Не отбеливать", "Гладить при низкой температуре"]
    },
    {
        id: "cl005",
        name: "Куртка ветровка",
        price: 4299,
        category:'Шубы',
        sizes: [ "M", "L"],
        colors: ["бежевый", "черный"],
        care: ["Протирать влажной тканью", "Не стирать", "Не отбеливать", "Хранить в расправленном виде"]
    },
    {
        id: "cl006",
        name: "Юбка миди плиссированная",
        price: 2899,
        category:'Тренчи',
        sizes: ["XS", "S", "M", "L"],
        colors: ["черный",'бежевый'],
        care: ["Только химчистка", "Не отжимать", "Гладить через ткань", "Хранить на вешалке"]
    },
    {
        id: "cl007",
        name: "Кардиган из шерсти",
        price: 3799,
        category:'Тренчи',
        sizes: ["S", "M", "L", "XL"],
        colors: ["бежевый"],
        care: ["Ручная стирка в холодной воде", "Не выкручивать", "Сушить на горизонтальной поверхности", "Гладить через влажную ткань"]
    },
    {
        id: "cl008",
        name: "Брюки классические",
        price: 3199,
        category:'Шубы',
        sizes: ["44", "46", "48", "50", "52", "54"],
        colors: ["черный"],
        care: ["Химчистка", "Гладить при средней температуре", "Хранить на вешалке", "Не стирать"]
    },
    {
        id: "cl009",
        name: "Толстовка оверсайз",
        price: 1999,
        category:'Шубы',
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["черный",'белый'],
        care: ["Машинная стирка при 30°C", "Не отбеливать", "Гладить при низкой температуре", "Не сушить в стиральной машине"]
    },
    {
        id: "cl010",
        name: "Пальто зимнее",
        price: 8999,
        category:'Пальто',
        sizes: ["S", "M", "L", "XL"],
        colors: ["черный", "бежевый"],
        care: ["Химчистка", "Не стирать", "Гладить через влажную ткань", "Хранить в чехле"]
    },
    {
        id: "cl011",
        name: "Шорты джинсовые",
        price: 2299,
        category:'Пальто',
        sizes: ["S", "M", "L", "XL"],
        colors: [ "черный"],
        care: ["Машинная стирка при 30°C", "Не отбеливать", "Гладить при низкой температуре", "Сушить в тени"]
    },
    {
        id: "cl012",
        name: "Блузка офисная",
        price: 1899,
        category:'Шубы',
        sizes: ["XS", "S", "M", "L"],
        colors: ["белый"],
        care: ["Ручная стирка", "Не отбеливать", "Гладить при низкой температуре", "Сушить в расправленном виде"]
    },
    {
        id: "cl013",
        name: "Костюм спортивный",
        price: 4999,
        category:'Тренчи',
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["черный"],
        care: ["Машинная стирка при 30°C", "Не отбеливать", "Гладить при низкой температуре", "Не сушить в машине"]
    },
    {
        id: "cl014",
        name: "Плащ дождевик",
        price: 3499,
        category:'Верхняя одежда',
        sizes: ["S", "M", "L", "XL"],
        colors: ["белый"],
        care: ["Протирать влажной тканью", "Не стирать", "Не гладить", "Хранить в свернутом виде"]
    },
    {
        id: "cl015",
        name: "Леггинсы спортивные",
        price: 1599,
        category:'Верхняя одежда',
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["черный"],
        care: ["Машинная стирка при 30°C", "Не отбеливать", "Не гладить", "Сушить вдали от нагревательных приборов"]
    }
];

export const ItemsArea: React.FC = () => {
    const navigationSelector = useSelector((state:RootState)=> state.NavigationSlice.changeNavigation) || ''
    const filterSelector = useSelector((state:RootState)=> state.FilterSlice)

    return (
        <div className={'ItemsArea'}>

            <Filter/>
            {clothingProducts.sort((a,b)=> a.price - b.price).map((el:clothingProductsType)=>{

                if ((el.category === navigationSelector) &&
                    (el.sizes.includes(filterSelector['Размер']?.changed) || filterSelector['Размер']?.changed === '')
                    && (el.colors.includes(filterSelector['Цвет']?.changed) || filterSelector['Цвет']?.changed === '')){
                    return(
                        <ItemBody id={el.id} price={el.price} name={el.name} colorsArr={el.colors} sizeArr={el.sizes} />
                    )
                }
            })}
        </div>);
};