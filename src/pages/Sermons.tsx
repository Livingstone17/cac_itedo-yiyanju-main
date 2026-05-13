

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Play, Calendar, User, Headphones } from "lucide-react";
// import Footer from "@/components/Footer";

// // const API_KEY = "AIzaSyCZuUrdohmncTM5rKWQZ53gQ2OdV0bp2VI"; // 🔑 Replace with your API key
// // const CHANNEL_ID = "UCJoOJLVIOHCVHAqnVZpp5Gw"; // 🔑 Replace with your channel ID
// const TELEGRAM_LINK = "https://t.me/cacitedoyiyanju"; // 🔗 Replace with your Telegram link

// const Sermons = () => {
//   const [videos, setVideos] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [nextPageToken, setNextPageToken] = useState<string | null>(null);
//   const [prevPageToken, setPrevPageToken] = useState<string | null>(null);
//   const [currentPageToken, setCurrentPageToken] = useState<string | null>(null);

//   const fetchVideos = async (pageToken: string | null = null) => {
//     setLoading(true);
//     try {
//       const url = new URL("https://www.googleapis.com/youtube/v3/search");
//       url.searchParams.append("part", "snippet");
//       url.searchParams.append("channelId", CHANNEL_ID);
//       url.searchParams.append("maxResults", "10");
//       url.searchParams.append("order", "date");
//       url.searchParams.append("type", "video");
//       url.searchParams.append("key", API_KEY);
//       if (pageToken) url.searchParams.append("pageToken", pageToken);

//       const res = await fetch(url.toString());
//       const data = await res.json();

//       setVideos(data.items || []);
//       setNextPageToken(data.nextPageToken || null);
//       setPrevPageToken(data.prevPageToken || null);
//     } catch (err) {
//       console.error("Error fetching YouTube videos:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVideos(currentPageToken);
//   }, [currentPageToken]);

//   const handleNext = () => {
//     if (nextPageToken) setCurrentPageToken(nextPageToken);
//   };

//   const handlePrev = () => {
//     if (prevPageToken) setCurrentPageToken(prevPageToken);
//   };

//   return (
//     <>
//       <section id="sermons" className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           {/* Page Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-church-text mb-4">
//               Our <span className="text-church-gold">Sermons</span>
//             </h1>
//             <p className="text-lg text-church-text-light max-w-2xl mx-auto">
//               Watch recent messages on YouTube or listen to audio sermons on our
//               Telegram channel.
//             </p>
//           </div>

//           {/* Audio Sermons Redirect */}
//           <div className="flex justify-center mb-12">
//             <a
//               href={TELEGRAM_LINK}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center"
//             >
//               <Button variant="hero" size="lg" className="flex items-center gap-2">
//                 <Headphones className="w-5 h-5" />
//                 Listen to Audio Sermons on Telegram
//               </Button>
//             </a>
//           </div>

//           {/* YouTube Video Grid */}
//           {loading ? (
//             <p className="text-center text-church-text-light">
//               Loading latest sermons...
//             </p>
//           ) : videos.length === 0 ? (
//             <p className="text-center text-church-text-light">
//               No sermons available right now. Please check back soon.
//             </p>
//           ) : (
//             <>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {videos.map((video) => (
//                   <Card
//                     key={video.id.videoId}
//                     className="overflow-hidden border-0 shadow-soft transition-transform transform hover:scale-[1.02]"
//                   >
//                     <div className="relative aspect-video">
//                       <img
//                         src={video.snippet.thumbnails.medium.url}
//                         alt={video.snippet.title}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition">
//                         <a
//                           href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <Button variant="hero" size="lg">
//                             <Play className="w-5 h-5 mr-2" /> Watch
//                           </Button>
//                         </a>
//                       </div>
//                     </div>

//                     <CardHeader>
//                       <Badge variant="secondary" className="text-xs mb-2">
//                         YouTube Sermon
//                       </Badge>
//                       <CardTitle className="line-clamp-2 text-church-text">
//                         {video.snippet.title}
//                       </CardTitle>
//                       <CardDescription className="flex items-center text-sm gap-3">
//                         <span className="flex items-center">
//                           <User className="w-4 h-4 mr-1" />
//                           {video.snippet.channelTitle}
//                         </span>
//                         <span className="flex items-center">
//                           <Calendar className="w-4 h-4 mr-1" />
//                           {new Date(
//                             video.snippet.publishedAt
//                           ).toLocaleDateString()}
//                         </span>
//                       </CardDescription>
//                     </CardHeader>

