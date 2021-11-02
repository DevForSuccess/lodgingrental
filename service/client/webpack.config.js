var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

var config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      }
    ]
  }
};

var listingHeaderConfig = Object.assign({}, config, {
  name: "listingHeader",
  entry: `${SRC_DIR}/ListingHeader.jsx`,
  output: {
    filename: 'listingHeader.js',
    path: DIST_DIR
  },
});

var listingDescriptionConfig = Object.assign({}, config, {
  name: "listingDescription",
  entry: `${SRC_DIR}/ListingDescription.jsx`,
  output: {
    filename: 'listingDescription.js',
    path: DIST_DIR
  },
});

var hostedByConfig = Object.assign({}, config, {
  name: "hostedBy",
  entry: `${SRC_DIR}/HostedBy.jsx`,
  output: {
    filename: 'hostedBy.js',
    path: DIST_DIR
  },
});

module.exports = [
  listingHeaderConfig, listingDescriptionConfig, hostedByConfig,
];