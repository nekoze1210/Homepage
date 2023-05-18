const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', {
    name: '@storybook/addon-styling',
    options: {
      // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
      // For more details on this addon's options.
      postCss: true
    }
  }
  // {
  //   name: '@storybook/addon-postcss',
  //   options: {
  //     postcssLoaderOptions: {
  //       implementation: require('postcss'),
  //     },
  //   },
  // },
  , '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 2
        }
      }, {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src')
    };
    return config;
  },
  docs: {
    autodocs: true
  }
};