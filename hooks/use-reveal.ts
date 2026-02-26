"use client"

import { useEffect } from "react"

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -60px 0px",
}

export function useReveal(selector: string) {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    if (!els.length) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("reveal-active")
      })
    }, OBSERVER_OPTIONS)
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}
