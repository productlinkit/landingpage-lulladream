import cx from '@/lib/cx'
import Icon from './Icon'

/**
 * App store badges. Rendered as real links rather than official artwork —
 * Apple's and Google's badge lockups are trademarked and are not in this
 * project's asset folder, so swap these for the official lockups before
 * launch.
 *
 * They sit side by side at every width, so the labels step down on phones to
 * keep both on one row.
 */
const stores = [
  { icon: 'apple', kicker: 'Download on the', name: 'App Store', href: '#get-started' },
  {
    icon: 'play_store',
    kicker: 'Get it on',
    name: 'Google Play',
    href: '#get-started',
    // Filled brand yellow. Both label lines take the dark ink token: the muted
    // grey lands at 3.89:1 on this yellow, while ink-900 clears 13.4:1.
    filled: true,
  },
]

export default function AppBadges({ className = '', onAccent = false }) {
  return (
    <ul className={cx('flex w-full items-stretch gap-s4 sm:w-auto', className)}>
      {stores.map((store) => {
        const filled = store.filled && !onAccent

        return (
          <li key={store.name} className="min-w-0 flex-1 sm:flex-none">
            <a
              href={store.href}
              className={cx(
                'flex min-h-12 w-full items-center gap-s3 rounded-md border',
                'px-s4 py-s3 transition-colors duration-150 sm:gap-s4 sm:px-s6',
                filled
                  ? 'border-sun-400 bg-sun-400 text-ink-900 hover:brightness-95 active:brightness-90'
                  : onAccent
                    ? 'border-white/45 text-white hover:border-white hover:bg-white/15 active:bg-white/25'
                    : 'border-border-strong text-text-primary hover:border-text-primary hover:bg-surface-raised active:bg-surface-strong',
              )}
            >
              <Icon name={store.icon} size={20} className="shrink-0 sm:hidden" />
              <Icon name={store.icon} size={24} className="hidden shrink-0 sm:block" />

              <span className="flex min-w-0 flex-col items-start text-left leading-none">
                <span
                  className={cx(
                    'text-[10px] sm:text-xs',
                    filled
                      ? 'text-ink-900'
                      : onAccent
                        ? 'text-white'
                        : 'text-text-muted',
                  )}
                >
                  {store.kicker}
                </span>
                <span className="mt-s1 truncate text-sm font-semibold sm:text-md">
                  {store.name}
                </span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
