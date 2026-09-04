import { avatars, covers, photos } from '@/lib/assets'

export const site = {
  name: 'LullaDream',
  tagline: 'AI bedtime stories, personalised for your child',
}

export const nav = {
  links: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Your voice', href: '#voice' },
    { label: 'Safety', href: '#safety' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: { label: 'Start Free', href: '#get-started' },
}

export const hero = {
  eyebrow: 'AI bedtime stories',
  title: ['Bedtime Stories,', 'Made Just for Your Child'],
  body: "LullaDream turns your child's name, favourite animal, or wildest dream into a one-of-a-kind story — narrated by you, or by our magical AI voices.",
  cta: { label: 'Try a Free Story Tonight', href: '#get-started' },
  secondary: { label: 'See how it works', href: '#how-it-works' },
  reassurance: 'Free to start · No card needed · Audio-first, no screens at bedtime',
  image: {
    src: photos.cozyChild,
    alt: 'A child settling down for the night with a soft toy',
  },
  covers: [
    {
      title: 'Jack and the Beanstalk',
      theme: 'Bravery & Adventure',
      image: {
        src: covers.cover1,
        alt: 'Jack holding glowing magic beans as a giant beanstalk spirals into the clouds above his cottage',
      },
    },
    {
      title: 'Kraithong and the Crocodile King',
      theme: 'Bravery & Adventure',
      image: {
        src: covers.cover2,
        alt: 'Kraithong standing on a bamboo raft with a spear, facing the Crocodile King in a jungle lagoon',
      },
    },
    {
      title: 'Little Red Riding Hood',
      theme: 'Clever Heroes',
      image: {
        src: covers.cover3,
        alt: 'Little Red Riding Hood carrying a basket along a forest path while a wolf watches from behind a tree',
      },
    },
    {
      title: 'Phra Aphai Mani',
      theme: 'Magic & Transformations',
      image: {
        src: covers.cover4,
        alt: 'Prince Phra Aphai Mani playing his magic flute on the shore as a sea ogress rises from the waves and mermaids look on',
      },
    },
  ],
}

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Three taps to tonight’s story',
  body: 'No writing, no planning, no screens. Pick, personalise, press play — the whole thing takes about a minute.',
  steps: [
    {
      icon: 'moon',
      title: 'Pick a theme',
      body: 'Oceans, dragons, gentle forests, outer space. Choose the world your child wants to fall asleep in tonight.',
    },
    {
      icon: 'sparkle',
      title: "Personalise with your child's name",
      body: 'Add their name, their favourite animal, the friend they miss. Every story is written around them.',
    },
    {
      icon: 'wave',
      title: 'Record or auto-narrate',
      body: 'Read it in your own voice, or let one of our warm AI narrators take over on the nights you need it.',
    },
  ],
}

export const voice = {
  eyebrow: 'Narration in your own voice',
  title: 'The story only your voice can tell',
  body: "Record once and LullaDream can read any story in your voice — so bedtime still sounds like you on the nights you're away, working late, or simply out of words.",
  points: [
    {
      icon: 'wave',
      title: 'Sounds like you, not a robot',
      body: 'A few minutes of reading is enough to capture your warmth, pace and pauses.',
    },
    {
      icon: 'moon',
      title: 'There on the nights you can’t be',
      body: 'Travel, late shifts, long-distance grandparents — the same familiar voice, every night.',
    },
    {
      icon: 'shield',
      title: 'Your voice stays yours',
      body: 'Voice models are private to your family, never shared, and you can delete yours at any time.',
    },
  ],
  image: {
    src: photos.parentAndChild,
    alt: 'An adult reading a picture book aloud to a group of children gathered around her',
  },
}

