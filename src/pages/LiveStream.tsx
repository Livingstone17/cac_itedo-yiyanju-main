import { useParams } from "react-router-dom";
import { Radio, PlayCircle, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useLiveStatus } from "@/contexts/LiveStatusContext";

const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

const WatchLivePage = () => {
  const { type } = useParams<{ type: string }>();
  const streamType = type || "video";

  const { isLive, viewerCount, liveVideoId } = useLiveStatus();

  const youtubeLiveUrl = liveVideoId ? `https://www.youtube.com/watch?v=${liveVideoId}` : `https://www.youtube.com/channel/${CHANNEL_ID}/live`;

  return (
    <section className="bg-light-200 dark:bg-dark-300 flex min-h-screen flex-col pt-16">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Our Services LIVE</h1>

        <p className="mt-2">{streamType === "video" ? "Join us via YouTube Live" : "Listen to our Live Audio Stream"}</p>

        {isLive && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600" />
            </span>
            <span className="font-semibold text-red-500">LIVE</span>
            {viewerCount && <span className="text-light/60 text-sm">{viewerCount} watching</span>}
          </div>
        )}
      </header>

      <section className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl">
          {streamType === "video" ? (
            isLive && liveVideoId ? (
              <div className="shadow-large aspect-video overflow-hidden rounded-lg">
                <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&rel=0`} title="YouTube Live Stream" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            ) : (
              <div className="border-light-400 bg-light shadow-large dark:border-dark-500 dark:bg-dark-400 flex aspect-video flex-col items-center justify-center rounded-lg border px-6 text-center">
                <div className="bg-church-gold-400/10 mb-4 rounded-full p-4">
                  <WifiOff className="text-church-gold-400 h-10 w-10" />
                </div>

                <h3 className="text-text dark:text-light mb-2 text-2xl font-bold">No Live Video Right Now</h3>

                <p className="text-text-300 dark:text-text-400 mb-6 max-w-xl">The YouTube live stream is currently unavailable. Please check back during service time, or open our YouTube page directly.</p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="bg-church-gold-400 text-church-blue-900 hover:bg-church-gold-300">
                    <a href={youtubeLiveUrl} target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Watch on YouTube
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="border-church-blue-700 text-church-blue-700 hover:bg-church-blue-700 hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark-300">
                    <a href="/listen/audio">
                      <Radio className="mr-2 h-5 w-5" />
                      Listen Audio Instead
                    </a>
                  </Button>
                </div>
              </div>
            )
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

      <section className="bg-light dark:bg-dark-400 py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-text dark:text-light mb-12 text-center text-3xl font-bold">
            What to Expect at <span className="text-church-gold-400">CAC ITEDO YIYANJU</span>
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                title: "Life-changing revelations from God's Word",
                desc: "God's Word sets free! As you engage the Word, you will experience lasting freedom and genuine growth in the Spirit.",
              },
              {
                title: "Mountain-moving Prayers",
                desc: "Word-compliant and Spirit-inspired prayers that melt every mountain of darkness.",
              },
              {
                title: "Deep fellowship and love",
                desc: "Fellowship with a loving family of believers who genuinely care for you.",
              },
              {
                title: "Empowerment for daily living",
                desc: "Receive practical teachings and spiritual empowerment to live victoriously every day.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="text-church-gold-400 text-2xl">✔</span>
                <div>
                  <h3 className="text-text dark:text-light text-xl font-semibold">{item.title}</h3>
                  <p className="text-text-300 dark:text-text-400 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default WatchLivePage;
