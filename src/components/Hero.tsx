// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Play, Calendar } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import heroImage1 from "@/assets/church.png";
// import heroImage2 from "@/assets/church1.jpg";
// import heroImage4 from "@/assets/church3.jpg";
// import heroImage5 from "@/assets/church4.jpg";
// import heroImage6 from "@/assets/church7.jpg";
// import heroImage7 from "@/assets/church6.jpg";
// import heroImage8 from "@/assets/church8.jpg";

// gsap.registerPlugin(ScrollTrigger);

// const openMaps = () => {
//   const lat = 6.671838;
//   const lng = 3.251764;

//   const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
//   const isAndroid = /Android/.test(navigator.userAgent);

//   if (isIOS) {
//     window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
//   } else if (isAndroid) {
//     window.open(`geo:${lat},${lng}?q=${lat},${lng}(Church)`, "_blank");
//   } else {
//     window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
//   }
// };

// const goToLivestream = () => {
//   window.location.href = "/listen/video";
// };

// const phrases = ["Welcome to Bethel, the House of Bread, where heaven meets earth.", "A place of Worship, Love, Revelatory Teachings and Prayers.", "Join us as we learn Christ, experience transformation and manifest the GOD Life here on earth."];

// const useTypewriter = (texts: string[], typingSpeed = 75, deletingSpeed = 30, pauseTime = 2000) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     if (texts.length === 0) return;
//     const currentText = texts[textIndex];

//     const timeout = setTimeout(
//       () => {
//         if (!isDeleting) {
//           setDisplayedText(currentText.substring(0, charIndex + 1));
//           setCharIndex((prev) => prev + 1);
//           if (charIndex + 1 === currentText.length) {
//             setTimeout(() => setIsDeleting(true), pauseTime);
//           }
//         } else {
//           setDisplayedText(currentText.substring(0, charIndex - 1));
//           setCharIndex((prev) => prev - 1);
//           if (charIndex - 1 === 0) {
//             setIsDeleting(false);
//             setTextIndex((prev) => (prev + 1) % texts.length);
//           }
//         }
//       },
//       isDeleting ? deletingSpeed : typingSpeed,
//     );

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

//   return displayedText;
// };

// const Hero = () => {
//   const heroRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   const displayedText = useTypewriter(phrases);

//   useEffect(() => {
//     gsap.from(".hero-title", {
//       opacity: 0,
//       y: 40,
//       duration: 1,
//       delay: 0.2,
//     });

//     gsap.from(".hero-subtitle", {
//       opacity: 0,
//       y: 20,
//       duration: 1,
//       delay: 0.4,
//     });

//     gsap.from(".hero-buttons", {
//       opacity: 0,
//       scale: 0.95,
//       duration: 0.8,
//       delay: 0.6,
//     });
//   }, []);

//   return (
//     <section ref={heroRef} id="home" className="relative h-screen w-full overflow-hidden">
//       {/* Background Slider */}
//       <div ref={imageRef} className="absolute inset-0 scale-110">
//         <Swiper modules={[Autoplay, Navigation]} slidesPerView={1} autoplay={{ delay: 6000, disableOnInteraction: false }} loop className="h-full w-full">
//           {[heroImage1, heroImage2, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8].map((image, idx) => (
//             <SwiperSlide key={idx}>
//               <img src={image} className="h-full w-full object-cover" alt={`Church slide ${idx + 1}`} />
//               {/* Dark overlay using church-blue scale */}
//               <div className="bg-church-blue-900/80 absolute inset-0" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Content */}
//       <div ref={contentRef} className="relative z-10 flex h-full items-center justify-center">
//         <div className="container mx-auto px-4 text-center">
//           {/* Title */}
//           <h1 className="hero-title text-light mb-6 text-5xl font-bold md:text-7xl">
//             Welcome to <span className="text-church-gold-400">CAC, Itedo Yiyanju</span>
//           </h1>