export const socialProof = {
  rating: { score: '4.9', outOf: '5', count: '2,400+' },
  title: 'Parents are getting their evenings back',
  quotes: [
    {
      quote:
        'The first night we used her own name in the story, she asked for it three times. Bedtime went from a fight to the best part of our day.',
      name: 'Amara R.',
      role: 'Parent of a 4-year-old',
      avatar: avatars.avatar1,
    },
    {
      quote:
        'I travel most weeks. Hearing my own voice read to him while I am in another city is the closest thing to being there.',
      name: 'Daniel K.',
      role: 'Parent of a 5-year-old',
      avatar: avatars.avatar2,
    },
    {
      quote:
        'No screen, just audio in a dark room. He actually falls asleep instead of getting wound up.',
      name: 'Priya S.',
      role: 'Parent of a 3-year-old',
      avatar: avatars.avatar3,
    },
    {
      quote:
        'We ran out of new stories months ago. Now there is a fresh one every night and none of them feel generic.',
      name: 'Tomas B.',
      role: 'Parent of twins, age 6',
      avatar: avatars.avatar4,
    },
    {
      quote:
        'I was sceptical about anything with AI near my kid. The safety controls and the fact that I can hear every story first won me over.',
      name: 'Grace O.',
      role: 'Parent of a 4-year-old',
      avatar: avatars.avatar5,
    },
  ],
}

export const safety = {
  eyebrow: 'Safe by design',
  title: 'Made for the dark, not for the screen',
  body: 'LullaDream is audio-first on purpose. Start the story, put the phone face-down, and let the room go quiet — no glowing screen between you and sleep.',
  points: [
    {
      icon: 'moon',
      title: 'No screens at bedtime',
      body: 'Audio-first playback with a one-tap dark screen. Nothing to watch, nothing to swipe.',
    },
    {
      icon: 'shield',
      title: 'Age-appropriate, always',
      body: 'Every story is generated inside age-banded guardrails and you can preview any of them before playback.',
    },
    {
      icon: 'lock',
      title: 'Private by default',
      body: "Your child's name and recordings stay in your account. We never sell family data or use it to train public models.",
    },
    {
      icon: 'download',
      title: 'Works offline',
      body: 'Download tonight’s story ahead of time — no signal needed in the bedroom, on a plane, or in the car.',
    },
  ],
  image: {
    src: photos.restingChild,
    alt: 'A child resting calmly at the end of the day',
  },
}

export const faq = {
  eyebrow: 'Questions parents ask',
  title: 'Before you start',
  items: [
    {
      q: 'Is it really free to start?',
      a: 'Yes. You can create and play your first stories free, with no card required. If you want unlimited stories and voice narration, there is a paid plan — but nothing is charged until you choose it.',
    },
    {
      q: 'What ages is LullaDream for?',
      a: 'Stories are tuned for ages 2 to 8. You set your child’s age band once, and vocabulary, story length and themes adjust to match.',
    },
    {
      q: 'What happens to my voice recording?',
      a: 'Your voice model is private to your family account. It is never shared with other users, never sold, and never used to train public models. You can delete it permanently from settings at any time.',
    },
    {
      q: 'Can we listen without a signal?',
      a: 'Yes. Download any story for offline listening — useful for flights, car journeys, or bedrooms with patchy Wi-Fi.',
    },
    {
      q: 'Do I have to use AI narration?',
      a: 'No. You can read every story yourself, use your own recorded voice, or pick one of our narrators. Many families mix all three.',
    },
    {
      q: 'How do I know what my child is hearing?',
      a: 'Every story is saved to your library in full text and audio. You can read or listen to any of them before or after bedtime.',
    },
  ],
}

export const finalCta = {
  title: 'Tonight’s story is one tap away',
  body: 'Create your first personalised bedtime story free — no card, no setup, no screens required.',
  cta: { label: 'Start Free — No Card Needed', href: '#get-started' },
  secondary: 'Free to start · Cancel any time',
}

export const footer = {
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Narration in your voice', href: '#voice' },
        { label: 'Safety', href: '#safety' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: 'mailto:hello@lulladream.ai' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy policy', href: '#' },
        { label: 'Terms of service', href: '#' },
        { label: 'Children’s privacy', href: '#' },
      ],
    },
  ],
  socials: [
    { label: 'Instagram', icon: 'instagram', href: '#' },
    { label: 'X', icon: 'x', href: '#' },
    { label: 'YouTube', icon: 'youtube', href: '#' },
  ],
  copyright: '© 2025 LullaDream. All rights reserved.',
}
