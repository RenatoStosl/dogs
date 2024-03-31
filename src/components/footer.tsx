import Image from "next/image"

export default async function Footer() {
    return (
        <footer className="bg-[#fb1] pt-12 pb-0 px-4 h-40 text-center text-[#764701]">
            <Image className="mx-auto my-0" src={'/assets/dogs-footer.svg'} alt="Dogs" width={28} height={22} />
            <p className="mt-4">Dogs. Alguns direitos reservados.</p>
        </footer>
    )
    
}