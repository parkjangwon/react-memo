import { useState } from 'react'
import Child from './Child'

function ReactMemo() {
  const [parentAge, setParentAge] = useState(0)
  const [childAge, setChildAge] = useState(0)

  const incrementParentAge = () => {
    setParentAge(parentAge + 1)
  }

  const incrementChildAge = () => {
    setChildAge(childAge + 1)
  }

  console.log('👨‍👩‍👦 부모 컴포넌트가 렌더링 되었어요')

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👦 부모</h1>
      <p>나이: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자식 나이 증가</button>
      <Child name={'북북이'} age={childAge} />
    </div>
  )
}

export default ReactMemo
