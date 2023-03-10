import React, { useEffect } from "react";
import swal from "sweetalert";
const SuccessPayment = () => {
  useEffect(() => {
    swal("Wellcome", "Your payment successfully!", "success");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }, []);
  return <div></div>;
};

export default SuccessPayment;
