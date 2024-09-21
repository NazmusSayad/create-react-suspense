import createReactSuspense from '../../src/index'
import { wait } from './utils'

async function fetchData(user: number) {
  await wait(1000)
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + user)
  return res.json() as unknown as { name: string }
}

const useSuspense1 = createReactSuspense(fetchData(1))
const useSuspense2 = createReactSuspense()

export default function App() {
  const [data1, error1] = useSuspense1()
  const [data2, error2] = useSuspense2(fetchData(2))

  return (
    <div>
      <div>
        <h1>User 1</h1>
        {error1 ? <p>{error1}</p> : <p>{data1?.name}</p>}
      </div>

      <div>
        <h1>User 2</h1>
        {error2 ? <p>{error2}</p> : <p>{data2?.name}</p>}
      </div>
    </div>
  )
}
