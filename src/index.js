import {termCSS, css} from './stylesheets'
import {
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
}

exports.decorateConfig = (config) => {
  const options = Object.assign({},
    defaultOptions,
    config.hyperSana
  )

  return Object.assign({}, config, {
    backgroundColor: 'transparent',
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
