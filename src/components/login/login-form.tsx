'use client'

import login from "@/actions/logint"
import { useFormState, useFormStatus } from "react-dom"
import Button from "../forms/button"
import Input from "../forms/input"
import ErrorMessage from "../helper/error-message"
import React from "react"
import Link from "next/link"

function FormButton() {
    const {pending} = useFormStatus()
    return (
        <>
        {pending ? (
            <Button disabled={pending}>Carregando...</Button>
        ): (
            <Button>Entrar</Button>
        )}
        </>
    )
}

export default function LoginForm() {
    const [state, action] = useFormState(login, {
        ok: false,
        error: '',
        data: null
    })

    React.useEffect(() => {
        if (state.ok) 
            window.location.href = '/conta'
     }, [state.ok])
    

    return (
        <>
            <form action={action} className="mb-8">
                <Input label="Usuário" name="username" type="text" />
                <Input label="Senha" name="password"  type="password"/>
                <ErrorMessage error={state.error} />
                <FormButton />
            </form>
            <Link href="/login/perdeu" className="underline inline-block text-gray-600 py-2 px-0.5">Perdeu a senha?</Link>
            <div className="mt-16 mb-16">
                <h2 className="subtitle leading-none text-2xl">Cadastre-se</h2>
                <p className="mt-8 mb-8">Ainda não possui conta? Cadastre-se no site.</p>
                <Link href="/login/criar" className="text-base font-[var(--type-first)] cursor-pointer border-none rounded-[0.4rem] bg-[#fb1] text-[#764701] min-w-[8rem] py-[0.8rem] px-[1.2rem] box-border transition-all duration-100 focus:outline-none focus:ring-[3px] focus:ring-[#fea] focus:ring-offset-[4px] focus:ring-offset-[#fb1] hover:outline-none hover:ring-[3px] hover:ring-[#fea] hover:ring-offset-[4px] hover:ring-offset-[#fb1] .button:disabled {
            opacity: 0.5;
            cursor: wait;
          }">Cadastro</Link>
            </div>
        </>
    )
}