//           {/* Typewriter Subtitle */}
//           <p className="hero-subtitle text-light/90 mx-auto mb-8 flex min-h-8 max-w-2xl items-center justify-center text-xl">
//             <span>{displayedText}</span>
//             <span className="bg-light/90 ml-1 inline-block h-[1.2em] w-0.5 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
//           </p>

//           {/* CTA Buttons */}
//           <div className="hero-buttons mb-10 flex justify-center gap-4">
//             <Button size="lg" onClick={goToLivestream} className={"rounded-xl px-6 py-3 font-medium transition-all duration-300 " + "bg-church-gold-400 text-church-blue-700 " + "hover:bg-church-gold-300 hover:shadow-glow"}>
//               <Play className="mr-2 h-5 w-5" />
//               Watch Live
//             </Button>

//             <Button size="lg" onClick={openMaps} className={"rounded-xl px-6 py-3 font-medium transition-all duration-300 " + "border-light/30 text-light border-2 bg-transparent " + "hover:border-church-gold-400 hover:text-church-gold-400"}>
//               <Calendar className="mr-2 h-5 w-5" />
//               Visit Us
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="hero-stats mx-auto grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-3">
//             {[
//               { value: "1000+", label: "Members" },
//               { value: "20+", label: "Years Serving" },
//               { value: "3+", label: "Branches" },
//             ].map((stat) => (
//               <div key={stat.label}>
//                 <div className="text-church-gold-400 text-3xl font-bold">{stat.value}</div>
//                 <div className="text-light/80">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Blink animation for cursor */}
//       <style>{`
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;



import { useEffect, useRef, useState, useMemo, useCallback, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Play, Calendar, ChevronDown, MapPin, Clock } from "lucide-react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

import heroImage1 from "@/assets/church.png";
import heroImage2 from "@/assets/church1.jpg";
import heroImage4 from "@/assets/church3.jpg";
import heroImage5 from "@/assets/church4.jpg";
import heroImage6 from "@/assets/church7.jpg";
import heroImage7 from "@/assets/church6.jpg";
import heroImage8 from "@/assets/church8.jpg";

const churchImages = [heroImage1, heroImage2, heroImage4, heroImage5, heroImage6, heroImage7, heroImage8];

// ── Utility Functions ──────────────────────────────────────────────

const openMaps = () => {
  const lat = 6.671838;
  const lng = 3.251764;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  if (isIOS) window.open(`http://maps.apple.com/?daddr=${lat},${lng}`, "_blank");
  else if (isAndroid) window.open(`geo:${lat},${lng}?q=${lat},${lng}(Church)`, "_blank");
  else window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
};

const goToLivestream = () => {
  window.location.href = "/listen/video";
};

// ── Typewriter Hook ────────────────────────────────────────────────

const phrases = [
  "Welcome to Bethel, the House of Bread, where heaven meets earth.",
  "A place of Worship, Love, Revelatory Teachings and Prayers.",
  "Join us as we learn Christ, experience transformation and manifest the GOD Life here on earth.",
];

const useTypewriter = (
  texts: string[],
  typingSpeed = 75,
  deletingSpeed = 30,
  pauseTime = 2000
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;
    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayedText;
};

// ── 3D Carousel Card ──────────────────────────────────────────────

function CarouselCard({
  url,
  index,
  total,
  activeIndex,
  radius,
}: {
  url: string;
  index: number;
  total: number;
  activeIndex: number;
  radius: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, url);

  // Correct the texture aspect
  texture.colorSpace = THREE.SRGBColorSpace;

  const angle = (index / total) * Math.PI * 2;

  useFrame((state) => {
    if (!meshRef.current) return;

    // Current rotation offset from auto-spin
    const spin = state.clock.elapsedTime * 0.15;
    const currentAngle = angle + spin;

    // Position on the carousel circle
    const x = Math.sin(currentAngle) * radius;
    const z = Math.cos(currentAngle) * radius;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.05);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, z, 0.05);

    // Face outward from center
    meshRef.current.rotation.y = currentAngle;

    // Scale based on depth — cards closer to camera appear bigger
    const depthScale = THREE.MathUtils.mapLinear(z, -radius, radius, 0.7, 1.15);
    const targetScale = Math.max(depthScale, 0.6);
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05)
    );

    // Opacity based on depth
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    const targetOpacity = THREE.MathUtils.mapLinear(z, -radius, radius, 0.3, 1);
    mat.opacity = THREE.MathUtils.lerp(mat.opacity, Math.max(targetOpacity, 0.2), 0.05);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2.8, 3.8]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={1}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}

