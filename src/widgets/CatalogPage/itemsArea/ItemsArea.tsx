import React from "react";
import {Filter} from "../filter/FIlter.tsx";
import {ItemBody} from "../itemBody/ItemBody.tsx";
import './ItemsArea.css'


export const ItemsArea: React.FC = () => {
    return (
        <div className={'ItemsArea'}>
            <Filter/>
            <ItemBody name={""} price={0} sizeArr={[]} colorsArr={[]} id={""}/>
            <ItemBody></ItemBody><ItemBody></ItemBody><ItemBody></ItemBody><ItemBody></ItemBody><ItemBody></ItemBody><ItemBody></ItemBody><ItemBody></ItemBody><ItemBody></ItemBody>
        </div>);
};