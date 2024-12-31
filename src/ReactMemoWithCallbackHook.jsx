import { useState, useCallback } from 'react'
import ChildWithCallbackHook from './ChildWithCallbackHook'

function ReactMemoWithCallbackHook() {
  const [parentAge, setParentAge] = useState(0)

  const incrementParentAge = () => {
    setParentAge(parentAge + 1)
  }

  console.log('👨‍👩‍👦 부모 컴포넌트가 렌더링 되었어요')

  const tellMe = useCallback(() => {
    console.log('북북이 사랑해❤️')
  }, [])

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👦 부모</h1>
      <p>나이: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <ChildWithCallbackHook name={'박북북'} tellMe={tellMe} />
    </div>
  )
}

export default ReactMemoWithCallbackHook
