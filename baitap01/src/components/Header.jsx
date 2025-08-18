import React from 'react'

const Header = () => {
  return (
    <header class="header" id="header">
      <nav class="nav container">
          <a href="#" class="nav__logo">
              My <span>Portfolio</span>
          </a>
          <div class="nav__menu show-menu" id="nav-menu">
              <ul class="nav__list">
                  <li class="nav__item">
                      <a href="#home" class="nav__link active-link">Home</a>
                  </li>
                  <li class="nav__item">
                      <a href="#contact" class="nav__link">Contact</a>
                  </li>
              </ul>

              <div class="nav__close" id="nav-close">
                  <i class="ri-close-line"></i>
              </div>
          </div>

          <div class="nav__toggle" id="nav-toggle">
              <i class="ri-menu-line"></i>
          </div>
      </nav>
    </header>
  )
}

export default Header