/* global document */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('main')!
const root = createRoot(rootElement)

root.render(<App />)
