const audioPath = {
  'tab:new': `${__dirname}/voice/new-tab.mp3`,
  'pane:close': `${__dirname}/voice/close-tab.mp3`,
}

export default (store, next, action) => {
  const {command} = action
  console.log(command)
  const audio = new Audio()
  if (command === 'tab:new') {
    audio.src = audioPath['tab:new']
    audio.play()
  } else if (command === 'pane:close') {
    audio.src = audioPath['pane:close']
    audio.play()
  }
  next(action)
}
