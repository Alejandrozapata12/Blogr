import '../css/Infrastructure.css';
import cellPhone from '../assets/illustration-phones.svg';

function Infrastructure() {
  return (
    <div className='container-infra'>
        <section className="Art">
            <div className="image-container">
                <img src={cellPhone} alt="cellPhone" className='img-cell' />
            </div>
            <div className="text-content">
                <h2 className="title-Art">State of the Art Infrastructure</h2>
                <p className="par-infra">
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
            </div>
        </section>
    </div>
  )
}

export default Infrastructure;
