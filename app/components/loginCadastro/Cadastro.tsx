'use client'
import { useState, useRef } from 'react';
import style from '../../styles/LoginCadastro/cadastro.module.css';
import useLoginCadastro from '@/app/hooks/loginCadastro/useLoginCadastro';
import { useRouter } from 'next/navigation';


export default function CadastroComponent() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const telefoneRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const passwordRepetidoRef = useRef<HTMLInputElement>(null)

    const { fazerCadastro } = useLoginCadastro()

    const router = useRouter()

    const cadastro = async (e : React.FormEvent) => {
        e.preventDefault()

        const username = usernameRef.current?.value.trim()
        const email = emailRef.current?.value.trim()
        const firstName= firstNameRef.current?.value.trim()
        const lastName = lastNameRef.current?.value.trim()
        const telefone = telefoneRef.current?.value.trim()
        const password = passwordRef.current?.value.trim()
        const passwordRepetido = passwordRepetidoRef.current?.value.trim()
        
        
        if (password == passwordRepetido){
            const campos = {username, email, firstName, lastName, telefone, password}
            const responseData = await fazerCadastro(campos)
            
            if (responseData.msg == 'Cliente registrado com sucesso!')
                router.push('/auth/login')
                
            return responseData
        } console.log('As senhas precisam ser iguais.')
        
    }

    return (
        <form className={style.container} onSubmit={cadastro}>
            <div className={style.formulario}>
                <h2 className={style.titulo}>Crie sua conta</h2>

                <label className={style.label}>Username:</label>
                <input ref={usernameRef} type="text" placeholder="exemploDaSilva123" className={style.inputCampo} required />

                <div className={style.nomeSobrenome}>
                    <input ref={firstNameRef} type="text" placeholder="Nome" className={style.inputCampo} required />
                    <input ref={lastNameRef} type="text" placeholder="Sobrenome" className={style.inputCampo} required />
                </div>

                <label className={style.label}>Email:</label>
                <input ref={emailRef} type="email" placeholder="exemplo@exemplo.com" className={style.inputCampo} required />

                <label className={style.label}>Telefone:</label>
                <input ref={telefoneRef} type="tel" placeholder="(DD) XXXXX-YYYY" className={style.inputCampo} required />

                <label className={style.label}>Senha:</label>
                <input ref={passwordRef} type="password" placeholder='Digite sua senha' className={style.inputCampo} required />

                <input ref={passwordRepetidoRef} type="password" placeholder='Confirme sua senha' className={style.inputCampo} required />
                
                <div className={style.botaoCadastro}>
                    <button type="submit" className={style.botao}>Cadastrar</button>
                </div>

                <p className={style.linkLogin}>
                    Já tem uma conta? <a href="/auth/login" className={style.link}>Faça login</a>
                </p>
            </div>
        </form>
    );
}
