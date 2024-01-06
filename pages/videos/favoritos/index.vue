<script lang="ts">
import { useVideoStore } from '../../../stores/video'

export default defineComponent({
  setup() {
    const videoStore = useVideoStore()
    const { $toast } = useNuxtApp()
    const { favoritos } = storeToRefs(videoStore)

    // FUNÇÕES
    const converteDataBrasil = (dataAtual: string) => {
      return new Date(dataAtual).toLocaleDateString('pt-BR')
    }

    const removeFavorito = (id: number) => {
      videoStore.removerFavoritos(id)

      $toast.error('Removido com sucesso')
    }

    return { favoritos, converteDataBrasil, removeFavorito }
  },
})
</script>

<template>
  <div>
    <h1 class="text-4xl pt-4 pb-6">{{ $t('tituloFavoritos') }}</h1>

    <div
      class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
    >
      <UCard v-for="(video, index) in favoritos" :key="index">
        <template #header>
          <h2>{{ video.descricao }}</h2>
          <p>{{ converteDataBrasil(video.data_postagem) }}</p>
        </template>
        <iframe
          :src="video.url"
          class="h-48 h-full w-full"
          title="Youtube video player"
          frameborder="0"
        ></iframe>

        <template #footer>
          <div class="flex justify-between">
            <UButton @click="removeFavorito(video.id)"
              >Remover Favorito</UButton
            >

            <NuxtLink
              :to="{ name: 'videos-id', params: { id: video.id.toString() } }"
            >
              <UButton label="Ver Vídeo" color="gray">
                <template #trailing>
                  <UIcon name="i-heroicons-arrow-right-20-solid" />
                </template>
              </UButton>
            </NuxtLink>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<style>
.card {
}
</style>
