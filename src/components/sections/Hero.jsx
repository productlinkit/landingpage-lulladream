import { hero } from '@/data/content'
import Button from '@/components/ui/Button'
import Decor from '@/components/ui/Decor'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import StoryCover from '@/components/ui/StoryCover'
import { Container } from '@/components/ui/Section'
import AppBadges from '@/components/ui/AppBadges'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-var(--nav-h))] items-center overflow-hidden bg-linear-to-b from-surface-raised to-surface-base py-14 lg:py-10"
    >
      {/* Soft brand wash behind the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-200px] -z-10 size-[620px] -translate-x-1/2 rounded-full bg-dream-500/12 blur-[130px]"
      />

      <Decor name="shapeCloud" tint={false} className="left-[-3%] top-[18%] w-48 opacity-70" float />
      <Decor name="shapeCloudLarge" tint={false} className="right-[-2%] top-[42%] w-44 opacity-60" float />
      <Decor name="shapeSparkle" tint={false} className="left-[7%] top-[62%] w-14 opacity-80" />
      <Decor name="shapeSparkleAlt" tint={false} className="right-[3%] top-[8%] w-16 opacity-70" />

      <Container className="relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12">
          {/* Copy — revealed on load, staggered top to bottom. */}
          <div className="flex flex-col items-start gap-s7">
            <Reveal immediate as="p" className="inline-flex items-center gap-s3 rounded-full border border-border-default bg-surface-base px-s5 py-s3 text-xs font-semibold uppercase tracking-[0.14em] text-action-primary-active">
              <Icon name="sparkle" size={15} />
              {hero.eyebrow}
            </Reveal>

            <Reveal immediate delay={90} as="h1" className="text-balance text-d2 text-text-primary sm:text-[44px] sm:leading-[1.1] lg:text-[50px] lg:leading-[1.08] lg:tracking-[-0.035em]">
              {hero.title.map((line) => (
                <span key={line} className="block max-lg:inline">
                  {line}{' '}
                </span>
              ))}
            </Reveal>

            <Reveal immediate delay={180} as="p" className="max-w-xl text-pretty text-lg text-text-muted lg:text-xl">
              {hero.body}
            </Reveal>

            <Reveal
              immediate
              delay={260}
              className="flex w-full flex-col gap-s5 sm:w-auto sm:flex-row sm:items-center"
            >
              <Button href={hero.cta.href} size="lg" icon="arrowRight" className="w-full sm:w-auto">
                {hero.cta.label}
              </Button>
              <Button
                href={hero.secondary.href}
                size="lg"
                variant="outline"
                icon="play"
                className="w-full sm:w-auto"
              >
                {hero.secondary.label}
              </Button>
            </Reveal>

            <Reveal immediate delay={330} as="p" className="text-sm text-text-muted">
              {hero.reassurance}
            </Reveal>

            <Reveal immediate delay={400} className="w-full sm:w-auto">
              <AppBadges className="pt-s2" />
            </Reveal>
          </div>

          {/* Story covers — the personalisation proof, shown not told. */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-dream-500/14 blur-[90px]"
            />
            <ul className="mx-auto grid max-w-[460px] grid-cols-2 items-start gap-s5 sm:gap-s6 lg:max-w-none">
              {hero.covers.map((cover, i) => (
                <Reveal
                  as="li"
                  key={cover.title}
                  immediate
                  delay={260 + i * 110}
                  className={i % 2 === 1 ? 'sm:mt-6' : ''}
                >
                  <StoryCover image={cover.image} title={cover.title} theme={cover.theme} />
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
