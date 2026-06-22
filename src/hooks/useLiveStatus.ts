import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

export function useLiveStatus() {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState<string | null>(null);
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
        );

        const searchData = await searchRes.json();

        if (searchData.items && searchData.items.length > 0) {
          setIsLive(true);

          const videoId = searchData.items[0].id.videoId;
          setLiveVideoId(videoId);

          const videoRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${API_KEY}`
          );

          const videoData = await videoRes.json();

          if (
            videoData.items &&
            videoData.items.length > 0 &&
            videoData.items[0].liveStreamingDetails
          ) {
            setViewerCount(
              videoData.items[0].liveStreamingDetails.concurrentViewers ?? null
            );
          }
        } else {
          setIsLive(false);
          setViewerCount(null);
          setLiveVideoId(null);
        }
      } catch (error) {
        console.error("Error checking YouTube live status:", error);
      }
    };

    checkLiveStatus();

    const interval = setInterval(checkLiveStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return {
    isLive,
    viewerCount,
    liveVideoId,
  };
}