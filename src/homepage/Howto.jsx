import React from "react";

const Howto = () => {
  return (
    <>
      {/*--------------------------main section-------------------------- */}
      <main
        id="Howto"
        className="flex flex-col  h-[43vh] justify-evenly p-4 items-center 
        font-pop capitalize bg-mainbl-200"
      >
        {/*--------------------------- title---------------------------- */}
        <h1
          className="text-3xl md:text-6xl text-white font-medium
        "
        >
          how to <span className="text-mainpp-200">download</span> :
        </h1>
        {/*--------------------------- main div--------------------------- */}
        <div className="md:text-3xl  ">
          <div className="md:flex md:justify-between md:items-center">
            {/*------------- vscode dload div----------------------- */}
            <div className="md:w-[500px] md:mr-5 ">
              <h1 className="text-xl md:text-3xl text-mainpp-200 tracking-[0.7px] md:mb-1">
                From VSCODE code editor :
              </h1>
              <h1 className="text-mainbl-50 ">
                go to the extension tab <br />
                <span className="text-mainpp-200 font-bold ml-5 ">
                  {">>>"}
                </span>{" "}
                search for black panther
                <br />
                <span className="text-mainpp-200 font-bold ml-5">
                  {">>>"}
                </span>{" "}
                Download it .
              </h1>
            </div>
            <br />
            {/*------------------------- or------------------------------------- */}
            <h1 className="text-center text-mainpp-200">(or)</h1>
            {/*--------------------- manual dload div--------------------------------*/}
            <div className="md:w-[500px] md:ml-10 mt-4">
              <h1 className="text-xl md:text-3xl text-mainpp-200 tracking-[1px] md:mb-1">
                Manual download :
              </h1>
              <span className="text-mainbl-50">
                follow the{" "}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=Shriprasanna.blue-dark-theme"
                  className="text-mainpp-200 underline"
                  target="blank"
                  rel="noreferrer"
                >
                  link
                </a>{" "}
                to download the awesome theme from vscode marketplace .
              </span>{" "}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Howto;
