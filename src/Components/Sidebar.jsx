import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';


export const Sidebar = ({setCoor}) => {
    const { loading, request } = useHttp()
    const[city, setCity] = useState('') // Проверяет изменение состояния
    const[locs, setLocs] = useState([]) // Будут поподать результаты Локации

    const changeHandler = (event) => {
        setCity(event.target.value) // Достает значение == input.value
    }

    const getLocations = (event) => {
        event.preventDefault() // отключает обновление страницы при нажатии на кнопку

        request (`https://nominatim.openstreetmap.org/search/?format=json&q=${city}`)
        .then((response) => {
            setLocs(response)
        })
        // then - тогда
    }

    console.log(locs);
  return (
        <div className="sidebar">
            <form className='sidebar_form'>
                <input type="text" placeholder='Enter a loction...' onChange={ changeHandler } />
                <button onClick={ getLocations }>Search</button>
            </form>
            {
                loading === true ?
                <div className = 'loading_block'>
                    <span className='loading'></span> 
                    </div> :
          <ul className='sidebar_result'>
                {
                    locs.map(({ display_name, type, lat, lon }, i) => {
                        return (
                            <li key={ i } className='sidebar_item' onClick={() => setCoor([lat,lon])}>
                                <h2>{ display_name }</h2>
                                <p>{ type.replace(/_/g, ' ') }</p>
                            </li>
                        )
                    })
                }
            </ul>
            }
            </div>
  )
}

    //   состояние, изменение состояния = начальное состояние
// const[city, setCity] = useState('')