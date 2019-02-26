const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

// const config = {
//   entry: {
//     app: path.resolve(__dirname, "../src/client-entry.js")
//   },
//   output: {
//     path: path.resolve(__dirname, "../dist"),
//     publicPath: "/",
//     filename: "assets/js/[name].js"
//   }
// };

// module.exports = config;

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, "dist"),
          // List of routes to prerender
          ["/"],
          {
            // options
          }
        )
      ]
    };
  }
};
