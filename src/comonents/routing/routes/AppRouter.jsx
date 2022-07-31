import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Spotlight from '../../screens/Spotlight'

function AppRouter() {
    console.log("in App Router");
  return (
    <div>
        <Routes>
            <Route path="/" element={<Spotlight />} />
        </Routes>
    </div>
  )
}

export default AppRouter