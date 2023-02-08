const Pg = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-gray-600 font-text-sm-medium1">
          <div className="self-stretch relative h-40 shrink-0 overflow-hidden lg:h-60">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-40 object-cover md:h-60"
              alt=""
              src="https://static.licdn.com/aero-v1/sc/h/4wa9q32eqfit0kryprbbvcei6"
            />
          </div>
         
          <div className="self-stretch flex flex-col justify-start items-start py-0 px-4 gap-[16px] mt-[-48px]  lg:flex lg:flex-row lg:items-center lg:justify-between lg:mt-[-40px]">
            <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px] text-xl text-gray-900 lg:flex lg:flex-row lg:items-center lg:justify-center">
              <img
                className="relative rounded-base w-32 h-32 shrink-0 z-[0] lg:w-44 lg:h-44"
                alt=""
                src="data:image/jpeg;base64,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"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[1] -mt-5 lg:mt-14">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Prashant Bisht
                </div>
                <div className="self-stretch relative text-lg leading-[24px] text-gray-600">
                  prashantbisht@gmail.com
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px] ">
              <button className="cursor-pointer py-2.5 px-4 bg-white rounded-lg  overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-3001 transition ease-in duration-200 hover:bg-[#F9FAFB]">
                <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-gray-700 text-left">
                  Share
                </div>
              </button>
              <button className="cursor-pointer py-2.5 px-4 bg-primary-6001 rounded-lg  overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-primary-6001 transition ease-in duration-200 hover:bg-[#6941C6] hover:text-white" >
                <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-base-white1 text-left ">
                  View profile
                </div>
              </button>
            </div>
          </div>
      </div>
    );
  };
  
  export default Pg;