// ── Glowing frame border for the front card ──────────────────────

function GlowFrame() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 3.6]}>
      <planeGeometry args={[3.2, 4.2]} />
      <meshBasicMaterial
        color="#d4a843"
        transparent
        opacity={0.3}
        wireframe
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

// ── Floating particles around carousel ────────────────────────────

function FloatingParticles({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          // @ts-ignore
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d4a843"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ── Cross 3D ──────────────────────────────────────────────────────

function FloatingCross({
  position,
  scale = 0.4,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh>
          <boxGeometry args={[0.15, 1.4, 0.15]} />
          <meshStandardMaterial
            color="#d4a843"
            emissive="#d4a843"
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.9, 0.15, 0.15]} />
          <meshStandardMaterial
            color="#d4a843"
            emissive="#d4a843"
            emissiveIntensity={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ── Camera Rig ────────────────────────────────────────────────────

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.current.x * 0.8,
      0.02
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.current.y * 0.4 + 0.5,
      0.02
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ── Full 3D Scene ─────────────────────────────────────────────────

function CarouselScene() {
  const radius = 3.5;

  return (
    <>
      <CameraRig />

      <ambientLight intensity={0.4} />
      <pointLight position={[0, 5, 5]} intensity={1.5} color="#d4a843" />
      <pointLight position={[-3, 3, 3]} intensity={0.8} color="#ffffff" />
      <pointLight position={[3, -2, 4]} intensity={0.5} color="#4a7dff" />
      <spotLight
        position={[0, 8, 5]}
        angle={0.4}
        penumbra={1}
        intensity={1.5}
        color="#d4a843"
      />

      {/* Image Carousel */}
      {churchImages.map((img, i) => (
        <CarouselCard
          key={i}
          url={img}
          index={i}
          total={churchImages.length}
          activeIndex={0}
          radius={radius}
        />
      ))}

      <GlowFrame />
      <FloatingParticles count={60} />

      {/* Floating crosses */}
      <FloatingCross position={[-4, 3, -2]} scale={0.5} />
      <FloatingCross position={[4, -2, -3]} scale={0.35} />

      <Environment preset="city" />
    </>
  );
}

// ── Stat Counter Hook ─────────────────────────────────────────────

const useCountUp = (target: number, duration = 2000, startDelay = 800) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return count;
};

function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const count = useCountUp(value, 2000, delay);

  return (
    <div className="hero-stat text-center">
      <div className="bg-linear-to-r from-[#d4a843] to-[#f0d78c] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-white/50">{label}</div>
    </div>
  );
}

// ── Main Hero Component ────────────────────────────────────────────

const Hero = () => {
  const heroRef = useRef(null);
  const displayedText = useTypewriter(phrases);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.8 })
      .from(".hero-title-line", { opacity: 0, x: -60, duration: 1, stagger: 0.15 }, "-=0.4")
      .from(".hero-typewriter", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
      .from(".hero-info-item", { opacity: 0, x: -30, duration: 0.6, stagger: 0.1 }, "-=0.4")
      .from(".hero-buttons", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
      .from(".hero-stat", { opacity: 0, y: 30, duration: 0.6, stagger: 0.1 }, "-=0.3")
      .from(".hero-3d", { opacity: 0, x: 80, duration: 1.2 }, "-=1.5")
      .from(".hero-scroll", { opacity: 0, duration: 0.6 }, "-=0.2");
  }, [isLoaded]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#050a18]"
    >
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow behind the 3D section */}
      {/* <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#d4a843]/5 blur-[120px]" /> */}
      {/* <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] -translate-x-1/4 rounded-full bg-[#1a2f5a]/20 blur-[100px]" /> */}

      {/* ── Two-Column Layout ── */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:gap-4">
          {/* ── Left Column: Content ── */}
          <div className="flex flex-col justify-center py-20 lg:py-0 lg:pr-8">
            {/* Live Badge */}
            <div className="hero-badge mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#d4a843]/30 bg-[#d4a843]/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4a843] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4a843]" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#d4a843]">
                LIVE EVERY SUNDAY
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="hero-title-line block text-white">Welcome to</span>
              <span className="hero-title-line mt-1 block bg-linear-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
                Christ Apostolic Church,
              </span>
              <span className="hero-title-line block bg-linear-to-r from-[#d4a843] via-[#f0d78c] to-[#d4a843] bg-clip-text text-transparent">
                Itedo Yiyanju
              </span>
            </h1>

            {/* Typewriter */}
            <div className="hero-typewriter mb-8 flex min-h-[3.5rem] items-start">
              <p className="max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
                <span>{displayedText}</span>
                <span
                  className="ml-1 inline-block h-[1.2em] w-0.5 bg-[#d4a843]/80 align-middle"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </p>
            </div>

            {/* Quick Info */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="hero-info-item flex items-center gap-2 text-sm text-white/50">
                <Clock className="h-4 w-4 text-[#d4a843]" />
                <span>Sundays — 8:00 AM </span>
              </div>
              <div className="hero-info-item flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4 text-[#d4a843]" />
                <span>Alagbado, Lagos State</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons mb-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                size="lg"
                onClick={goToLivestream}
                className="group relative overflow-hidden rounded-xl border-0 bg-linear-to-r from-[#d4a843] to-[#b8922e] px-8 py-6 text-base font-semibold text-[#0a1628] shadow-[0_0_30px_rgba(212,168,67,0.25)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,168,67,0.4)]"
              >
                <span className="absolute inset-0 bg-linear-to-r from-[#f0d78c] to-[#d4a843] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Live
                </span>
              </Button>

              <Button
                size="lg"
                onClick={openMaps}
                className="rounded-xl border border-white/15 bg-white/5 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:border-[#d4a843]/40 hover:bg-white/10 hover:text-[#d4a843]"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Visit Us
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid max-w-md grid-cols-3 gap-6">
              <StatItem value={1000} suffix="+" label="Members" delay={800} />
              <StatItem value={20} suffix="+" label="Years" delay={1000} />
              <StatItem value={3} suffix="+" label="Branches" delay={1200} />
            </div>
          </div>

          {/* ── Right Column: 3D Carousel ── */}
          <div className="hero-3d relative flex items-center justify-center">
            {/* Decorative border frame */}
            <div className="absolute inset-4 rounded-3xl border border-white/5" />
            <div className="absolute inset-8 rounded-2xl border border-[#d4a843]/10" />

            {/* 3D Canvas */}
            <div className="h-112.5 w-full sm:h-[550px] lg:h-[600px]">
              <Canvas
                camera={{ position: [0, 0.5, 7], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: "high-performance",
                }}
              >
                <Suspense fallback={null}>
                  <CarouselScene />
                </Suspense>
              </Canvas>
            </div>

            {/* Corner accents */}
            <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[#d4a843]/30 rounded-tl-lg" />
            <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-[#d4a843]/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#d4a843]/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#d4a843]/30 rounded-br-lg" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050a18] to-transparent" />

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <div className="flex animate-bounce flex-col items-center gap-1">
          <span className="text-[10px] tracking-[0.2em] text-white/30">SCROLL</span>
          <ChevronDown className="h-4 w-4 text-white/30" />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;