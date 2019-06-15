import React from "react";
import "./input.css";

const InputForm = ({title, data, readonly}) => (
  <form className="input-form">
    <label className="input-form__title">{title}</label>
    <input className="input" type="text" placeholder={data} readOnly={readonly}/>
  </form>
);

export default InputForm;