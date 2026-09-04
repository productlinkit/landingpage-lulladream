import cx from '@/lib/cx'

/**
 * A story in the library: cover art with its title and category beneath.
 *
 * The caption sits below the artwork rather than over it — these covers are
 * detailed illustrations, and a gradient scrim across the bottom would bury
 * the part of each scene the reader is meant to notice.
 *
 * Cards size to their own content: a one-line title should not be padded out
 * to match a two-line neighbour.
 */
export default function StoryCover({ image, title, theme, className = '' }) {
  return (
    <figure
      className={cx(
        'group overflow-hidden rounded-lg border border-border-default bg-surface-base shadow-1',
        'transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
        'hover:-translate-y-1 hover:shadow-3',
        className,
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        width="384"
        height="384"
        loading="eager"
        decoding="async"
        className="aspect-square w-full object-cover"
      />

      <figcaption className="flex flex-col gap-s1 p-s4 sm:p-s5">
        <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-action-primary-active sm:text-xs sm:tracking-[0.12em]">
          {theme}
        </span>
        <span className="text-pretty text-sm font-semibold leading-snug text-text-primary sm:text-md lg:text-lg">
          {title}
        </span>
      </figcaption>
    </figure>
  )
}
