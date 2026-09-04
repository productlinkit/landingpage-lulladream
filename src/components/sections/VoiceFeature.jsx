import { voice } from '@/data/content'
import Decor from '@/components/ui/Decor'
import Icon from '@/components/ui/Icon'
import Photo from '@/components/ui/Photo'
import Reveal from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Section'

/**
 * Waveform for the recording card. Each bar runs the same pulse on its own
 * delay and duration, which reads as audio playing rather than a static chart.
 * Decorative, so `aria-hidden`; the reduced-motion rule freezes it.
 */
function Waveform() {
  const bars = [18, 34, 52, 30, 66, 44, 78, 50, 88, 60, 40, 72, 34, 56, 26, 44, 20, 36]
  return (
    <div aria-hidden="true" className="flex h-20 items-center justify-center gap-s2">
      {bars.map((h, i) => (
        <span
          key={i}
          className="animate-bar w-1.5 rounded-full bg-action-primary"
          style={{
            height: `${h}%`,
            opacity: 0.4 + (h / 100) * 0.6,
            animationDelay: `${(i % 6) * 0.13 + (i % 3) * 0.07}s`,
            animationDuration: `${0.9 + (i % 4) * 0.22}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function VoiceFeature() {
  return (
    <section
      id="voice"
      aria-labelledby="voice-title"
      className="relative scroll-mt-24 overflow-hidden bg-surface-raised py-20 sm:py-24 lg:py-section"
    >
      <Decor name="shapeBlobPetal" tint={false} className="right-[-3%] top-[12%] w-36 opacity-50" float />
      <Decor name="shapeSwoosh" tint={false} className="left-[4%] bottom-[14%] w-14 opacity-70" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal as="figure" className="relative order-last lg:order-first">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-dream-500/18 blur-[80px]"
            />
            <Photo image={voice.image} shape="blob-petal" spin className="aspect-square w-full" />

            <figcaption className="mt-s7 rounded-lg border border-border-default bg-surface-base p-s6 shadow-2">
              <span className="flex items-center gap-s4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-action-primary text-white">
                  <Icon name="play" size={18} />
                </span>
                <span className="flex flex-col">
                  <span className="text-md font-semibold text-text-primary">Your voice</span>
                  <span className="text-sm text-text-muted">Recorded once, ready every night</span>
                </span>
              </span>
              <Waveform />
            </figcaption>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-s7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-action-primary-active">
              {voice.eyebrow}
            </p>
            <h2 id="voice-title" className="text-balance text-d3 text-text-primary sm:text-d2 lg:text-d1">
              {voice.title}
            </h2>
            <p className="max-w-xl text-pretty text-md text-text-muted lg:text-lg">
              {voice.body}
            </p>

            <ul className="mt-s2 flex flex-col gap-s7">
              {voice.points.map((point) => (
                <li key={point.title} className="flex gap-s5">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface-base text-action-primary shadow-1"
                  >
                    <Icon name={point.icon} size={22} />
                  </span>
                  <span className="flex flex-col gap-s1">
                    <span className="text-lg font-semibold text-text-primary">{point.title}</span>
                    <span className="text-pretty text-md text-text-muted">{point.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
