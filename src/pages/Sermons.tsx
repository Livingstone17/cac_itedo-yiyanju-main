import { useEffect, useMemo, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Play, Calendar, User, Search, ChevronLeft, ChevronRight, RefreshCcw } from "lucide-react";
import Footer from "@/components/Footer";
import { apiUrl } from "@/lib/api";
import { getVisiblePageNumbers } from "@/lib/pagination";
import { cn } from "@/lib/utils";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@/components/ui/pagination";

const SERMONS_PAGE_SIZE = 10;

interface SermonVideo {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    channelTitle: string;
    thumbnails: { medium: { url: string } };
  };
}

const SermonCardSkeleton = () => (
  <Card className="border-light-400 bg-light shadow-soft dark:border-dark-500 dark:bg-dark-400 relative overflow-hidden border">
    <Skeleton className="bg-light-400 dark:bg-dark-500 h-62.5 w-full rounded-t-lg rounded-b-none" />
    <CardHeader className="flex flex-col justify-between gap-3 px-2 py-3">
      <div className="flex items-center justify-between">
        <Skeleton className="bg-light-400 dark:bg-dark-500 h-5 w-24 rounded-full" />
        <Skeleton className="bg-light-400 dark:bg-dark-500 h-4 w-20 rounded" />
      </div>
      <div className="space-y-1.5">
        <Skeleton className="bg-light-400 dark:bg-dark-500 h-3.5 w-full rounded" />
        <Skeleton className="bg-light-400 dark:bg-dark-500 h-3.5 w-3/4 rounded" />
      </div>
      <div className="flex items-center gap-1.5">
        <Skeleton className="bg-light-400 dark:bg-dark-500 h-4 w-4 rounded-full" />
        <Skeleton className="bg-light-400 dark:bg-dark-500 h-3.5 w-28 rounded" />
      </div>
    </CardHeader>
  </Card>
);

