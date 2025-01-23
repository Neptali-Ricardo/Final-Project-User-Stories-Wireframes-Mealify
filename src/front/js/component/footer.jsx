import React from "react";
import { Separator } from "./separator.jsx";

export const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__content">
      {/* Logo del footer */}
      <div className="footer__logo" aria-label="Logo principal del sitio">
	  <svg width="131" height="36" viewBox="0 0 131 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.78 28V2.8H6.732L18.036 21.844H16.452L27.612 2.8H30.564L30.6 28H27.144L27.108 8.236H27.936L18 24.94H16.344L6.336 8.236H7.236V28H3.78ZM46.1548 28.216C44.1148 28.216 42.3148 27.796 40.7548 26.956C39.2188 26.116 38.0188 24.964 37.1548 23.5C36.3148 22.036 35.8948 20.356 35.8948 18.46C35.8948 16.564 36.3028 14.884 37.1188 13.42C37.9588 11.956 39.0988 10.816 40.5388 10C42.0028 9.16 43.6468 8.74 45.4708 8.74C47.3188 8.74 48.9508 9.148 50.3668 9.964C51.7828 10.78 52.8868 11.932 53.6788 13.42C54.4948 14.884 54.9028 16.6 54.9028 18.568C54.9028 18.712 54.8908 18.88 54.8668 19.072C54.8668 19.264 54.8548 19.444 54.8308 19.612H38.5948V17.128H53.0308L51.6268 17.992C51.6508 16.768 51.3988 15.676 50.8708 14.716C50.3428 13.756 49.6108 13.012 48.6748 12.484C47.7628 11.932 46.6948 11.656 45.4708 11.656C44.2708 11.656 43.2028 11.932 42.2668 12.484C41.3308 13.012 40.5988 13.768 40.0708 14.752C39.5428 15.712 39.2788 16.816 39.2788 18.064V18.64C39.2788 19.912 39.5668 21.052 40.1428 22.06C40.7428 23.044 41.5708 23.812 42.6268 24.364C43.6828 24.916 44.8948 25.192 46.2628 25.192C47.3908 25.192 48.4108 25 49.3228 24.616C50.2588 24.232 51.0748 23.656 51.7708 22.888L53.6788 25.12C52.8148 26.128 51.7348 26.896 50.4388 27.424C49.1668 27.952 47.7388 28.216 46.1548 28.216ZM71.0184 28V23.968L70.8384 23.212V16.336C70.8384 14.872 70.4064 13.744 69.5424 12.952C68.7024 12.136 67.4304 11.728 65.7264 11.728C64.5984 11.728 63.4944 11.92 62.4144 12.304C61.3344 12.664 60.4224 13.156 59.6784 13.78L58.2384 11.188C59.2224 10.396 60.3984 9.796 61.7664 9.388C63.1584 8.956 64.6104 8.74 66.1224 8.74C68.7384 8.74 70.7544 9.376 72.1704 10.648C73.5864 11.92 74.2944 13.864 74.2944 16.48V28H71.0184ZM64.7544 28.216C63.3384 28.216 62.0904 27.976 61.0104 27.496C59.9544 27.016 59.1384 26.356 58.5624 25.516C57.9864 24.652 57.6984 23.68 57.6984 22.6C57.6984 21.568 57.9384 20.632 58.4184 19.792C58.9224 18.952 59.7264 18.28 60.8304 17.776C61.9584 17.272 63.4704 17.02 65.3664 17.02H71.4144V19.504H65.5104C63.7824 19.504 62.6184 19.792 62.0184 20.368C61.4184 20.944 61.1184 21.64 61.1184 22.456C61.1184 23.392 61.4904 24.148 62.2344 24.724C62.9784 25.276 64.0104 25.552 65.3304 25.552C66.6264 25.552 67.7544 25.264 68.7144 24.688C69.6984 24.112 70.4064 23.272 70.8384 22.168L71.5224 24.544C71.0664 25.672 70.2624 26.572 69.1104 27.244C67.9584 27.892 66.5064 28.216 64.7544 28.216ZM80.6901 28V1.288H84.1461V28H80.6901ZM90.7448 28V8.92H94.2008V28H90.7448ZM92.4728 5.248C91.8008 5.248 91.2368 5.032 90.7808 4.6C90.3488 4.168 90.1328 3.64 90.1328 3.016C90.1328 2.368 90.3488 1.828 90.7808 1.396C91.2368 0.963999 91.8008 0.747999 92.4728 0.747999C93.1448 0.747999 93.6968 0.963999 94.1288 1.396C94.5848 1.804 94.8128 2.32 94.8128 2.944C94.8128 3.592 94.5968 4.144 94.1648 4.6C93.7328 5.032 93.1688 5.248 92.4728 5.248ZM101.303 28V7.228C101.303 5.356 101.843 3.868 102.923 2.764C104.027 1.636 105.587 1.072 107.603 1.072C108.347 1.072 109.055 1.168 109.727 1.36C110.423 1.528 111.011 1.804 111.491 2.188L110.447 4.816C110.087 4.528 109.679 4.312 109.223 4.168C108.767 4 108.287 3.916 107.783 3.916C106.775 3.916 106.007 4.204 105.479 4.78C104.951 5.332 104.687 6.16 104.687 7.264V9.82L104.759 11.404V28H101.303ZM98.0634 11.764V8.92H110.231V11.764H98.0634ZM114.67 35.2C113.758 35.2 112.87 35.044 112.006 34.732C111.142 34.444 110.398 34.012 109.774 33.436L111.25 30.844C111.73 31.3 112.258 31.648 112.834 31.888C113.41 32.128 114.022 32.248 114.67 32.248C115.51 32.248 116.206 32.032 116.758 31.6C117.31 31.168 117.826 30.4 118.306 29.296L119.494 26.668L119.854 26.236L127.342 8.92H130.726L121.474 29.908C120.922 31.252 120.298 32.308 119.602 33.076C118.93 33.844 118.186 34.384 117.37 34.696C116.554 35.032 115.654 35.2 114.67 35.2ZM119.206 28.612L110.494 8.92H114.094L121.51 25.912L119.206 28.612Z" fill="white"/>
