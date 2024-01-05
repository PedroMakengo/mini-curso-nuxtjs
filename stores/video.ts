import type { Video } from '@/interfaces/video'

export const useVideoStore = defineStore('videos', () => {
  const favoritos = ref<Video[]>([])

  const adicionarFavoritos = (video: Video) => {
    // Verificar se os vídeos são diferentes
    const favoritosFiltrados = favoritos.value.some((v) => v.id === video.id)

    if (!favoritosFiltrados) {
      favoritos.value.push(video)
    }
  }

  const removerFavoritos = (id: number) => {
    const favoritosFiltrados = favoritos.value.filter((v) => v.id !== id)

    favoritos.value = favoritosFiltrados
  }

  return { favoritos, adicionarFavoritos, removerFavoritos }
})
