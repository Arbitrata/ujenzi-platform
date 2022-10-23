import { Component } from "react";
import UjenziButton from "./UjenziButton";
import UjenziCustomSelect from "./UjenziCustomSelect";
import UjenziInput from "./UjenziInput";

class UjenziForm extends Component {
  state = {
    data: {},
    error: {},
  };

  handleSubmit = () => {};
  handleChange = () => {};

  renderInput = (name, label, type, style) => {
    return (
      <UjenziInput
        name={name}
        label={label}
        inputType={type}
        onChange={this.handleChange}
        inputStyle={style}
      />
    );
  };

  renderSelect = (name, label, options, style) => {
    return (
      <UjenziCustomSelect
        name={name}
        value={""}
        label={label}
        selectStyle={style}
        options={options}
        error={""}
      />
    );
  };

  renderTextarea = (value, label, style) => {
    return (
      <UjenziInput
        textarea={true}
        textareaStyle={style}
        value={value}
        label={label}
        error={""}
      />
    );
  };

  renderButton = (text) => {
    return (
      <UjenziButton
        buttonStyle={
          "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
        }
        buttonText={text}
        handleSubmit={this.handleSubmit}
      />
    );
  };
}

export default UjenziForm;
