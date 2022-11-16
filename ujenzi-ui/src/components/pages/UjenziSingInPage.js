import React from "react";
import { UjenziLogo } from "./../common/UjenziLogo";
import UjenziButton from "./../common/UjenziButton";
import UjenziForm from "./../common/UjenziForm";
import { Link, Navigate } from "react-router-dom";
import Joi from "joi-browser";

class UjenziSingInPage extends UjenziForm {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
    error: "",
  };

  schema = {
    email: Joi.string().required().label("Useremail").email(),
    password: Joi.string().required().label("Password").min(6),
  };

  doSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/v1/signin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(this.state.data),
      });
      const parseRes = await response.json();

      if (!parseRes.authorization_token) {
        // const error = { ...this.state.error };
        // const message = " wrong password or username"
        // this.setState({ error:error });
         return;
      } else {
        localStorage.setItem("token", parseRes.authorization_token);
        window.location = "/buyerspage";
        return;
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        console.log(this.state.errors.message);
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="w-[100vw] h-[100vh] max-h-[700px] mx-w-[1728px] mx-h-[1117] bg-ujenzi-darkgray flex">
        <div className="w-[47%] h-[100%] bg-ujenzi-white pl-[130px] pt-3 block">
          <UjenziLogo />
          <div className="w-[390px] h-[400px] shadow mt-[60px] shadow-ujenzi-darkgray relative grid place-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeOPPVYe7Xe1fQRthYmcVhRn58oeNDdrcxA&usqp=CAU"
              alt="building"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
        <div className="w-[53%] h-[100%] bg-ujenzi-lightgreen pr-[90px] pt-6">
          <div className="h-[50px] w-[100%] flex place-items-center pl-[269px]">
            <span className="text-[16px] font-bold text-ujenzi-darkgray pr-4">
              Don't have an account?
            </span>
            <Link to="/signup">
              <UjenziButton buttonText={"Sign Up"} />
            </Link>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="w-[100%] h-[90%] block pt-[100px] pl-[130px]"
          >
            {this.renderInput("email", "Email", "email", "w-[450px]")}
            {this.renderInput(
              "password",
              "Enter Your Password",
              "password",
              "w-[450px]"
            )}
            <div className="flex grid-cols-2 gap-3 justify-between w-[450px] pt-6">
              <Link to={"/"}>
                <UjenziButton buttonText={"back"} />
              </Link>
              {this.renderButton("Sign In")}
            </div>
            {this.state.error && (
              <div className="text-[12px] w-[100%] font-bold text-[#FF3000]">
                {this.state.error}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default UjenziSingInPage;
