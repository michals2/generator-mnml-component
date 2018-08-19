"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log("Initializing...");
  }
  start() {
    this.prompt([
      {
        type: "input",
        name: "componentName",
        message: "Enter a name for the new component: ",
        default: "MyNewComponent"
      },
      {
        type: "input",
        name: "destinationPath",
        message: "Enter the destination path: ",
        default: "./"
      },
      {
        type: "list",
        name: "componentType",
        message: "Select type of component: ",
        choices: [
          "Container WithState Presenter",
          "Container Presenter",
        ]
      }
    ]).then(answers => {
      const { componentName, destinationPath, componentType } = answers;

      // create root folder
      this.destinationRoot(destinationPath);

      switch (componentType) {
        case "Container WithState Presenter":
          this.fs.copyTpl(
            this.templatePath("Container-WithState-Presenter"),
            this.destinationPath(componentName),
            { componentName }
          );
        case "Container Presenter":
          this.fs.copyTpl(
            this.templatePath("Container-Presenter"),
            this.destinationPath(componentName),
            { componentName }
          );
      }
    });
  }
};
