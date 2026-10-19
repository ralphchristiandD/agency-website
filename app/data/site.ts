// Business details shown across the site (header, footer, contact page).
// TODO: replace the social links with the client's real profiles.
export const site = {
  name: 'Enrich',
  email: 'enrich.tog@gmail.com',
  phone: '+1 440-865-0944',     // shown on the page
  phoneLink: '+14408650944',    // used for tap-to-call (no spaces or dashes)
  location: 'Sacramento, California',
  // The client's shirt printing business has its own website (Google Sites).
  shirtPrinting: {
    title: 'Shirt Printing',
    text: 'Custom shirts printed for your brand, team, or event.',
    url: 'https://sites.google.com/view/enrichtog/home',
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
  ],
}
