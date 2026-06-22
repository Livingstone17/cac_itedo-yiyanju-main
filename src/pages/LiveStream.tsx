// // import React from "react";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Footer from "@/components/Footer";

// const API_KEY = import.meta.env.VITE_API_KEY;
// const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

// const WatchLivePage = () => {
//   const { type } = useParams<{ type: string }>();
//   const streamType = type || "video"; // fallback default is video
//   const [isLive, setIsLive] = useState(false);
//   const [viewerCount, setViewerCount] = useState(null);

//   useEffect(() => {
//     const checkLiveStatus = async () => {
//       try {
//         // 1. Check if channel is live
//         const searchRes = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`);
//         const searchData = await searchRes.json();
//         console.log(JSON.stringify(searchRes) + "this is this")

//         if (searchData.items && searchData.items.length > 0) {
//           // ✅ Channel is live
//           setIsLive(true);
//           const liveVideoId = searchData.items[0].id.videoId;

//           // 2. Get live video details (viewer count etc.)
//           const videoRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${liveVideoId}&key=${API_KEY}`);
//           const videoData = await videoRes.json();

//           if (videoData.items && videoData.items.length > 0 && videoData.items[0].liveStreamingDetails) {
//             setViewerCount(videoData.items[0].liveStreamingDetails.concurrentViewers);
//           }
//         } else {
//           // ❌ Not live
//           setIsLive(false);
//           setViewerCount(null);
//         }
//       } catch (error) {
//         console.error("Error checking YouTube live status:", error);
//       }
//     };

//     checkLiveStatus();

//     // 🔄 Check every 60 seconds
//     const interval = setInterval(checkLiveStatus, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="flex min-h-screen flex-col bg-background pt-16">
//       <header className="bg-black py-6 text-center text-white">
//         <h1 className="text-3xl font-bold md:text-4xl">Our Services LIVE</h1>
//         <p className="mt-2 text-gray-300">{streamType === "video" ? "Join us via YouTube Live" : "Listen to our Live Audio Stream"}</p>
//       </header>

//       {/* Live Section */}
//       <section className="flex items-center justify-center px-4 py-10">
//         <div className="w-full max-w-4xl">
//           {streamType === "video" ? (
//             <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
//               {/* <iframe
//                 src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=0"
//                 title="YouTube Live Stream"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full"
//               ></iframe> */}
//               <iframe className="h-full w-full" src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1`} title="YouTube Live Stream" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
//             </div>
//           ) : (
//             <div className="flex items-center justify-center">
//               {/* <h2 className="text-xl font-semibold mb-4">Listen Live</h2> */}

//               <iframe
//                 src="https://app.waystream.io/embed/cacitedo-yiyanju?orientation=portrait"
//                 style={{
//                   border: "0px none",
//                   borderRadius: "12px",
//                   height: "570px",
//                   width: "400px",
//                 }}
//                 name="embed-player"
//                 title="embed-player"
//                 scrolling="no"
//                 frameBorder={0}
//                 marginHeight={0}
//                 marginWidth={0}
//                 allowFullScreen
//               />

//               {/* <audio
//                 controls
//                 autoPlay
//                 className="w-full"
//                 src="https://your-waystream-url/stream"
//               >
//                 Your browser does not support the audio element.
//               </audio> */}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* What to Expect Section */}
//       <section className="bg-background py-16">
//         <div className="container mx-auto max-w-6xl px-6">
//           <h2 className="mb-12 text-center text-3xl font-bold text-church-text-light">What to Expect at CAC ITEDO YIYANJU</h2>

//           <div className="grid gap-10 md:grid-cols-2">
//             {/* Item 1 */}
//             <div className="flex items-start space-x-4">
//               <span className="text-2xl text-orange-500">✔</span>
//               <div>
//                 <h3 className="text-xl font-semibold text-church-text-light">Life-changing revelations from God&apos;s Word</h3>
//                 <p className="mt-2 text-gray-400">God’s Word sets free! As you engage the Word, you will experience lasting freedom and genuine growth in the Spirit.</p>
//               </div>
//             </div>

//             {/* Item 2 */}
//             <div className="flex items-start space-x-4">
//               <span className="text-2xl text-orange-500">✔</span>
//               <div>
//                 <h3 className="text-xl font-semibold text-church-text-light">Mountain-moving Prayers</h3>
//                 <p className="mt-2 text-gray-400">Word-compliant and Spirit-inspired prayers that melts all mountains of darkness. Get ready to triumph over limitations as we engage God in Prayers!</p>
//               </div>
//             </div>

