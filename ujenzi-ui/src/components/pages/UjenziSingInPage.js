import React from "react";
import { UjenziLogo } from "./../common/UjenziLogo";
import UjenziButton from "./../common/UjenziButton";
import UjenziForm from "./../common/UjenziForm";
import { Link, Navigate } from "react-router-dom";
import Joi from "joi-browser";

class UjenziSingInPage extends UjenziForm {
  state = {
    data: {
      useremail: " ",
      password: " ",
    },
    errors: {},
    submitted: false,
  };

  schema = {
    useremail: Joi.string().required().label("Useremail").email(),
    password: Joi.string().required().label("Password").min(6),
  };

  doSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="w-[100vw] h-[100vh] max-h-[700px] mx-w-[1728px] mx-h-[1117] bg-ujenzi-darkgray flex">
        <div className="w-[47%] h-[100%] bg-ujenzi-white pl-[130px] pt-3 block">
          <UjenziLogo />
          <div className="w-[400px] h-[430px] shadow mt-[60px] shadow-ujenzi-darkgray relative grid place-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeOPPVYe7Xe1fQRthYmcVhRn58oeNDdrcxA&usqp=CAU"
              alt="building"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
        <div className="w-[53%] h-[100%] bg-ujenzi-lightgreen pr-[90px] pt-6">
          <div className="h-[50px] w-[100%] flex place-items-center pl-[299px]">
            <span className="text-[16px] font-bold text-ujenzi-darkgray pr-4">
              Don't have an account?
            </span>
            <Link to="/signup">
              <UjenziButton buttonText={"Sign Up"} />
            </Link>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="w-[100%] h-[90%] block pt-[100px] pl-[60px]"
          >
            {this.renderInput("useremail", "Email", "email", "w-[550px]")}
            {this.renderInput(
              "password",
              "Enter Your Password",
              "text",
              "w-[550px]"
            )}

            <div className="flex grid-cols-2 gap-3 justify-between pr-8 pt-12">
              <Link to={"/"}>
                <UjenziButton
                  buttonStyle={
                    "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
                  }
                  buttonText={"back"}
                />
              </Link>

              {this.renderButton("Sign In")}
            </div>
            {this.state.submitted && <Navigate targetPath to={"/dashboard"} replace={true} />}
          </form>
        </div>
      </div>
    );
  }
}

export default UjenziSingInPage;
