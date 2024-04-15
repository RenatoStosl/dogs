import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Minha Conta",
}

export default async function ContaPage() {
    const { data: user } = await userGet()
    const { data } = await photosGet({ user: user?.username })
    return (
        <section>
            {data?.length ? (< Feed photos={data} /> 
            ):(
            <div>
                <p className="text-[#444] mb-4 text-xl">Nenhuma foto encontrada
                </p>
                    <Link href={"conta/postar"} className="inline-block text-base font-[var(--type-first)] cursor-pointer border-none rounded-[0.4rem] bg-[#fb1] text-[#764701] min-w-[8rem] py-[0.8rem] px-[1.2rem] box-border transition-all duration-100 focus:outline-none focus:ring-[3px] focus:ring-[#fea] focus:ring-offset-[4px] focus:ring-offset-[#fb1] hover:outline-none hover:ring-[3px] hover:ring-[#fea] hover:ring-offset-[4px] hover:ring-offset-[#fb1] .button:disabled {
            opacity: 0.5;
            cursor: wait;
          }">
                        Postar Foto
                        </Link></div>
            )}
        </section>
    );
}