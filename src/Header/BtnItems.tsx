import React from "react";
import CButton from "../common/CButton";

const BtnItems = ({ icon }: any) => {
  return (
    <CButton
      iconLeft={true}
      icon={icon}
      style={{ border: "none", width: 50 }}
    />
  );
};

export default BtnItems;
