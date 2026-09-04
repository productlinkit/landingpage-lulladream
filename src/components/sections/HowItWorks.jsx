import { howItWorks } from '@/data/content'
import Decor from '@/components/ui/Decor'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import Section, { SectionHeading } from '@/components/ui/Section'

export default function HowItWorks() {
  return (
    <Section id="how-it-works" aria-labelledby="how-title" className="overflow-hidden">
      <Decor name="shapeBlobSoft" tint={false} className="left-[-2%] top-[20%] w-28 opacity-60" float />
      <Decor name="shapeSparkle" tint={false} className="right-[4%] top-[10%] w-12 opacity-70" />

      <Reveal>
        <SectionHeading
          id="how-title"
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          body={howItWorks.body}
          className="mb-14 lg:mb-20"
        />
      </Reveal>

      <ol className="grid gap-s7 md:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.title}
            delay={i * 120}
            className="relative flex flex-col gap-s5 rounded-lg border border-border-default bg-surface-raised p-s8 shadow-1 transition-shadow duration-200 hover:shadow-2"
          >
            <span className="flex items-center gap-s4">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-action-primary text-white"
              >
                <Icon name={step.icon} size={24} />
              </span>
              <span className="text-sm font-semibold text-text-muted">
                Step {i + 1}
              </span>
            </span>

            <h3 className="text-d3 text-text-primary">{step.title}</h3>
            <p className="text-pretty text-md text-text-muted lg:text-lg">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
