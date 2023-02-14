import webpack from 'webpack';

export const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@react\/handsontable/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
