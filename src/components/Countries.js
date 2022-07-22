import React from 'react'

const Countries = (props) => {

    const {setCountryHandler} = props
  return (
    <>

     <div className="dropdown">
          <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
           Country
          </a>

          <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
            <li>
              <button  onClick={() => { setCountryHandler("gr") }} className="dropdown-item">Greece</button>
            </li>
            <li>
              <button type="button" onClick={() => { setCountryHandler("in") }} className="dropdown-item ">India</button>
            </li>
            <li>
              <button type="button" onClick={() => { setCountryHandler("ph") }} className="dropdown-item ">Phillipines</button>
            </li>
             
            <li>
              <button type="button" onClick={() => { setCountryHandler("gb") }} className="dropdown-item ">UK</button>
            </li>

          </ul>
        </div>

    </>
  )
}

export default Countries