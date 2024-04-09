'use server'

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { ok } from "assert";
import { error } from "console";
import login from "./logint";

export default async function userPost(state:{}, formData: FormData) {
    const username = formData.get('username') as string | null;
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;
    try {
        if(!username || !email || !password) throw new Error('Preencha todos os dados')
        if(password.length < 6) throw new Error('A Senha deve ter mais de 6 dígitos.')
        
        const {url} = USER_POST(); // Pass formData as an argument
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        })

        if(!response.ok) {
            throw new Error('Email ou usuário já cadastrado.')
        }
        const {ok} = await login({ok: true, error: ''}, formData);
        if(!ok) throw new Error('Erro ao logar')
        return {data: null, ok: true, error: ''}

    } catch (error: unknown) {
      return apiError(error)
}
}