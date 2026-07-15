import type { AudienceId, AudienceProfile } from '../types/audience'

export const defaultAudienceId: AudienceId = 'curious'

export const audiences: Record<AudienceId, AudienceProfile> = {
  recruiter: {
    id: 'recruiter',
    label: 'Recruiter / hiring manager',
    subtitle: "I'll keep the chaos focused on proof, skills, and contact info.",
    slideOrder: [
      'hook',
      'intro',
      'skills',
      'project:toyotron',
      'project:remind',
      'project:linkup',
      'project:poker',
      'resume',
      'contact',
    ],
    copy: {
      hook: {
        eyebrow: 'candidate recommended for you',
        title: 'Need signal',
        accent: 'fast?',
        sub: 'Here are the projects, skills, and receipts before the algorithm gets weird.',
        meta: ['hiring-manager mode', 'minimal detours'],
      },
      intro: {
        bio: 'Full-stack developer focused on polished product experiences, fast iteration, and shipping work that people actually use.',
      },
      contact: {
        title: "Let's make this easy.",
        sub: 'Resume, links, and contact options are right here. No scavenger hunt required.',
      },
    },
    showEasterEggs: false,
  },
  engineer: {
    id: 'engineer',
    label: 'Fellow engineer / developer',
    subtitle: 'Show me the architecture, tradeoffs, and the stuff under the hood.',
    slideOrder: [
      'hook',
      'intro',
      'project:toyotron',
      'project:poker',
      'project:linkup',
      'project:remind',
      'skills',
      'interstitial:technical',
      'contact',
    ],
    copy: {
      hook: {
        eyebrow: 'dev-to-dev transmission',
        title: 'You found the',
        accent: 'implementation.',
        sub: 'Swipe through the work, the constraints, and a few jokes for people who read source code.',
        meta: ['ship logs included', 'github links encouraged'],
      },
      contact: {
        title: 'Want to talk shop?',
        sub: 'Send me weird edge cases, product ideas, or an interview loop. I am game.',
      },
    },
    showEasterEggs: true,
  },
  friend: {
    id: 'friend',
    label: 'Friend / someone I know',
    subtitle: "You're allowed to judge the jokes and the projects.",
    slideOrder: [
      'hook',
      'intro',
      'interstitial:friend-check',
      'project:toyotron',
      'project:poker',
      'project:linkup',
      'easter-egg',
      'project:remind',
      'contact',
    ],
    copy: {
      hook: {
        eyebrow: 'mutuals only',
        title: "You're here",
        accent: 'on purpose?',
        sub: 'Perfect. This version has more jokes and fewer corporate adjectives.',
        meta: ['friend mode', 'mildly unserious'],
      },
      intro: {
        bio: 'I make apps, overthink small interactions, and occasionally turn group-chat ideas into actual software.',
      },
      contact: {
        title: 'Text me your review.',
        sub: 'Unless it is mean. Then put it in a pull request so it feels constructive.',
      },
    },
    showEasterEggs: true,
  },
  curious: {
    id: 'curious',
    label: 'Just browsing',
    subtitle: 'A balanced tour: projects, personality, and a clean escape route.',
    slideOrder: [
      'hook',
      'intro',
      'project:toyotron',
      'project:linkup',
      'project:poker',
      'interstitial:still-here',
      'project:remind',
      'skills',
      'contact',
    ],
    copy: {
      hook: {
        eyebrow: 'recommended for you',
        title: "You're scrolling",
        accent: 'again.',
        sub: 'Might as well learn something about the person who built this.',
        meta: ['algorithm approved', 'no exit planned'],
      },
      contact: {
        title: "You made it to the end. That's rare.",
        sub: "You've scrolled through my entire portfolio. The least you can do is say hi.",
      },
    },
    showEasterEggs: true,
  },
  classmate: {
    id: 'classmate',
    label: 'Classmate / campus connection',
    subtitle: 'Projects, collaboration style, and what I am building next.',
    slideOrder: [
      'hook',
      'intro',
      'project:toyotron',
      'project:linkup',
      'skills',
      'project:poker',
      'resume',
      'contact',
    ],
    copy: {
      hook: {
        eyebrow: 'campus feed unlocked',
        title: 'Class project?',
        accent: 'Side quest?',
        sub: 'Either way, here is the work I want people around me to know about.',
        meta: ['collab-friendly', 'currently building'],
      },
      contact: {
        title: 'Want to build something?',
        sub: 'Reach out if you want to collaborate, test an app, or trade project feedback.',
      },
    },
    showEasterEggs: true,
  },
  'imessage-user': {
    id: 'imessage-user',
    label: 'Someone who uses my apps',
    subtitle: 'Straight to Linkup, Poker, and Re-mind with fake-real notifications.',
    slideOrder: [
      'hook',
      'project:linkup',
      'project:poker',
      'project:remind',
      'interstitial:notification-fatigue',
      'intro',
      'contact',
    ],
    copy: {
      hook: {
        eyebrow: 'iMessage app universe',
        title: 'Your group chat',
        accent: 'sent you here.',
        sub: 'This route starts with the apps before the bio because that is probably why you clicked.',
        meta: ['notifications enabled', 'chaos synchronized'],
      },
      contact: {
        title: 'Got feedback from the group chat?',
        sub: 'Send bugs, feature ideas, or the screenshot where everyone roasted the app.',
      },
    },
    showEasterEggs: true,
  },
}

export const audienceList = Object.values(audiences)

export function isAudienceId(value: string | null): value is AudienceId {
  return value !== null && value in audiences
}
