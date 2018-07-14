import root from './root'
import term from './term'

export const termCSS = (options) => {
  return `

  `
}

export const css = (options) => {
  return `
    ${root(options)}
    ${term(options)}
  `
}
