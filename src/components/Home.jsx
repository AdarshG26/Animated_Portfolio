import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/Adarsh's Resume.pdf"
import Typed from 'typed.js'


const Home = () => {
    const typedRef = useRef(null)
    useEffect(() => {
      const options = {
        strings: ["Welcome to my profile", "My name is Adarsh", "I'm a FullStack Developer (MERN)"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      }

      const typed = new Typed(typedRef.current, options)

      return ()=> {
        typed.destroy()
      }
    }, [])
    

  return (
    <>
    <div className="container home" id='home'>
        <div className="left" data-aos="fade-right" data-aos-duration="1000">
            <h1 ref={typedRef}>

            </h1>
            <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning m-2">
                Download Resume
            </a>
        </div>
        <div className="right" data-aos="fade-left" data-aos-duration="1000">
            <div className="img">
                <img src={'assets/hero/hero.avif'} alt="hero img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home