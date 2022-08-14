import React from 'react'
import spinner from './spinner.gif'
export default function Spinner() {
    return (
        <div className='d-flex justify-content-center'>
        
            <div className=" position-absolute top-50 start-50 translate-middle">
                <img src={spinner} alt="spinner" />
            </div>
        </div>

    )
}
