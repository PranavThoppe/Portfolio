import { portfolio } from '../data/portfolio'
import { projectsById } from '../data/projects'
import type { AudienceProfile, InterstitialSlideId, ProjectSlideId } from '../types/audience'
import type { FeedSlide } from '../types/slide'
import { ContactSlide } from '../components/slides/ContactSlide'
import { EasterEggSlide } from '../components/slides/EasterEggSlide'
import { HookSlide } from '../components/slides/HookSlide'
import { InterstitialSlide } from '../components/slides/InterstitialSlide'
import { IntroSlide } from '../components/slides/IntroSlide'
import { ProjectSlide } from '../components/slides/ProjectSlide'
import { ResumeSlide } from '../components/slides/ResumeSlide'
import { SkillsSlide } from '../components/slides/SkillsSlide'

interface BuildFeedOptions {
  audience: AudienceProfile
  screenTime: number
  onNotification?: () => void
}

const interstitials: Record<string, { message: string; submessage: string }> = {
  'still-here': {
    message: 'Still here?',
    submessage: 'Your screen time report is gonna be interesting.',
  },
  technical: {
    message: 'Implementation detail:',
    submessage: 'Yes, this feed order is config-driven. No, the likes are not real yet.',
  },
  'friend-check': {
    message: 'Be honest.',
    submessage: 'Would this make you stop scrolling on LinkedIn?',
  },
  'notification-fatigue': {
    message: 'Notifications delivered.',
    submessage: 'That is three app concepts and one mildly concerning screen-time habit.',
  },
}

function isProjectSlide(id: string): id is ProjectSlideId {
  return id.startsWith('project:')
}

function isInterstitialSlide(id: string): id is InterstitialSlideId {
  return id.startsWith('interstitial:')
}

export function buildFeed({
  audience,
  screenTime,
  onNotification,
}: BuildFeedOptions): FeedSlide[] {
  let projectIndex = 0

  return audience.slideOrder.flatMap((slideId) => {
    if (isProjectSlide(slideId)) {
      const projectId = slideId.replace('project:', '')
      const project = projectsById[projectId]

      if (!project) return []
      if (project.audiences && !project.audiences.includes(audience.id)) return []

      projectIndex += 1
      return [
        {
          id: slideId,
          element: (
            <ProjectSlide
              project={project}
              index={projectIndex - 1}
              onNotification={onNotification}
            />
          ),
        },
      ]
    }

    if (isInterstitialSlide(slideId)) {
      const interstitialId = slideId.replace('interstitial:', '')
      const interstitial = interstitials[interstitialId]

      if (!interstitial) return []

      return [
        {
          id: slideId,
          element: (
            <InterstitialSlide
              message={interstitial.message}
              submessage={interstitial.submessage}
            />
          ),
        },
      ]
    }

    if (slideId === 'easter-egg' && !audience.showEasterEggs) return []

    const slideMap: Record<string, FeedSlide> = {
      hook: {
        id: 'hook',
        element: <HookSlide {...audience.copy.hook} />,
      },
      intro: {
        id: 'intro',
        element: (
          <IntroSlide
            data={portfolio}
            bio={audience.copy.intro?.bio}
            tagline={audience.copy.intro?.tagline}
          />
        ),
      },
      skills: {
        id: 'skills',
        element: <SkillsSlide skills={portfolio.skills} {...audience.copy.skills} />,
      },
      resume: {
        id: 'resume',
        element: <ResumeSlide data={portfolio} />,
      },
      contact: {
        id: 'contact',
        element: (
          <ContactSlide
            data={portfolio}
            screenTime={screenTime}
            title={audience.copy.contact?.title}
            sub={audience.copy.contact?.sub}
          />
        ),
      },
      'easter-egg': {
        id: 'easter-egg',
        element: <EasterEggSlide />,
      },
    }

    return slideMap[slideId] ? [slideMap[slideId]] : []
  })
}
