import React from 'react'
import '../utility/utility.css'
import "./portfolioBig.css"
import "./portfolio.css"
import insta from '../../imgs/insta.png'
import todo from '../../imgs/todo.png'
import contact from '../../imgs/contact.png'
export default function Portfolio() {
  return (
    <>
        <div className="portfolio-container pad" id="portfolio">
            <div className="portfolio-header">
                <h1>Projects</h1>
                <p>Check out some of my works!</p>
            </div>
            
            <div className="portfolio-content">
            <div className="portfolio-box">
                    <div className="portfolio-box-top">
                        <img src={todo} alt="" />
                    </div>
                    <div className="portfolio-box-bottom">
                        <a href="https://todo-application-sr30.onrender.com/" target={0}><p>Demo</p></a>
                        <a href="https://github.com/chinmoy-7/Todo-With-Auth" target={0}><p>Github</p></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <div className="portfolio-box-top">
                        <img src={insta} alt="" />
                    </div>
                    <div className="portfolio-box-bottom">
                        <a href="https://instagram-u4sw.onrender.com/" target={0}><p>Demo</p></a>
                        <a href="https://github.com/chinmoy-7/instagram-clone" target={0}><p>Github</p></a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <div className="portfolio-box-top">
                        <img src={contact} alt="" />
                    </div>
                    <div className="portfolio-box-bottom">
                        <a href="https://contact-manager-front-end.onrender.com/" target={0}><p>Demo</p></a>
                        <a href="https://github.com/chinmoy-7/contact-manager-fullstack" target={0}><p>Github</p></a>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
