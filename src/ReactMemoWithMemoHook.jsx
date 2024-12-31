import { useState, useMemo } from 'react'
import ChildWithMemoHook from './ChildWithMemoHook'

function ReactMemoWithMemoHook() {
  const [parentAge, setParentAge] = useState(0)

  const incrementParentAge = () => {
    setParentAge(parentAge + 1)
  }

  console.log('👨‍👩‍👦 부모 컴포넌트가 렌더링 되었어요')

  const name = useMemo(() => {
    return {
      lastName: '박',
      firstName: '북북',
    }
  }, [])

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👦 부모</h1>
      <p>나이: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <ChildWithMemoHook name={name} />
    </div>
  )
}

export default ReactMemoWithMemoHook
