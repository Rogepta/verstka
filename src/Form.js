import React, { useState } from "react";
import FormRange from "./Range";
import IconFile from "./assets/file.svg";
import Dropdown from "./Dropdown";

export default function Form() {
  const [value, setValue] = useState([50]);
  const [selected, setSelected] = useState("");
  return (
    <form className="form pt-80">
      <div className="form__three-col">
        <Dropdown selected={selected} setSelected={setSelected} />

        <input type="email" placeholder="Ваш email" className="form__input" />
        <input type="text" placeholder="Ваше имя" className="form__input" />
      </div>
      <div className="form__two-col">
        <div>
          <span className="form__value">
            <span className="form__value-text">
              Sed ut perspiciatis, unde omnis iste natus
            </span>
            <span className="form__value-text">{value[0]}%</span>
          </span>
          <FormRange value={value} setValue={setValue} />
        </div>

        <button className="button button--second button--form">
          <img src={IconFile} />
          Прикрепить файл
          <input type="file" className="input-add-file" />
        </button>
      </div>
      <div className="form__button-submit">
        <button className="button button--border-mini button--form">
          Отправить
        </button>
      </div>
    </form>
  );
}
