import React from 'react';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return ( <div className="text-black text-[16px] leading-[normal] w-full md:max-w-[1024px] lg:max-w-[1440px] md:mx-auto" style={{"fontFamily":"\"Times New Roman\"","textDecoration":"none"}}>
  <div className="bg-white text-[12px]" style={{"fontFamily":"sans-serif"}}>
    <div>
      <div className="content-center items-center flex flex-col h-min justify-start relative bg-white gap-[0px] min-h-[640px]">
        <div className="fixed w-full left-0 top-0 z-[10] shrink-[0]" style={{"order":"-1000"}}>
          <div className="contents">
            <nav aria-label="Tablet / Closed" className="content-center items-center flex h-min justify-between relative w-full backdrop-blur-[5px] bg-white/90 pt-0 pr-4 pb-0 pl-4 md:pr-8 md:pl-8 lg:px-20 after:border-b after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:content-[&quot;&quot;]">
              <a href="https://vistahaven.framer.website/" aria-label="Brand Logo" className="content-center items-center flex size-min justify-start overflow-hidden relative text-[rgb(0,_0,_238)] gap-[8px] shrink-[0]">
                <div className="relative w-12 shrink-[0]">
                  <div className="content-center items-center flex size-full justify-center justify-items-center">
                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8f47f6f46f13b18c94590c08695180a388e97844.png%3Fwidth=300&amp;height=209?generation=1775379090743841&amp;alt=media" className="block max-h-full max-w-full overflow-clip" />
                    <div className="pointer-events-none absolute left-0 top-0 right-0 bottom-0"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-semibold text-left uppercase text-[rgb(44,_44,_44)] text-[24px] leading-[26.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>VistaHaven</p>
                </div>
              </a>
              <div aria-label="Nav Menu" className={`content-center items-center flex flex-col h-min justify-center overflow-hidden absolute w-full left-0 top-20 origin-[50%_0%] bg-white/95 gap-[0px] shrink-[0] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div aria-label="Nav Link Wrap" className="content-center items-center flex h-px justify-center relative w-full gap-[32px] shrink-[0]"></div>
              </div>
              <div aria-label="Nav Button Wrap" className="content-center items-center flex justify-end relative w-min h-20 gap-[8px] shrink-[0]">
                <div className="relative origin-[100%_50%] shrink-[0] hidden md:block">
                  <a href="https://vistahaven.framer.website/#contact" aria-label="Tablet" className="content-center items-center flex h-min justify-between overflow-hidden relative w-[200px] bg-black bg-[position:0px_0px] text-[rgb(0,_0,_238)] pt-2 pr-[5px] pb-2 pl-4 rounded-[62.4375rem]">
                    <div aria-label="Dot" className="aspect-square overflow-hidden relative w-2 bg-[rgb(102,_252,_117)] shrink-[0] rounded-[6.1875rem]"></div>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-light text-white text-[16px] leading-[20.8px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Contact Us Now</p>
                    </div>
                    <div aria-label="Button Circle" className="content-center items-center flex justify-center overflow-hidden relative w-8 h-8 bg-white gap-[10px] shrink-[0] rounded-[62.4375rem]">
                      <div className="absolute w-4 h-4 top-2 right-2 z-[1] shrink-[0]">
                        <div className="contents">
                          <div className="inline-block size-full overflow-hidden text-black" style={{"textDecoration":"none"}}>
                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F766385850abd6e22540cbf6a17ccf254fe125c38.svg?generation=1774857210101031&amp;alt=media" className="inline-block size-full" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-4 h-4 top-[30px] right-[30px] z-[1] shrink-[0]">
                        <div className="contents">
                          <div className="inline-block size-full overflow-hidden text-black" style={{"textDecoration":"none"}}>
                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F766385850abd6e22540cbf6a17ccf254fe125c38.svg?generation=1774857210101031&amp;alt=media" className="inline-block size-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div aria-label="Nav Toggle Button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="content-center items-center aspect-square flex justify-center relative w-10 md:w-12 bg-white gap-[0px] shrink-[0] rounded-[6.1875rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:content-[&quot;&quot;] after:rounded-[6.1875rem] cursor-pointer">
                  <div aria-label="Luxury Residences Icon" className="aspect-square relative w-8 shrink-[0]">
                    <div className="items-center flex flex-col size-full justify-center">
                      <div role="img" className="size-full overflow-hidden">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd12d30a63ea477dbc1d53adceee746502a8119e3.svg?generation=1775379090715521&amp;alt=media" className="block size-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-[50%] top-12 z-[1] shrink-[0] opacity-[0]"></div>
            </nav>
          </div>
        </div>
        <div className="content-center items-center contents h-min justify-start overflow-hidden relative bg-white gap-[160px] min-h-[640px] pt-[140px] pr-5 pb-[140px] pl-5">
          <section aria-label="Property" className="content-center items-center flex flex-col h-min justify-center relative w-full gap-[0px] pt-32 pr-8 pb-20 pl-8 lg:px-20 lg:pt-40 lg:pb-32">
            <div aria-label="Container" className="content-start items-start flex flex-col h-min justify-start relative w-full gap-[48px] lg:gap-[64px] max-w-[1200px] lg:max-w-[1360px] shrink-[0]">
              <div aria-label="Gallery Wrap" className="content-center items-center flex flex-col md:flex-row h-min justify-center overflow-hidden relative w-full gap-[16px] lg:gap-[24px] shrink-[0]">
                <div className="w-full md:w-[65%]">
                  <div aria-label="Image" className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-4xl">
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-4xl">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ffb4dcf76f877c99402aa9f144703427e9bd68ddd.jpg%3Fscale-down-to=1024?generation=1774857210276085&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_800] rounded-4xl" />
                    </div>
                    <div aria-label="Property Category" className="content-center items-center flex size-min justify-center overflow-hidden absolute left-5 top-5 bg-white gap-[0px] pt-2 pr-4 pb-2 pl-4 rounded-4xl">
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>For Investment</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-label="Image Wrap" className="content-center items-center flex flex-row md:flex-col h-min justify-center overflow-hidden relative w-full md:w-[35%] gap-[16px] shrink-[0]">
                  <div className="w-1/2 md:w-full">
                    <div aria-label="Image" className="relative w-full h-[150px] sm:h-[200px] md:h-[242px] lg:h-[313px] rounded-4xl">
                      <div className="absolute left-0 top-0 right-0 bottom-0 rounded-4xl">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F44401d15a15340dea8f8befa1ce4672c5236c5ed.jpg?generation=1775379090753492&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1000_/_1000] rounded-4xl" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 md:w-full">
                    <div aria-label="Image" className="relative w-full h-[150px] sm:h-[200px] md:h-[242px] lg:h-[313px] rounded-4xl">
                      <div className="absolute left-0 top-0 right-0 bottom-0 rounded-4xl">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fea340a59cb87341be621397b58622b62fc22cdee.jpg?generation=1775379090717606&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1000_/_1000] rounded-4xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-label="Property Content Wrap" className="content-start items-start flex flex-col lg:flex-row h-min justify-center relative w-full gap-[32px] lg:gap-[48px] shrink-[0]">
                <div aria-label="Property Info Wrap" className="content-start items-start flex flex-col grow h-min justify-center overflow-hidden relative w-full lg:w-px lg:basis-0 gap-[48px] lg:gap-[64px] max-w-full lg:max-w-[70%] shrink-[0]">
                  <div aria-label="Property Name" className="content-center items-center flex flex-col h-min justify-center overflow-hidden relative w-full gap-[16px] shrink-[0]">
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <h2 className="font-semibold uppercase text-[rgb(44,_44,_44)] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[30px] sm:leading-[34px] md:leading-[38.4px] lg:leading-[48px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}><span className="inline-block uppercase blur-[0px]" style={{"textDecoration":"none"}}>The</span> <span className="inline-block uppercase blur-[0px]" style={{"textDecoration":"none"}}>One</span></h2>
                    </div>
                    <div aria-label="Stack" className="content-start items-start flex flex-col h-min justify-start overflow-hidden relative w-full gap-[16px] shrink-[0]">
                      <div aria-label="Icon Text Wrap" className="content-center items-center flex h-min justify-start overflow-hidden relative w-full gap-[4px] shrink-[0]">
                        <div className="self-stretch relative w-5 shrink-[0]">
                          <div className="contents">
                            <div className="inline-block size-full overflow-hidden text-[rgb(44,_44,_44)] fill-[rgb(44,_44,_44)]" style={{"textDecoration":"none"}}>
                              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F1b683e81ecfa6a71487a72c737b0d53ebe8b5b7a.svg?generation=1775379090719537&amp;alt=media" className="inline-block size-full" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Bel Air, LA</p>
                        </div>
                      </div>
                      <div aria-label="Icon Text Wrap" className="content-center items-center flex h-min justify-start overflow-hidden relative w-full gap-[24px] shrink-[0]">
                        <div aria-label="Property Detail" className="content-center items-center flex size-min justify-start overflow-hidden relative gap-[8px] shrink-[0]">
                          <div className="self-stretch relative w-5 shrink-[0]">
                            <div className="contents">
                              <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F48a38f80e0f9b8a80fa11a9fa99ae6cc1f80d970.svg?generation=1775379090745275&amp;alt=media" className="inline-block size-full" />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>6</p>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Beds</p>
                          </div>
                        </div>
                        <div aria-label="Property Detail" className="content-center items-center flex size-min justify-start overflow-hidden relative gap-[8px] shrink-[0]">
                          <div className="self-stretch relative w-5 shrink-[0]">
                            <div className="contents">
                              <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F42e5d1246a7b8724c1e2e77a930145324d3969e2.svg?generation=1775379090767838&amp;alt=media" className="inline-block size-full" />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>4</p>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Baths</p>
                          </div>
                        </div>
                        <div aria-label="Property Detail" className="content-center items-center flex size-min justify-start overflow-hidden relative gap-[8px] shrink-[0]">
                          <div className="self-stretch relative w-5 shrink-[0]">
                            <div className="contents">
                              <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb2c7192c0d7e39e0fab0614accfa8433db9a8a92.svg?generation=1775379090736115&amp;alt=media" className="inline-block size-full" />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>2,780</p>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>sq.ft</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Property Overview" className="content-start items-start flex flex-col h-min justify-center overflow-hidden relative w-full gap-[16px] shrink-[0]">
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-semibold text-[rgb(44,_44,_44)] text-[24px] leading-[26.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Overview</p>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[32.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Introducing The One, a striking 6-bedroom residence designed for both luxury  living and smart investment. Located in the prestigious neighborhood of Bel Air,  Los Angeles, this 2,780 sq.ft home features bold modern architecture, open- plan interiors, and refined finishes. With 4 bathrooms, spacious living areas, and  curated landscaping, it’s a statement of comfort, style, and long-term value.</p>
                    </div>
                  </div>
                  <div aria-label="Property Feature" className="content-start items-start flex flex-col h-min justify-center overflow-hidden relative w-full gap-[16px] shrink-[0]">
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-semibold text-[rgb(44,_44,_44)] text-[24px] leading-[26.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Features</p>
                    </div>
                    <div aria-label="Feature Wrap" className="content-center items-center flex flex-col h-min justify-center overflow-hidden relative w-full gap-[16px] shrink-[0]">
                      <div className="contents">
                        <div className="relative w-full">
                          <div aria-label="Variant 1" className="content-center items-center flex h-min justify-start overflow-hidden relative w-full gap-[4px]">
                            <div className="self-stretch relative w-6 shrink-[0]">
                              <div className="contents">
                                <div className="inline-block size-full overflow-hidden text-[rgb(44,_44,_44)] fill-[rgb(44,_44,_44)]" style={{"textDecoration":"none"}}>
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcbf133f5d705e90a450f7cb438b9cabc9749e048.svg?generation=1775379090727653&amp;alt=media" className="inline-block size-full" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                              <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>6 Bedrooms &amp; 4 Bathrooms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contents">
                        <div className="relative w-full">
                          <div aria-label="Variant 1" className="content-center items-center flex h-min justify-start overflow-hidden relative w-full gap-[4px]">
                            <div className="self-stretch relative w-6 shrink-[0]">
                              <div className="contents">
                                <div className="inline-block size-full overflow-hidden text-[rgb(44,_44,_44)] fill-[rgb(44,_44,_44)]" style={{"textDecoration":"none"}}>
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcbf133f5d705e90a450f7cb438b9cabc9749e048.svg?generation=1775379090727653&amp;alt=media" className="inline-block size-full" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                              <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Bold Contemporary Design</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contents">
                        <div className="relative w-full">
                          <div aria-label="Variant 1" className="content-center items-center flex h-min justify-start overflow-hidden relative w-full gap-[4px]">
                            <div className="self-stretch relative w-6 shrink-[0]">
                              <div className="contents">
                                <div className="inline-block size-full overflow-hidden text-[rgb(44,_44,_44)] fill-[rgb(44,_44,_44)]" style={{"textDecoration":"none"}}>
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcbf133f5d705e90a450f7cb438b9cabc9749e048.svg?generation=1775379090727653&amp;alt=media" className="inline-block size-full" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                              <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Professionally Landscaped Garden</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contents">
                        <div className="relative w-full">
                          <div aria-label="Variant 1" className="content-center items-center flex h-min justify-start overflow-hidden relative w-full gap-[4px]">
                            <div className="self-stretch relative w-6 shrink-[0]">
                              <div className="contents">
                                <div className="inline-block size-full overflow-hidden text-[rgb(44,_44,_44)] fill-[rgb(44,_44,_44)]" style={{"textDecoration":"none"}}>
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcbf133f5d705e90a450f7cb438b9cabc9749e048.svg?generation=1775379090727653&amp;alt=media" className="inline-block size-full" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                              <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Spacious Driveway &amp; Garage</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contents">
                        <div className="relative w-full">
                          <div aria-label="Variant 1" className="content-center items-center flex h-min justify-start overflow-hidden relative w-full gap-[4px]">
                            <div className="self-stretch relative w-6 shrink-[0]">
                              <div className="contents">
                                <div className="inline-block size-full overflow-hidden text-[rgb(44,_44,_44)] fill-[rgb(44,_44,_44)]" style={{"textDecoration":"none"}}>
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcbf133f5d705e90a450f7cb438b9cabc9749e048.svg?generation=1775379090727653&amp;alt=media" className="inline-block size-full" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                              <p className="font-light text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Investment-Ready Property</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Property Amenity" className="content-start items-start flex flex-col h-min justify-center overflow-hidden relative w-full gap-[16px] shrink-[0]">
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-semibold text-[rgb(44,_44,_44)] text-[24px] leading-[26.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Amenities</p>
                    </div>
                    <div aria-label="Property Amenity Wrap" className="content-center items-center flex flex-wrap h-min justify-start overflow-hidden relative w-full gap-[16px] shrink-[0]">
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop / None" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 opacity-[0.4] rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb4370e1402479c89ade5fd85609ad94de3e4439c.svg?generation=1775379090755176&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center line-through text-[rgb(44,_44,_44)] text-[18px] leading-[23.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif","textDecoration":"line-through"}}>TV</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F59b42cb9bc1a0305ee2b3433f65b0c9815bb5f46.svg?generation=1775379090929384&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Air Conditioner</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fddd6ebf9e37266498b687f690787efff49f39c05.svg?generation=1775379090933786&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Washing Machine</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4990f836b8aadf94d96e22916527423956dd3c83.svg?generation=1775379090918342&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Internet</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb742ce629a5c4db97f1bc231beb10c5f2150e653.svg?generation=1775379090928310&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Water Heater</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop / None" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 opacity-[0.4] rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0fa4b5360417e8dc69da2fb517f1e687ad67dc8e.svg?generation=1775379090921201&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center line-through text-[rgb(44,_44,_44)] text-[18px] leading-[23.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif","textDecoration":"line-through"}}>Refrigerator</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop / None" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 opacity-[0.4] rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6d2d12255835fa000dabfef09b27278fccf771fc.svg?generation=1775379090930211&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center line-through text-[rgb(44,_44,_44)] text-[18px] leading-[23.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif","textDecoration":"line-through"}}>Sofa</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-[0]">
                        <div className="contents">
                          <div aria-label="Desktop / None" className="content-center items-center flex size-min justify-center overflow-hidden relative bg-[rgb(243,_243,_243)] gap-[8px] pt-2 pr-6 pb-2 pl-6 opacity-[0.4] rounded-4xl after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(199,_199,_199)] after:content-[&quot;&quot;] after:rounded-4xl">
                            <div aria-label="Icon Text Wrap" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div className="relative w-6 h-6 shrink-[0]">
                                <div className="contents">
                                  <div className="inline-block size-full overflow-hidden text-[rgb(136,_136,_136)] fill-[rgb(136,_136,_136)]" style={{"textDecoration":"none"}}>
                                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0773c8fde739d16651759bc61e72025d5d9af04b.svg?generation=1775379090932576&amp;alt=media" className="inline-block size-full" />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                                <p className="font-light text-center line-through text-[rgb(44,_44,_44)] text-[18px] leading-[23.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif","textDecoration":"line-through"}}>Wardrobe</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Property Location" className="content-center items-center flex flex-col h-min justify-center overflow-hidden relative w-full gap-[16px] shrink-[0]">
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <p className="font-semibold text-[rgb(44,_44,_44)] text-[24px] leading-[26.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Location</p>
                    </div>
                    <div aria-label="Google Map" className="relative w-full h-[450px] shrink-[0]">
                      <div className="items-center flex size-full justify-center overflow-hidden relative rounded-4xl">
                        <div className="size-full overflow-clip">
                          <div className="h-full text-[16px]" style={{"fontFamily":"\"Times New Roman\""}}>
                            <div className="h-full overflow-hidden bg-[rgb(128,_128,_128)]">
                              <div className="h-full overflow-hidden relative">
                                <div className="size-full absolute left-0 top-0 bg-[rgb(229,_227,_223)]">
                                  <div>
                                    <button aria-label="Keyboard shortcuts" className="absolute text-center right-0 bottom-0 bg-black/0 text-[13.3333px] outline-offset-[3px] z-[1000002]" style={{"fontFamily":"Arial"}}></button>
                                  </div>
                                  <div aria-label="Map" role="region" className="size-full absolute left-0 top-0"></div>
                                  <div className="size-full absolute left-0 top-0 text-[11px] z-[0]" style={{"fontFamily":"Roboto, Arial, sans-serif"}}>
                                    <div className="size-full absolute left-0 top-0 z-[0]">
                                      <div className="absolute w-full left-[50%] top-[50%] z-[1]">
                                        <div className="absolute w-full left-0 top-0 z-[100]">
                                          <div className="absolute left-0 top-0 z-[0]">
                                            <div className="absolute z-[985]" style={{"transform":"matrix(1, 0, 0, 1, -90, -198)"}}>
                                              <div className="absolute w-3xs h-64 left-0 top-0">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-[-256px] top-0">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-[-256px] top-[-256px]">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-0 top-[-256px]">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-64 top-[-256px]">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-64 top-0">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-64 top-64">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-0 top-64">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                              <div className="absolute w-3xs h-64 left-[-256px] top-64">
                                                <div className="w-3xs h-64"></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute w-full left-0 top-0 z-[101]"></div>
                                        <div className="absolute w-full left-0 top-0 z-[102]"></div>
                                        <div className="absolute w-full left-0 top-0 z-[103]"></div>
                                        <div className="absolute left-0 top-0 z-[0]">
                                          <div className="absolute z-[985]" style={{"transform":"matrix(1, 0, 0, 1, -90, -198)"}}>
                                            <div className="absolute w-3xs h-64 left-64 top-0">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb9a082500fef8258224565f3048e0ed2296f4637?generation=1775379090928417&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-64 top-[-256px]">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc9cea96788a185d98eb9c2275c8c62680619894b?generation=1775379090935670&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-0 top-64">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F81efca123d48265f830c0235ec177eb2e455d5f4?generation=1775379090952247&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-0 top-[-256px]">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa9af8f25ebafcc044813682aa7d604b81f284531?generation=1775379091146238&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-64 top-64">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbd38774d44d1f8c0a77a410ab65a1ad859eb9572?generation=1775379091094519&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-[-256px] top-[-256px]">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6f3982886e5289b62444c3e570dc4c907da0f265?generation=1775379091155320&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-[-256px] top-0">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fcbe4458aec9e8fe8d2de00000e493b080b06e1b3?generation=1775379091101798&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-0 top-0">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8cc347dfcbae52d642982c61083d476a1f1d03f2?generation=1775379091119553&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                            <div className="absolute w-3xs h-64 left-[-256px] top-64">
                                              <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff3b6dc366c51cd8696c300e42f8878ad039e3e83?generation=1775379091110983&amp;alt=media" className="overflow-clip w-3xs h-64" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="size-full absolute left-0 top-0 z-[3]">
                                        <div className="absolute w-full left-[50%] top-[50%] z-[4]">
                                          <div className="absolute w-full left-0 top-0 z-[104]"></div>
                                          <div className="absolute w-full left-0 top-0 z-[105]"></div>
                                          <div className="absolute w-full left-0 top-0 z-[106]">
                                            <div className="contents"></div>
                                            <span className="block size-px -m-px overflow-hidden absolute whitespace-nowrap" style={{"clipPath":"inset(100%)"}}></span>
                                          </div>
                                          <div className="absolute w-full left-0 top-0 z-[107]"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="size-full overflow-clip absolute left-0 top-0 z-[-1] opacity-[0]">
                                      <div className="text-[16px]" style={{"fontFamily":"\"Times New Roman\""}}>
                                        <div className="m-2"></div>
                                      </div>
                                    </div>
                                    <div className="size-full pointer-events-none absolute border-[rgb(26,_115,_232)] border-[2px] z-[1000002] opacity-[0]"></div>
                                    <div>
                                      <div className="absolute left-0 top-0"></div>
                                    </div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div>
                                      <div className="absolute right-10 bottom-[54px] m-[10px]">
                                        <div className="absolute left-0 top-0">
                                          <button aria-label="Map camera controls" className="bg-no-repeat relative text-center w-10 h-10 bg-white bg-[position:6px_50%] bg-size-[28px] shadow-[rgba(0,0,0,0.3)_0px_1px_4px_-1px] text-[13.3333px] rounded-[50%]" style={{"fontFamily":"Arial"}}>
                                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe09d4056eaec0d9c8cab3ccc448b621bdc0933ce.svg%2Bxml?generation=1772706954326118&amp;alt=media" className="block overflow-clip pointer-events-none absolute text-center w-7 h-7 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="absolute left-0 bottom-0 z-[1] m-[10px]">
                                        <div>
                                          <button aria-label="Show satellite imagery" className="inline-block overflow-hidden relative text-center bg-white border-white border-[2px] shadow-[rgba(0,0,0,0.3)_0px_2px_6px_0px] text-[13.3333px] rounded-[0.1875rem]" style={{"fontFamily":"Arial","textDecoration":"none"}}>
                                            <div className="absolute text-center w-[38px] h-[38px] z-[1]"></div>
                                            <div className="overflow-hidden relative text-center w-[38px] h-[38px] z-[0]">
                                              <div className="size-full absolute text-center left-0 top-0 bg-[rgb(229,_227,_223)]">
                                                <div className="size-full absolute text-center left-0 top-0 text-[11px] z-[0]" style={{"fontFamily":"Roboto, Arial, sans-serif"}}>
                                                  <div aria-label="Map" role="region" className="size-full absolute text-center left-0 top-0 z-[0]">
                                                    <div className="absolute text-center w-full left-[50%] top-[50%] z-[1]">
                                                      <div className="absolute text-center w-full left-0 top-0 z-[100]">
                                                        <div className="absolute text-center left-0 top-0 z-[0]">
                                                          <div className="absolute text-center z-[989]" style={{"transform":"matrix(1, 0, 0, 1, -38, -108)"}}>
                                                            <div className="absolute text-center w-3xs h-64 left-0 top-0">
                                                              <div className="text-center w-3xs h-64"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="absolute text-center w-full left-0 top-0 z-[101]"></div>
                                                      <div className="absolute text-center w-full left-0 top-0 z-[102]"></div>
                                                      <div className="absolute text-center w-full left-0 top-0 z-[103]"></div>
                                                      <div className="absolute text-center left-0 top-0 z-[0]">
                                                        <div className="absolute text-center z-[989]" style={{"transform":"matrix(1, 0, 0, 1, -38, -108)"}}>
                                                          <div className="absolute text-center w-3xs h-64 left-0 top-0">
                                                            <img role="presentation" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F40e15f6894bc3eb65cc208acb264559032ba21b1?generation=1775379091117423&amp;alt=media" className="overflow-clip text-center w-3xs h-64" />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="size-full absolute text-center left-0 top-0 z-[3]">
                                                      <div className="absolute text-center w-full left-[50%] top-[50%] z-[4]">
                                                        <div className="absolute text-center w-full left-0 top-0 z-[104]"></div>
                                                        <div className="absolute text-center w-full left-0 top-0 z-[105]"></div>
                                                        <div className="absolute text-center w-full left-0 top-0 z-[106]">
                                                          <div className="contents text-center"></div>
                                                          <span className="block size-px -m-px overflow-hidden absolute text-center whitespace-nowrap" style={{"clipPath":"inset(100%)"}}></span>
                                                        </div>
                                                        <div className="absolute text-center w-full left-0 top-0 z-[107]"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="size-full overflow-clip absolute text-center left-0 top-0 z-[-1] opacity-[0]">
                                                    <div className="text-[16px]" style={{"fontFamily":"\"Times New Roman\""}}>
                                                      <div className="m-2"></div>
                                                    </div>
                                                  </div>
                                                  <div className="size-full pointer-events-none absolute text-center border-[rgb(26,_115,_232)] border-[2px] z-[1000002] opacity-[0]"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="box-content absolute left-[297px] bottom-0 pt-0 pr-0 pb-3 pl-0">
                                        <img alt="Google" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fbb8b2aaec120deb51a5550b0079feb871f1075e2.svg%2Bxml?generation=1772706954431064&amp;alt=media" className="overflow-clip w-[52px]" />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="flex absolute right-0 bottom-0">
                                        <div className="z-[1000001]">
                                          <div className="relative h-[14px] leading-[14px]">
                                            <div className="size-full absolute opacity-[0.7]">
                                              <div className="w-px"></div>
                                              <div className="h-full ml-px bg-[rgb(245,_245,_245)]"></div>
                                            </div>
                                            <div className="inline-block relative text-right align-middle whitespace-nowrap text-[10px] pt-0 pr-[6px] pb-0 pl-[6px]" style={{"textDecoration":"none"}}>
                                              <button aria-label="Keyboard shortcuts" className="inline-block relative text-center bg-black/0 outline-offset-[3px]" style={{"textDecoration":"none"}}></button>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="z-[1000001]">
                                          <div className="relative h-[14px] leading-[14px]">
                                            <div className="size-full absolute opacity-[0.7]">
                                              <div className="w-px"></div>
                                              <div className="h-full ml-px bg-[rgb(245,_245,_245)]"></div>
                                            </div>
                                            <div className="inline-block relative text-right align-middle whitespace-nowrap text-[10px] pt-0 pr-[6px] pb-0 pl-[6px]" style={{"textDecoration":"none"}}>
                                              <span className="text-right outline-offset-[3px]"></span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="relative h-[14px] leading-[14px] z-[1000001]">
                                          <div className="size-full absolute opacity-[0.7]">
                                            <div className="w-px"></div>
                                            <div className="h-full ml-px bg-[rgb(245,_245,_245)]"></div>
                                          </div>
                                          <div className="inline-block relative text-right align-middle whitespace-nowrap text-[10px] pt-0 pr-[6px] pb-0 pl-[6px]" style={{"textDecoration":"none"}}>
                                            <a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" aria-label="Terms (opens in new tab)" className="text-right outline-offset-[3px]"></a>
                                          </div>
                                        </div>
                                        <div className="relative h-[14px] leading-[14px]">
                                          <div className="size-full absolute opacity-[0.7]">
                                            <div className="w-px"></div>
                                            <div className="h-full ml-px bg-[rgb(245,_245,_245)]"></div>
                                          </div>
                                          <div className="inline-block relative text-right align-middle whitespace-nowrap text-[10px] pt-0 pr-[6px] pb-0 pl-[6px]" style={{"textDecoration":"none"}}>
                                            <a href="https://www.google.com/maps/@34.100222,-118.450709,15z/data=!10m1!1e1!12b1" className="relative text-right outline-offset-[3px]"></a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute left-2 top-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-label="Property Sidebar" className="content-center items-center flex flex-col grow h-min justify-center overflow-hidden static lg:sticky w-full lg:w-px lg:basis-0 top-auto lg:top-24 bg-white gap-[16px] max-w-full lg:max-w-[282px] xl:max-w-[320px] pt-6 pr-4 pb-6 pl-4 lg:pt-8 lg:px-6 lg:pb-8 z-[1] shrink-[0] rounded-4xl">
                  <div aria-label="Text Wrap" className="content-center items-center flex flex-wrap h-min justify-center overflow-hidden relative w-full gap-[8px] shrink-[0]">
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-semibold text-[rgb(44,_44,_44)] text-[24px] leading-[26.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Property</p>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-semibold text-[rgb(44,_44,_44)] text-[24px] leading-[26.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>For Investment</p>
                    </div>
                  </div>
                  <div aria-label="Text Wrap" className="content-center items-center flex h-min justify-center overflow-hidden relative w-full gap-[4px] shrink-[0]">
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <h2 className="font-semibold uppercase text-[rgb(44,_44,_44)] text-[32px] leading-[38.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>$</h2>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <h2 className="font-semibold uppercase text-[rgb(44,_44,_44)] text-[32px] leading-[38.4px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>690,000</h2>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                    <p className="font-light text-center text-[rgb(44,_44,_44)] text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Get in touch for more about  this property</p>
                  </div>
                  <div className="relative z-[1] shrink-[0]">
                    <div aria-label="For Property" className="content-center items-center flex flex-col size-min justify-center overflow-hidden relative gap-[8px]">
                      <div aria-label="Agent Rating" className="relative shrink-[0]">
                        <div aria-label="Desktop" className="content-center items-center flex justify-center relative w-min h-[70px] gap-[40px] pt-0 pr-[25px] pb-0 pl-[25px]">
                          <div aria-label="Agent Avatar Wrap" className="content-center items-center flex justify-center relative w-5 h-[30px] gap-[0px] shrink-[0]">
                            <div className="absolute w-[70px] h-[70px] left-[calc(50%-35px)] top-[calc(50%-35px)] z-[1] shrink-[0]">
                              <div aria-label="Variant 1" className="size-full relative rounded-[62.4375rem] after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:border-[3px] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F37537cac8199ff8da699900928267b2099c5cc7c.jpg%3Fscale-down-to=512?generation=1774857210119719&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_600_/_600] rounded-[62.4375rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-label="Agent Avatar Wrap" className="content-center items-center flex justify-center relative w-5 h-[30px] gap-[0px] shrink-[0]">
                            <div className="absolute w-[70px] h-[70px] left-[calc(50%-35px)] top-[calc(50%-35px)] z-[1] shrink-[0]">
                              <div aria-label="Variant 1" className="size-full relative rounded-[62.4375rem] after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:border-[3px] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F198cc96feab00095680f00786350d642a44454b8.jpg%3Fscale-down-to=512?generation=1774857210108378&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_600_/_600] rounded-[62.4375rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-label="Agent Avatar Wrap" className="content-center items-center flex justify-center relative w-5 h-[30px] gap-[0px] shrink-[0]">
                            <div className="absolute w-[70px] h-[70px] left-[calc(50%-35px)] top-[calc(50%-35px)] z-[1] shrink-[0]">
                              <div aria-label="Variant 1" className="size-full relative rounded-[62.4375rem] after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:border-[3px] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F93d2d23877634a71a0281d16094664152f566b4b.jpg%3Fscale-down-to=512?generation=1774857210104703&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_600_/_600] rounded-[62.4375rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-label="Agent Avatar Wrap" className="content-center items-center flex justify-center relative w-5 h-[30px] gap-[0px] shrink-[0]">
                            <div className="absolute w-[70px] h-[70px] left-[calc(50%-35px)] top-[calc(50%-35px)] z-[1] shrink-[0]">
                              <div aria-label="Variant 1" className="size-full relative rounded-[62.4375rem] after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:border-[3px] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                                <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F36027bf3d6ce8a5ab66ba3fd0b48060743764faa.jpg%3Fscale-down-to=512?generation=1774857210128908&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_600_/_600] rounded-[62.4375rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-label="Rating Text Wrap" className="content-center items-center flex flex-col size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-semibold text-[rgb(44,_44,_44)] text-[16px] leading-[16px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>10+ Featured Agents</p>
                        </div>
                        <div aria-label="Rating Stars Wrap" className="content-center items-center flex size-min justify-start overflow-hidden relative gap-[8px] shrink-[0]">
                          <div aria-label="Star Icons" className="content-center items-center flex size-min justify-center overflow-hidden relative gap-[4px] shrink-[0]">
                            <div aria-label="Star Icon" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <div className="absolute left-0 top-0 right-0 bottom-0">
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0bc92e7e17d89e82152cd59a3a420c74d5bca5e3.svg?generation=1775379091200913&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_496_/_471]" />
                              </div>
                            </div>
                            <div aria-label="Star Icon" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <div className="absolute left-0 top-0 right-0 bottom-0">
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0bc92e7e17d89e82152cd59a3a420c74d5bca5e3.svg?generation=1775379091200913&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_496_/_471]" />
                              </div>
                            </div>
                            <div aria-label="Star Icon" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <div className="absolute left-0 top-0 right-0 bottom-0">
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0bc92e7e17d89e82152cd59a3a420c74d5bca5e3.svg?generation=1775379091200913&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_496_/_471]" />
                              </div>
                            </div>
                            <div aria-label="Star Icon" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <div className="absolute left-0 top-0 right-0 bottom-0">
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0bc92e7e17d89e82152cd59a3a420c74d5bca5e3.svg?generation=1775379091200913&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_496_/_471]" />
                              </div>
                            </div>
                            <div aria-label="Star Icon" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <div className="absolute left-0 top-0 right-0 bottom-0">
                                <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0bc92e7e17d89e82152cd59a3a420c74d5bca5e3.svg?generation=1775379091200913&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_496_/_471]" />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-semibold text-[rgb(44,_44,_44)] text-[16px] leading-[16px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>5 / 5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contents">
                    <div className="relative w-full">
                      <a href="https://vistahaven.framer.website/properties/the-one#contact" aria-label="Default" className="content-center items-center flex h-min justify-center relative w-full bg-black bg-[position:0px_0px] text-[rgb(0,_0,_238)] gap-[0px] pt-3 pr-0 pb-3 pl-0 rounded-[6.1875rem]">
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-light text-white text-[18px] leading-[27px]" style={{"fontFamily":"Geist, \"Geist Placeholder\", sans-serif"}}>Request Info</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div></div>
        <div className="grow relative w-0 h-0 bg-[position:0px_0px]"></div>
      </div>
      <div></div>
    </div>
  </div>
</div> );
}
