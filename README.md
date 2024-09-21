# create-react-suspense

`create-react-suspense` is a utility function that helps you handle promises in a way that integrates with React's Suspense mechanism. It allows you to create a function that can be called to handle a promise and return its result or error.

### Demo https://create-react-suspense.vercel.app

<br/>

## Installation

```bash
npm install create-react-suspense
```

## Usage

### Importing the Function

```javascript
import createReactSuspense from 'create-react-suspense'
```

### Example

#### Using with an Initial Promise

```javascript
const useSuspense1 = createReactSuspense(
  fetch('https://jsonplaceholder.typicode.com/todos/1')
)

function DataLoadComponent1() {
  const [error, data] = useSuspense1()

  if (error) {
    return <div>Error: {error}</div>
  }

  return <div>Data: {data}</div>
}
```

#### Using without an Initial Promise

```javascript
const useSuspense2 = createReactSuspense()

function DataLoadComponent2() {
  const [error, data] = useSuspense2(
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  )

  if (error) {
    return <div>Error: {error}</div>
  }

  return <div>Data: {data}</div>
}
```

## API

### `createReactSuspense<T>(promise?: Promise<T>): useSuspense`

### `useSuspense<T>(promise?: Promise<T>): [error, data]`
