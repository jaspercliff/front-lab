import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// 渲染到index.html 中
createRoot(document.getElementById('root')!).render(
  // 帮助你提前发现 React 代码中的潜在问题 TODO
  <StrictMode>
    <App />
  </StrictMode>,
)
