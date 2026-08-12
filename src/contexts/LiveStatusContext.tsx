// import React, { createContext, useContext, useEffect, useState } from "react";

// interface LiveStatusContextType {
//   isLive: boolean;
//   viewerCount: string | null;
//   liveVideoId: string | null;
// }

// // const LiveStatusContext = createContext<LiveStatusContextType>({
// //   isLive: false,
// //   viewerCount: null,
// //   liveVideoId: null,
// // });
// const LiveStatusContext = createContext<LiveStatusContextType | undefined>(
//   undefined
// );

// const API_KEY = import.meta.env.VITE_API_KEY;
// const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

// export const LiveStatusProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [isLive, setIsLive] = useState(false);
//   const [viewerCount, setViewerCount] = useState<string | null>(null);
//   const [liveVideoId, setLiveVideoId] = useState<string | null>(null);

//   useEffect(() => {
//     const checkLiveStatus = async () => {
//       try {
//         const searchRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
//         );

//         const searchData = await searchRes.json();

//         if (searchData.items?.length > 0) {
//           setIsLive(true);

//           const videoId = searchData.items[0].id.videoId;
//           setLiveVideoId(videoId);

//           const videoRes = await fetch(
//             `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}&key=${API_KEY}`
//           );

//           const videoData = await videoRes.json();

//           setViewerCount(
//             videoData.items?.[0]?.liveStreamingDetails?.concurrentViewers ??
//             null
//           );
//         } else {
//           setIsLive(false);
//           setViewerCount(null);
//           setLiveVideoId(null);
//         }
//       } catch (error) {
//         console.error("Failed to fetch live status:", error);
//       }
//     };

//     checkLiveStatus();

//     const interval = setInterval(checkLiveStatus, 60000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <LiveStatusContext.Provider
//       value={{
//         isLive,
//         viewerCount,
//         liveVideoId,
//       }}
//     >
//       {children}
//     </LiveStatusContext.Provider>
//   );
// };

// // export const useLiveStatus = () => useContext(LiveStatusContext);
// export const useLiveStatus = () => {
//   const context = useContext(LiveStatusContext);

//   if (!context) {
//     throw new Error(
//       "useLiveStatus must be used inside LiveStatusProvider"
//     );
//   }

//   return context;
// };


import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface LiveStatusContextType {
  isLive: boolean;
  viewerCount: string | null;
  liveVideoId: string | null;
}

interface LiveStatusResponse {
  isLive: boolean;
  viewerCount: string | null;
  liveVideoId: string | null;
  source?: string;
  cachedAt?: number;
  warning?: string;
}

const LiveStatusContext = createContext<
  LiveStatusContextType | undefined
>(undefined);

// IMPORTANT:
// Change this to your Render backend URL.
//
// Example:
// https://your-church-api.onrender.com
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Check every 5 minutes from the browser.
// The backend itself has a 2-minute cache.
const POLL_INTERVAL = 5 * 60 * 1000;

export const LiveStatusProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState<string | null>(
    null
  );
  const [liveVideoId, setLiveVideoId] = useState<string | null>(
    null
  );

  // Prevent duplicate frontend requests
  const isFetching = useRef(false);

  useEffect(() => {
    let isMounted = true;

    const checkLiveStatus = async () => {
      // Prevent overlapping requests
      if (isFetching.current) {
        console.log(
          "Live status request already in progress"
        );
        return;
      }

      isFetching.current = true;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/live-status`
        );

        if (!response.ok) {
          throw new Error(
            `Live status request failed: ${response.status}`
          );
        }

        const data: LiveStatusResponse =
          await response.json();

        if (!isMounted) return;

        setIsLive(data.isLive);
        setViewerCount(data.viewerCount);
        setLiveVideoId(data.liveVideoId);

        console.log(
          `📺 Live status: ${data.isLive ? "LIVE" : "OFFLINE"
          } (${data.source})`
        );
      } catch (error) {
        console.error(
          "Failed to fetch live status:",
          error
        );

        // Don't reset existing state on temporary errors.
        // This prevents the UI from flickering offline.
      } finally {
        isFetching.current = false;
      }
    };

    // Initial check
    checkLiveStatus();

    // Check every 5 minutes
    const interval = setInterval(
      checkLiveStatus,
      POLL_INTERVAL
    );

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
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

export const useLiveStatus = () => {
  const context = useContext(LiveStatusContext);

  if (!context) {
    throw new Error(
      "useLiveStatus must be used inside LiveStatusProvider"
    );
  }

  return context;
};

