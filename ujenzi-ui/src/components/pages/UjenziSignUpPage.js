import React from "react";
import { Link, Navigate } from "react-router-dom";
import UjenziButton from "../common/UjenziButton";
import { UjenziLogo } from "../common/UjenziLogo";
import UjenziForm from "./../common/UjenziForm";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import auth from "../services/authService";

class UjenziSignUpPage extends UjenziForm {
  state = {
    data: {
      fullname: "",
      email: " ",
      phonenumber: "",
      password_hash: "",
      confirmpassword: "",
    },
    errors: {},
  };

  schema = {
    fullname: Joi.string().required().label("User Name").min(5),
    email: Joi.string().required().label("User Email").email(),
    phonenumber: Joi.string().required().label("Phone Number").min(10),
    password_hash: Joi.string().required().label("Password").min(5),
    confirmpassword: Joi.any()
      .valid(Joi.ref("password_hash"))
      .required()
      .label("Confirm Password")
      .options({ language: { any: { allowOnly: "must match password" } } }),
  };

  doSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/v1/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(this.state.data)
      });
      const perseRes = await response.json()
      localStorage.setItem("token",perseRes.authorization_token);
      window.location = "/dashboard"
    } catch (err) {
      console.log(err.message);
    }
    // try {
    //   const response = await userService.register(this.state.data);
    //   auth.loginWithJwt(response.headers["x-auth-token"]);
    //   window.location = "/dashboard";

    // } catch (ex) {
    //   if (ex.response && ex.response.status === 400) {
    //     const errors = { ...this.state.errors };
    //     errors.email = ex.response.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  render() {
    return (
      <div className="w-[100vw] h-[800px] mx-w-[1428px] mx-h-[1117] flex">
        <div className="w-[50%] h-[100%] bg-ujenzi-white pl-[100px] block pt-4">
          <UjenziLogo />
          <div className="w-[500px] h-[500px] shadow mt-[50px] shadow-ujenzi-darkgray relative grid place-items-center">
            <img
              src="data:image/jpeg;base64,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"
              alt="building"
              className="w-[100%] h-[100%]"
            />
            <div className="bg-ujenzi-lightgreen bg-opacity-70 grid place-items-center shadow shadow-ujenzi-darkgray w-[350px] h-[200px] absolute rounded">
              <h1 className="text-[20px] font-bold text-ujenzi-darkgray text-center mx-12">
                Are you Looking to be a Supplier?
              </h1>
              <Link to="/suppliersignup">
                <UjenziButton
                  buttonText={"Sign Up Here"}
                  buttonStyle={
                    "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100%] bg-ujenzi-lightgreen pt-4">
          <div className="h-[50px] w-[100%] flex place-items-center pl-[230px]">
            <span className="text-[16px] font-bold text-ujenzi-darkgray pr-4">
              Already have an account?
            </span>
            <Link to="/signin">
              <UjenziButton buttonText={"Sign in"} />
            </Link>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="w-[550px] h-[90%] block pt-[40px] pl-[100px]"
          >
            {this.renderInput("fullname", "Full Name", "text", "w-[450px]")}
            {this.renderInput("email", "Email", "email", "w-[450px]")}
            {this.renderInput(
              "phonenumber",
              "Phone Number",
              "number",
              "w-[450px]"
            )}
            <div className="flex grid-cols-2 gap-3">
              {this.renderInput(
                "password_hash",
                "Password",
                "text",
                "w-[220px]"
              )}
              {this.renderInput(
                "confirmpassword",
                "Confirm Password",
                "text",
                "w-[220px]"
              )}
            </div>
            <div className="flex grid-cols-2 gap-3 w-[450px] justify-between pt-4">
              <Link to={"/"}>
                <UjenziButton buttonText={"back"} />
              </Link>
              {this.renderButton("Sign Up")}
            </div>
            {/* {this.state.submitted && <Navigate to={"/dashboard"} />} */}
          </form>
        </div>
      </div>
    );
  }
}

export default UjenziSignUpPage;
