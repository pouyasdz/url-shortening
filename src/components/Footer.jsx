import React from "react";
function Footer() {
  return (
    <footer className="w-100 d-flex  flex-column align-items-center pb-5">
      <div className="boost">
        <h2 className="fw-bold">Boost your link today</h2>
        <a href="#boost" className="btn-primary btn-rounded">
          Get started
        </a>
      </div>
      <h2 className="mt-5 fw-bold fs-1">Shortly</h2>
      <div className="d-grid mt-5 gap-5 shortly">
        <ul className="d-flex flex-column gap-2 align-items-center p-0">
          <span className="fs-4 fw-medium ">Features</span>
          <li>
            <a href="#blank">Link Shortening</a>
          </li>
          <li>
            <a href="#blank">Branded Links</a>
          </li>
          <li>
            <a href="#blank">Analytics</a>
          </li>
        </ul>

        <ul className="d-flex flex-column gap-2 align-items-center p-0">
          <span className="fs-4 fw-medium ">Resources</span>
          <li>
            <a href="#blank">Blog</a>
          </li>
          <li>
            <a href="#blank">Developers</a>
          </li>
          <li>
            <a href="#blank">Support</a>
          </li>
        </ul>

        <ul className="d-flex flex-column gap-2 align-items-center p-0">
          <span className="fs-4 fw-medium ">Company</span>
          <li>
            <a href="#blank">About</a>
          </li>
          <li>
            <a href="#blank">Our Team</a>
          </li>
          <li>
            <a href="#blank">Careers</a>
          </li>
          <li>
            <a href="#blank">Contact</a>
          </li>
        </ul>
      </div>
      <div className="d-flex text-white mt-5 gap-4 fs-1 ">
        <i class="ri-facebook-box-fill"></i>
        <i class="ri-twitter-fill"></i>
        <i class="ri-pinterest-fill"></i>
        <i class="ri-instagram-line"></i>
      </div>
    </footer>
  );
}

export default Footer;
