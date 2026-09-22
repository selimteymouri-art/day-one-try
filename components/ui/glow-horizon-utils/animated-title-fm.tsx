"use client"

import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1] as const

export interface AnimatedTitleFMProps {
  open: boolean
}

export function AnimatedTitleFM({ open }: AnimatedTitleFMProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={
        open
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: shouldReduceMotion ? 0 : 28 }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 1.1,
        delay: shouldReduceMotion ? 0 : 0.45,
        ease: EASE,
      }}
    >
      <p className="mb-5 text-xs font-medium tracking-[0.32em] text-white/60 uppercase sm:text-sm">
        Beyond the interface
      </p>
      <h1 className="text-5xl leading-[0.94] font-medium tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl">
        Find the light beyond the horizon.
      </h1>
      <p className="mt-7 max-w-2xl text-base leading-7 text-pretty text-white/64 sm:text-lg">
        A responsive, cinematic hero built with React, Tailwind CSS, and Framer
        Motion.
      </p>
    </motion.div>
  )
}
