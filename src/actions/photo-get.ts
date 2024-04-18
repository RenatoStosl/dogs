'use server';

import { PHOTO_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Photo } from "./photos-get";

export type Comment = {
    comment_ID: string;
    comment_post_ID: string;
    comment_author: string;
    comment_content: string;
}

export type PhotoData = {
    photo: Photo
    comments: Comment[]
}
  
  type PhotosGetParams = {
    page?: number;
    total?: number;
    user?: 0 | string;
  };
  
  export default async function photoGet(id: string) {
    try {
      const { url } = PHOTO_GET(id);
      const response = await fetch(url, {
        next: {
            revalidate: 60,
            tags: ['Photo', 'comment'],
        },
      });
      if (!response.ok) throw new Error('Erro ao pegar a foto.');
      const data = (await response.json()) as PhotoData;
      return { data, ok: true, error: '' };
    } catch (error) {
      return apiError(error);
    }
  }
  