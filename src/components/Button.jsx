import React from "react";
import '../index.css';
const Button = ({ styles }) => {
  return (
<button
  type="button"
  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}
  style={{
    background: "linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)"
  }}
>
  Get Started
</button>

  
)}
;

export default Button;