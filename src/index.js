import {
  backgroundColor,
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor,
} from './colors'

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    selectionColor,
    colors,
    cursorColor,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
    `,
  })
}
