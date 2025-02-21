import { onUnmounted, onMounted, ref } from 'vue'

export function useTabs() {
  const container = ref<HTMLElement>()
  const overflow = ref(false)

  const onScroll = (direction: 'forward' | 'backward') => {
    if (!container.value) return undefined
    const { clientWidth, scrollLeft } = container.value
    const left =
      direction === 'backward'
        ? scrollLeft + clientWidth
        : scrollLeft - clientWidth
    container.value?.scrollTo({
      left,
      behavior: 'smooth',
    })
    return undefined
  }
  const onScrollToActive = () => {
    const el = document.querySelector('.tab-card.active')
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }

  const onOverflow = () => {
    if (!container.value) return undefined
    const { clientWidth, scrollWidth } = container.value
    console.log('clientWidth', clientWidth)
    console.log('scrollWidth', scrollWidth)

    overflow.value = Boolean(
      clientWidth && scrollWidth && clientWidth < scrollWidth
    )
    return undefined
  }

  onMounted(() => {
    window.addEventListener('resize', onOverflow)
    onUnmounted(() => {
      window.removeEventListener('resize', onOverflow)
    })
  })
  return {
    container,
    overflow,
    onOverflow,
    onScroll,
    onScrollToActive,
  }
}
