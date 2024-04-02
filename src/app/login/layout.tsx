import Image from "next/image";

export default async function LoginLayout({children, }:{children: React.ReactNode}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8">
            <div className="hidden md:block">
                <Image src="/assets/login.jpg" alt="Logo do InstaDogs" width={1200} height={1600} />
            </div>
            <div className="md:max-w-[30rem] p-4 mt-[20vh] max-w-full">
                {children}
            </div>
        </div>
    );
}