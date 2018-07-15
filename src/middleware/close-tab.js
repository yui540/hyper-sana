export default (store, next, action) => {
  const audio = new Audio()
  audio.src = `${__dirname}/voice/close-tab.mp3`
  audio.play()

  next(action)
}
