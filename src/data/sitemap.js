export const sitemap = [
  {
    id: 'public',
    title: 'Public (Level 1)',
    groups: [
      {
        id: 'home',
        title: 'Home / Dashboard',
        url: '/',
        purpose: 'Welcome + high-level overview; entry to login and key info',
        keyContent: [
          'Hero and value proposition',
          'How it works',
          'Sign up / Log in CTAs'
        ]
      },
      {
        id: 'auth',
        title: 'User Profile & Onboarding',
        urls: ['/login', '/register', '/onboarding', '/profile', '/settings'],
        purpose: 'Registration, login, initial health setup, profile management',
        keyContent: [
          'Auth: Login, Register, Forgot Password',
          'Onboarding: Initial Health Assessment',
          'Profile: Personal info, health metrics, preferences',
          'Settings: Notifications, privacy, account'
        ]
      },
      {
        id: 'about',
        title: 'About Us / Mission',
        urls: ['/about', '/contact', '/terms'],
        purpose: 'Vision, team, contact, legal',
        keyContent: [
          'Mission & vision',
          'Contact form',
          'Terms & Conditions, Privacy'
        ]
      }
    ]
  },
  {
    id: 'learner',
    title: 'Learner (Level 2 – Authenticated)',
    groups: [
      {
        id: 'learner-dashboard',
        title: 'Learner Dashboard',
        url: '/learner',
        purpose: 'Personalized hub for health and progress',
        keyContent: [
          "Today’s plan",
          'Quick stats (BMI, weight delta, calories)',
          'Streaks, next tasks, alerts'
        ]
      },
      {
        id: 'nutrition',
        title: 'Nutrition Plan',
        baseUrl: '/learner/nutrition',
        purpose: 'Personalized meal plans + logging',
        keyContent: [
          'My Meal Plan (/plan)',
          'Recipe Library (/recipes)',
          'Food Logging (/log)'
        ]
      },
      {
        id: 'exercise',
        title: 'Exercise Plan',
        baseUrl: '/learner/exercise',
        purpose: 'Workouts + activity tracking',
        keyContent: [
          'Daily Workout Plan (/daily)',
          'Exercise Library (/library)',
          'Activity Tracking (/tracking)',
          'Workout Insights (/insights)'
        ]
      },
      {
        id: 'progress',
        title: 'Progress',
        baseUrl: '/learner/progress',
        purpose: 'Progress visualization & analytics',
        keyContent: [
          'BMI Tracker (/bmi)',
          'Weight Tracker (/weight)',
          'Nutrition Summary (/nutrition)',
          'Activity Summary (/activity)',
          'Goal Progress (/goals)'
        ]
      },
      {
        id: 'education',
        title: 'Education & Resources',
        baseUrl: '/learner/learn',
        purpose: 'Knowledge base and self-help',
        keyContent: [
          'Articles/Blogs (/articles)',
          'FAQs (/faqs)',
          'Glossary (/glossary)'
        ]
      }
    ]
  },
  {
    id: 'mentor',
    title: 'Mentor (Level 2 – Authenticated)',
    groups: [
      {
        id: 'mentor-dashboard',
        title: 'Mentor Dashboard',
        url: '/mentor',
        purpose: 'Overview of mentees and tasks',
        keyContent: [
          'Mentees list',
          'Pending requests',
          'Recent logs, actions queue'
        ]
      },
      {
        id: 'reviews',
        title: 'Review Submissions',
        url: '/mentor/reviews',
        purpose: 'Review mentee logs and provide feedback',
        keyContent: [
          'Food logs',
          'Workout logs',
          'Progress reports',
          'Approve/flag, comments'
        ]
      },
      {
        id: 'mentees',
        title: 'My Mentees',
        baseUrl: '/mentor/mentees',
        purpose: 'Manage mentee relationships and communication',
        keyContent: [
          'Mentee list',
          'Mentee profile (/:menteeId)',
          'Communication (/:menteeId/messages)',
          'Performance (/:menteeId/performance)'
        ]
      },
      {
        id: 'resources',
        title: 'Internal Resources',
        url: '/mentor/resources',
        purpose: 'Support materials for mentors',
        keyContent: [
          'Guidelines',
          'Training materials',
          'Mentor FAQs',
          'Templates'
        ]
      },
      {
        id: 'mentor-account',
        title: 'Profile & Analytics',
        baseUrl: '/mentor/account',
        purpose: 'Mentor profile and performance',
        keyContent: [
          'Profile (/profile)',
          'Availability (/availability)',
          'Analytics (/analytics)'
        ]
      }
    ]
  }
]

export const flatPages = () => {
  const pages = []
  sitemap.forEach(section => {
    section.groups.forEach(g => {
      if (g.url) pages.push({ id: g.id, title: g.title, url: g.url, purpose: g.purpose, keyContent: g.keyContent, section: section.title })
      if (g.urls) g.urls.forEach(u => pages.push({ id: `${g.id}-${u}`, title: `${g.title} – ${u}`, url: u, purpose: g.purpose, keyContent: g.keyContent, section: section.title }))
      if (g.baseUrl) pages.push({ id: `${g.id}-base`, title: `${g.title} – Base`, url: g.baseUrl, purpose: g.purpose, keyContent: g.keyContent, section: section.title })
    })
  })
  return pages
}
