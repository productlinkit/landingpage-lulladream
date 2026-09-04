import { useState } from 'react'
import { faq } from '@/data/content'
import cx from '@/lib/cx'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import Section, { SectionHeading } from '@/components/ui/Section'

/**
 * FAQ accordion.
 *
 * Built on native <button> + a region, so Enter/Space activation, focus order
 * and the expanded state are all announced without extra wiring. Multiple
 * items may be open at once — parents scanning privacy answers should not have
 * one close when they open the next.
 */
function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0)
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <li className="border-b border-border-default last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-s6 py-s7 text-left transition-colors duration-150 hover:text-action-primary-active"
        >
          <span className="text-lg font-semibold text-text-primary">{item.q}</span>
          <span
            aria-hidden="true"
            className={cx(
              'flex size-9 shrink-0 items-center justify-center rounded-full border border-border-default',
              'text-text-primary transition-transform duration-200',
              open && 'rotate-45 border-action-primary bg-action-primary text-white',
            )}
          >
            <Icon name="plus" size={18} />
          </span>
        </button>
      </h3>

      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
        <p className="max-w-3xl text-pretty pb-s8 text-md text-text-muted lg:text-lg">
          {item.a}
        </p>
      </div>
    </li>
  )
}

export default function Faq() {
  return (
    <Section id="faq" aria-labelledby="faq-title" className="bg-surface-raised">
      <Reveal>
        <SectionHeading
          id="faq-title"
          eyebrow={faq.eyebrow}
          title={faq.title}
          className="mb-12 lg:mb-16"
        />
      </Reveal>

      <Reveal as="ul" delay={100} className="mx-auto max-w-3xl rounded-lg border border-border-default bg-surface-base px-s7 shadow-1 sm:px-8">
        {faq.items.map((item, i) => (
          <FaqItem key={item.q} item={item} index={i} />
        ))}
      </Reveal>
    </Section>
  )
}
