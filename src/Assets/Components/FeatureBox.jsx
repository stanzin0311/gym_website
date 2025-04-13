import React from 'react'

function FeatureBox(props) {
  return (
    <div className='a-box' id='feature'>
        <div className="a-b-img">
        <img src={props.image} alt="" srcset="" />
        </div>
        <div className="a-b-text">
            <h2> {props.title} </h2>
            <p></p>
        </div>
                
      
    </div>
  )
}

export default FeatureBox
