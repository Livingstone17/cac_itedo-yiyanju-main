

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Share2, Calendar, User } from "lucide-react";


const API_KEY = import.meta.env.API_KEY; // 🔑 Replace with your API key
const CHANNEL_ID = import.meta.env.CHANNEL_ID;   // 🔑 Replace with your channel ID

const Sermons = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const res = await fetch(
        //   `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=CHANNEL_ID&maxResults=6&order=date&type=video&key=API_KEY`
        // );
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`
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

  return (
    <section id="sermons" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* === Sermons Content === */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-8 text-church-text">
              Recent <span className="text-church-gold">Sermons</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {videos.map((video) => (
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

