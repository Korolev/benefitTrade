import React from "react";
import "./input.css";

const InputForm = ({title, data, param, handleEdit, readonly}) => {
  if (!Array.isArray(data)) { return (
        <form className="input-form">
          <label className="input-form__title">{title}</label>
          <input className="input input-last"
                 type="text"
                 title={data}
                 value={data}
                 onChange={handleEdit(param)}
                 readOnly={readonly}
          />
        </form>
  )} else { return (
    <form className="input-form">
      <label className="input-form__title">{title}</label>
      {
        data.map((item, index) =>
          (index !== data.length - 1)
            ? <input className="input" title={item} type="text" value={item} onChange={handleEdit(param)} readOnly={readonly}/>
            : <input className="input input-last" type="text" value={item} onChange={handleEdit(param)} readOnly={readonly}/>
        )
      }
    </form>
  )}
}

export default InputForm;