'use client'

import { useFormState, useFormStatus } from "react-dom"
import Button from "../forms/button"
import Input from "../forms/input"
import ErrorMessage from "../helper/error-message"
import React from "react"
import passwordReset from "@/actions/password-reset"

function FormButton() {
    const {pending} = useFormStatus()
    return (
        <>
        {pending ? (
            <Button disabled={pending}>Resetando...</Button>
        ): (
            <Button>Resetar Senha</Button>
        )}
        </>
    )
}

export default function LoginResetarForm({keyToken, login}: {keyToken: string, login: string}) {
    const [state, action] = useFormState(passwordReset, {
        ok: false,
        error: '',
        data: null
    })
    
    const [url, setUrl] = React.useState('');

    React.useEffect(() => {
      setUrl(window.location.href.replace('perdeu', 'resetar'));
    }, []);

    return (
            <form action={action} className="mb-8">
                <Input label="Nova Senha" name="password"  type="password"/>
                <input type="hidden" name="key" value={keyToken}/>
                <input type="hidden" name="login" value={login}/>
                <ErrorMessage error={state.error} />
                <FormButton />
            </form>
    )
}