"use client"

import type React from "react"

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return <>{children}</>
}
