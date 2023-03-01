import type { Photo } from "@/models/Photo";
import { createApi } from "unsplash-js";
import { getDataUrl } from "./get-data-url";

export async function getImages(
  cli: ReturnType<typeof createApi>,
  query: string
): Promise<Photo[]> {
  const mappedPhotos: Photo[] = [];

  const photos = await cli.search.getPhotos({
    query,
  });

  if (photos.type === "success") {
    const photosArr = photos.response.results.map((photo, index) => ({
      src: photo.urls.regular,
      thumb: photo.urls.thumb,
      width: photo.width,
      height: photo.height,
      alt: photo.alt_description ?? `${query}-img-${index}`,
    }));

    const photosARrWithDataUrl: Photo[] = [];

    for (const photo of photosArr) {
      const blurDataURL = await getDataUrl(photo.src);
      photosARrWithDataUrl.push({ ...photo, blurDataURL });
    }

    mappedPhotos.push(...photosARrWithDataUrl);
  } else {
    console.error(`Could not get ${query} photos`);
  }

  return mappedPhotos;
}
