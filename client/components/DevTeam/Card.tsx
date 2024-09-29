"use client";

import styled from "styled-components";

<<<<<<< HEAD
interface CardProps {
  title: string;
  linkedin: string;
  github: string;
  img: string;
}

const Card = ({ title, github, linkedin, img }: CardProps) => {
=======
const Card = () => {
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="logo">
            <span className="circle circle1" />
            <span className="circle circle2" />
            <span className="circle circle3" />
            <span className="circle circle4" />
            <span className="circle circle5">
<<<<<<< HEAD
              <img src="/images/icon-removebg-preview.png" alt="Logo" />
=======
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.667 31.69"
                className="svg"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
                  transform="translate(-45.91 0)"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
                  transform="translate(0 -51.963)"
                />
              </svg>
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
            </span>
          </div>
          <div className="glass" />
          <div className="content">
<<<<<<< HEAD
            <img src={img} alt="Headshot" className="headshot" />
            <p className="title">{title}</p>
            <span className="text-black">Co-Founder</span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <button className="social-button social-button1">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="svg"
                  >
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                  </svg>
                </a>
              </button>
              <button className="social-button social-button2">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
=======
            <span className="title">UIVERSE (3D UI)</span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container">
              <button className="social-button .social-button1">
                <svg
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                </svg>
              </button>
              <button className="social-button .social-button2">
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </button>
              <button className="social-button .social-button3">
                <svg
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                </svg>
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

<<<<<<< HEAD
const StyledWrapper = styled.div`
  .parent {
    width: 400px; /* Increased width */
    height: 450px; /* Increased height */
=======
// const StyledWrapper = styled.div`
//   .parent {
//   width: 290px;
//   height: 300px;
//   perspective: 1000px;
// }

// .card {
//   height: 100%;
//   border-radius: 50px;
//   background: linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%);
//   transition: all 0.5s ease-in-out;
//   transform-style: preserve-3d;
//   box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
// }

// .glass {
//   transform-style: preserve-3d;
//   position: absolute;
//   inset: 8px;
//   border-radius: 55px;
//   border-top-right-radius: 100%;
//   background: linear-gradient(0deg, rgba(255, 255, 255, 0.349) 0%, rgba(255, 255, 255, 0.815) 100%);
//   /* -webkit-backdrop-filter: blur(5px);
//   backdrop-filter: blur(5px); */
//   transform: translate3d(0px, 0px, 25px);
//   border-left: 1px solid white;
//   border-bottom: 1px solid white;
//   transition: all 0.5s ease-in-out;
// }

// .content {
//   padding: 100px 60px 0px 30px;
//   transform: translate3d(0, 0, 26px);
// }

// .content .title {
//   display: block;
//   color: #00894d;
//   font-weight: 900;
//   font-size: 20px;
// }

// .content .text {
//   display: block;
//   color: rgba(0, 137, 78, 0.7647058824);
//   font-size: 15px;
//   margin-top: 20px;
// }

// .bottom {
//   padding: 10px 12px;
//   transform-style: preserve-3d;
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   right: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   transform: translate3d(0, 0, 26px);
// }

// .bottom .view-more {
//   display: flex;
//   align-items: center;
//   width: 40%;
//   justify-content: flex-end;
//   transition: all 0.2s ease-in-out;
// }

// .bottom .view-more:hover {
//   transform: translate3d(0, 0, 10px);
// }

// .bottom .view-more .view-more-button {
//   background: none;
//   border: none;
//   color: #00c37b;
//   font-weight: bolder;
//   font-size: 12px;
// }

// .bottom .view-more .svg {
//   fill: none;
//   stroke: #00c37b;
//   stroke-width: 3px;
//   max-height: 15px;
// }

// .bottom .social-buttons-container {
//   display: flex;
//   gap: 10px;
//   transform-style: preserve-3d;
// }

// .bottom .social-buttons-container .social-button {
//   width: 30px;
//   aspect-ratio: 1;
//   padding: 5px;
//   background: rgb(255, 255, 255);
//   border-radius: 50%;
//   border: none;
//   display: grid;
//   place-content: center;
//   box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
// }

// .bottom .social-buttons-container .social-button:first-child {
//   transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
// }

// .bottom .social-buttons-container .social-button:nth-child(2) {
//   transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
// }

// .bottom .social-buttons-container .social-button:nth-child(3) {
//   transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
// }

// .bottom .social-buttons-container .social-button .svg {
//   width: 15px;
//   fill: #00894d;
// }

// .bottom .social-buttons-container .social-button:hover {
//   background: black;
// }

// .bottom .social-buttons-container .social-button:hover .svg {
//   fill: white;
// }

// .bottom .social-buttons-container .social-button:active {
//   background: rgb(255, 234, 0);
// }

// .bottom .social-buttons-container .social-button:active .svg {
//   fill: black;
// }

// .logo {
//   position: absolute;
//   right: 0;
//   top: 0;
//   transform-style: preserve-3d;
// }

// .logo .circle {
//   display: block;
//   position: absolute;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   top: 0;
//   right: 0;
//   box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
//   -webkit-backdrop-filter: blur(5px);
//   backdrop-filter: blur(5px);
//   background: rgba(0, 249, 203, 0.2);
//   transition: all 0.5s ease-in-out;
// }

// .logo .circle1 {
//   width: 170px;
//   transform: translate3d(0, 0, 20px);
//   top: 8px;
//   right: 8px;
// }

// .logo .circle2 {
//   width: 140px;
//   transform: translate3d(0, 0, 40px);
//   top: 10px;
//   right: 10px;
//   -webkit-backdrop-filter: blur(1px);
//   backdrop-filter: blur(1px);
//   transition-delay: 0.4s;
// }

// .logo .circle3 {
//   width: 110px;
//   transform: translate3d(0, 0, 60px);
//   top: 17px;
//   right: 17px;
//   transition-delay: 0.8s;
// }

// .logo .circle4 {
//   width: 80px;
//   transform: translate3d(0, 0, 80px);
//   top: 23px;
//   right: 23px;
//   transition-delay: 1.2s;
// }

// .logo .circle5 {
//   width: 50px;
//   transform: translate3d(0, 0, 100px);
//   top: 30px;
//   right: 30px;
//   display: grid;
//   place-content: center;
//   transition-delay: 1.6s;
// }

// .logo .circle5 .svg {
//   width: 20px;
//   fill: white;
// }

// .parent:hover .card {
//   transform: rotate3d(1, 1, 0, 30deg);
//   box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
// }

// .parent:hover .card .bottom .social-buttons-container .social-button {
//   transform: translate3d(0, 0, 50px);
//   box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
// }

// .parent:hover .card .logo .circle2 {
//   transform: translate3d(0, 0, 60px);
// }

// .parent:hover .card .logo .circle3 {
//   transform: translate3d(0, 0, 80px);
// }

// .parent:hover .card .logo .circle4 {
//   transform: translate3d(0, 0, 100px);
// }

// .parent:hover .card .logo .circle5 {
//   transform: translate3d(0, 0, 120px);
// }
// `;

const StyledWrapper = styled.div`
  .parent {
    width: 290px;
    height: 300px;
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, #1a56db 0%, #447efa 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px,
      rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

<<<<<<< HEAD
  @media (max-width: 768px) {
    .parent {
      // margin-top: 7rem;
      width: 300px; /* Decreased width for mobile */
      height: 350px; /* Decreased height for mobile */
    }

    .content {
      padding: 60px 30px 0px 15px; /* Adjusted padding for mobile */
    }

    .headshot {
      width: 90px; /* Smaller headshot size for mobile */
      height: 90px; /* Smaller headshot size for mobile */
      margin-top: -5rem; /* Move image up */
    }

    .content .title {
      font-size: 18px; /* Smaller title font size for mobile */
    }

    .content .text {
      font-size: 14px; /* Smaller text font size for mobile */
    }

    .bottom {
      padding: 10px; /* Adjusted padding for mobile */
    }

    .bottom .social-buttons-container .social-button {
      width: 30px; /* Smaller social button size for mobile */
      padding: 5px; /* Adjusted padding for mobile */
    }

    .bottom .social-buttons-container .social-button .svg {
      width: 12px; /* Smaller SVG size for mobile */
    }

    /* Hide logo and span rings on mobile */
    .logo {
      display: none; /* Hide the logo */
    }

    .parent:hover .card .logo {
      display: none; /* Prevent hover effects from showing logo */
    }

    /* Adjust the positions of the circles */
    .logo .circle {
      display: block;
      position: absolute;
      aspect-ratio: 1;
      border-radius: 50%;
      top: 0;
      right: 0;
      box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      background: rgba(26, 86, 219, 0.2); /* Lightened #1a56db */
      transition: all 0.5s ease-in-out;
    }

    .logo .circle1 {
      width: 230px; /* Increased size */
      transform: translate3d(0, 0, 20px);
      top: 5px; /* Move up */
      right: 5px;
      background: rgba(68, 126, 250, 0.3); /* Lightened #447efa */
    }

    .logo .circle2 {
      width: 180px; /* Increased size */
      transform: translate3d(0, 0, 40px);
      top: 7px; /* Move up */
      right: 7px;
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
      background: rgba(68, 126, 250, 0.2); /* Lightened #447efa */
      transition-delay: 0.4s;
    }

    .logo .circle3 {
      width: 140px; /* Increased size */
      transform: translate3d(0, 0, 60px);
      top: 14px; /* Move up */
      right: 14px;
      background: rgba(26, 86, 219, 0.3); /* Lightened #1a56db */
      transition-delay: 0.8s;
    }

    .logo .circle4 {
      width: 100px; /* Increased size */
      transform: translate3d(0, 0, 80px);
      top: 20px; /* Move up */
      right: 20px;
      background: rgba(68, 126, 250, 0.3); /* Lightened #447efa */
      transition-delay: 1.2s;
    }

    .logo .circle5 {
      width: 70px; /* Increased size */
      transform: translate3d(0, 0, 100px);
      top: 26px; /* Move up */
      right: 26px;
      display: grid;
      place-content: center;
      background: rgba(26, 86, 219, 0.4); /* Lightened #1a56db */
      transition-delay: 1.6s;
    }

    .logo .circle5 .svg {
      width: 20px;
      fill: white;
    }

    .parent:hover .card {
      transform: rotate3d(1, 1, 0, 30deg);
      box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
        rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
    }

    .parent:hover .card .bottom .social-buttons-container .social-button {
      transform: translate3d(0, 0, 50px);
      box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
    }

    .parent:hover .card .logo .circle2 {
      transform: translate3d(0, 0, 60px);
    }

    .parent:hover .card .logo .circle3 {
      transform: translate3d(0, 0, 80px);
    }

    .parent:hover .card .logo .circle4 {
      transform: translate3d(0, 0, 100px);
    }

    .parent:hover .card .logo .circle5 {
      transform: translate3d(0, 0, 120px);
    }
  }
  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 10px; /* Adjusted inset for better fit */
=======
  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
<<<<<<< HEAD
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
=======
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }
<<<<<<< HEAD
  .headshot {
    width: 150px; /* Set appropriate width */
    height: 150px; /* Set appropriate height */
    border-radius: 50%; /* Circular image */
    object-fit: cover; /* Crop the image to fit */
    margin-bottom: 10px; /* Space between image and title */
  }
  .content {
    padding: 120px 80px 0px 40px; /* Adjusted padding */
=======

  .content {
    padding: 100px 60px 0px 30px;
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
<<<<<<< HEAD
    color: #000000;
    font-weight: 900;
    font-size: 25px; /* Increased font size */
=======
    color: #ffffff; /* Adjust title color */
    font-weight: 900;
    font-size: 20px;
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
  }

  .content .text {
    display: block;
<<<<<<< HEAD
    color: rgba(255, 255, 255, 0.7647058824);
    font-size: 18px; /* Increased font size */
=======
    color: rgba(255, 255, 255, 0.7647058824); /* Adjust text color */
    font-size: 15px;
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    margin-top: 20px;
  }

  .bottom {
<<<<<<< HEAD
    padding: 15px 16px; /* Adjusted padding */
    transform-style: preserve-3d;
    position: absolute;
    bottom: 30px; /* Adjusted position */
    left: 30px; /* Adjusted position */
    right: 30px; /* Adjusted position */
=======
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
<<<<<<< HEAD
    color: #00c37b;
=======
    color: #00c37b; /* Adjust button color */
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    font-weight: bolder;
    font-size: 12px;
  }

  .bottom .view-more .svg {
    fill: none;
<<<<<<< HEAD
    stroke: #00c37b;
=======
    stroke: #00c37b; /* Adjust SVG color */
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    stroke-width: 3px;
    max-height: 15px;
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
<<<<<<< HEAD
    width: 40px; /* Increased button size */
    aspect-ratio: 1;
    padding: 7px; /* Adjusted padding */
=======
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
  }

<<<<<<< HEAD
  .bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s,
      box-shadow 0.2s ease-in-out 0.4s;
  }

  .bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s,
      box-shadow 0.2s ease-in-out 0.6s;
  }

  .bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s,
      box-shadow 0.2s ease-in-out 0.8s;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 15px;
    fill: #1a56db;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black;
=======
  .bottom .social-buttons-container .social-button:hover {
    background: #1a56db; /* New hover color */
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white; /* New SVG hover color */
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

<<<<<<< HEAD
  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(26, 86, 219, 0.2); /* Lightened #1a56db */
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 230px; /* Increased size */
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
    background: rgba(68, 126, 250, 0.3); /* Lightened #447efa */
  }

  .logo .circle2 {
    width: 180px; /* Increased size */
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    background: rgba(68, 126, 250, 0.2); /* Lightened #447efa */
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 140px; /* Increased size */
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    background: rgba(26, 86, 219, 0.3); /* Lightened #1a56db */
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 100px; /* Increased size */
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    background: rgba(68, 126, 250, 0.3); /* Lightened #447efa */
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 70px; /* Increased size */
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    background: rgba(26, 86, 219, 0.4); /* Lightened #1a56db */
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

=======
>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
      rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

<<<<<<< HEAD
  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
`;

=======
  /* Continue updating hover effects as needed... */
`;

// Make sure to apply similar color updates in other parts as well as hover effects to suit your theme.

>>>>>>> 5428654f372888fd6f6caf07fac11d7ee6aa8ff3
export default Card;
