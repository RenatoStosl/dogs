import login from "@/actions/logint"

export default async function LoginForm() {
    return (
        <>
            <form action={login}>
                <input type="text" name="username" placeholder="Usuário" />
                <input type="password" name="password" placeholder="Senha" />
                <button>Entrar</button>
            </form>
        </>
    )
}