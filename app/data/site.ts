// Business details shown across the site (header, footer, contact page).
// TODO: replace the social links with the client's real profiles.
export const site = {
  name: 'Enrich',
  email: 'enrich.tog@gmail.com',
  phone: '+1 440-865-0944',     // shown on the page
  phoneLink: '+14408650944',    // used for tap-to-call (no spaces or dashes)
  location: 'California-Based | Serving Clients Nationwide Across the U.S.A', // client's wording (2026-10)
  state: 'California', // used inside sentences, e.g. "based in California"
  // The client's shirt printing business has its own website (Google Sites).
  shirtPrinting: {
    title: 'Shirt Printing',
    text: 'Luxury in every print. Custom shirts for your brand, team, or event.',
    url: 'https://sites.google.com/view/enrichtog/home',
  },
  // Client asked to hide the social links for now (2026-10). Set to true to show them again
  // in the footer and on the Contact page (after replacing the placeholder links below).
  showSocials: false,
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
  ],
}
