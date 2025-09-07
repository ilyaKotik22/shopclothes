import React from "react";
import './myButton.css'
type Button = {
    text?:string
    onClick?: ()=>void
    img?: string
    classMod?: string
    typeButton: 'submit' | 'button'
}

export const MyButton: React.FC<Button> = ({ typeButton,onClick,text,img,classMod }) => {
    return (
        <button type={typeButton} className={classMod} onClick={onClick}>
            {img}
            {text}
        </button>);
};