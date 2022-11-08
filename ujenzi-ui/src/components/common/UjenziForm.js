import { Component } from "react";
import UjenziButton from "./UjenziButton";
import UjenziCustomSelect from "./UjenziCustomSelect";
import UjenziInput from "./UjenziInput";
import Joi from "joi-browser";

class UjenziForm extends Component {
  state = {
    data: {},
    errors: {},
  };


  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input}) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type, style) => {
    const { data, errors } = this.state;
    return (
      <UjenziInput
        name={name}
        label={label}
        value={data[name]}
        errors={errors[name]}
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
        buttonText={text}
        handleSubmit={this.handleSubmit}
      />
    );
  };
}

export default UjenziForm;
