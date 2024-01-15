const { override, addLessLoader, adjustStyleLoaders } = require('customize-cra');
const glob = require('glob');
const path = require('path');
const projectRoot = process.cwd();

const getMultipleEntry = () => {
    const multipleEntry = [];
    const entryFiles = glob.sync(path.join(projectRoot, './src/*/index.tsx'));
  
    Object.keys(entryFiles)
      .map((index) => {
        const entryFile = entryFiles[index];
        
        const match = entryFile.match(/src\/(.*)\/index\.tsx/);
        const pageName = match && match[1];
        
        multipleEntry.push({
            entry: entryFile,
            template: path.join(projectRoot, `./src/${pageName}/index.html`),
            outPath:  `/${pageName}.html`
        });
      });

    return multipleEntry;
};

const multipleEntry = require('react-app-rewire-multiple-entry')(getMultipleEntry());

module.exports = {
    webpack: override(
        multipleEntry.addMultiEntry,
        (config)=>{
            if (process.env.NODE_ENV==="production") {
                config.devtool = false;
            }else if(process.env.NODE_ENV==="development"){
                config.devtool = "eval-source-map";
            }
            return config
        },
        addLessLoader({
            lessOptions: {
                javascriptEnabled: true,
                localIdentName: '[local]--[hash:base64:5]',
                sourceMap: true
            }
        }),
        adjustStyleLoaders(({ use: [, , postcss] }) => {
            const postcssOptions = postcss.options;
            postcss.options = { postcssOptions };
        }),
      )
};
