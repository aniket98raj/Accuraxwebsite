import svgPaths from "./svg-dha4gw3jjp";

function Span() {
  return (
    <div className="h-[48.006px] relative shrink-0 w-[48.083px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[48px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[0.05px] tracking-[0.3516px]">🦖</p>
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="h-[79.991px] relative shrink-0 w-full" data-name="h1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[0.59px] tracking-[0.3691px] w-[184px] whitespace-pre-wrap">GODZILLA Dashboard</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[55.994px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#51a2ff] text-[18px] top-[-0.17px] tracking-[-0.4395px] w-[139px] whitespace-pre-wrap">High Risk Growth Model</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[135.984px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <H />
        <P />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[135.984px] relative shrink-0 w-[243.519px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.999px] items-center relative size-full">
        <Span />
        <Container2 />
      </div>
    </div>
  );
}

function BookOpen() {
  return (
    <div className="absolute left-[10.71px] size-[15.998px] top-[8px]" data-name="BookOpen">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_793)" id="BookOpen">
          <path d="M7.99908 4.66613V13.9984" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p35084800} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_793">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[31.996px] relative rounded-[8px] shrink-0 w-[101.149px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(43,127,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <BookOpen />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[65.7px] not-italic text-[#51a2ff] text-[14px] text-center top-[6.41px] tracking-[-0.1504px]">Tutorial</p>
      </div>
    </div>
  );
}

function RotateCcw() {
  return (
    <div className="absolute left-[10.71px] size-[15.998px] top-[8px]" data-name="RotateCcw">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g id="RotateCcw">
          <path d={svgPaths.p10b14560} id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p1b89bbd8} id="Vector_2" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[31.996px] min-h-px min-w-px opacity-30 relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <RotateCcw />
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[87.2px] not-italic text-[#ff6467] text-[14px] text-center top-[6.41px] tracking-[-0.1504px]">Reset Session</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[257.197px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.999px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[135.984px] items-center justify-between pr-[-151.563px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Target() {
  return (
    <div className="absolute left-0 size-[15.998px] top-0" data-name="Target">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_809)" id="Target">
          <path d={svgPaths.p3bb7fc80} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p13573180} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p27913500} id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_809">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute content-stretch flex h-[12.496px] items-start left-0 top-[24px] w-[86.973px]" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[0.1172px] whitespace-pre-wrap">Current Session</p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[27.997px] left-0 top-[40.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[0.12px] tracking-[-0.4492px]">30</p>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[13.501px] left-0 top-[72.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.41px] tracking-[0.167px]">Trades left</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[85.99px] relative shrink-0 w-[86.973px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Target />
        <P1 />
        <P2 />
        <P3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.401px] items-start left-0 pb-[0.707px] pl-[12.706px] pr-[0.707px] pt-[12.706px] rounded-[14px] top-0 w-[112.385px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.252deg, rgba(43, 127, 255, 0.1) 0%, rgba(173, 70, 255, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(43,127,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div1 />
    </div>
  );
}

function Percent() {
  return (
    <div className="absolute left-0 size-[15.998px] top-0" data-name="Percent">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g id="Percent">
          <path d={svgPaths.p13b39580} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.pb3a480} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p2f93b080} id="Vector_3" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
      </svg>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute content-stretch flex h-[12.496px] items-start left-0 top-[24px] w-[86.973px]" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[0.1172px] whitespace-pre-wrap">Win Probability</p>
    </div>
  );
}

