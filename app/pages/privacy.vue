<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses, and protects information submitted through this website.`,
})

// Jump links at the top of the page; each id matches a section below
const sections = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'what-we-collect', label: 'What we collect' },
  { id: 'why-we-use-it', label: 'Why we use it' },
  { id: 'who-we-share-it-with', label: 'Who we share it with' },
  { id: 'how-long-we-keep-it', label: 'How long we keep it' },
  { id: 'how-we-protect-it', label: 'How we protect it' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'contact', label: 'Contact' },
]

// Highlight the section currently being read: the last one whose top has scrolled past the header
const active = ref(sections[0]!.id)
const mobileMenu = ref<HTMLDetailsElement | null>(null)

onMounted(() => {
  const onScroll = () => {
    let current = sections[0]!.id
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el && el.getBoundingClientRect().top <= 140) current = s.id
    }
    // At the very bottom, the last section is the one being read
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections.at(-1)!.id
    active.value = current
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
})

// The navy marker in the desktop menu slides to the active link (position + height in px)
const linkEls: HTMLElement[] = []
const marker = ref({ top: 0, height: 0 })
function moveMarker() {
  const el = linkEls[sections.findIndex(s => s.id === active.value)]
  if (el) marker.value = { top: el.offsetTop, height: el.offsetHeight }
}
watch(active, moveMarker)
onMounted(() => nextTick(moveMarker))

// Close the phone menu after a section is picked
function closeMobileMenu() {
  if (mobileMenu.value) mobileMenu.value.open = false
}
</script>

<!--
  DRAFT written from how this website actually works today (contact form via Web3Forms, Cloudflare
  hosting, Google Fonts; no analytics, no cookies, no ads). BEFORE adding ads, pixels or analytics, add a
  "Cookies & advertising" section (which companies, what they collect, how to opt out) and remove the
  "we don't use it for advertising" line. Before launch the client must confirm it matches their real
  practices (who on the team can see inquiries, how long they keep them) and ideally have it reviewed
  by a lawyer. It is not legal advice.
  If anything changes, update the "Last updated" date.
-->
<template>
  <section class="pb-24 pt-16 sm:pt-24">
    <div class="container-page">
      <h1 class="text-[2.625rem] leading-[1.05] sm:text-6xl">Privacy Policy</h1>
      <p class="mt-3 text-sm text-slate">Last updated October 2026</p>

      <!-- Phone / tablet: tap-to-open list of sections -->
      <details ref="mobileMenu" class="group mt-8 rounded-xl border border-line lg:hidden">
        <summary class="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
          On this page
          <svg class="size-4 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
        </summary>
        <nav aria-label="On this page" class="border-t border-line px-4 py-2">
          <a
            v-for="s in sections"
            :key="s.id"
            :href="`#${s.id}`"
            class="flex min-h-11 items-center text-slate hover:text-navy"
            @click="closeMobileMenu"
          >
            {{ s.label }}
          </a>
        </nav>
      </details>

      <div class="mt-10 lg:mt-14 lg:grid lg:grid-cols-[13rem_1fr] lg:gap-16">
        <!-- Desktop: list of sections that stays in view and marks the one being read -->
        <aside class="hidden lg:block">
          <nav aria-label="On this page" class="sticky top-28">
            <p class="eyebrow">On this page</p>
            <ul class="relative mt-4 border-l border-line">
              <span
                class="absolute -left-px top-0 w-px bg-navy transition-[transform,height] duration-300 ease-out motion-reduce:transition-none"
                :style="{ transform: `translateY(${marker.top}px)`, height: `${marker.height}px` }"
                aria-hidden="true"
              />
              <li v-for="(s, i) in sections" :key="s.id">
                <a
                  :ref="(el) => { if (el) linkEls[i] = el as HTMLElement }"
                  :href="`#${s.id}`"
                  class="block py-1.5 pl-4 text-sm transition-colors duration-300"
                  :class="active === s.id ? 'font-medium text-navy' : 'text-slate hover:text-navy'"
                  :aria-current="active === s.id ? 'true' : undefined"
                >
                  {{ s.label }}
                </a>
              </li>
            </ul>
          </nav>
        </aside>

      <div
        class="max-w-2xl space-y-14 leading-relaxed text-charcoal [&_a]:text-accent-mid [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-navy [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5 [&_ul]:marker:text-accent"
      >
        <section id="who-we-are" class="space-y-4">
          <h2>Who we are</h2>
          <p>
            {{ site.name }} is a U.S.-led business support agency based in {{ site.state }}. We provide administrative
            support, data analytics and reporting, and video editing to businesses, entrepreneurs, and content creators.
            Some of our team members work remotely from the Philippines.
          </p>
          <p>
            This policy explains what personal information we collect through this website, why we collect it, who we
            share it with, and the choices you have. Our contact details are at the end of this page.
          </p>
        </section>

        <section id="what-we-collect" class="space-y-4">
          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>When you contact us:</strong> your name, company name, email address, phone number (optional),
              the service and project type you choose, your project description, and your estimated budget (optional).
            </li>
            <li>
              <strong>When you email us directly:</strong> your email address and anything you include in your message.
            </li>
            <li>
              <strong>Technical data:</strong> our hosting provider (Cloudflare) keeps standard server logs, including your internet
              (IP) address, to keep the site running and secure.
            </li>
          </ul>
          <p>
            We don't ask for payment details or sensitive personal information on this website. Please don't include
            passwords or confidential business data in the contact form. If a project needs them, we'll agree on a
            secure way to share them.
          </p>
        </section>

        <section id="why-we-use-it" class="space-y-4">
          <h2>Why we use it</h2>
          <ul>
            <li>To reply to your inquiry and talk with you about your project.</li>
            <li>To prepare a support plan and deliver the services you ask for.</li>
            <li>To keep the website secure and filter out spam.</li>
            <li>To meet our legal, tax, and accounting obligations if we work together.</li>
          </ul>
          <p>
            We don't sell your personal information, and we don't use it for advertising. We won't add you to a mailing
            list without your permission.
          </p>
        </section>

        <section id="who-we-share-it-with" class="space-y-4">
          <h2>Who we share it with</h2>
          <ul>
            <li>
              <strong>Our team:</strong> the team members who need your information to respond to you or deliver your
              project, including remote professionals in the Philippines. They handle it under our instructions.
            </li>
            <li>
              <strong>Service providers</strong> who run parts of this website for us: Web3Forms (delivers contact form
              messages to our inbox), Google (our email and the fonts this site loads), and Cloudflare (website hosting
              and security).
            </li>
            <li><strong>Government authorities,</strong> only when the law requires it.</li>
          </ul>
          <p>
            Because our team and providers are located in different countries, your information may be processed
            outside the country where you live, including in the United States and the Philippines.
          </p>
        </section>

        <section id="how-long-we-keep-it" class="space-y-4">
          <h2>How long we keep it</h2>
          <p>
            We keep inquiries for as long as we need them to respond to you. If we work together, we keep project
            communication for the length of our working relationship and for as long as tax and accounting rules
            require. Inquiries that don't lead to a project are deleted once we no longer need them.
          </p>
        </section>

        <section id="how-we-protect-it" class="space-y-4">
          <h2>How we protect it</h2>
          <p>
            The website only works over a secure (HTTPS) connection. It has no user accounts and doesn't keep its own
            database of form submissions; messages go straight to our inbox. Access to inquiries is limited to the team
            members who need it. No way of sending or storing information online is completely secure, but we take
            reasonable steps to protect yours.
          </p>
        </section>

        <section id="your-rights" class="space-y-4">
          <h2>Your rights</h2>
          <p>Depending on where you live, you may have the right to:</p>
          <ul>
            <li>know what personal information we hold about you, and get a copy of it;</li>
            <li>have wrong or incomplete information corrected;</li>
            <li>have your information deleted when we no longer need it;</li>
            <li>use these rights without being treated differently.</li>
          </ul>
          <p>
            California residents have these rights under the California Consumer Privacy Act where it applies. To make a
            request, email us at <a :href="`mailto:${site.email}`">{{ site.email }}</a>. To protect you, we'll confirm
            the request comes from you, for example by replying to the email address you used to contact us, before we
            share or delete anything.
          </p>
          <p>
            <strong>Do Not Track:</strong> some browsers can send a "Do Not Track" signal. This website doesn't track you
            across other websites, and it doesn't currently change how it works when it receives that signal.
          </p>
          <p>
            This website is meant for businesses and isn't directed at children under 13. We don't knowingly collect
            their information. If we change this policy, we'll update the date at the top of this page.
          </p>
        </section>

        <section id="contact" class="space-y-4">
          <h2>Contact</h2>
          <p>
            {{ site.name }} · {{ site.location }}<br>
            <a :href="`mailto:${site.email}`">{{ site.email }}</a><br>
            <a :href="`tel:${site.phoneLink}`">{{ site.phone }}</a>
          </p>
        </section>
      </div>
      </div>
    </div>
  </section>
</template>
