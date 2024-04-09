import Link from "next/link";
import Image from "next/image";
import userGet from "@/actions/user-get";

export default async function Header () {
    const {data} = await userGet()

    return (
        <header className="shadow-sm fixed w-full z-50 bg-white top-0">
            <nav className="container flex justify-between items-center h-16">
                <Link className="p-y-2" href="/">
                    <Image src={'/assets/dogs.svg'} alt="Dogs" width={28} height={22} priority />
                </Link>
                {data ? (
                    <Link className="flex items-center gap-2 text-[#333]" href="/conta">{data.username}
                    <Image src={"/assets/usuario.svg"} width={14} height={17} alt="Ícone de usuário"/>
                </Link>
                ) : (
                    <Link className="flex items-center gap-2 text-[#333]" href="/login">Login / Criar
                        <Image src={"/assets/usuario.svg"} width={14} height={17} alt="Ícone de usuário"/>
                    </Link>
                )}
            </nav>
        </header>
    )
}