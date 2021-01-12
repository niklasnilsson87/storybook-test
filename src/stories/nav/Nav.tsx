import React from 'react'
import { Button } from '../button/Button'
import './Nav.css'

function Nav() {
    return (
        <div className="app-nav">
          <div>
            <h1>ImageVault</h1>
            <h2>Testing branch</h2>
          </div>
          <div>
            <Button size='small' primary label="Sign in"/>
            <Button size='small' primary label="Sign in"/>
          </div>
        </div>
    )
}

export default Nav
