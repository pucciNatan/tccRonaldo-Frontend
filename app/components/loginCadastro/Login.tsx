'use client'
import style from '../../styles/LoginCadastro/login.module.css'
import facebookImg from '../../../public/facebook.png'
import instagramImg from '../../../public/instagram.png'
import googleImg from '../../../public/google.png'
import useLoginCadastro from '../../hooks/loginCadastro/useLoginCadastro'
import { useState, useRef } from 'react'


export default function LoginComponent() {
    const emailUsernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const login = async (e: any) => {
        e.preventDefault()
        try {
          const responseData = await fazerLogin(usernameLogin, password)
          if (responseData && responseData.token && responseData.nomeUsuario) {
            console.log(responseData.nomeUsuario)
            console.log(responseData.token)
            console.log('Logado com sucesso!')
          } else {
            console.log('Resposta inesperada:', responseData)
          }
        } catch (err) {
          console.error('Erro na requisição:', err)
        }
      }

    return (
        <div className={style.loginPage}>
            <div className={style.loginContainer}>
                <div className={style.loginBox}>
                    <h2 className={style.h2}>Seja Bem-vindo</h2>
                    <div className={style.profilePicture}></div>
            
                    <input onChange={(e)=>{setUsernameLogin(e.target.value)}} type="text" placeholder="Usuário..." className={style.inputField} id="username" />
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Senha..." className={style.inputField} id="password" />

                    <a href="#" className={style.forgotPassword}>Esqueci minha senha.</a>
                    <button onClick={login} className={style.loginButton}>Entrar</button>

                    <div className={style.divider}>
                        <span>Ou</span>
                    </div>

                    <div className={style.socialIcons}>

                    </div>

                    <div className={style.dividerBottom}>
                      Já tem uma conta?<a href='/auth/cadastro'> Registre-se</a>
                    </div>
                  </div>
            </div>
        </div>
    );    
}

