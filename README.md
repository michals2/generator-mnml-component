# mnml React Component Generator

When components obey the single responsibility principle, they're easier to develop, test, refactor, troubleshoot...

mnml is a Yeoman scaffolding generator for creating React components that align with this philosophy.

Principles of mnml components:

1. A component should have a single responsibility (Ex: connect with Redux)
2. Components should be grouped together by feature (Ex: ButtonContainer, ButtonWithState, ButtonPresenter)
3. Component groups should have a wrapper component (Ex: Button)
4. Each component should have a separate test file (except for the wrapper component)

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

### Presenter

#### Folder Structure

- ComponentName
  - `index.js`
  - `ComponentNamePresenter.js`
  - `__tests__`
    - `ComponentNamePresenter.spec.js`

#### Component Hierarchy

```
ComponentName
  ComponentNamePresenter
```

### Container Presenter

#### Folder Structure

- ComponentName
  - `index.js`
  - `ComponentNameContainer.js`
  - `ComponentNamePresenter.js`
  - `__tests__`
    - `ComponentNameContainer.spec.js`
    - `ComponentNamePresenter.spec.js`

#### Component Hierarchy

```
ComponentName
  ComponentNameContainer
    ComponentNamePresenter
```

### Container WithState Presenter

#### Folder Structure

- ComponentName
  - `index.js`
  - `ComponentNameContainer.js`
  - `ComponentNameWithState.js`
  - `ComponentNamePresenter.js`
  - `__tests__`
    - `ComponentNameContainer.spec.js`
    - `ComponentNameWithState.spec.js`
    - `ComponentNamePresenter.spec.js`

#### Component Hierarchy

```
ComponentName
  ComponentNameContainer
    ComponentNameWithState
      ComponentNamePresenter
```

## Todo
- [ ] add support for Apollo client
- [ ] add support for TypeScript