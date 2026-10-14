import type { ServiceKey } from './services'

/*
  PORTFOLIO PROJECTS
  ------------------
  To add a project: copy one block below, paste it at the top of the list, and edit it.

  - image:   put the screenshot in /public/portfolio/ and write the path, e.g. '/portfolio/sales-dashboard.png'
  - videoId: for video work, the YouTube video ID (the part after "v=" or after "shorts/")
  - vertical: true for TikTok / Reels / Shorts (9:16), false for normal YouTube (16:9)
  - result:  ONLY add a result if it is real and the client approved it. Never invent numbers.

  The entries below are PLACEHOLDERS. Replace them with the client's real samples before launch,
  and make sure no confidential client data is visible in any screenshot.
*/

export interface PortfolioItem {
  title: string
  category: ServiceKey
  description: string
  problem?: string
  image?: string
  videoId?: string
  vertical?: boolean
  result?: string
}

export const portfolio: PortfolioItem[] = [
  {
    title: 'Sales Performance Dashboard',
    category: 'analytics',
    description: 'Interactive Excel dashboard tracking monthly revenue, top products, and regional performance.',
    problem: 'Sales data lived in separate monthly spreadsheets, making trends hard to see.',
  },
  {
    title: 'Before & After: Customer Data Cleanup',
    category: 'analytics',
    description: 'Duplicate removal, consistent formatting, and validation rules for a customer list.',
    problem: 'Inconsistent entries were causing errors in mailing and reporting.',
  },
  {
    title: 'Inventory Management Tracker',
    category: 'admin',
    description: 'Google Sheets tracker with stock levels, reorder alerts, and supplier contacts.',
    problem: 'Stock was tracked by hand, leading to missed reorders.',
  },
  {
    title: 'Client Onboarding Workflow',
    category: 'admin',
    description: 'Scheduling workflow and document templates for onboarding new clients.',
  },
  {
    title: 'Podcast Highlight Reel',
    category: 'video',
    description: 'Short vertical clip with captions, cut from a long-form podcast episode.',
    vertical: true,
  },
  {
    title: 'Promotional Brand Video',
    category: 'video',
    description: 'Long-form promotional edit with motion graphics and subtitles.',
  },
]
