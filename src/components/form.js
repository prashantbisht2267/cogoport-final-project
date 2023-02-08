import React from "react";
const Form = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-sm-medium1 py-10 px-4 gap-[20px] lg:flex lg:flex-row lg:mt-[-20px]">
        <div className="w-[280px] flex flex-col items-start justify-start lg:w-1/4">
          <div className="self-stretch relative leading-[20px] font-medium">
            Personal info
          </div>
          <div className="self-stretch relative leading-[20px] text-gray-600">
            Update your photo and personal details.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray overflow-hidden flex flex-col items-start justify-start text-gray-600 border-[1px] border-solid border-gray-200 lg:w-3/4">
          <form className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[24px]">
         
            <div className=" flex flex-col self-stretch gap-5 lg:flex-row ">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] lg:w-1/2">
              <div className="font-medium">First Name</div>
                <input className="self-stretch rounded-lg bg-white py-2.5 px-3.5 text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="text" defaultValue="Olivia" placeholder="First Name" />
            </div>
  
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] lg:w-1/2">
              <div className="font-medium">Last Name</div>
                <input className="self-stretch rounded-lg bg-white py-2.5 px-3.5 text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="text" defaultValue="Rhye" placeholder="Last Name"/>
            </div>
  
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="relative leading-[20px] font-medium">Email</div>
              <div className="self-stretch rounded-lg border-[1px] border-solid border-gray-300 flex ">
  
                <img className="pl-3.5" src="https://bafkreigdti2yycwghezudlfrcv336i6xbcmoaajuodtziei6xgsh4v64aq.ipfs.nftstorage.link/" alt="" />
                <input className="self-stretch rounded-lg border-none bg-white py-2.5 px-3.5 gap-[8px] text-gray-900 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="email" defaultValue="olivia@untitledui.com" placeholder="Email"/>
              </div>
            </div>
  
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] lg:flex-row ">
              <img
                className="rounded-full w-16 h-16 shrink-0 object-cover"
                alt=""
                src="data:image/jpeg;base64,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"
              />
              <div className="self-stretch flex flex-col items-start justify-start lg:w-full">
                <div className="self-stretch rounded-xl bg-base-white1 flex flex-col py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-2001 transition ease-in duration-200 hover:border-[#7F56D9] hover:border-[2px] hover:m-[-0.75px] ">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
                    <img
                      className="relative rounded-small w-[46px] h-[46px] shrink-0 cursor-pointer"
                      alt=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OuyY6kt2EUEzYfDVmID8QY2QHD4iPy3aL7G0aWPJlA&s"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <div className="leading-[18px] mb-2 text-center">
                        <span className="text-primary-7001 font-semibold">
                          Click to upload
                        </span>
                        <span> or drag and drop</span>
                      </div>
                      <span className="leading-[18px] text-center">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="self-stretch flex flex-col pt-0 px-0 pb-3 items-center justify-start gap-[12px]">
            <div className="h-0.5 w-full bg-[#EAECF0]"></div>
            <div className="self-stretch flex flex-row py-0 px-4 items-center justify-end gap-[16px]">
              <div className=" flex flex-row items-center justify-end gap-[12px]">
                <button className="cursor-pointer py-2.5 px-4 bg-base-white1 rounded-lg border-[1px] border-solid border-gray-3001 transition ease-in duration-200 hover:bg-[#F9FAFB]">
                  <div className=" font-semibold font-text-sm-medium1 text-gray-7001">
                    Cancel
                  </div>
                </button>
                <button
                onClick={() => console.log("hv")}
                  className=" hover:text-white cursor-pointer py-2.5 px-4 bg-primary-6001 rounded-lg border-[1px] border-solid border-primary-6001 transition ease-in duration-200 hover:bg-[#6941C6]"
                >
                  <div  className="font-semibold font-text-sm-medium1 ">
                    Save changes
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Form;