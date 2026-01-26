import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Download, Share2, Calendar, User, Search } from "lucide-react";


const API_KEY = import.meta.env.API_KEY;
const CHANNEL_ID = import.meta.env.CHANNEL_ID;

const Sermons = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const res = await fetch(
        //   `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=CHANNEL_ID&maxResults=6&order=date&type=video&key=API_KEY`
        // );
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items || []);
        console.log(data);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
      }
    };

    fetchVideos();
  }, []);

  // Filter videos based on search query
  const filteredVideos = videos.filter((video) => {
    const title = video.snippet.title.toLowerCase();
    const date = new Date(video.snippet.publishedAt).toLocaleDateString();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || date.includes(query);
  });

  return (
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

            {filteredVideos.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-church-text-light mb-2">No sermons found</p>
                <p className="text-sm text-church-text-light">Try searching with different keywords or dates</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {filteredVideos.map((video) => (
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
                      <Badge variant="secondary" className="text-xs">YouTube Sermon</Badge>
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
            )}
          </div>

          {/* === Sidebar === */}
          <aside className="hidden md:block">
            <div className="bg-white shadow-soft rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#live" className="text-church-blue hover:underline">Watch Live</a></li>
                <li><a href="#sermons" className="text-church-blue hover:underline">Latest Sermons</a></li>
                <li><a href="#events" className="text-church-blue hover:underline">Upcoming Events</a></li>
                <li><a href="#give" className="text-church-blue hover:underline">Give Online</a></li>
              </ul>
            </div>

            <div className="mt-8 bg-white shadow-soft rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
              <p className="text-sm text-church-text-light mb-4">
                Follow us on YouTube for more sermons and updates.
              </p>
              <a
                href="https://www.youtube.com/@cacitedoyiyanju"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="church-primary" className="w-full">
                  Visit YouTube
                </Button>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Sermons;

