import React from "react";
import './myButton.css'
type Button = {
    text?:string
    onClick?: ()=>void
    img?: string
    classMod?: string

}

export const MyButton: React.FC<Button> = ({ onClick,text,img,classMod }) => {
    return (
        <button className={classMod} onClick={onClick}>
            {img}
            {text}
        </button>);
};