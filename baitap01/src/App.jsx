import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        {/* ==================== HOME ==================== */}
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content">
                    <div className="home__data">
                    <h3 className="home__subtitle">
                        Hello, <span>I'm</span>
                    </h3>

                    <h1 className="home__title">Le Nhut Anh</h1>

                    <p className="home__description">22110279</p>

                    <a href="#contact" className="button">Let's Talk</a>
                    </div>

                    <div className="home__social">
                    <a href="https://www.facebook.com/profile.php?id=100048045647315" target="_blank" className="home__social-link" rel="noreferrer">
                        <i className="ri-facebook-circle-fill"></i>
                    </a>

                    <a href="http://www.instagram.com/n.ahn_04" target="_blank" className="home__social-link" rel="noreferrer">
                        <i className="ri-instagram-fill"></i>
                    </a>

                    <a href="https://github.com/alanle04" target="_blank" className="home__social-link" rel="noreferrer">
                        <i className="ri-github-fill"></i>
                    </a>
                    </div>
                </div>

                <div className="home__image">
                    <svg className="home__blob" viewBox="0 0 550 591" xmlns="http://www.w3.org/2000/svg">
                    <mask id="maskBlob" maskType="alpha">
                        <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                        170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                        447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                        587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                        438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>
                    </mask>
                    <g mask="url(#maskBlob)">
                        <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                        170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                        447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                        587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                        438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>
                        <rect x="37" width="476" height="630" fill="url(#pattern0)"/>
                    </g>
                    {/* <rect x="37" width="476" height="300" fill="url(#pattern1)"/> */}
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"/>
                        </pattern>
                        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"/>
                        </pattern>
                        <image className="home__img" id="imageBlob" width="640" height="925" href="/public/avatar.png"/>
                    </defs>
                    </svg>
                </div>
                </div>
            </section>

            {/* ==================== CONTACT ==================== */}
            <section className="contact section" id="contact">
                <h3 className="section__subtitle">
                Get In <span>Touch</span>
                </h3>
                <h2 className="section__title">Contact Me</h2>

                <div className="contact__container container grid">
                <form className="contact__form" id="contact-form">
                    <div className="contact__group">
                    <input type="text" name="user_name" required placeholder="Enter your name" className="contact__input"/>
                    <input type="email" name="user_email" required placeholder="Enter your email" className="contact__input"/>
                    </div>

                    <input type="text" name="user_subject" required placeholder="Enter your subject" className="contact__input"/>
                    <textarea name="user_message" required placeholder="Enter your message" className="contact__input"></textarea>

                    <p className="contact__message" id="contact-message"></p>

                    <button type="submit" className="button contact__button">
                    Send Message
                    </button>
                </form>
                </div>
            </section>
        </main>
      <Footer />
    </>
  );
}

export default App;
