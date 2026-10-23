// v-reveal: fades an element up gently when it scrolls into view.
// Usage: <div v-reveal class="reveal">...</div>
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement) {
      if (!('IntersectionObserver' in window)) {
        el.classList.add('is-visible')
        return
      }
      observer ??= new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              ;(entry.target as HTMLElement).dataset.revealed = 'true'
              observer?.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )
      observer.observe(el)
    },
    // If Vue rewrites the element's classes later (for example while editing with the dev server running),
    // put 'is-visible' back so an element that already appeared doesn't go invisible again.
    updated(el: HTMLElement) {
      if (el.dataset.revealed) el.classList.add('is-visible')
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
