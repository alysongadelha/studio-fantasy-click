import { createApi } from "unsplash-js";

type CreateApi = ReturnType<typeof createApi>;
type SearchPhotos = CreateApi["search"];
type GetPhotos = SearchPhotos["getPhotos"];
export type PhotoResponse = Awaited<ReturnType<GetPhotos>>;
