<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const route = useRoute()
    const idParams = computed(() => route.params.id)

    // Definir um layout para está tela
    definePageMeta({
      layout: 'exibicao',
      middleware: ['video', 'auth'],
    })

    return { idParams }
  },
})
</script>

<template>
  <div>você está no vídeos de numero {{ idParams }}</div>
  <VideosDetalhes />
</template>
