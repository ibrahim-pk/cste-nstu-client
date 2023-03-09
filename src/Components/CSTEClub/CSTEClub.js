import React from "react";

import Galary from "./Galary";
import AboutClub from "./AboutClub";
import TopCodder from "./TopCodder";
import OtherExpClub from "./OtherExpClub";
import ClubPanel from "./ClubPanel";
import BecomeProgrammer from "./BecomeProgrammer";
import InfoAndTools from "./InfoAndTools";

export default function CSTEClub() {
  return (
    <div className="mx-auto max-w-screen-xl	 w-full px-4 mt-10 mb-4">
      {/* <h1 className="text-5xl mb-12 text-center font-bold">CSTE Club</h1> */}
      
      <BecomeProgrammer />
      <Galary />
      <InfoAndTools />
      <TopCodder />
      <OtherExpClub />
      <ClubPanel />
    </div>
  );
}
