import '../css/Main.css';
import laptopDesktop from '../assets/illustration-laptop-desktop.svg';
import laptopMobile from '../assets/illustration-laptop-mobile.svg';

function Others() {
  return (
    <div className='container-main'>
      <div className="container-comp">
        <picture>
          <source media="(min-width: 992px)" srcSet={laptopDesktop} />
          <img src={laptopMobile} alt="Laptop Illustration" className='img-main' />
        </picture>
        <div className="cot">
          <h2 className="title-par">Free, open, simple</h2>
          <p className="parraf">
            Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>
          <h2 className="title-par">Powerful tooling</h2>
          <p className="parraf">
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Others;
