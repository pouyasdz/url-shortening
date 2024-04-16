import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Service } from "./service/service";
import MobileMenu from "./components/MobileMenu";
function App() {
  const service = new Service();
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [urls, setUrls] = useState([...service.readAllURL()]);
  const [menu, setMenu] = useState(false);
  let menuRef = useRef();
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (!regex.test(url)) return setError(true);
    else setError(false);

    // api call
    service.getShortedURL(url).then((res) => {
      service.saveOneInLocalStorage(res);
      setUrls(service.readAllURL());
    });
  }

  function handleCopy(e){
    e.currentTarget.classList.add("btn-primary-active");
    e.currentTarget.innerHTML = "Copied!";
    navigator.clipboard.writeText(e.currentTarget.value);
  }

  useEffect(() => {
  let handler = (e) => {
    if(menuRef.current && !menuRef.current.contains(e.target)){
      setMenu(false)
    }
  }
    document.addEventListener("mousedown", handler);
  })
  
  return (
    <>
      <Header setMenu={setMenu}/>
    
      {menu && <MobileMenu active={true} rf={menuRef}/>}
      
      <main className="overflow-y-auto">
        <div className="d-flex flex-column flex-md-row-reverse  align-items-center ">
          <img
            src="/images/illustration-working.svg"
            alt=""
            className="landing"
          />
          <div className="cta w-100 h-25 d-flex align-items-center flex-column align-items-md-start ">
            <h1 className="text-center text-md-start fw-bolder">
              More than just shorter links
            </h1>
            <p className="text-center text-md-start">
              Build Your brands recognition and get detailed insights on how
              your link are performing
            </p>
            <button className="btn-primary btn-rounded">Get Started</button>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="input-form d-flex flex-column justify-content-center align-items-center flex-md-row p-3 gap-3 ps-md-5 pe-md-5"
        >
          <div className="d-flex flex-column w-100 h-50 position-relative">
            <input
              className={`w-100 h-100 ${error && "input-error"}`}
              name="url"
              type="text"
              placeholder="Shorten a link here..."
              onChange={(e) => setUrl(e.target.value)}
            />
            {error && (
              <span className="text-error position-absolute">
                Please add a link
              </span>
            )}
          </div>
          <button className="btn-primary h-50 w-100" type="submit">
            Shorten it!
          </button>
        </form>

        {urls && (
          <div className="urls w-100 flex flex-column align-items-center mt-5">
            {urls.map((url) => {
              return (
                <div key={url.id}>
                  <a href={url.mainUrl} className="text-truncate white">{url.mainUrl}</a>
                  <hr />
                  <a href={url.link} className="text-primary">{url.link}</a>
                  <button className="btn-primary" value={url.link} onClick={handleCopy}>Copy</button>
                </div>
              );
            })}
          </div>
        )}

        <div className="advance d-flex flex-column  gap-2 mt-5 ">
          <h2 className="text-center fs-1 fw-bold">Advanced Statistics</h2>

          <p className="text-center">
            Track how your links are performing across the web with your our
            advanced statistics dashboard
          </p>
        </div>

        <div className="d-flex flex-column  mt-5 brand align-items-center flex-lg-row">
          <div className="d-flex flex-column gap-2 align-self-lg-baseline ">
            <div className="bg">
              <img src="/images/icon-brand-recognition.svg" alt="" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="col-5 line align-self-lg-baseline "></div>
          <div className="d-flex flex-column gap-2 ">
            <div className="bg">
              <img src="/images/icon-detailed-records.svg" alt="" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="col-5 line align-self-lg-baseline"></div>
          <div className="d-flex flex-column gap-2 align-self-lg-end ">
            <div className="bg">
              <img src="/images/icon-fully-customizable.svg" alt="" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
