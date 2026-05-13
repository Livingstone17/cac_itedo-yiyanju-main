import { apiUrl } from "@/lib/api";

export const eventsQueryKey = ["events"] as const;
export const galleryQueryKey = ["gallery"] as const;

function warmImageUrls(urls: string[], max: number) {
  const unique = [...new Set(urls)].slice(0, max);
  for (const url of unique) {
    const img = new Image();
    img.src = url;
  }
}

/** Shape returned by GET /api/events (matches Events page expectations). */
export interface ChurchEventRaw {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate: string;
  location: string;
  category?: string;
  isOnline: boolean;
  youtubeLiveUrl: string | null;
  banner?: string;
}

export interface EventsApiResponse {
  events?: ChurchEventRaw[];
}

export async function fetchEvents(): Promise<EventsApiResponse> {
  const res = await fetch(apiUrl("/api/events"));
  if (!res.ok) {
    throw new Error(`Events request failed: ${res.status}`);
  }
  const data = (await res.json()) as EventsApiResponse;
  const events = data.events ?? [];
  warmImageUrls(
    events.map((e) => e.banner).filter((b): b is string => Boolean(b)),
    24,
  );
  return data;
}

export interface GalleryImageItem {
  id: string;
  title: string;
  src: string;
  description: string;
}

export async function fetchGalleryImages(): Promise<GalleryImageItem[]> {
  const response = await fetch(apiUrl("/api/gallery"));
  if (!response.ok) {
    throw new Error(`Gallery request failed: ${response.status}`);
  }
  const result = await response.json();
  const filesArray = Array.isArray(result) ? result : result.data?.files || result.files || [];

  const images: GalleryImageItem[] = filesArray.map(
    (file: { id: string; title?: string; name: string; description?: string }) => ({
      id: file.id,
      title: file.title || file.name.replace(/\.[^/.]+$/, ""),
      src: apiUrl(`/api/gallery/image/${file.id}`),
      description: file.description || "Church event",
    }),
  );
  warmImageUrls(
    images.map((i) => i.src),
    16,
  );
  return images;
}

const staleMs = 1000 * 60 * 5;

export const eventsQueryOptions = {
  queryKey: eventsQueryKey,
  queryFn: fetchEvents,
  staleTime: staleMs,
};

export const galleryQueryOptions = {
  queryKey: galleryQueryKey,
  queryFn: fetchGalleryImages,
  staleTime: staleMs,
};
