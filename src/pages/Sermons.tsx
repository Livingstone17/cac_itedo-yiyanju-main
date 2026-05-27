import { useEffect, useMemo, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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

interface SermonsApiResponse {
  videos?: SermonVideo[];
  source?: string;
}

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

      // const data = (await res.json()) as SermonsApiResponse;
      const data = (await res.json());
      // Extract the array from the new nested structure
      const videosArray = data?.videos?.allVideos ?? [];
      // setAllVideos(data.videos ?? []);
      setAllVideos(videosArray);
    } catch (err: unknown) {
      console.error("Error fetching sermons:", err);
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
    const query = searchQuery.toLowerCase().trim();
    if (!query) return allVideos;
    return allVideos.filter((video) => {
      const title = video.snippet.title.toLowerCase();
      const date = new Date(video.snippet.publishedAt).toLocaleDateString();
      return title.includes(query) || date.toLowerCase().includes(query);
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
      <section id="sermons" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            <div className="md:col-span-2 lg:col-span-5">
              <h2 className="mb-8 text-3xl font-bold text-church-text">
                Recent <span className="text-church-gold">Sermons</span>
              </h2>

              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-church-text-light" />
                  <Input type="text" placeholder="Search sermons by title or date..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="rounded-md border-church-blue/20 py-2 pl-12 outline-none focus:border-church-blue" />
                </div>
                {filteredVideos.length > 0 && (
                  <p className="mt-2 text-sm text-church-text-light">
                    Found {filteredVideos.length} {filteredVideos.length === 1 ? "sermon" : "sermons"}
                  </p>
                )}
              </div>

              {error && !loading && (
                <div className="flex flex-col items-center justify-center rounded-xl border border-red-200/50 bg-gradient-to-b from-red-50/50 to-background px-6 py-16 dark:border-red-900/30 dark:from-red-950/20">
                  {/* Error Icon */}
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-red-500 dark:text-red-400">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                    {/* Decorative pulse ring */}
                    <div className="absolute inset-0 animate-ping rounded-full bg-red-200/40 dark:bg-red-800/20" style={{ animationDuration: "2s" }} />
                  </div>

                  {/* Error Title */}
                  <h3 className="mb-2 text-xl font-bold text-church-text">Unable to Load Sermons</h3>

                  {/* Error Message */}
                  <p className="mb-2 max-w-md text-center text-sm leading-relaxed text-church-text-light">{error}</p>

                  {/* Helpful Suggestions */}
                  <div className="mb-8 flex flex-col items-center gap-1">
                    <p className="text-xs text-church-text-light/70">This could be due to:</p>
                    <ul className="mt-1 space-y-1 text-xs text-church-text-light/70">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-church-text-light/50" />A temporary network issue
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-church-text-light/50" />
                        Server maintenance in progress
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-church-text-light/50" />
                        Your internet connection being unstable
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button onClick={fetchAllVideos} variant="default" className="gap-2 bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600">
                      <RefreshCcw size={24} strokeWidth={2} />
                      Try Again
                    </Button>

                    <a href="https://www.youtube.com/@YourChannel" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        <Play className="h-4 w-4" />
                        Watch on YouTube
                      </Button>
                    </a>
                  </div>
                </div>
              )}

              {loading && (
                <div className="py-12 text-center">
                  <p className="text-church-text-light">Loading sermons...</p>
                </div>
              )}

              {!loading && !error && filteredVideos.length === 0 && (
                <div className="py-12 text-center">
                  <p className="mb-2 text-church-text-light">No sermons found</p>
                  <p className="text-sm text-church-text-light">Try searching with different keywords or dates</p>
                </div>
              )}

              {!loading && !error && filteredVideos.length > 0 && (
                <>
                  <div className="space-y-6" id="sermons-list-top">
                    <p className="text-sm text-church-text-light">
                      Showing <span className="font-medium text-church-text">{showingFrom}</span>
                      {"–"}
                      <span className="font-medium text-church-text">{showingTo}</span> of <span className="font-medium text-church-text">{totalCount}</span> {totalCount === 1 ? "sermon" : "sermons"}
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {paginatedVideos.map((video) => (
                        <Card key={video.id.videoId} className="overflow-hidden border-0 shadow-soft">
                          <div className="relative aspect-video">
                            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="h-full w-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-church-blue/20 opacity-0 transition hover:opacity-100">
                              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                                <Button variant="hero" size="lg">
                                  <Play className="mr-2 h-5 w-5" /> Watch
                                </Button>
                              </a>
                            </div>
                          </div>

                          <CardHeader>
                            <Badge variant="secondary" className="text-xs">
                              YouTube Sermon
                            </Badge>
                            <CardTitle className="line-clamp-2 text-church-text">{video.snippet.title}</CardTitle>
                            <CardDescription className="flex items-center gap-3 text-sm">
                              <span className="flex items-center">
                                <User className="mr-1 h-4 w-4" />
                                {video.snippet.channelTitle}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                {new Date(video.snippet.publishedAt).toLocaleDateString()}
                              </span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="line-clamp-2 text-sm text-church-text-light">{video.snippet.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

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
                            className={cn(buttonVariants({ variant: "outline", size: "default" }), "gap-1 pl-2.5", safePage <= 1 && "pointer-events-none opacity-50")}
                          >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="hidden sm:inline">Previous</span>
                          </button>
                        </PaginationItem>

                        {pageItems.map((item, idx) =>
                          item === "ellipsis" ? (
                            <PaginationItem key={`ellipsis-${idx}`}>
                              <PaginationEllipsis />
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
                            className={cn(buttonVariants({ variant: "outline", size: "default" }), "gap-1 pr-2.5", safePage >= totalPages && "pointer-events-none opacity-50")}
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
