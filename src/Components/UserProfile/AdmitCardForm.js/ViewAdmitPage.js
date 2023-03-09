import React, { useEffect, useState } from "react";
import RegistrationFormPDF from "./AdmitFormPDF";

export default function ViewRegistrationPage() {
  return (
    <div className="max-w-screen-lg w-full mx-auto mt-16">
      <RegistrationFormPDF></RegistrationFormPDF>
    </div>
  );
}
