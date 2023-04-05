module.exports = {
  shortcuts: [
    {
      name: 'pkg',
      expand (file, ...args) {
        return `../package.json|parse:${args.join()}`
      }
    }
  ],

  transforms: [
    {
      name: 'indent',
      transform (file, content, size = '2', indent = ' ') {
        const indentString = (...args) => import('indent-string').then(({default: indentString}) => indentString(...args))
        return indentString(content, parseInt(size, 10), { indent: indent })
      }
    }
  ]
}
