function setHue(x: number, y: number): void {
  const angle = Math.atan2(x, y) * (360 / Math.PI)

  document.documentElement.style.setProperty('--colorshow-hue', `${angle}deg`)
}

function start(): void {
  const reducedMotionEnable = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reducedMotionEnable) {
    const width = window.innerWidth
    const height = window.innerHeight

    document.body.onmousemove = (event: MouseEvent) => {
      window.requestAnimationFrame(() => {
        const cursorX = event.clientX
        const cursorY = event.clientY

        setHue(width - cursorX, height - cursorY)
      })
    }
  }
}

export default start
