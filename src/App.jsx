import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-y-auto">
        <img
          src="/images/illustration-working.svg"
          alt=""
          className="landing"
        />

        <div className="cta w-100 h-25 d-flex align-items-center  flex-column">
          <h1 className="text-center fw-bolder">
            More than just shorter links
          </h1>
          <p>
            Build Your brands recognition and get detailed insights on how your
            link are performing
          </p>
          <button className="btn-primary btn-rounded">Get Started</button>
        </div>

        <form className="input-form">
          <input type="text" placeholder="Shorten a link here..." />
          <button className="btn-primary">Shorten it!</button>
        </form>

        <div className="advance d-flex flex-column  gap-2 mt-5 ">
          <h2 className="text-center fs-1 fw-bold">Advanced Statistics</h2>

          <p className="text-center">
            Track how your links are performing across the web with your our
            advanced statistics dashboard
          </p>
        </div>

        <div className="d-grid mt-5 brand">
          <div className="d-flex flex-column gap-2 ">
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
          <div className="d-flex flex-column gap-2 ">
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
        {/* attribution */}
        {/* <div className="attribution position-absolute  bottom-0  fs-6">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="/">Pouya sadeghzadeh</a>.
      </div> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
