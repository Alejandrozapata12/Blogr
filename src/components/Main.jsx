import futureDesktop from '../assets/illustration-editor-desktop.svg';
import futureMobile from '../assets/illustration-editor-mobile.svg';
import '../css/Main.css';

function Main() {
  return (
    <div className='container-main'>
        <h2 className="title-main">Designed for the future</h2>
        <div className="container-comp img-first-mobile">
            <div className="cot">
                <h2 className="title-par">Introducing an extensible editor</h2>
                <p className="parraf">
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the look of a blog.
                </p>
                <h2 className="title-par">Robust content management</h2>
                <p className="parraf">
                    Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
                </p>
            </div>
            <picture>
                <source media="(min-width: 992px)" srcSet={futureDesktop} />
                <img src={futureMobile} alt="Editor illustration" className='img-main' />
            </picture>
        </div>
    </div>
  )
}

export default Main;
