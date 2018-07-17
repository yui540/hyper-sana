import {termCSS, css} from './stylesheets'
import middleware from './middleware'
import {
  backgroundColor,
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor,
} from './colors'

// plugin options
const defaultOptions = {
  illust: true,
  opacity: 0.6,
  overText: false,
}

exports.decorateConfig = (config) => {
  const options = Object.assign({}, defaultOptions, config.hyperSana)

  return Object.assign({}, config, {
    backgroundColor: options.overText ? backgroundColor : 'transparent',
    foregroundColor,
    borderColor,
    selectionColor,
    colors,
    cursorColor,
    termCSS: `
      ${config.termCSS || ''}
      ${termCSS(options)}
    `,
    css: `
      ${config.css || ''}
      ${css(options)}
    `,
  })
}

exports.middleware = (store) => (next) => (action) => {
  middleware(store, next, action)
}