//             {/* Item 3 */}
//             <div className="flex items-start space-x-4">
//               <span className="text-2xl text-orange-500">✔</span>
//               <div>
//                 <h3 className="text-xl font-semibold text-church-text-light">Deep fellowship and love</h3>
//                 <p className="mt-2 text-gray-400">Get soaked in God’s unconditional love as you fellowship with a family of believers who care so much about you!</p>
//               </div>
//             </div>

//             {/* Item 4 (Optional extra if you want balance) */}
//             <div className="flex items-start space-x-4">
//               <span className="text-2xl text-orange-500">✔</span>
//               <div>
//                 <h3 className="text-xl font-semibold text-church-text-light">Empowerment for daily living</h3>
//                 <p className="mt-2 text-gray-400">Receive practical teachings and spiritual empowerment to live victoriously in every area of life.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       {/* <footer className="mt-auto bg-black text-gray-300 py-8">
//         <div className="container mx-auto px-6 text-center space-y-4">
//           <p>Connect with us:</p>
//           <div className="flex justify-center space-x-6">
//             <a href="https://facebook.com/yourchurch" target="_blank" rel="noreferrer">
//               Facebook
//             </a>
//             <a href="https://instagram.com/yourchurch" target="_blank" rel="noreferrer">
//               Instagram
//             </a>
//             <a href="https://youtube.com/yourchurch" target="_blank" rel="noreferrer">
//               YouTube
//             </a>
//           </div>
//           <p className="text-sm mt-4">
//             &copy; {new Date().getFullYear()} CAC Itedo Yiyanju. All rights reserved.
//           </p>
//         </div>
//       </footer> */}
//       <Footer />
//     </section>
//   );
// };

// export default WatchLivePage;


import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
// import { useLiveStatus } from "@/hooks/useLiveStatus";
import { useLiveStatus } from "@/contexts/LiveStatusContext";


const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

const WatchLivePage = () => {
  const { type } = useParams<{ type: string }>();
  const streamType = type || "video";

  const { isLive, viewerCount, liveVideoId } = useLiveStatus();

  return (
    <section className="flex min-h-screen flex-col bg-background pt-16">
      {/* Header */}
      <header className="bg-black py-6 text-center text-white">
        <h1 className="text-3xl font-bold md:text-4xl">
          Our Services LIVE
        </h1>

        <p className="mt-2 text-gray-300">
          {streamType === "video"
            ? "Join us via YouTube Live"
            : "Listen to our Live Audio Stream"}
        </p>

        {isLive && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600"></span>
            </span>

            <span className="font-semibold text-red-500">
              LIVE
            </span>

            {viewerCount && (
              <span className="text-sm text-gray-300">
                {viewerCount} watching
              </span>
            )}
          </div>
        )}
      </header>

      {/* Live Stream Section */}
      <section className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl">
          {streamType === "video" ? (
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1`}
                title="YouTube Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <iframe
                src="https://app.waystream.io/embed/cacitedo-yiyanju?orientation=portrait"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  height: "570px",
                  width: "400px",
                }}
                title="embed-player"
                scrolling="no"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                allowFullScreen
              />
            </div>
          )}
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-background py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-church-text-light">
            What to Expect at CAC ITEDO YIYANJU
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-orange-500">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-church-text-light">
                  Life-changing revelations from God's Word
                </h3>
                <p className="mt-2 text-gray-400">
                  God’s Word sets free! As you engage the Word, you will experience lasting freedom and genuine growth in the Spirit.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl text-orange-500">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-church-text-light">
                  Mountain-moving Prayers
                </h3>
                <p className="mt-2 text-gray-400">
                  Word-compliant and Spirit-inspired prayers that melt every mountain of darkness.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl text-orange-500">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-church-text-light">
                  Deep fellowship and love
                </h3>
                <p className="mt-2 text-gray-400">
                  Fellowship with a loving family of believers who genuinely care for you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl text-orange-500">✔</span>
              <div>
                <h3 className="text-xl font-semibold text-church-text-light">
                  Empowerment for daily living
                </h3>
                <p className="mt-2 text-gray-400">
                  Receive practical teachings and spiritual empowerment to live victoriously every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default WatchLivePage;