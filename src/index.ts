export default function createReactSuspense<T = void>(promise?: Promise<T>) {
  let isPromiseResolved = false
  let promiseData: unknown
  let promiseError: unknown

  function handlePromise<T extends Promise<any>>(promise: T) {
    if (!isPromiseResolved) {
      isPromiseResolved = true

      promise
        .then((res) => (promiseData = res))
        .catch((err) => (promiseError = err))

      throw promise
    }

    return [promiseError, promiseData as Awaited<T>] as const
  }

  function handleRootPromise() {
    return handlePromise(promise!)
  }

  return (promise ? handleRootPromise() : handlePromise) as T extends void
    ? typeof handlePromise
    : typeof handleRootPromise
}
