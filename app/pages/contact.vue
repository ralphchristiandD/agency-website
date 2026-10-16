<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Contact Us',
  description: "Tell us what you need, and we'll help you find the right administrative, analytics, or video support for your business.",
})

const config = useRuntimeConfig()
const route = useRoute()

const serviceOptions = ['Administrative Support', 'Data Analytics', 'Video Editing', 'Multiple Services']
const projectTypes = ['One-Time Project', 'Ongoing Support', 'Not Sure Yet']

// Pre-select the service when arriving from a service card (e.g. /contact?service=video)
const fromCard: Record<string, string> = { admin: 'Administrative Support', analytics: 'Data Analytics', video: 'Video Editing' }

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: fromCard[String(route.query.service)] ?? '',
  projectType: '',
  description: '',
  budget: '',
  botcheck: '', // hidden spam trap; real people leave it empty
})

const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function submit() {
  if (form.botcheck) return
  if (!config.public.web3formsKey) {
    status.value = 'error'
    console.warn('Missing NUXT_PUBLIC_WEB3FORMS_KEY. See README.md → Contact form.')
    return
  }
  status.value = 'sending'
  try {
    const res = await $fetch<{ success: boolean }>('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        access_key: config.public.web3formsKey,
        subject: `New inquiry: ${form.service || 'Website'} from ${form.name}`,
        from_name: `${site.name} Website`,
        'Full Name': form.name,
        'Company Name': form.company,
        email: form.email,
        'Phone Number': form.phone || '—',
        'Service Needed': form.service,
        'Project Type': form.projectType,
        'Project Description': form.description,
        'Estimated Budget': form.budget || '—',
      },
    })
    status.value = res.success ? 'sent' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section class="pb-24 pt-16 sm:pt-24">
    <div class="container-page grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
      <!-- Left: intro + details -->
      <div>
        <h1 class="text-[2.625rem] leading-[1.05] sm:text-6xl">Let's Take Some Work Off Your Plate.</h1>
        <p class="mt-6 text-lg leading-relaxed text-slate">Tell us what you need, and we'll help you find the right support for your business.</p>

        <dl class="mt-12 space-y-6 border-t border-line pt-8">
          <div>
            <dt class="font-semibold text-navy">Email</dt>
            <dd class="mt-1"><a :href="`mailto:${site.email}`" class="link-underline break-all text-accent">{{ site.email }}</a></dd>
          </div>
          <div>
            <dt class="font-semibold text-navy">Location</dt>
            <dd class="mt-1 text-slate">{{ site.location }}</dd>
          </div>
          <div>
            <dt class="font-semibold text-navy">Follow us</dt>
            <dd class="mt-1 flex flex-wrap gap-x-5">
              <a v-for="s in site.socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" class="link-underline py-1 text-slate hover:text-navy">{{ s.label }}</a>
            </dd>
          </div>
        </dl>
      </div>

      <!-- Right: form -->
      <div class="-mx-5 bg-mist px-5 py-8 sm:mx-0 sm:rounded-xl sm:p-10">
        <div v-if="status === 'sent'" class="py-12 text-center" role="status">
          <span class="mx-auto grid size-14 place-items-center rounded-full bg-navy text-white">
            <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
          </span>
          <h2 class="mt-6 text-3xl">Thank you, {{ form.name.split(' ')[0] }}!</h2>
          <p class="mt-2 text-slate">We've received your message and will get back to you soon.</p>
        </div>

        <form v-else class="grid gap-5 sm:grid-cols-2" @submit.prevent="submit">
          <input v-model="form.botcheck" type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off">

          <label class="block">
            <span class="mb-1.5 block text-sm font-medium text-navy">Full Name *</span>
            <input v-model="form.name" required class="field" autocomplete="name">
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium text-navy">Company Name *</span>
            <input v-model="form.company" required class="field" autocomplete="organization">
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium text-navy">Email Address *</span>
            <input v-model="form.email" type="email" required class="field" autocomplete="email">
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium text-navy">Phone Number <span class="font-normal text-slate">(optional)</span></span>
            <input v-model="form.phone" type="tel" class="field" autocomplete="tel">
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium text-navy">Service Needed *</span>
            <select v-model="form.service" required class="field">
              <option value="" disabled>Select a service</option>
              <option v-for="o in serviceOptions" :key="o">{{ o }}</option>
            </select>
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium text-navy">Project Type *</span>
            <select v-model="form.projectType" required class="field">
              <option value="" disabled>Select a type</option>
              <option v-for="o in projectTypes" :key="o">{{ o }}</option>
            </select>
          </label>
          <label class="block sm:col-span-2">
            <span class="mb-1.5 block text-sm font-medium text-navy">Project Description *</span>
            <textarea v-model="form.description" required rows="5" class="field resize-y" placeholder="What do you need help with? Any deadlines or tools we should know about?" />
          </label>
          <label class="block sm:col-span-2">
            <span class="mb-1.5 block text-sm font-medium text-navy">Estimated Budget <span class="font-normal text-slate">(optional)</span></span>
            <input v-model="form.budget" class="field" placeholder="e.g. $500–$1,000 per month">
          </label>

          <div class="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
            <button type="submit" class="btn-primary" :disabled="status === 'sending'">
              {{ status === 'sending' ? 'Sending…' : "Let's Work Together" }}
            </button>
            <p v-if="status === 'error'" class="text-sm text-red-600" role="alert">
              Something went wrong. Please email us directly at {{ site.email }}.
            </p>
          </div>
          <p class="text-xs text-slate sm:col-span-2">
            By submitting, you agree to our <NuxtLink to="/privacy" class="underline hover:text-navy">Privacy Policy</NuxtLink>.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
