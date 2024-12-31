import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactMemoWithCallbackHook from './ReactMemoWithCallbackHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactMemoWithCallbackHook />
  </StrictMode>,
)
