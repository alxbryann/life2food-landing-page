"use client"

import { useEffect } from "react"

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const SELECTORS = ".reveal, .reveal-left, .reveal-scale, .stagger-children"

export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("reveal-active")
      })
    }, OBSERVER_OPTIONS)
    const els = document.querySelectorAll(SELECTORS)
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}
