// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Play, Download, Share2, Calendar, User } from "lucide-react";
// import messageImage from "@/assets/message1.png";

// const Sermons = () => {
//   const sermons = [
//     {
//       title: "Walking in Faith",
//       speaker: "Pastor John Smith",
//       date: "Dec 15, 2024",
//       series: "Living Faith",
//       duration: "42 min",
//       description: "Discover what it means to live by faith and not by sight in this powerful message about trusting God.",
//       // thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center",
//       thumbnail: messageImage
//     },
//     {
//       title: "The Power of Prayer",
//       speaker: "Pastor Sarah Johnson",
//       date: "Dec 8, 2024",
//       series: "Spiritual Disciplines",
//       duration: "38 min",
//       description: "Learn how prayer transforms our hearts and connects us deeply with God's will for our lives.",
//       thumbnail: "https://images.unsplash.com/photo-1544654803-b69140b285a1?w=400&h=200&fit=crop&crop=center",
//     },
//     {
//       title: "Love in Action",
//       speaker: "Pastor John Smith",
//       date: "Dec 1, 2024",
//       series: "Living Faith",
//       duration: "45 min",
//       description: "Exploring how God's love should flow through us to touch the lives of others in our community.",
//       thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=200&fit=crop&crop=center",
//     },
//     {
//       title: "Finding Peace in Chaos",
//       speaker: "Pastor Sarah Johnson",
//       date: "Nov 24, 2024",
//       series: "Inner Peace",
//       duration: "41 min",
//       description: "Discover God's peace that surpasses understanding, even in the midst of life's storms.",
//       thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center",
//     },
//   ];

//   const seriesList = [
//     { name: "Living Faith", count: 8, color: "bg-church-gold" },
//     { name: "Spiritual Disciplines", count: 6, color: "bg-church-blue" },
//     { name: "Inner Peace", count: 4, color: "bg-accent" },
//     { name: "Community Life", count: 5, color: "bg-secondary" },
//   ];

//   return (
//     <section id="sermons" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
//             Recent <span className="text-church-gold">Sermons</span>
//           </h2>
//           <p className="text-xl text-church-text-light max-w-2xl mx-auto">
//             Grow in your faith with our collection of inspiring messages and biblical teachings.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Sermon Series */}
//           <div className="lg:col-span-1">
//             <h3 className="text-2xl font-bold text-church-text mb-6">Sermon Series</h3>
//             <div className="space-y-4">
//               {seriesList.map((series, index) => (
//                 <Card key={index} className="cursor-pointer hover:shadow-medium transition-all duration-300 border-church-blue/10">
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-3">
//                         <div className={`w-3 h-3 rounded-full ${series.color}`}></div>
//                         <div>
//                           <h4 className="font-semibold text-church-text">{series.name}</h4>
//                           <p className="text-sm text-church-text-light">{series.count} messages</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           {/* Sermons Grid */}
//           <div className="lg:col-span-3">
//             <div className="grid md:grid-cols-2 gap-6">
//               {sermons.map((sermon, index) => (
//                 <Card key={index} className="overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 border-0">
//                   <div className="relative aspect-video">
//                     <img
//                       src={sermon.thumbnail}
//                       alt={sermon.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-church-blue/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <Button variant="hero" size="lg">
//                         <Play className="w-5 h-5 mr-2" />
//                         Play
//                       </Button>
//                     </div>
//                     <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
//                       {sermon.duration}
//                     </div>
//                   </div>
                  
//                   <CardHeader className="pb-3">
//                     <div className="flex items-start justify-between mb-2">
//                       <Badge variant="secondary" className="text-xs">
//                         {sermon.series}
//                       </Badge>
//                       <div className="flex space-x-1">
//                         <Button variant="ghost" size="icon" className="h-8 w-8">
//                           <Share2 className="w-4 h-4" />
//                         </Button>
//                         <Button variant="ghost" size="icon" className="h-8 w-8">
//                           <Download className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                     <CardTitle className="text-church-text line-clamp-2">{sermon.title}</CardTitle>
//                     <CardDescription className="flex items-center space-x-4 text-sm">
//                       <span className="flex items-center">
//                         <User className="w-4 h-4 mr-1" />
//                         {sermon.speaker}
//                       </span>
//                       <span className="flex items-center">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         {sermon.date}
//                       </span>
//                     </CardDescription>
//                   </CardHeader>
                  
//                   <CardContent className="pt-0">
//                     <p className="text-church-text-light text-sm line-clamp-2">{sermon.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
            
//             <div className="text-center mt-12">
//               <Button variant="church-primary" size="lg">
//                 View All Sermons
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sermons;

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Share2, Calendar, User } from "lucide-react";

const API_KEY = `AIzaSyCZuUrdohmncTM5rKWQZ53gQ2OdV0bp2VI`; // 🔑 Replace with your API key
const CHANNEL_ID = "UCJoOJLVIOHCVHAqnVZpp5Gw";   // 🔑 Replace with your channel ID

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

