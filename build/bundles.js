module.exports = {
  "bundles": {
    "public/app-build": {
      "includes": [
        "superagent",
        "[**/*.js]",
        "**/*.html!text",
        "*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
      }
    },
    "public/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "bootstrap/css/bootstrap.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
      }
    }
  }
};
