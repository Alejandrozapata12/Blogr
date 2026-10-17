import React from 'react'
import futureIm from '../assets/illustration-editor-desktop.svg';
import '../css/Main.css';

function Main() {
  return (
    <div className='container-main'>
        <h2 className="title-main">Designed for the future</h2>
        <div className="container-comp">
            <div className="cot">
           <h2 className="title-par">Introducing an extensible editor</h2>
        <p className="parraf">
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the look of a blog.
        </p>
        <h2 className="title-par">Robust content managementr</h2>
        <p className="parraf">
         Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
        </p>
        </div>
           <img src={futureIm} alt="img main" className='img-main' />
        </div>
    </div>
  )
}

export default Main;