import GlowHorizonFM from "@/components/ui/glow-horizon"
import { AnimatedTitleFM } from "../components/ui/glow-horizon-utils/animated-title-fm"

export default function GlowHorizonDemo() {
  return (
    <main className="relative min-h-svh w-full overflow-hidden bg-[#050507]">
      <GlowHorizonFM variant="top" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedTitleFM open={true} />
      </div>
    </main>
  )
}
