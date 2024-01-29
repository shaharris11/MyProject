// import { useState } from 'react'
// import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Navigation from './components/navigation'
import Characters from './components/characters'
import SingleCharacters from './components/singleCharacter'
import Monsters from './components/monsters'
import Home from './components/home'
import Places from './components/places'
import Comments from './components/comments'




export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters /> }/>
        <Route path='/characters/:characterId' element={<SingleCharacters /> }/>
        <Route path='/monsters' element={<Monsters /> }/>
        <Route path='/places' element={<Places /> }/>
        <Route path='/comments/:characterId' element={<Comments />}/>
      </Routes>
    </>
  )
 
}