function P5() {
  return (
    <div className="absolute h-[27.997px] left-0 top-[40.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[0.12px] tracking-[-0.4492px]">55%</p>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute h-[13.501px] left-0 top-[72.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.41px] tracking-[0.167px]">Expected</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[85.99px] relative shrink-0 w-[86.973px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Percent />
        <P4 />
        <P5 />
        <P6 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.401px] items-start left-[124.38px] pb-[0.707px] pl-[12.706px] pr-[0.707px] pt-[12.706px] rounded-[14px] top-0 w-[112.385px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.252deg, rgba(0, 201, 80, 0.1) 0%, rgba(0, 188, 125, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(0,201,80,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div2 />
    </div>
  );
}

function Activity() {
  return (
    <div className="absolute left-0 size-[15.998px] top-0" data-name="Activity">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_802)" id="Activity">
          <path d={svgPaths.p7360b00} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_802">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P7() {
  return (
    <div className="absolute content-stretch flex h-[12.496px] items-start left-0 top-[24px] w-[86.973px]" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[0.1172px] whitespace-pre-wrap">Actual Win Rate</p>
    </div>
  );
}

function P8() {
  return (
    <div className="absolute h-[27.997px] left-0 top-[40.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[0.12px] tracking-[-0.4492px]">0.0%</p>
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[13.501px] left-0 top-[72.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.41px] tracking-[0.167px]">Performance</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="h-[85.99px] relative shrink-0 w-[86.973px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Activity />
        <P7 />
        <P8 />
        <P9 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.401px] items-start left-[248.77px] pb-[0.707px] pl-[12.706px] pr-[0.707px] pt-[12.706px] rounded-[14px] top-0 w-[112.385px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.252deg, rgba(173, 70, 255, 0.1) 0%, rgba(246, 51, 154, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(173,70,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div3 />
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="absolute left-0 size-[15.998px] top-0" data-name="TrendingUp">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_751)" id="TrendingUp">
          <path d={svgPaths.p19afbe58} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p3c797d00} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_751">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P10() {
  return (
    <div className="absolute content-stretch flex h-[12.496px] items-start left-0 top-[24px] w-[86.973px]" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[0.1172px] whitespace-pre-wrap">Winning Trades</p>
    </div>
  );
}

function P11() {
  return (
    <div className="absolute h-[27.997px] left-0 top-[40.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#05df72] text-[20px] top-[0.12px] tracking-[-0.4492px]">0</p>
    </div>
  );
}

function P12() {
  return (
    <div className="absolute h-[13.501px] left-0 top-[72.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.41px] tracking-[0.167px]">Positive</p>
    </div>
  );
}

function Div4() {
  return (
    <div className="h-[85.99px] relative shrink-0 w-[86.973px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TrendingUp />
        <P10 />
        <P11 />
        <P12 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.401px] items-start left-0 pb-[0.707px] pl-[12.706px] pr-[0.707px] pt-[12.706px] rounded-[14px] top-[123.4px] w-[112.385px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.252deg, rgba(0, 201, 80, 0.1) 0%, rgba(0, 187, 167, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(0,201,80,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div4 />
    </div>
  );
}

function TrendingDown() {
  return (
    <div className="absolute left-0 size-[15.998px] top-0" data-name="TrendingDown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_768)" id="TrendingDown">
          <path d={svgPaths.p3d5cea40} id="Vector" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p2dda8c00} id="Vector_2" stroke="var(--stroke-0, #FF6467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_768">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P13() {
  return (
    <div className="absolute content-stretch flex h-[12.496px] items-start left-0 top-[24px] w-[86.973px]" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[0.1172px] whitespace-pre-wrap">Losing Trades</p>
    </div>
  );
}

function P14() {
  return (
    <div className="absolute h-[27.997px] left-0 top-[40.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#ff6467] text-[20px] top-[0.12px] tracking-[-0.4492px]">0</p>
    </div>
  );
}

function P15() {
  return (
    <div className="absolute h-[13.501px] left-0 top-[72.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.41px] tracking-[0.167px]">Negative</p>
    </div>
  );
}

function Div5() {
  return (
    <div className="h-[85.99px] relative shrink-0 w-[86.973px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TrendingDown />
        <P13 />
        <P14 />
        <P15 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.401px] items-start left-[124.38px] pb-[0.707px] pl-[12.706px] pr-[0.707px] pt-[12.706px] rounded-[14px] top-[123.4px] w-[112.385px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.252deg, rgba(251, 44, 54, 0.1) 0%, rgba(255, 105, 0, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(251,44,54,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div5 />
    </div>
  );
}

function DollarSign() {
  return (
    <div className="absolute left-0 size-[15.998px] top-0" data-name="DollarSign">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_781)" id="DollarSign">
          <path d="M7.99908 1.33318V14.665" id="Vector" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.pa388660} id="Vector_2" stroke="var(--stroke-0, #FDC700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_781">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P16() {
  return (
    <div className="absolute content-stretch flex h-[12.496px] items-start left-0 top-[24px] w-[86.973px]" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] min-h-px min-w-px not-italic relative text-[#99a1af] text-[10px] tracking-[0.1172px] whitespace-pre-wrap">Starting Capital</p>
    </div>
  );
}

function P17() {
  return (
    <div className="absolute h-[23.997px] left-0 top-[40.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.88px] tracking-[-0.3125px]">₹0</p>
    </div>
  );
}

function P18() {
  return (
    <div className="absolute h-[13.501px] left-0 overflow-clip top-[68.49px] w-[86.973px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#6a7282] text-[9px] top-[0.41px] tracking-[0.167px]">Initial</p>
    </div>
  );
}

function Div6() {
  return (
    <div className="h-[81.991px] relative shrink-0 w-[86.973px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DollarSign />
        <P16 />
        <P17 />
        <P18 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111.401px] items-start left-[248.77px] pb-[0.707px] pl-[12.706px] pr-[0.707px] pt-[12.706px] rounded-[14px] top-[123.4px] w-[112.385px]" data-name="Card" style={{ backgroundImage: "linear-gradient(135.252deg, rgba(240, 177, 0, 0.1) 0%, rgba(255, 105, 0, 0.1) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(240,177,0,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[234.802px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function H1() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[158.623px]" data-name="h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-[-0.59px] tracking-[0.0703px]">Execute Trade</p>
      </div>
    </div>
  );
}

function Div7() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[295.745px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[137.122px] relative size-full">
        <H1 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute h-[19.998px] left-0 top-0 w-[295.745px]" data-name="label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Capital</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#101828] flex-[1_0_0] h-[49.409px] min-h-px min-w-px relative rounded-[10px]" data-name="input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] tracking-[-0.3125px]">Enter whole number only</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.707px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Span1() {
  return (
    <div className="h-[23.997px] relative shrink-0 w-[25.666px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-0.88px] tracking-[-0.3125px]">INR</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[11.999px] h-[49.409px] items-center left-0 top-[28px] w-[295.745px]" data-name="Container">
      <Input />
      <Span1 />
    </div>
  );
}

function P19() {
  return (
    <div className="absolute h-[15.998px] left-0 top-[81.4px] w-[295.745px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.71px]">Enter your starting capital</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[97.403px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container7 />
      <P19 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute h-[19.998px] left-0 top-0 w-[295.745px]" data-name="label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Risk Percentage</p>
    </div>
  );
}

function Input1() {
  return <div className="absolute bg-[#101828] border-[#1e2939] border-[0.707px] border-solid h-[49.409px] left-0 rounded-[10px] top-[28px] w-[295.745px]" data-name="input" />;
}

function P20() {
  return (
    <div className="absolute h-[15.998px] left-0 top-[81.4px] w-[295.745px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.71px]">Percentage of capital to risk per trade</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[97.403px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
      <P20 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Risk Per Trade</p>
    </div>
  );
}

function P21() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-[-0.59px] tracking-[0.0703px]">₹0.00</p>
    </div>
  );
}

function P22() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#51a2ff] text-[12px] top-[0.71px] w-[236px] whitespace-pre-wrap">Automatically calculated as 0% of current capital</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(43,127,255,0.1)] h-[93.404px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.707px] border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[0.707px] pt-[12.706px] px-[16.705px] relative size-full">
        <P21 />
        <P22 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[121.4px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container10 />
    </div>
  );
}

function Input2() {
  return <div className="shrink-0 size-[15.998px]" data-name="input" />;
}

function Label3() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[140.238px]" data-name="label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Enable Target Capital</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[7.999px] h-[19.998px] items-center relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <Label3 />
    </div>
  );
}

function P23() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.71px]">Session ends after 30 trades</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[43.995px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <P23 />
    </div>
  );
}

function TrendingUp1() {
  return (
    <div className="absolute left-[20.64px] size-[15.998px] top-[16px]" data-name="TrendingUp">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_805)" id="TrendingUp">
          <path d={svgPaths.p19afbe58} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p3c797d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_805">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#00a63e] h-[47.994px] left-0 rounded-[8px] top-0 w-[139.873px]" data-name="Button">
      <TrendingUp1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[86.13px] not-italic text-[14px] text-center text-white top-[14.41px] tracking-[-0.1504px]">Win Trade</p>
    </div>
  );
}

function TrendingDown1() {
  return (
    <div className="absolute left-[18.06px] size-[15.998px] top-[16px]" data-name="TrendingDown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_789)" id="TrendingDown">
          <path d={svgPaths.p3d5cea40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p2dda8c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_789">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#e7000b] h-[47.994px] left-[155.87px] rounded-[8px] top-0 w-[139.873px]" data-name="Button">
      <TrendingDown1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[86.56px] not-italic text-[14px] text-center text-white top-[14.41px] tracking-[-0.1504px]">Loss Trade</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[47.994px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Div8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[295.745px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.997px] items-start relative size-full">
        <Container6 />
        <Container8 />
        <Container9 />
        <Container11 />
        <Container13 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[47.994px] h-[649.582px] items-start left-0 pl-[32.703px] pr-[0.707px] py-[32.703px] rounded-[14px] top-0 w-[361.152px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.707px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Div7 />
      <Div8 />
    </div>
  );
}

function H2() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[327.741px]" data-name="h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[0.12px] tracking-[-0.4492px]">Current Session Trades</p>
      </div>
    </div>
  );
}

function Activity1() {
  return (
    <div className="absolute left-[131.87px] size-[63.993px] top-[47.99px]" data-name="Activity">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9926 63.9926">
        <g id="Activity">
          <path d={svgPaths.p3f264500} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33272" />
        </g>
      </svg>
    </div>
  );
}

function P24() {
  return (
    <div className="absolute h-[23.997px] left-0 top-[127.99px] w-[327.741px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[164.25px] not-italic text-[#6a7282] text-[16px] text-center top-[-0.88px] tracking-[-0.3125px]">No trades executed yet</p>
    </div>
  );
}

function P25() {
  return (
    <div className="absolute h-[19.998px] left-0 top-[159.98px] w-[327.741px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[164.09px] not-italic text-[#4a5565] text-[14px] text-center top-[0.41px] tracking-[-0.1504px]">Execute your first trade to start a session</p>
    </div>
  );
}

function Div9() {
  return (
    <div className="h-[227.974px] relative shrink-0 w-[327.741px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Activity1 />
        <P24 />
        <P25 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[47.994px] h-[337.375px] items-start left-0 pb-[0.707px] pl-[16.705px] pr-[0.707px] pt-[16.705px] rounded-[14px] top-[681.58px] w-[361.152px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.707px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <H2 />
      <Div9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[1018.954px] relative shrink-0 w-full" data-name="Container">
      <Card6 />
      <Card7 />
    </div>
  );
}

function History() {
  return (
    <div className="relative shrink-0 size-[23.997px]" data-name="History">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9972 23.9972">
        <g id="History">
          <path d={svgPaths.p3137a400} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99977" />
          <path d={svgPaths.p4de8d17} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99977" />
          <path d={svgPaths.p431a100} id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99977" />
        </g>
      </svg>
    </div>
  );
}

function H3() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[175.449px]" data-name="h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-white top-[-0.59px] tracking-[0.0703px]">Session History</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[295.745px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.999px] items-center relative size-full">
        <History />
        <H3 />
      </div>
    </div>
  );
}

function History1() {
  return (
    <div className="absolute left-[115.88px] size-[63.993px] top-[47.99px]" data-name="History">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.9926 63.9926">
        <g id="History">
          <path d={svgPaths.p2db95a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33272" />
          <path d={svgPaths.p137c5580} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33272" />
          <path d={svgPaths.p277c6780} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.33272" />
        </g>
      </svg>
    </div>
  );
}

function P26() {
  return (
    <div className="absolute h-[23.997px] left-0 top-[127.99px] w-[295.745px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[148.64px] not-italic text-[#6a7282] text-[16px] text-center top-[-0.88px] tracking-[-0.3125px]">No completed sessions yet</p>
    </div>
  );
}

function P27() {
  return (
    <div className="absolute h-[39.995px] left-0 top-[159.98px] w-[295.745px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[148px] not-italic text-[#4a5565] text-[14px] text-center top-[0.41px] tracking-[-0.1504px] w-[281px] whitespace-pre-wrap">Complete your first 30-trade session to see history</p>
    </div>
  );
}

function Div11() {
  return (
    <div className="h-[247.971px] relative shrink-0 w-[295.745px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <History1 />
        <P26 />
        <P27 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-black h-[393.369px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.707px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[47.994px] items-start pb-[0.707px] pl-[32.703px] pr-[0.707px] pt-[32.703px] relative size-full">
        <Div10 />
        <Div11 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-black h-[2039.09px] relative shrink-0 w-[393.148px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[31.996px] items-start pt-[96px] px-[15.998px] relative size-full">
        <Container />
        <Container4 />
        <Container5 />
        <Card8 />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9977 19.9977">
        <g id="svg">
          <path d={svgPaths.p2c002200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08309" />
        </g>
      </svg>
    </div>
  );
}

function Div13() {
  return (
    <div className="relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(43,127,255,0.2),0px_4px_6px_0px_rgba(43,127,255,0.2)] shrink-0 size-[35.996px]" data-name="div" style={{ backgroundImage: "linear-gradient(135deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg />
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[80.212px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[0.12px] tracking-[-0.4492px]">AccuraX</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[7.999px] h-[35.996px] items-center relative shrink-0 w-full" data-name="Link">
      <Div13 />
      <Span2 />
    </div>
  );
}

function P28() {
  return (
    <div className="h-[45.475px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Medium_Italic',sans-serif] font-medium italic leading-[22.75px] left-0 text-[14px] text-[rgba(142,197,255,0.7)] top-[0.83px] tracking-[-0.1504px] w-[338px] whitespace-pre-wrap">We teach concepts, not trades. We sell knowledge, not profits.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[97.469px] items-start left-0 top-0 w-[361.152px]" data-name="Container">
      <Link />
      <P28 />
    </div>
  );
}

function H4() {
  return (
    <div className="h-[26.991px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[18px] text-white top-[0.83px] tracking-[-0.4395px]">Quick Links</p>
    </div>
  );
}

function Li() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Home</p>
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">About Us</p>
    </div>
  );
}

function Li2() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Contact Us</p>
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[75.991px] items-start relative shrink-0 w-full" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[118.981px] items-start left-0 top-[129.47px] w-[361.152px]" data-name="Container">
      <H4 />
      <Ul />
    </div>
  );
}

function H5() {
  return (
    <div className="h-[26.991px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[18px] text-white top-[0.83px] tracking-[-0.4395px]">Educational Concepts</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[19.998px] left-0 top-0 w-[361.152px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">
        <span className="leading-[20px]">{`Godzilla - `}</span>
        <span className="leading-[20px] text-[#fb64b6]">Risk Structure</span>
      </p>
    </div>
  );
}

function Li3() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[19.998px] left-0 top-0 w-[361.152px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">
        <span className="leading-[20px]">{`Wolf - `}</span>
        <span className="leading-[20px] text-[#ff8904]">Discipline Control</span>
      </p>
    </div>
  );
}

function Li4() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[19.998px] left-0 top-0 w-[361.152px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">
        <span className="leading-[20px]">{`Turtle - `}</span>
        <span className="leading-[20px] text-[#05df72]">Capital Preservation</span>
      </p>
    </div>
  );
}

function Li5() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <Link3 />
    </div>
  );
}

function Ul1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[75.991px] items-start relative shrink-0 w-full" data-name="ul">
      <Li3 />
      <Li4 />
      <Li5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[118.981px] items-start left-0 top-[280.44px] w-[361.152px]" data-name="Container">
      <H5 />
      <Ul1 />
    </div>
  );
}

function H6() {
  return (
    <div className="h-[26.991px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[18px] text-white top-[0.83px] tracking-[-0.4395px]">Legal</p>
    </div>
  );
}

function Li6() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Subscription</p>
    </div>
  );
}

