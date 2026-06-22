import React, { createContext, useContext, useEffect, useState } from "react";

interface LiveStatusContextType {
  isLive: boolean;
  viewerCount: string | null;
  liveVideoId: string | null;
}

// const LiveStatusContext = createContext<LiveStatusContextType>({
//   isLive: false,
//   viewerCount: null,
//   liveVideoId: null,
// });
const LiveStatusContext = createContext<LiveStatusContextType | undefined>(
  undefined
);

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

export const LiveStatusProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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

        if (searchData.items?.length > 0) {
          setIsLive(true);

          const videoId = searchData.items[0].id.videoId;
          setLiveVideoId(videoId);

          const videoRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${API_KEY}`
          );

          const videoData = await videoRes.json();

          setViewerCount(
            videoData.items?.[0]?.liveStreamingDetails?.concurrentViewers ??
            null
          );
        } else {
          setIsLive(false);
          setViewerCount(null);
          setLiveVideoId(null);
        }
      } catch (error) {
        console.error("Failed to fetch live status:", error);
      }
    };

    checkLiveStatus();

    const interval = setInterval(checkLiveStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LiveStatusContext.Provider
      value={{
        isLive,
        viewerCount,
        liveVideoId,
      }}
    >
      {children}
    </LiveStatusContext.Provider>
  );
};

// export const useLiveStatus = () => useContext(LiveStatusContext);
export const useLiveStatus = () => {
  const context = useContext(LiveStatusContext);

  if (!context) {
    throw new Error(
      "useLiveStatus must be used inside LiveStatusProvider"
    );
  }

  return context;
};