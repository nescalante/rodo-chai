# rodo assertions for Chai

> Chai assertions for [rodo](https://www.github.com/nescalante/rodo)

## Install

```
npm install rodo-chai
```

## Setup

```js
const chai = require('chai')
const rodoChai = require('rodo-chai')

chai.use(rodoChai)
```

## Usage

In your test suite:

```js
const mock = rodo(urlObject.port)
const myCall = mock
  .get('/api/endpoint')
  .reply({ foo: 'bar' })

artifactsCall.should.have.been.invokedOnce
```

## License

MIT
