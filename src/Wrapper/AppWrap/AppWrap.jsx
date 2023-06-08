import React from 'react'
import PageIndicatorDots from '../../Components/PageIndicator/PageIndicatorDots'
import "./AppWrap.css"

const AppWrap = (Component,idName,code) => function HOC (){
  return (
    <div id={idName} className={code === "white"? "wrapper-container-white": "wrapper-container"}>
        <div className='wrapper-component'>
            <Component/>
        </div>
        <PageIndicatorDots active={idName}/>
    </div>
  )
}

export default AppWrap