</svg>
      </div>

      {/* Contenido superior del footer */}
      <div className="footer__top">
        {/* Texto informativo del footer */}
        <section className="footer__text" aria-labelledby="footer-info">
          <p id="footer-info">
          Simplify your life and eat better every day. With Mealify, meal planning has never been easier. Discover personalized recipes, organize your shopping list, and embrace a healthier lifestyle effortlessly. Because your time and well-being matter.
          </p>
        </section>

        {/* Enlaces e íconos del footer */}
        <svg xmlns="http://www.w3.org/2000/svg" className="footer__icon-hidden">
          <symbol id="icon-arrow-right" viewBox="0 0 16 16">
            <path
              d="M9.89666 3.75521C9.76666 3.62521 9.55532 3.62521 9.42532 3.75521C9.29532 3.88521 9.29532 4.09655 9.42532 4.22655L12.8633 7.66455H2.33199C2.14799 7.66455 1.99866 7.81388 1.99866 7.99788C1.99866 8.18188 2.14799 8.33121 2.33199 8.33121H12.8633L9.42532 11.7692C9.29532 11.8992 9.29532 12.1105 9.42532 12.2405C9.49066 12.3059 9.57599 12.3379 9.66132 12.3379C9.74666 12.3379 9.83199 12.3052 9.89732 12.2405L13.9047 8.23322C13.9673 8.17055 14.002 8.08588 14.002 7.99722C14.002 7.90855 13.9667 7.82388 13.9047 7.76122L9.89732 3.75455L9.89666 3.75521Z"
              fill="white"
            />
          </symbol>
        </svg>

        <section className="footer__links">
          <nav className="footer__nav" aria-label="Enlaces de interés">
            <h5>About</h5>
            <ul className="footer__columns">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">About</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">Privacy Policy</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">Terms & Conditions</span>
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer__nav" aria-label="Enlaces de interés">
            <h5>GitHub & LinkedIn</h5>
            <ul className="footer__columns">
              <li className="footer__list-item">
                <a href="https://github.com/4GeeksAcademy/Final-Project-User-Stories-Wireframes-Mealify" className="footer__link" target="_blank">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">GitHub Repository</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="https://www.linkedin.com/in/nepta/" className="footer__link" target="_blank">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">Neptali Castejón LinkedIn</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="https://www.linkedin.com/in/jose-antonio-llorens-padilla/" className="footer__link" target="_blank">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">Jose Llorens LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>
          <nav className="footer__nav" aria-label="Enlaces de interés">
            <h5>Support</h5>
            <ul className="footer__columns">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">Feedback Form</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">Social Media Links</span>
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  <svg
                    className="footer__icon"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <use href="#icon-arrow-right"></use>
                  </svg>
                  <span className="footer__link-text">FAQ</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>

      {/* Separador estilizado con icono */}
      <Separator />

      {/* Footer inferior */}
      <div className="footer__bottom">
        <div className="footer__bottom-left">
          <p>&copy; 2024 Mealify</p>
        </div>
      </div>
    </div>
  </footer>
);
