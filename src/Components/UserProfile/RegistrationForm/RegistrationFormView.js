import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Registration.css";
import RegistrationFormPDF from "./RegistrationFormPDF";
import Loading from "../../Common/Loading";
import RegFormMoneyRecipt from "./RegFormMoneyRecipt";
export default function () {
  const [downloading, setDownloading] = useState(false);
  const [regId, setRegId] = useState("");
  const [studentDetails, setStudentDetails] = useState({});
  const [regDetails, setRegDetails] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    setStudentDetails(user?.student?.form?.studentInfo);
    setRegDetails(user?.student?.form?.regFormInfo);
  }, []);

  const handleRegDownloadPDF = async (id) => {
    const input = document.getElementById("makeRegPDF");
    setDownloading(true);
    input.removeAttribute("hidden");
    var options = {
      quality: 1,
      scale: 5,
      dpi: 192,
      scrollX: 0,
      scrollY: -window.scrollY,
    };
    html2canvas(input, options).then((canvas) => {
      // var imgData = new Image();

      const imgData = canvas.toDataURL("image/png");

      // imgData.width = 500;
      const pdf = new jsPDF();
      input.setAttribute("hidden", "true");

      pdf.addImage(imgData, "PNG", 0, 0, 210, 300);

      // pdf.output('dataurlnewwindow');
      pdf.save(`Regsistration-Form.pdf`);
      setDownloading(false);
    });
  };
  const handlePayDownloadPDF = async (id) => {
    const input = document.getElementById("makePayPDF");
    setDownloading(true);
    input.removeAttribute("hidden");
    var options = {
      quality: 1,
      scale: 5,
      dpi: 192,
      scrollX: 0,
      scrollY: -window.scrollY,
    };
    html2canvas(input, options).then((canvas) => {
      // var imgData = new Image();

      const imgData = canvas.toDataURL("image/png");

      // imgData.width = 500;
      const pdf = new jsPDF();
      input.setAttribute("hidden", "true");

      pdf.addImage(imgData, "PNG", 0, 0, 210, 300);

      // pdf.output('dataurlnewwindow');
      pdf.save(`Payment-Form.pdf`);
      setDownloading(false);
    });
  };

  return (
    <>
      {downloading ? (
        <Loading data="Downloading"></Loading>
      ) : !downloading && studentDetails && regDetails ? (
        <div className="pt-2 px-5 max-w-screen-lg mx-auto w-full mb-4">
          <h2 className="text-2xl  ">Registration Form</h2>
          <div className="overflow-x-auto my-10">
            <table className="table text-center table-zebra w-full">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Y-T</th>
                  <th>Reg-Form</th>
                  <th>Money-Recipt</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{studentDetails.studentID}</td>
                  <td>
                    Y-{studentDetails.year},T-{studentDetails.term}
                  </td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleRegDownloadPDF(123)}
                    >
                      Download
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => handlePayDownloadPDF(123)}
                    >
                      Download
                    </button>
                  </td>
                  <td>
                    <label
                      htmlFor="my-modal-6"
                      onClick={() => setRegId("registration id")}
                      className="btn btn-info btn-xs"
                    >
                      View
                    </label>
                  </td>
                  <td>
                    <button className="btn btn-error btn-xs">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* regPdf */}
            <div
              id="makeRegPDF"
              hidden
              className="bg-blue-700  mx-auto"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="px-10 py-10"
                style={{ width: "100%", height: "100%" }}
              >
                <RegistrationFormPDF></RegistrationFormPDF>
              </div>
            </div>
            {/* regPdf */}
            <div
              id="makePayPDF"
              hidden
              className="mx-auto"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="px-10 py-10"
                style={{ width: "100%", height: "100%" }}
              >
                <RegFormMoneyRecipt />
              </div>
            </div>
          </div>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  X
                </label>
              </div>

              <div className="py-4">
                <RegistrationFormPDF />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center my-10 card p-5 shadow-lg text-error">
          Please Fillup the form!
        </h1>
      )}
    </>
  );
}
