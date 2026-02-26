"use client"

import { useEffect, useRef, useState } from "react"

const VIDEO_SRC =
  "https://assets.mixkit.co/videos/preview/mixkit-preparing-a-homemade-healthy-salad-46295-large.mp4"
const PARTICLE_COUNT = 25

export function LandingEffects() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [particles, setParticles] = useState<Array<{ left: string; top: string; size: string; opacity: number; color: string }>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        size: Math.random() * 6 + 3 + "px",
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? "var(--primary)" : "var(--accent-warm)",
      }))
    )
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onLoaded = () => {
      setVideoReady(true)
      video.currentTime = 0
    }
    video.addEventListener("loadedmetadata", onLoaded)
    video.load()
    return () => video.removeEventListener("loadedmetadata", onLoaded)
  }, [])

  useEffect(() => {
    const scrollProgress = document.getElementById("scroll-progress")
    const video = videoRef.current

    function update() {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.min(docHeight > 0 ? scrollTop / docHeight : 0, 1)
      if (scrollProgress) {
        scrollProgress.style.transform = `scaleX(${scrollPercent})`
      }
      if (videoReady && video && video.duration && !Number.isNaN(video.duration)) {
        video.currentTime = scrollPercent * video.duration
      }
    }

    let ticking = false
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => window.removeEventListener("scroll", onScroll)
  }, [videoReady])

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          style={{ filter: "brightness(1.1) saturate(0.9)" }}
          muted
          playsInline
          preload="auto"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      <div
        className="fixed inset-0 z-[1] pointer-events-none bg-background/95"
        aria-hidden
      />
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-1 z-[1000] origin-left"
        style={{
          background: "linear-gradient(90deg, var(--primary), var(--accent-warm))",
          transform: "scaleX(0)",
        }}
        aria-hidden
      />
      <div id="particles-container" className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </>
  )
}
