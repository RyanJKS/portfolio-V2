import React from 'react'
import "./PageIndicatorDots.css"

/* active tells which section we are on */
const PageIndicatorDots = ({active}) =>{
    const pageList = ["Home", "About","Projects","Skills","Contact Me"]
  return (
    <div className='page-indicator'>
        {pageList.map((item,index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                style={active === item ? {backgroundColor :"#313BAC"} : {}} 
            > </a>
        ))}
    </div>
  )
}

export default PageIndicatorDots