import React from "react";
import {Navigation} from "../navigation/Navigation.tsx";
import './CatalogBody.css'
import {ItemsArea} from "../itemsArea/ItemsArea.tsx";

export const CatalogBody: React.FC = () => {
    return (
        <div className={'CatalogBody'}>
            <Navigation/>
            <ItemsArea/>
        </div>);
};