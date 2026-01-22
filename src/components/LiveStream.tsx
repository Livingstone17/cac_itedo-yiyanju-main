// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Play, Users, Clock, Calendar } from "lucide-react";
// import worshipImage from "@/assets/worship-band.jpg";

// const LiveStream = () => {
//   const upcomingServices = [
//     {
//       title: "Sunday Morning Worship",
//       time: "7:00 AM",
//       date: "This Sunday",
//       description: "Join us for an uplifting time of worship, prayer, and biblical teaching.",
//     },
//     {
//       title: "Tuesday Bible Study",
//       time: "5:00 PM",
//       date: "Every Tuesday",
//       description: "Come together to learn at the feet of the master.",
//     },
//     {
//       title: "Prayer Meeting",
//       time: "10:00 AM",
//       date: "Thursday",
//       description: "Prophetic prayers to bring us into God's very best for our lives",
//     },
//   ];

//   return (
//     <section id="live" className="py-20 bg-gradient-subtle">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-church-text mb-6">
//             Join Us <span className="text-church-gold">Live</span>
//           </h2>
//           <p className="text-xl text-church-text-light max-w-2xl mx-auto">
//             Experience our services from anywhere in the world. Connect with our community through live streaming.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Live Stream Player */}
//           <div className="order-2 lg:order-1">
//             <Card className="overflow-hidden shadow-large border-0">
//               <div className="relative aspect-video bg-gradient-hero">
//                 <img
//                   src={worshipImage}
//                   alt="Live Worship Service"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-church-blue/20 flex items-center justify-center">
//                   <Button variant="hero" size="lg" className="shadow-large">
//                     <Play className="w-6 h-6 mr-2" />
//                     Join Live Service
//                   </Button>
//                 </div>
//                 <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
//                   <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
//                   LIVE
//                 </div>
//                 <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
//                   <Users className="w-4 h-4 mr-1" />
//                   247 watching
//                 </div>
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="text-2xl font-bold text-church-text mb-2">Sunday Morning Worship</h3>
//                 <p className="text-church-text-light mb-4">
//                   "Faith, Hope, and Love: Living Out God's Character"
//                 </p>
//                 <div className="flex items-center text-church-text-light">
//                   <Clock className="w-4 h-4 mr-2" />
//                   Started at 10:00 AM
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Upcoming Services */}
//           <div className="order-1 lg:order-2">
//             <h3 className="text-2xl font-bold text-church-text mb-8">Upcoming Services</h3>
//             <div className="space-y-6">
//               {upcomingServices.map((service, index) => (
//                 <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-church-blue/10">
//                   <CardHeader className="pb-3">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <CardTitle className="text-church-text text-lg">{service.title}</CardTitle>
//                         <CardDescription className="flex items-center mt-2">
//                           <Calendar className="w-4 h-4 mr-2" />
//                           {service.date} at {service.time}
//                         </CardDescription>
//                       </div>
//                       <Button variant="ghost" size="sm" className="text-church-gold hover:text-church-gold-light">
//                         <Clock className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pt-0">
//                     <p className="text-church-text-light text-sm">{service.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
            
//             <div className="mt-8">
//               <Button variant="church-primary" className="w-full">
//                 View Full Schedule
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LiveStream;




//TODO
//I will uncomment the code below when we get the persistent livestreamkey


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Clock } from "lucide-react";
import worshipImage from "@/assets/worship-band.jpg";

const API_KEY = "AIzaSyCZuUrdohmncTM5rKWQZ53gQ2OdV0bp2VI"; // 🔑 Replace with your API key
const CHANNEL_ID = "UCJoOJLVIOHCVHAqnVZpp5Gw";   // 🔑 Replace with your channel ID

const LiveStream = () => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(null);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        // 1. Check if channel is live
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );
        const searchData = await searchRes.json();

        if (searchData.items && searchData.items.length > 0) {
          // ✅ Channel is live
          setIsLive(true);
          const liveVideoId = searchData.items[0].id.videoId;

          // 2. Get live video details (viewer count etc.)
          const videoRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${liveVideoId}&key=${API_KEY}`
          );
          const videoData = await videoRes.json();

          if (
            videoData.items &&
            videoData.items.length > 0 &&
            videoData.items[0].liveStreamingDetails
          ) {
            setViewerCount(videoData.items[0].liveStreamingDetails.concurrentViewers);
          }
        } else {
          // ❌ Not live
          setIsLive(false);
          setViewerCount(null);
        }
      } catch (error) {
        console.error("Error checking YouTube live status:", error);
      }
    };

    checkLiveStatus();

    // 🔄 Check every 60 seconds
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden shadow-large border-0" id="live">
      <div className="relative aspect-video bg-gradient-hero">
        {isLive ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1`}
            title="YouTube Live Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          // <div className="container mx-auto px-4">
          <img
            src={worshipImage}
            alt="Live Worship Service"
            className="w-full h-full object-cover"
          />
          // </div>
        )}

        <div className="absolute inset-0 bg-church-blue/20 flex items-center justify-center">
          <Button variant="hero" size="lg" className="shadow-large">
            <Play className="w-6 h-6 mr-2" />
            {isLive ? "Join Live Service" : "Service Offline"}
          </Button>
        </div>

        {isLive && (
          <>
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              LIVE
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {viewerCount ? `${viewerCount} watching` : "Loading..."}
            </div>
          </>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-church-text mb-2">
          Sunday Morning Worship
        </h3>
        <p className="text-church-text-light mb-4">
          "Faith, Hope, and Love: Living Out God's Character"
        </p>
        <div className="flex items-center text-church-text-light">
          <Clock className="w-4 h-4 mr-2" />
          {isLive ? "Started at 10:00 AM" : "Next live coming soon"}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveStream;
