import React from 'react'
import FeatureBox from './FeatureBox'
import fimage1 from "../images/1.svg"
import fimage2 from "../images/2.svg"
import fimage3 from "../images/3.svg"
import fimage4 from "../images/4.svg"
function Feature() {
  return (
    <div id='features'>
        <h1>FEATURE</h1>
        <div className="a-container">
        <FeatureBox image ={fimage1} title="WeightLifting"/>
        <FeatureBox image ={fimage2} title="Specific Muscles"/>
        <FeatureBox image ={fimage3} title="Flex Your Muscles"/>
        <FeatureBox image ={fimage4} title="Cardio Exercise"/>
        </div>
      
    </div>
  )
}

export default Feature
