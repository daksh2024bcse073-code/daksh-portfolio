import { useEffect, useState } from 'react'

// Typing / deleting effect that cycles through `words`.
export default function useTyped(words, { type = 85, erase = 45, hold = 1400 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return undefined
    }
    let wi = 0
    let ci = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = words[wi]
      setText(word.slice(0, ci))
      let delay = deleting ? erase : type
      if (!deleting && ci === word.length) {
        deleting = true
        delay = hold
      } else if (deleting && ci === 0) {
        deleting = false
        wi = (wi + 1) % words.length
        delay = 350
      }
      ci += deleting ? -1 : 1
      timer = setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(timer)
  }, [words, type, erase, hold])

  return text
}
