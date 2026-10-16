// The three services. Copy comes straight from the client brief.
export type ServiceKey = 'admin' | 'analytics' | 'video'

export interface Service {
  key: ServiceKey
  icon: 'clipboard' | 'chart' | 'play'
  // Photo at the top of the service card: files live in /public/images as <name>-640.webp and <name>-1200.webp
  image: string
  imageAlt: string
  name: string
  shortName: string
  tagline: string
  items: string[]
}

export const services: Service[] = [
  {
    key: 'admin',
    icon: 'clipboard',
    image: '/images/service-admin',
    imageAlt: 'Hands typing on a laptop beside folders and a calculator on a wooden desk',
    name: 'Administrative Support',
    shortName: 'Administrative',
    tagline: 'Stay organized. Focus on what matters.',
    items: [
      'Email and calendar management',
      'Scheduling and appointment coordination',
      'Data entry and database maintenance',
      'CRM management',
      'Document preparation',
      'Customer support',
      'Online research',
      'Inventory and order tracking',
      'General administrative coordination',
    ],
  },
  {
    key: 'analytics',
    icon: 'chart',
    image: '/images/service-analytics',
    imageAlt: 'Close-up of a laptop showing an analytics dashboard',
    name: 'Data Analytics & Reporting',
    shortName: 'Data Analytics',
    tagline: 'Turn your data into better business decisions.',
    items: [
      'Data cleaning and organization',
      'Excel and Google Sheets reporting',
      'Interactive dashboards',
      'KPI and performance tracking',
      'Sales and operational reporting',
      'Data visualization',
      'Business trend analysis',
      'Automated recurring reports',
      'Power BI dashboards',
    ],
  },
  {
    key: 'video',
    icon: 'play',
    image: '/images/service-video',
    imageAlt: 'Video editing desk with a monitor showing an editing timeline',
    name: 'Video Editing & Creative Support',
    shortName: 'Video Editing',
    tagline: 'Content that looks better and works harder.',
    items: [
      'TikTok and Instagram Reels',
      'YouTube Shorts',
      'Long-form YouTube editing',
      'Podcast highlights',
      'Social media advertisements',
      'Captions and subtitles',
      'Content repurposing',
      'Basic motion graphics',
      'Promotional video editing',
    ],
  },
]