function Li7() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Disclaimer</p>
    </div>
  );
}

function Li8() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Risk Disclosure</p>
    </div>
  );
}

function Ul2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.999px] h-[75.991px] items-start relative shrink-0 w-full" data-name="ul">
      <Li6 />
      <Li7 />
      <Li8 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[118.981px] items-start left-0 top-[431.42px] w-[361.152px]" data-name="Container">
      <H6 />
      <Ul2 />
    </div>
  );
}

function H7() {
  return (
    <div className="h-[26.991px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[18px] text-white top-[0.83px] tracking-[-0.4395px]">Contact</p>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_785)" id="Mail">
          <path d={svgPaths.p3238d00} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
          <path d={svgPaths.p17517d80} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_785">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function A() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[129.245px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">support@accurax.in</p>
      </div>
    </div>
  );
}

function Li9() {
  return (
    <div className="content-stretch flex gap-[7.999px] h-[19.998px] items-center relative shrink-0 w-full" data-name="li">
      <Mail />
      <A />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9982 15.9982">
        <g clipPath="url(#clip0_210_755)" id="Phone">
          <path d={svgPaths.p94ebb00} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33318" />
        </g>
        <defs>
          <clipPath id="clip0_210_755">
            <rect fill="white" height="15.9982" width="15.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function A1() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[112.429px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">+91 7366057969</p>
      </div>
    </div>
  );
}