const SermonSkeletonGrid = () => (
  <div className="w-full space-y-6">
    <Skeleton className="bg-light-400 dark:bg-dark-500 h-4 w-48 rounded" />
    <div className="grid h-fit w-full gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: SERMONS_PAGE_SIZE }).map((_, i) => (
        <SermonCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

const Sermons = () => {
  const [allVideos, setAllVideos] = useState<SermonVideo[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllVideos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(apiUrl("/api/sermons"));

      if (!res.ok) {
        throw new Error(`Failed to load sermons: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      const rawVideos = data?.videos?.allVideos;
      setAllVideos(Array.isArray(rawVideos) ? rawVideos : []);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unable to load sermons. Please try again later.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllVideos();
  }, []);

  const filteredVideos = useMemo(() => {
    const videos = Array.isArray(allVideos) ? allVideos : [];
    const query = searchQuery.toLowerCase().trim();
    if (!query) return videos;

    return videos.filter((video) => {
      try {
        const title = video.snippet?.title?.toLowerCase() || "";
        const date = video.snippet?.publishedAt ? new Date(video.snippet.publishedAt).toLocaleDateString() : "";
        return title.includes(query) || date.toLowerCase().includes(query);
      } catch {
        return false;
      }
    });
  }, [allVideos, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(filteredVideos.length / SERMONS_PAGE_SIZE));
    setCurrentPage((p) => (p > totalPages ? totalPages : p));
  }, [filteredVideos]);

  const totalCount = filteredVideos.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / SERMONS_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * SERMONS_PAGE_SIZE;
  const paginatedVideos = filteredVideos.slice(startIndex, startIndex + SERMONS_PAGE_SIZE);
  const showingFrom = totalCount === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(startIndex + SERMONS_PAGE_SIZE, totalCount);
  const pageItems = getVisiblePageNumbers(safePage, totalPages);

  return (
    <>
      <section id="sermons" className="bg-light-200 dark:bg-dark-300 py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            <div className="md:col-span-3 lg:col-span-5">
              <h2 className="text-text dark:text-light mb-8 text-3xl font-bold">
                Recent <span className="text-church-gold-400">Sermons</span>
              </h2>

              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="text-text-300 dark:text-text-400 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
                  <Input type="text" placeholder="Search sermons by title or date..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border-light-400 bg-light text-text placeholder:text-text-400 focus:border-church-gold-400 dark:border-dark-500 dark:bg-dark-500 dark:text-light dark:placeholder:text-text-400 rounded-md py-2 pl-12 outline-none" />
                </div>
                {filteredVideos.length > 0 && (
                  <p className="text-text-300 dark:text-text-400 mt-2 text-sm">
                    Found {filteredVideos.length} {filteredVideos.length === 1 ? "sermon" : "sermons"}
                  </p>
                )}
              </div>

              {/* Error */}
              {error && !loading && (
                <div className="to-light-200 dark:to-dark-300 flex flex-col items-center justify-center rounded-xl border border-red-200/50 bg-linear-to-b from-red-50/50 px-6 py-16 dark:border-red-900/30 dark:from-red-950/20">
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-red-500 dark:text-red-400">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 animate-ping rounded-full bg-red-200/40 dark:bg-red-800/20" style={{ animationDuration: "2s" }} />
                  </div>

                  <h3 className="text-text dark:text-light mb-2 text-xl font-bold">Unable to Load Sermons</h3>

                  <p className="text-text-300 dark:text-text-400 mb-2 max-w-md text-center text-sm leading-relaxed">{error}</p>

                  <div className="mb-8 flex flex-col items-center gap-1">
                    <p className="text-text-400 dark:text-text-500 text-xs">This could be due to:</p>
                    <ul className="text-text-400 dark:text-text-500 mt-1 space-y-1 text-xs">
                      <li className="flex items-center gap-2">
                        <span className="bg-text-400 h-1 w-1 rounded-full" />A temporary network issue
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-text-400 h-1 w-1 rounded-full" />
                        Server maintenance in progress
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="bg-text-400 h-1 w-1 rounded-full" />
                        Your internet connection being unstable
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button onClick={fetchAllVideos} className="gap-2 bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
                      <RefreshCcw size={24} strokeWidth={2} />
                      Try Again
                    </Button>

                    <a href="https://www.youtube.com/@YourChannel" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500 gap-2">
                        <Play className="h-4 w-4" />
                        Watch on YouTube
                      </Button>
                    </a>
                  </div>
                </div>
              )}

              {/* Loading */}
              {loading && <SermonSkeletonGrid />}

              {/* Empty */}
              {!loading && !error && filteredVideos.length === 0 && (
                <div className="py-12 text-center">
                  <p className="text-text-300 dark:text-text-400 mb-2">No sermons found</p>
                  <p className="text-text-300 dark:text-text-400 text-sm">Try searching with different keywords or dates</p>
                </div>
              )}

              {/* Sermons grid */}
              {!loading && !error && filteredVideos.length > 0 && (
                <>
                  <div className="w-full space-y-6" id="sermons-list-top">
                    <p className="text-text-300 dark:text-text-400 text-sm">
                      Showing <span className="text-text dark:text-light font-medium">{showingFrom}</span>
                      {"–"}
                      <span className="text-text dark:text-light font-medium">{showingTo}</span> of <span className="text-text dark:text-light font-medium">{totalCount}</span> {totalCount === 1 ? "sermon" : "sermons"}
                    </p>

                    <div className="grid h-fit w-full gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                      {paginatedVideos.map((video) => (
                        <Card key={video.id.videoId} className="border-light-400 bg-light shadow-soft dark:border-dark-500 dark:bg-dark-400 relative overflow-hidden border">
                          <div className="border-light-400 dark:border-dark-500 relative aspect-video h-fit border-b">
                            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="h-62.5 w-full rounded-t-lg object-center" />
                            <div className="bg-church-blue-900/30 absolute inset-0 flex items-center justify-center opacity-0 transition hover:opacity-100">
                              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300">
                                  <Play className="mr-2 h-5 w-5" /> Watch
                                </Button>
                              </a>
                            </div>
                          </div>

                          <CardHeader className="flex flex-col justify-between px-2 py-3">
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center justify-between">
                                <Badge className="bg-church-gold-50 text-church-gold-700 dark:bg-church-gold-950/30 dark:text-church-gold-300 text-xs">YouTube Sermon</Badge>
                                <span className="text-text-300 dark:text-text-400 flex items-center text-xs">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  {new Date(video.snippet.publishedAt).toLocaleDateString()}
                                </span>
                              </div>
                              <CardTitle className="text-text dark:text-light line-clamp-2 text-xs md:text-sm">{video.snippet.title}</CardTitle>
                            </div>
                            <CardDescription className="text-text-300 dark:text-text-400 mt-3 flex flex-col gap-3 text-sm">
                              <span className="flex items-center">
                                <User className="mr-1 h-4 w-4" />
                                <span>{video.snippet.channelTitle}</span>
                              </span>
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Pagination className="mt-10">
                      <PaginationContent className="flex-wrap justify-center gap-1">
                        <PaginationItem>
                          <button
                            type="button"
                            aria-label="Go to previous page"
                            disabled={safePage <= 1}
                            onClick={() => {
                              setCurrentPage((p) => Math.max(1, p - 1));
                              document.getElementById("sermons-list-top")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }}
                            className={cn(
                              buttonVariants({
                                variant: "outline",
                                size: "default",
                              }),
                              "gap-1 pl-2.5",
                              "border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500",
                              safePage <= 1 && "pointer-events-none opacity-50",
                            )}
                          >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="hidden sm:inline">Previous</span>
                          </button>
                        </PaginationItem>

                        {pageItems.map((item, idx) =>
                          item === "ellipsis" ? (
                            <PaginationItem key={`ellipsis-${idx}`}>
                              <PaginationEllipsis className="text-text-300 dark:text-text-400" />
                            </PaginationItem>
                          ) : (
                            <PaginationItem key={item}>
                              <button
                                type="button"
                                aria-label={`Go to page ${item}`}
                                aria-current={item === safePage ? "page" : undefined}
                                onClick={() => {
                                  setCurrentPage(item);
                                  document.getElementById("sermons-list-top")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                }}
                                className={cn(
                                  buttonVariants({
                                    variant: item === safePage ? "outline" : "ghost",
                                    size: "icon",
                                  }),
                                  "min-w-10",
                                  item === safePage ? "border-church-gold-400 bg-church-gold-50 text-church-gold-500 dark:bg-church-gold-950/30 dark:text-church-gold-300" : "text-text-300 hover:bg-light-300 dark:text-text-400 dark:hover:bg-dark-500",
                                )}
                              >
                                {item}
                              </button>
                            </PaginationItem>
                          ),
                        )}

                        <PaginationItem>
                          <button
                            type="button"
                            aria-label="Go to next page"
                            disabled={safePage >= totalPages}
                            onClick={() => {
                              setCurrentPage((p) => Math.min(totalPages, p + 1));
                              document.getElementById("sermons-list-top")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }}
                            className={cn(
                              buttonVariants({
                                variant: "outline",
                                size: "default",
                              }),
                              "gap-1 pr-2.5",
                              "border-light-400 text-text hover:bg-light-300 dark:border-dark-500 dark:text-light dark:hover:bg-dark-500",
                              safePage >= totalPages && "pointer-events-none opacity-50",
                            )}
                          >
                            <span className="hidden sm:inline">Next</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sermons;
