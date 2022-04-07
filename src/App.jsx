import React, {useState} from 'react';
import './App.css'
import { Sidebar } from './Components/Sidebar';
import { Maps } from './Components/Map';

export const App = () => {
  const[coor, setCoor] = useState([42.8765615, 74.6070079])
  return(
        <div className="app">
            <Sidebar setCoor={setCoor} />
            <Maps coor ={coor}/>
        </div>
  )
}
