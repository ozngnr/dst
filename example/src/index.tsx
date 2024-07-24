import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from 'dst-lib'
import './styles.css'
import 'dst-lib/dist/styles/variables.css'
import 'dst-lib/dist/styles/utilities.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <div>
      <h2 className='heading-display-xlarge'>Default Button</h2>
      <Button className='buton' style={{ background: 'var(--color-primary)' }} label='Button' onClick={() => {}} />
    </div>
  </React.StrictMode>,
)
