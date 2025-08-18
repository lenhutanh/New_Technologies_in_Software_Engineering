import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">
            Alan <span>Le</span>
          </h1>
        </div>
        <div class="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100048045647315"
            target="_blank"
            class="footer__social-link"
          >
            <i class="ri-facebook-circle-fill"></i>
          </a>

          <a
            href="https://www.instagram.com/n.ahn_04"
            target="_blank"
            class="footer__social-link"
          >
            <i class="ri-instagram-fill"></i>
          </a>

          <a
            href="https://github.com/lenhutanh"
            target="_blank"
            class="footer__social-link"
          >
            <i class="ri-github-fill"></i>
          </a>
        </div>

        <span class="footer__copy">
          &#169; Copyright Alan. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
