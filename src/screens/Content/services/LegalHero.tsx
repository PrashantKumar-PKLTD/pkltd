import React from "react";

export const Home = (): JSX.Element => {
  const filterItems = [
    { label: "AI", number: "01", fontWeight: "font-normal" },
    { label: "ESG", number: "02", fontWeight: "font-normal" },
    { label: "Data", number: "03", fontWeight: "font-normal" },
    { label: "Agile", number: "04", fontWeight: "font-normal" },
    { label: "Digital", number: "05", fontWeight: "font-normal" },
    { label: "Creative", number: "06", fontWeight: "font-normal" },
    { label: "Legal", number: "08", fontWeight: "font-bold" },
  ];

  const rotatedSections = [
    {
      label: "AI",
      number: "01",
      width: "w-[438px]",
      borderColor: "border-[#90919c29]",
      textColor: "text-[#101014]",
      stroke: "[-webkit-text-stroke:1px_#151517]",
      numberColor: "text-[#646466]",
      marginLeft: "ml-[-146.50px]",
    },
    {
      label: "ESG",
      number: "02",
      width: "w-[482px]",
      borderColor: "border-[#646466]",
      textColor: "text-[#101014]",
      stroke: "[-webkit-text-stroke:1px_#101014]",
      numberColor: "text-[#646466]",
      marginLeft: "ml-[-265.5px]",
    },
    {
      label: "Data",
      number: "03",
      width: "w-[443px]",
      borderColor: "border-[#90919c29]",
      textColor: "text-[#101014]",
      stroke: "[-webkit-text-stroke:1px_#151517]",
      numberColor: "text-[#646466]",
      marginLeft: "ml-[-265.5px]",
    },
    {
      label: "Agile",
      number: "04",
      width: "w-[578px]",
      borderColor: "border-[#90919c29]",
      textColor: "text-[#101014]",
      stroke: "",
      numberColor: "text-[#646466]",
      marginLeft: "ml-[-265.5px]",
    },
    {
      label: "Digital",
      number: "05",
      width: "w-[475px]",
      borderColor: "border-[#90919c29]",
      textColor: "text-[#151517]",
      stroke: "",
      numberColor: "text-[#646466]",
      marginLeft: "ml-[-295.5px]",
    },
    {
      label: "Creative",
      number: "06",
      width: "w-[415px]",
      borderColor: "border-[#90919c29]",
      textColor: "text-[#151517]",
      stroke: "[-webkit-text-stroke:1px_#000000]",
      numberColor: "text-[#646466]",
      marginLeft: "ml-[-225.5px]",
    },
    {
      label: "Legal",
      number: "08",
      width: "w-[563px]",
      borderColor: "border-[#90919c29]",
      textColor: "text-[#ffffff]",
      stroke: "",
      numberColor: "text-[#646466]",
      marginLeft: "ml-[-215.5px]",
    },
  ];

  return (
    // Cropped container (top 300px hidden)
    <div className="relative w-[1680px] h-[850px] bg-white overflow-hidden">
      <div className="relative -top-[300px]">
        {/* Soft red radial glow for Legal */}
        <div className="absolute top-0 left-[364px] w-[960px] h-[960px] rounded-[480px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(239,68,68,0.75)_0%,rgba(239,68,68,0)_100%)]" />

        {/* Main content */}
        <div className="inline-flex flex-col h-[882px] items-start absolute top-[50px] left-[calc(50%_-_656px)]">
          {/* Filters */}
          <div className="flex flex-col w-[1312px] items-start justify-center gap-1 relative -mt-8">
            <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-2.5 pr-2 relative flex-[0_0_auto]">
                <div className="inline-flex h-[26px] items-start justify-center">
                  <div className="font-body-small text-[#151517] relative flex items-center justify-center w-fit mt-[-1px] text-[length:var(--body-small-font-size)]">
                    Filter by
                  </div>
                </div>
              </div>

              {filterItems.map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="inline-flex h-[26px] items-start justify-center gap-0.5 relative flex-[0_0_auto]">
                    <div
                      className={`${item.fontWeight === "font-bold"
                        ? "font-bold text-[#101014] tracking-[-0.16px] leading-[24.9px] text-[15.6px]"
                        : item.fontWeight === "font-medium"
                        ? "font-medium text-[#101014] text-[length:var(--body-small-font-size)]"
                        : "font-normal text-[#101014] tracking-[0.23px] leading-[26.4px] text-[15.6px]"
                      } relative flex items-center justify-center w-fit mt-[-1px] whitespace-nowrap`}
                    >
                      {item.label}
                    </div>

                    <div className="relative w-fit mt-[-1px] text-[#101014] text-[11px] leading-3 whitespace-nowrap">
                      {item.number}
                    </div>
                  </div>

                  {index < filterItems.length - 1 && (
                    <div className="relative flex items-center justify-center w-fit mt-[-0.5px] text-[#151517] text-[length:var(--body-small-font-size)] whitespace-nowrap">
                      /
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Rotated sections */}
          <div className="flex items-end justify-between relative flex-1 self-stretch w-full grow">
            {rotatedSections.map((section, index) => (
              <div
                key={section.label}
                className={`${section.width} ${section.borderColor} flex h-[145px] items-start relative ${section.marginLeft} border-l -rotate-90 ${index === 5 ? "mr-[-83px]" : index === 6 ? "mr-[-209px]" : ""}`}
              >
                <div
                  className={`${index === 5 ? "mr-[-83px]" : index === 6 ? "mr-[-104px]" : ""} inline-flex items-center gap-2.5 pl-8`}
                >
                  <div
                    className={`${section.stroke} ${section.textColor} relative flex items-center justify-center w-fit font-bold text-9xl tracking-[-3.84px] leading-[128px] whitespace-nowrap`}
                  >
                    {section.label}
                  </div>
                </div>

                <div
                  className={`${index === 5 ? "mr-[-105px]" : index === 6 ? "mr-[-124px]" : ""} ${section.numberColor} text-[length:var(--title-h6-font-size)] leading-[var(--title-h6-line-height)] whitespace-nowrap`}
                >
                  {section.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slim vertical brand on the far left (kept) */}
        <img
          className="absolute top-[54px] left-9 w-[25px] h-[289px] object-cover"
          alt="Prashant kumar LTD"
          src="/prashant-kumar-ltd-logo-4.png"
        />

        {/* Right-side 'Follow Us' rail */}
        <div className="absolute w-full top-0 left-0 h-[960px]">
          <div className="h-full justify-center gap-5 absolute top-0 right-7 flex flex-col w-14 items-center">
            <div className="flex w-[216px] items-start -rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;