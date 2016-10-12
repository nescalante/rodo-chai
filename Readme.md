# rodo Assertions for Chai

> Chai assertions for [rodo](https://www.github.com/nescalante/rodo)

## Install

```
npm install rodo-chai
```

## Usage

```js
const mock = rodo(urlObject.port)
const myCall = mock
  .get('/api/endpoint')
  .reply({ foo: 'bar' })

artifactsCall.should.have.been.invokedOnce
```

## License

MIT
