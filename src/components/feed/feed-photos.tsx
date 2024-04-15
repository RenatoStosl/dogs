import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
    return (
        <div className="hover:flex">
            <ul className="grid md:grid-cols-3 grid-cols-2 gap-4 mb-4 justify-items-center animeLeft">
                {photos.map((photo, i) => (
                    <li key={photo.id + i} className={i === 1 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 md:col-span-1'}>
                        <Link href={`/foto/${photo.id}`} scroll={false} className="grid rounded overflow-hidden cursor-pointer relative">
                            <Image
                                src={photo.src}
                                alt={photo.title}
                                width={1500}
                                height={1500}
                                sizes="80vw"
                                className="grid grid-areas-[1/1]"
                            />
                            <div className="flex justify-center gap-1 items-center bg-black bg-opacity-30 opacity-0 absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-300 hover:opacity-100">
                                <Image
                                    src="/assets/visualizacao.svg"
                                    alt="Ícone de visualizações"
                                    width={16}
                                    height={10}
                                />
                                <span className="text-white text-base">{photo.acessos}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}