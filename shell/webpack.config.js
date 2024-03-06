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
    uniqueName: 'shell',
    publicPath: "auto",
    // publicPath: "http://localhost:3000/",
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
      name: "shell",
      library: { type: "var", name: "shell" },
      remoteType: "var",
      remotes: {
        mfe1: "mfe1@http://localhost:3001/remoteEntry.js",
        mfe2: "mfe2@http://localhost:3002/remoteEntry.js",
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
          import: 'my-shared', 
          requiredVersion: '*'
        },  
        'dynamic-core': {  
          singleton: true,  
          strictVersion: true,
          import: 'dynamic-core', 
          requiredVersion: '*' 
        },  
        'dynamic-components': {  
          singleton: true,  
          strictVersion: true,
          import: 'dynamic-components', 
          requiredVersion: '*' 
        },  
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
