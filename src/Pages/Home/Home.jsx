import React from 'react'
import "./Home.css"
import {motion} from "framer-motion"
import AppWrap from '../../Wrapper/AppWrap/AppWrap'
import BackgroundCard from '../../Wrapper/BackgroundCard/BackgroundCard'


function Home() {
    return (
        <div className='intro'>
          <motion.div
            whileInView={{x:[-100,0],opacity:[0,1]}}
            transition={{duration: 3}}
            className='intro-text-motion'
          >
            <div className='intro-badge'>
              <div className='intro-badge-cmp'>
                <div style={{marginLeft:20}}>
                  <p>Hello, I am</p>
                  <h1 className='intro-name-text'>Jhelan</h1>
                </div>
              </div>
    
            </div>
    
          </motion.div>
          
        </div>
      )
    }

    export default AppWrap(
        BackgroundCard(Home),
        "Home");