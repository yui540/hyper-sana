export default (store, next, action) => {
  const {data} = action
  if (/command not found/.test(data)) {
    const num = Math.floor(Math.random() * 2) + 1
    const audio = new Audio()
    audio.src = `${__dirname}/voice/error-${num}.mp3`
    audio.play()
  }
  next()
}
