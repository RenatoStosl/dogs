'use client';

import { PhotoData } from "@/actions/photo-get";
import PhotoContent from "../photo/photo-content";
import { usePathname, useRouter } from "next/navigation";

export default function FeedModal({photo} : {photo: PhotoData}) {
    const router = useRouter();
    const pathname = usePathname();

    if (!pathname.includes('foto')) return null;

    function handleOutsideClick(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) router.back();
    }

    return (
        <div className="flex sm:px-8 sm:py-8 p fixed w-full h-screen top-0 left-0 z-50 bg-black bg-opacity-40" onClick={handleOutsideClick}>
            <PhotoContent data={photo} single={false} />;
        </div>)
}