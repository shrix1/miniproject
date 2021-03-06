import React from "react";
import image from "./bg.png";

export default function Home() {
  return (
    <>
      <main>
        <section
          id="home"
          className="bg-mainbl-200 md:via-mainbl-200 
          to-mainpp-200 w-[100%] h-[80vh] flex md:h-[80vh] overflow-hidden
        justify-around items-center flex-col font-pop md:flex-row "
        >
          {/*------------------- image ----------------------*/}
          <div className="w-[350px] md:w-[1000px] ">
            <a
              href="https://github.com/shrix1/Black-panther-theme/blob/main/themes/panther-theme.json"
              target="blank"
            >
              <img src={image} alt="themephoto" title="theme" />
            </a>
          </div>
          {/* --------------------button-----------------------*/}
          <div className="md:-ml-[190px] -mt-[100px]">
            {" "}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=Shriprasanna.blue-dark-theme"
              target="blank"
              rel="noreferrer"
            >
              <button
                title="download"
                className=" w-[220px] h-20 bg-mainbl-50/75 rounded-md transition-all
            before:absolute before:-translate-x-7 before:-translate-y-4
            before:border-mainpp-200 before:w-[221px] before:h-20 
            before:z-[0] before:rounded-md before:border-[3px] 
            hover:before:border-[3.5px] hover:before:-translate-x-[37px] 
            hover:before:-translate-y-[9px] before:transition-transform 
            before:duration-500 hover:bg-transparent transition-color ease-in
            duration-500 before:ease-in-out ml-[5rem] md:w-[299px] md:h-[105px] 
            md:before:w-[300px] md:before:h-[105px] md:before:-translate-x-[60px]
            md:before:-translate-y-[30px] md:hover:before:-translate-x-[49px]
            md:hover:before:-translate-y-[19px] md:hover:before:border-4 
            md:border-[3px] md:ml-12 group "
              >
                {/* ------------------add link here--------------*/}

                <span
                  className="text-3xl font-semibold text-mainbl-300 md:text-[40px] hover:text-white
                transition-color duration-500 group-hover:text-white "
                >
                  Download <br />
                </span>
                <span
                  className="font-extrabold text-mainbl-300 group-hover:text-white 
                transition-color duration-500"
                >
                  Stable Version :{" "}
                </span>
                <span
                  className="text-mainbl-300 font-extrabold text-[18px] group-hover:text-mainpp-200 
                transition-color duration-500"
                >
                  1.2.4
                </span>
              </button>
            </a>
            {/*------------------- b0ttom content--------------------- */}
            <div
              className="flex justify-center items-center mt-[15px] 
              flex-col w-[400px] h-[20vh] -mb-[100px] gap-2 md:w-[420px]"
            >
              <h1 className="text-3xl text-white md:text-[41px]" title="#1">
                Best{" "}
                <span className="text-mainpp-200 md:text-mainpp-200">
                  VSCODE
                </span>{" "}
                theme
              </h1>
              <h1
                className="text-white text-[20px] md:text-[30px]"
                title="100 downloads"
              >
                downloads :{" "}
                <span className="text-mainpp-200 md:text-mainpp-200 ">
                  100+
                </span>
              </h1>
              <h1
                className="text-white text-[20px] md:text-[26px]"
                title="positive"
              >
                reviews :{" "}
                <span className="text-mainpp-200 md:text-mainpp-200">10+</span>
              </h1>

              {/*-------------------- stars/rating -----------------*/}
              <div title="rating 4+">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="153.128"
                  height="31.216"
                  viewBox="0 0 153.128 31.216"
                >
                  <path
                    id="Icon_ionic-ios-star"
                    data-name="Icon ionic-ios-star"
                    d="M26.4,10.891H18.157l-2.5-6.963a.932.932,0,0,0-1.7,0l-2.5,6.963h-8.3a.87.87,0,0,0-.9.835.574.574,0,0,0,.017.141.792.792,0,0,0,.375.59L9.416,16.9l-2.6,7.041a.8.8,0,0,0,.308.94.9.9,0,0,0,.5.2,1.15,1.15,0,0,0,.56-.188l6.612-4.39,6.612,4.39a1.1,1.1,0,0,0,.56.188.835.835,0,0,0,.5-.2.8.8,0,0,0,.308-.94L20.18,16.9,26.9,12.415l.162-.13a.854.854,0,0,0,.291-.559A.923.923,0,0,0,26.4,10.891Z"
                    transform="matrix(0.358, 0.934, -0.934, 0.358, 22.616, -3.31)"
                    fill="#1D9B"
                  />
                  <path
                    id="Icon_ionic-ios-star-2"
                    data-name="Icon ionic-ios-star"
                    d="M26.4,10.891H18.157l-2.5-6.963a.932.932,0,0,0-1.7,0l-2.5,6.963h-8.3a.87.87,0,0,0-.9.835.574.574,0,0,0,.017.141.792.792,0,0,0,.375.59L9.416,16.9l-2.6,7.041a.8.8,0,0,0,.308.94.9.9,0,0,0,.5.2,1.15,1.15,0,0,0,.56-.188l6.612-4.39,6.612,4.39a1.1,1.1,0,0,0,.56.188.835.835,0,0,0,.5-.2.8.8,0,0,0,.308-.94L20.18,16.9,26.9,12.415l.162-.13a.854.854,0,0,0,.291-.559A.923.923,0,0,0,26.4,10.891Z"
                    transform="matrix(0.358, 0.934, -0.934, 0.358, 54.484, -3.31)"
                    fill="#1D9B"
                  />
                  <path
                    id="Icon_ionic-ios-star-3"
                    data-name="Icon ionic-ios-star"
                    d="M26.4,10.891H18.157l-2.5-6.963a.932.932,0,0,0-1.7,0l-2.5,6.963h-8.3a.87.87,0,0,0-.9.835.574.574,0,0,0,.017.141.792.792,0,0,0,.375.59L9.416,16.9l-2.6,7.041a.8.8,0,0,0,.308.94.9.9,0,0,0,.5.2,1.15,1.15,0,0,0,.56-.188l6.612-4.39,6.612,4.39a1.1,1.1,0,0,0,.56.188.835.835,0,0,0,.5-.2.8.8,0,0,0,.308-.94L20.18,16.9,26.9,12.415l.162-.13a.854.854,0,0,0,.291-.559A.923.923,0,0,0,26.4,10.891Z"
                    transform="matrix(0.358, 0.934, -0.934, 0.358, 85.484, -3.31)"
                    fill="#1D9B"
                  />
                  <path
                    id="Icon_ionic-ios-star-4"
                    data-name="Icon ionic-ios-star"
                    d="M26.4,10.891H18.157l-2.5-6.963a.932.932,0,0,0-1.7,0l-2.5,6.963h-8.3a.87.87,0,0,0-.9.835.574.574,0,0,0,.017.141.792.792,0,0,0,.375.59L9.416,16.9l-2.6,7.041a.8.8,0,0,0,.308.94.9.9,0,0,0,.5.2,1.15,1.15,0,0,0,.56-.188l6.612-4.39,6.612,4.39a1.1,1.1,0,0,0,.56.188.835.835,0,0,0,.5-.2.8.8,0,0,0,.308-.94L20.18,16.9,26.9,12.415l.162-.13a.854.854,0,0,0,.291-.559A.923.923,0,0,0,26.4,10.891Z"
                    transform="translate(117.139 -3.02) rotate(71)"
                    fill="#1D9B"
                  />
                  <path
                    id="Icon_ionic-md-star-half"
                    data-name="Icon ionic-md-star-half"
                    d="M31.056,13.44l-9.8-.762L17.426,4.5,13.6,12.678l-9.8.762,7.435,5.833L9,27.947l8.423-4.6,8.423,4.6-2.228-8.675ZM18.542,21.675l-1.115-.609V9.509l1.84,3.931.507,1.084,1.3.1,4.713.366L22.207,17.8l-.983.772.295,1.147,1.071,4.17Z"
                    transform="translate(122.073 -0.615)"
                    fill="#1D9B"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
