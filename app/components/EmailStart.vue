<!--
  Email field + "Get Started" button in one box. Submitting goes to the Contact page with the
  email already filled in (still editable there). Used in the blue band above the footer.
  size="sm" is a compact version (not used right now).
-->
<script setup lang="ts">
const props = withDefaults(defineProps<{ label?: string; size?: 'sm' | 'md' }>(), { label: 'Get Started', size: 'md' })

const email = ref('')
const id = useId()

function start() {
  navigateTo({ path: '/contact', query: { email: email.value.trim() } })
}
</script>

<template>
  <form
    class="flex w-full items-center gap-1 rounded-full border border-line bg-white p-1 transition-colors focus-within:border-accent"
    @submit.prevent="start"
  >
    <label :for="id" class="sr-only">Email address</label>
    <input
      :id="id"
      v-model="email"
      type="email"
      required
      autocomplete="email"
      placeholder="Email address"
      class="min-w-0 flex-1 bg-transparent px-4 text-sm text-charcoal placeholder:text-slate/70 focus:outline-none"
    >
    <!-- Round (pill) shape, developer's choice for this box -->
    <button
      type="submit"
      class="btn-primary shrink-0 !rounded-full text-sm"
      :class="props.size === 'sm' ? '!min-h-9 !px-4 !py-1.5' : '!min-h-10 !px-5 !py-2'"
    >
      {{ props.label }}
    </button>
  </form>
</template>
