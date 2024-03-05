const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "主工程",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      // name: "shell",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },
      // For hosts (please adjust)
      remotes: {
        mfe1: "mfe1@http://localhost:3000/remoteEntry.js",
        mfe2: "mfe2@http://localhost:7000/remoteEntry.js",
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        'my-shared': {  
          singleton: true,  
          strictVersion: true,
          import: 'my-shared', // 对应库的npm包名或本地路径  
          requiredVersion: '*' // 或者具体的版本号，如"0.0.1"  
        },  
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
