'use client';

interface SpeechBubbleProps {}

export default function SpeechBubble() {
  return (
    <div className="w-full px-[33px] py-[16px]">
      <div className="flex w-full items-end justify-center gap-[36px] pb-[12px] font-bold text-white">
        <div className=" pb-[7px]">
          <div className="relative flex h-[60px] w-[61px] items-center justify-center rounded-[12px] rounded-br-[0] bg-[#CFCFCF] px-[12px] py-[18px]">
            <p className="text-[20px]">0%</p>
            <span className="absolute bottom-[-7px] right-0 border-[7px] border-transparent border-r-[#CFCFCF] border-t-transparent "></span>
          </div>
        </div>
        <div className=" pb-[10px]">
          <div className="relative flex h-[90px] w-[90px] items-center justify-center rounded-[12px] rounded-br-[0] bg-[#000000] px-[13px] py-[31px]">
            <p className="text-[28px]">0%</p>
            <span className="absolute bottom-[-10px] right-0 border-[10px] border-transparent border-r-[#000000] border-t-transparent "></span>
          </div>
        </div>
        <div className=" pb-[7px]">
          <div className="relative flex h-[60px] w-[61px] items-center justify-center rounded-[12px] rounded-br-[0] bg-[#CFCFCF] px-[12px] py-[18px]">
            <p className="text-[20px]">0%</p>
            <span className="absolute bottom-[-7px] right-0 border-[7px] border-transparent border-r-[#CFCFCF] border-t-transparent "></span>
          </div>
        </div>
      </div>
      <div className=" flex h-[4px] w-full justify-center bg-[#D9D9D9]">
        <div className=" h-full w-[130px] bg-[#000000]"></div>
      </div>
    </div>
  );
}
