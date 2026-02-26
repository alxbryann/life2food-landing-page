"use client"

import { useEffect, useRef } from "react"

export function BackgroundEffects() {
    const scrollProgressRef = useRef<HTMLDivElement>(null)
    const particlesContainerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Array of particles
    const particlesRef = useRef<{ element: HTMLDivElement, speed: number, xOffset: number }[]>([])

    useEffect(() => {
        // 1. Initial Video Setup
        let videoReady = false
        const v = videoRef.current
        if (v) {
            v.addEventListener('loadedmetadata', () => {
                videoReady = true
                v.currentTime = 0
            })
            v.load()
        }

        // 2. Setup Particles
        const pc = particlesContainerRef.current
        if (pc && particlesRef.current.length === 0) {
            const particleCount = 25
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div')
                particle.className = 'particle'
                particle.style.left = Math.random() * 100 + '%'
                particle.style.top = Math.random() * 100 + '%'
                particle.style.width = (Math.random() * 6 + 3) + 'px'
                particle.style.height = particle.style.width
                particle.style.opacity = (Math.random() * 0.4 + 0.1).toString()
                particle.style.background = Math.random() > 0.5 ? 'var(--accent)' : 'var(--accent-warm)'
                particle.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out'
                pc.appendChild(particle)

                particlesRef.current.push({
                    element: particle,
                    speed: Math.random() * 0.5 + 0.1,
                    xOffset: i
                })
            }
        }

        // 3. Scroll Events (Throttled)
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.pageYOffset
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight
                    const scrollPercent = Math.min(scrollY / (docHeight || 1), 1)

                    // Scroll Progress Bar
                    if (scrollProgressRef.current) {
                        scrollProgressRef.current.style.transform = `scaleX(${scrollPercent})`
                    }

                    // Video scrub
                    if (videoReady && v && v.duration) {
                        v.currentTime = scrollPercent * v.duration
                    }

                    // Particles parallax
                    particlesRef.current.forEach((p) => {
                        const yOffset = scrollY * p.speed * 0.1
                        const xMovement = Math.sin(scrollY * 0.001 + p.xOffset) * 20
                        p.element.style.transform = `translate(${xMovement}px, ${yOffset}px)`
                        p.element.style.opacity = Math.max(0.05, 0.4 - scrollY * 0.0005).toString()
                    })

                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        // Run once on mount
        handleScroll()

        // 4. Intersection Observers for .reveal, .reveal-left, .reveal-scale, .stagger-children, .counter
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -80px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        // Wait a tick for DOM rendering before observing
        const timeoutId = setTimeout(() => {
            document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children:not(.active)').forEach((el) => {
                observer.observe(el)
            })
        }, 100)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timeoutId)
            observer.disconnect()

            // Cleanup particles
            if (pc) pc.innerHTML = ''
            particlesRef.current = []
        }
    }, [])

    return (
        <>
            <div className="video-container">
                <video
                    ref={videoRef}
                    id="bg-video"
                    muted
                    playsInline
                    preload="auto"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-preparing-a-homemade-healthy-salad-46295-large.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="video-overlay" />

            <div className="scroll-progress" ref={scrollProgressRef} />
            <div id="particles-container" ref={particlesContainerRef} />
        </>
    )
}
