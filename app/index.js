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
        message: "Enter a name for the new component group: ",
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
          "Presenter",
          "Container Presenter",
          "Container WithState Presenter"
        ]
      }
    ]).then(answers => {
      const { componentName, destinationPath, componentType } = answers;

      // create root folder
      this.destinationRoot(destinationPath);

      console.log({ componentType });
      switch (componentType) {
        case "Presenter":
          this.fs.copyTpl(
            this.templatePath("Presenter"),
            this.destinationPath(componentName),
            { componentName }
          );
          break;
        case "Container Presenter":
          this.fs.copyTpl(
            this.templatePath("Container-Presenter"),
            this.destinationPath(componentName),
            { componentName }
          );
          break;
        case "Container WithState Presenter":
          this.fs.copyTpl(
            this.templatePath("Container-WithState-Presenter"),
            this.destinationPath(componentName),
            { componentName }
          );
          break;
      }
    });
  }
};
