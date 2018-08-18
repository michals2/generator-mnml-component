# mnml React Component Generator

## Quickstart
Install Yeoman
```bash
npm install -g yo
```
Install the mnml Component Generator
```bash
npm install -g generator-mnml-component
```
Generate a Component
```bash
yo mnml-component
```

## Types of Components
These are the possible Components that could be generated using mnml-component

### Container Presenter
#### Folder Structure
* ComponentName
  * `index.js`
  * `ComponentNameContainer.js`
  * `ComponentNamePresenter.js`
  * `__tests__`
    * `ComponentNameContainer.spec.js`
    * `ComponentNamePresenter.spec.js`
#### Component Hierarchy
```
ComponentName
  ComponentNameContainer
    ComponentNamePresenter
```

### Container WithState Presenter
#### Folder Structure
* ComponentName
  * `index.js`
  * `ComponentNameContainer.js`
  * `ComponentNameWithState.js`
  * `ComponentNamePresenter.js`
  * `__tests__`
    * `ComponentNameContainer.spec.js`
    * `ComponentNameWithState.spec.js`
    * `ComponentNamePresenter.spec.js`
#### Component Hierarchy
```
ComponentName
  ComponentNameContainer
    ComponentNameWithState
      ComponentNamePresenter
```

### Container WithState WithLifecycle Presenter
#### Folder Structure
* ComponentName
  * `index.js`
  * `ComponentNameContainer.js`
  * `ComponentNameWithState.js`
  * `ComponentNameWithLifecycle.js`
  * `ComponentNamePresenter.js`
  * `__tests__`
    * `ComponentNameContainer.spec.js`
    * `ComponentNameWithState.spec.js`
    * `ComponentNameWithLifecycle.spec.js`
    * `ComponentNamePresenter.spec.js`
#### Component Hierarchy
```
ComponentName
  ComponentNameContainer
    ComponentNameWithState
      ComponentNameWithLifecycle
        ComponentNamePresenter
```