function Li10() {
  return (
    <div className="content-stretch flex gap-[7.999px] h-[19.998px] items-center relative shrink-0 w-full" data-name="li">
      <Phone />
      <A1 />
    </div>
  );
}

function Ul3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.999px] h-[51.994px] items-start relative shrink-0 w-full" data-name="ul">
      <Li9 />
      <Li10 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.998px] h-[94.983px] items-start left-0 top-[582.4px] w-[361.152px]" data-name="Container">
      <H7 />
      <Ul3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[677.38px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[237.166px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.41px] tracking-[-0.1504px]">© 2026 AccuraX. All rights reserved.</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[89.349px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="flex-[1_0_0] h-[19.998px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[86.962px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.41px] tracking-[-0.1504px]">Cookie Policy</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[332.746px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[23.997px] items-start relative size-full">
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[88.697px] items-center justify-between pt-[32.704px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#101828] border-solid border-t-[0.707px] inset-0 pointer-events-none" />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Div12() {
  return (
    <div className="content-stretch flex flex-col gap-[31.996px] h-[798.073px] items-start relative shrink-0 w-full" data-name="div">
      <Container14 />
      <Container20 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black h-[894.769px] relative shrink-0 w-[393.148px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#101828] border-solid border-t-[0.707px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48.702px] px-[15.998px] relative size-full">
        <Div12 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="bg-black content-stretch flex flex-col h-[2933.86px] items-start relative shrink-0 w-full" data-name="div">
      <MainContent />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[852.763px] items-start left-0 top-0 w-[393.148px]" data-name="Body">
      <Div />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[19.998px]" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9977 19.9977">
        <g id="svg">
          <path d={svgPaths.p2c002200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.08309" />
        </g>
      </svg>
    </div>
  );
}

function Div15() {
  return (
    <div className="relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(43,127,255,0.2),0px_4px_6px_0px_rgba(43,127,255,0.2)] shrink-0 size-[31.996px]" data-name="div" style={{ backgroundImage: "linear-gradient(135deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg1 />
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[73.052px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-white top-[-0.17px] tracking-[-0.4395px]">AccuraX</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="flex-[1_0_0] h-[31.996px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.999px] items-center relative size-full">
        <Div15 />
        <Span3 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[31.996px] relative shrink-0 w-[113.048px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Link7 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="h-[23.997px] overflow-clip relative shrink-0 w-full" data-name="Menu">
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9979 1.99977">
            <path d="M0.999884 0.999884H16.998" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99977" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9979 1.99977">
            <path d="M0.999884 0.999884H16.998" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99977" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9979 1.99977">
            <path d="M0.999884 0.999884H16.998" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99977" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[39.995px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.999px] px-[7.999px] relative size-full">
        <Menu />
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="content-stretch flex h-[63.993px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <Container23 />
      <Button4 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.95)] content-stretch flex flex-col h-[64.7px] items-start left-[135.76px] pb-[0.707px] px-[15.998px] top-0 w-[393.148px]" data-name="header">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-b-[0.707px] border-solid inset-0 pointer-events-none" />
      <Div14 />
    </div>
  );
}

export default function AccuraXWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="AccuraX Website">
      <Body />
      <Header />
    </div>
  );
}