'use client'

import { useFormState, useFormStatus } from "react-dom"
import Button from "../forms/button"
import Input from "../forms/input"
import ErrorMessage from "../helper/error-message"
import React from "react"
import passwordLost from "@/actions/password-lost"

function FormButton() {
    const {pending} = useFormStatus()
    return (
        <>
        {pending ? (
            <Button disabled={pending}>Enviando...</Button>
        ): (
            <Button>Enviar Email</Button>
        )}
        </>
    )
}

export default function LoginPerdeuForm() {
    const [state, action] = useFormState(passwordLost, {
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
                <Input label="Email / Usuário" name="login"  type="text"/>
                <input name="url" type="hidden" value={url}/>
                <ErrorMessage error={state.error} />
                {state.ok ? <p className="text-green-600-">Email enviado.</p> : <FormButton />}
            </form>

    )
}