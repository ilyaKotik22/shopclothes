import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import './AuthPopup.css'
import {MyButton} from "../../../shared/ui";
import cross from  '../../../../public/crossIcon.png'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../../../../server/server.ts";
import {useDispatch, useSelector} from "react-redux";
import {ChangeStatus} from "./store/authPopup.ts";
import type {RootState} from "../../../app/store/store.ts";

export const AuthPopup: React.FC = () => {

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [isAutharisation, setIsAutharisation] = useState(false)
    const dispatch = useDispatch()
    const authPopupSelector = useSelector((state:RootState)=> state.AuthPopupSlice.AuthPopup)

    const signUpWithEmail = async (email,password) =>{
        const correctEmail = email.replace(/\s/g, '')

        try {
            const userCredential = await createUserWithEmailAndPassword(auth,correctEmail,password)
            console.log('user rigistered:', userCredential.user)
        }catch (error){
            setError('такой пользователь уже существует')
            console.log('error signing up:', error.message)
        }
    }
    const signInWithEmail = async (email,password) =>{
        const correctEmail = email.replace(/\s/g, '')

        try {
            const userCredential = await signInWithEmailAndPassword(auth,correctEmail,password)
            localStorage.setItem('login',userCredential.user.email?.slice(0, userCredential.user.email?.indexOf('@')) as string)
            console.log('user signed in:',  userCredential.user.email?.slice(0,userCredential.user.email?.indexOf('@')))
        } catch (e) {
            setError('неверный логин или пароль')
            console.log('error signing in', e.message)
        }
    }
    const  logOut = async () => {
        try {
            await signOut(auth)
            console.log('user signed out')
        }catch (e) {
            console.log('error signing out', e.message)
        }
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        setError('')
        //
        console.log('dsdw')
        if (login.includes('@') && (password.length >5)){
            if (isAutharisation){
                signUpWithEmail(login,password)
            }else {
                signInWithEmail(login,password)
            }

        }else {
            setError('правильно заполните все поля')
        }

    }
    useEffect(() => {
        const a = localStorage.getItem('login')
        console.log(a)
    }, []);

    return createPortal(
        <div className={'AuthPopup'}>
            <form onSubmit={handleOnSubmit} className="AuthPopup__content">
                <div onClick={()=> dispatch(ChangeStatus())} className="AuthPopup__cross"><img src={cross} alt={'d'}/></div>
                <div className="AuthPopup__header">{isAutharisation ? 'Регистрация' :'Авторизация'}</div>
                <div className="">{error}</div>
                <input onChange={e=> setLogin(e.target.value)} placeholder={'Ваш e-mail*'} type="text"/>
                <input onChange={e=> setPassword(e.target.value)} placeholder={'Ваш пароль*'} type="password"/>
                <div className="AuthPopup__underSection">
                    <div className="">Забыли пароль?</div>
                    <div onClick={()=> setIsAutharisation(e=>!e)} className="">{isAutharisation ? 'Войти в аккаунт' : 'Нет аккаунта?'}</div>
                </div>
                <MyButton typeButton={'submit'} classMod={'AuthPopup__button'} text={isAutharisation ?'Зарегистривоваться' :'Войти'}/>
            </form>
        </div>,document.body);
};
//m&!ZRAbJMLd2?ue
//1zE<i\<k@UE92bJ