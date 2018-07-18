import illust from '../images/sana.svg'

export default ({illust: show, opacity, overText}) => {
  return `
    .terms_terms:before {
      content: "";
      display: ${show ? 'block' : 'none'};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${illust});
      background-size: auto 75%;
      background-position: right bottom;
      background-repeat: no-repeat;
      opacity: ${opacity};
      z-index: ${overText ? '1' : 'auto'};
    }
  `
}
