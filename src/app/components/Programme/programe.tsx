import React from 'react'
import cssStyle from './programe.module.css'

export default function Programme(){
  return (
    <div style={{background:'#a3c8f8'}} className={cssStyle.title}>
    <p >OUR PROGRAMM</p>
    <h1>What We Offer</h1>
    <div className={cssStyle.Programms}>
        <div className={cssStyle.Programme}>
            <img src='/images/project1.avif' alt='' />
            <div className={cssStyle.caption}>
                <img src='/images/icon1.jpg' alt=''/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className={cssStyle.Programme}>
            <img src='/images/project2.avif' alt='' />
            <div className={cssStyle.caption}>
                <img src='/images/icon2.png' alt=''/>
                <p>Master Degree</p>
            </div>
        </div>
        <div className={cssStyle.Programme}>
            <img src='/images/Project3.jpg' alt='' />
            <div className={cssStyle.caption}>
                <img src='/images/icon3.jpg' alt=''/>
                <p>Post Degree</p>
            </div>
        </div>
        </div>
        </div>

  )
}

