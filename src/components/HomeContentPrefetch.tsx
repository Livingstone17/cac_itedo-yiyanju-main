import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { eventsQueryOptions, galleryQueryOptions } from "@/queries/homeContent";

/**
 * Prefetches events + gallery in the background on first paint of the homepage
 * so navigations and below-the-fold gallery benefit from a warm React Query + image cache.
 */
const HomeContentPrefetch = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    void queryClient.prefetchQuery(eventsQueryOptions);
    void queryClient.prefetchQuery(galleryQueryOptions);
  }, [queryClient]);

  return null;
};

export default HomeContentPrefetch;
