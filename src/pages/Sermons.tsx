

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

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Calendar, User, Search } from "lucide-react";
import Footer from "@/components/Footer";
import { apiUrl } from "@/lib/api";

const Sermons = () => {
  const [allVideos, setAllVideos] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;

  const fetchAllVideos = async () => {
    setLoading(true);
    setError(null);
    try {
      // Calls your backend (proxied via Vite during dev)
      const res = await fetch(apiUrl('/api/sermons'));

      if (!res.ok) {
        throw new Error(`Failed to load sermons: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setAllVideos(data.videos || []);
      console.log(`✅ Loaded ${data.videos?.length || 0} sermons (source: ${data.source || 'unknown'})`);
    } catch (err: any) {
      console.error("Error fetching sermons:", err);
      setError(err.message || "Unable to load sermons. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllVideos();
  }, []);

  const handleNext = () => {
    const maxPage = Math.ceil(filteredVideos.length / itemsPerPage) - 1;
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Filter videos based on search query
  const filteredVideos = allVideos.filter((video) => {
    const title = video.snippet.title.toLowerCase();
    const date = new Date(video.snippet.publishedAt).toLocaleDateString();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || date.includes(query);
  });

  // Get current page videos
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);

  return (
    <>
      <section id="sermons" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* === Sermons Content === */}
            <div className="md:col-span-2 lg:col-span-5">
              <h2 className="text-3xl font-bold mb-8 text-church-text">
                Recent <span className="text-church-gold">Sermons</span>
              </h2>

              {/* Search Box */}
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

              {/* Error State */}
              {error && !loading && (
                <div className="text-center py-12">
                  <p className="text-red-600 mb-2">⚠️ {error}</p>
                  <Button onClick={fetchAllVideos} variant="outline">
                    Retry
                  </Button>
                </div>
              )}

              {/* Loading State */}
              {loading && (
                <div className="text-center py-12">
                  <p className="text-church-text-light">Loading sermons...</p>
                </div>
              )}

              {/* No Results */}
              {!loading && !error && filteredVideos.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-church-text-light mb-2">No sermons found</p>
                  <p className="text-sm text-church-text-light">
                    Try searching with different keywords or dates
                  </p>
                </div>
              )}

              {/* Sermons Grid */}
              {!loading && !error && filteredVideos.length > 0 && (
                <>
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

                  {/* Pagination Controls */}
                  <div className="flex justify-center gap-4 mt-10">
                    <Button
                      onClick={handlePrev}
                      disabled={currentPage === 0}
                      variant="outline"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={currentPage >= Math.ceil(filteredVideos.length / itemsPerPage) - 1}
                      variant="outline"
                    >
                      Next
                    </Button>
                  </div>
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