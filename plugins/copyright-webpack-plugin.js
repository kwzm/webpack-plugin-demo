class CopyrightWebpackPlugin {
  constructor(options) {
    console.log('插件被使用了', options)
  }

  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('compile hook')
    })

    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
      debugger
      compilation.assets['copyright.txt'] = {
        source: function() {
          return 'copyright by kwzm'
        },
        size: function() {
          return 17
        }
      }
      cb();
    })
  }
}

module.exports = CopyrightWebpackPlugin;