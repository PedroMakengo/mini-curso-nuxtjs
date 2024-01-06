<script lang="ts">
import type { Video } from '~/interfaces/video'
import { useVideoStore } from '@/stores/video'

export default defineComponent({
  setup() {
    const videos: Video[] = [
      {
        id: 1,
        descricao: '01 - Introdução e Instalação',
        url: 'https://www.youtube.com/embed/WahQ5AoXpuU?si=AJu7GKXObWeLPibr',
        data_postagem: '2023-10-15',
      },
      {
        id: 2,
        descricao: '02 - Configuração',
        url: 'https://www.youtube.com/embed/JbbB84bnPog?si=0IQu7NNajyeBXydk',
        data_postagem: '2023-10-15',
      },
      {
        id: 3,
        descricao: '03 - Pages',
        url: 'https://www.youtube.com/embed/S99sVicr8NI?si=1SZazSGNduxM-QtG',
        data_postagem: '2023-10-15',
      },
      {
        id: 4,
        descricao: '04 - Components',
        url: 'https://www.youtube.com/embed/cCHWanw49l8?si=Ss2183CLOZpPSxu2',
        data_postagem: '2023-10-15',
      },
    ]
    const { $toast } = useNuxtApp()

    const { adicionarFavoritos } = useVideoStore()

    // Funções

    const adicionarFavorito = (video: Video) => {
      adicionarFavoritos(video)
      $toast.success('Toast adicionado com sucesso')
    }

    return { videos, adicionarFavorito }
  },
})
</script>

<template>
  <div class="text-4xl pt-4 pb-6">{{ $t('titulo') }}</div>

  <div
    class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
  >
    <UCard v-for="(video, index) in videos" :key="index">
      <template #header>
        <h2>{{ video.descricao }}</h2>
        <p v-data-horario="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
      </template>

      <iframe
        :src="video.url"
        class="h-48 h-full w-full"
        title="Youtube video player"
        frameborder="0"
      ></iframe>

      <template #footer>
        <div class="flex justify-between">
          <UButton @click.prevent="adicionarFavorito(video)">
            Adicionar Favorito
          </UButton>

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
</template>

<style>
.card {
}
</style>
