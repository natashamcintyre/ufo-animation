# UFO Animation

Click [here](https://ufo-nm-ation.herokuapp.com/) to see the UFO land!

## Installation

Clone this repo, then run
```
npm install
```

## Usage
Either click on the [live link](https://ufo-nm-ation.herokuapp.com/) or install and then run
```
npm start
```

## Testing
```
npm test
```

For coverage, run
```
npm test -- --coverage --watchAll
```

## Linting
To check the code style, run
```
npx eslint .
```

## The Build
In progress

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Next steps
* Trees going backwards
* Landing legs come out on landing
* Light rays shining down from ufo
* Replay button
* Ufo changes size to create forwards and backwards flying effect
* Ufo leans forwards (ellipse gets smaller, top does something else, bigger?)
* Aliens get out??

# Wiki

These resources were helpful.

[Lucas Miranda - Canvas with React.js](https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258)
[Martin Crabtree - React: Creating an Interactive Canvas Component](https://medium.com/@martin.crabtree/react-creating-an-interactive-canvas-component-e8e88243baf6)

npm installations done:
```
npm install canvas - needed to enable tests
npm install eslint --save-dev
npx eslint --init
npm install eslint @babel/core @babel/eslint-parser --save-dev
```

I've removed this parser and actually it still works fine.

```
npm install eslint-plugin-only-warn --save-dev
npm install eslint-plugin-react-hooks --save-dev
```

Include "node": true in the "env" section in eslintrc.js