//                     <CardContent>
//                       <p className="text-sm text-church-text-light line-clamp-3">
//                         {video.snippet.description}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>

//               {/* Pagination Controls */}
//               <div className="flex justify-center gap-4 mt-10">
//                 <Button
//                   onClick={handlePrev}
//                   disabled={!prevPageToken}
//                   variant="outline"
//                 >
//                   Previous
//                 </Button>
//                 <Button
//                   onClick={handleNext}
//                   disabled={!nextPageToken}
//                   variant="outline"
//                 >
//                   Next
//                 </Button>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Sermons;

import { useEffect, useMemo, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Calendar, User, Search, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { apiUrl } from "@/lib/api";
import { getVisiblePageNumbers } from "@/lib/pagination";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

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

      const data = (await res.json()) as SermonsApiResponse;
      setAllVideos(data.videos ?? []);
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
      <section id="sermons" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
            <div className="md:col-span-2 lg:col-span-5">
              <h2 className="text-3xl font-bold mb-8 text-church-text">
                Recent <span className="text-church-gold">Sermons</span>
              </h2>

              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-church-text-light" />
                  <Input
                    type="text"
                    placeholder="Search sermons by title or date..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-2 border-church-blue/20 focus:border-church-blue"
                  />
                </div>
                {filteredVideos.length > 0 && (
                  <p className="text-sm text-church-text-light mt-2">
                    Found {filteredVideos.length} {filteredVideos.length === 1 ? "sermon" : "sermons"}
                  </p>
                )}
              </div>

              {error && !loading && (
                <div className="text-center py-12">
                  <p className="text-red-600 mb-2">⚠️ {error}</p>
                  <Button onClick={fetchAllVideos} variant="outline">
                    Retry
                  </Button>
                </div>
              )}

              {loading && (
                <div className="text-center py-12">
                  <p className="text-church-text-light">Loading sermons...</p>
                </div>
              )}

              {!loading && !error && filteredVideos.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-church-text-light mb-2">No sermons found</p>
                  <p className="text-sm text-church-text-light">
                    Try searching with different keywords or dates
                  </p>
                </div>
              )}

              {!loading && !error && filteredVideos.length > 0 && (
                <>
                  <div className="space-y-6" id="sermons-list-top">
                    <p className="text-sm text-church-text-light">
                      Showing <span className="font-medium text-church-text">{showingFrom}</span>
                      {"–"}
                      <span className="font-medium text-church-text">{showingTo}</span> of{" "}
                      <span className="font-medium text-church-text">{totalCount}</span>{" "}
                      {totalCount === 1 ? "sermon" : "sermons"}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {paginatedVideos.map((video) => (
                        <Card key={video.id.videoId} className="overflow-hidden border-0 shadow-soft">
                          <div className="relative aspect-video">
                            <img
                              src={video.snippet.thumbnails.medium.url}
                              alt={video.snippet.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-church-blue/20 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                              <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button variant="hero" size="lg">
                                  <Play className="w-5 h-5 mr-2" /> Watch
                                </Button>
                              </a>
                            </div>
                          </div>

                          <CardHeader>
                            <Badge variant="secondary" className="text-xs">
                              YouTube Sermon
                            </Badge>
                            <CardTitle className="line-clamp-2 text-church-text">
                              {video.snippet.title}
                            </CardTitle>
                            <CardDescription className="flex items-center text-sm gap-3">
                              <span className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {video.snippet.channelTitle}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(video.snippet.publishedAt).toLocaleDateString()}
                              </span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-church-text-light line-clamp-2">
                              {video.snippet.description}
                            </p>
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
                            className={cn(
                              buttonVariants({ variant: "outline", size: "default" }),
                              "gap-1 pl-2.5",
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
                            className={cn(
                              buttonVariants({ variant: "outline", size: "default" }),
                              "gap-1 pr-2.5",
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
