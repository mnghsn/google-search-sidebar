module.exports = {
  shortcuts: [
    {
      name: 'pkg',
      expand: '../package.json'
    }
  ],

  transforms: [
    {
      name: 'indent',
      transform: function (file, content, size, indent = ' ') {
        const indentString = require('indent-string')
        return indentString(content, parseInt(size, 10), { indent: indent })
      }
    }
  ]
}
