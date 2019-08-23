function setHue(value: number): void {
  document.documentElement.style.setProperty('--colorshow-hue', `${value}deg`)
}

function start(): void {
  const reducedMotionEnable = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!reducedMotionEnable) {
    const width = window.innerWidth
    const horBlock = width / 360

    document.body.onmousemove = (event: MouseEvent) => {
      window.requestAnimationFrame(() => {
        const cursorX = event.clientX

        setHue(cursorX / horBlock)
      })
    }
  }
}

export default start
