import React, {Component} from "react";
import UjenziForm from "./../common/UjenziForm";
import UjenziButton from "./../common/UjenziButton";
import { UjenziLogo } from "./../common/UjenziLogo";
import { Link, Navigate } from "react-router-dom";
import UjenziInput from "../common/UjenziInput";
import Joi from "joi-browser";

class UjenziSuppliersSignUpPage2 extends Component {
  state = {
    data: {
      coverimage: " ",
      location: " ",
      description: " ",
    },
    errors: {},
    submitted:false,
    imageUrl: "",
  };

  

  uploadImage = (e) => {
    const file = e.target.files;
    this.setImageUrl(file);
  };
  doSubmit = () => {
    this.setState({ submitted: true });
  };
  render() {
    return (
      <form
        onSubmit={this.doSubmit}
        className="w-[100vw] max-h-[800px] h-[100vh] mx-w-[1428px] mx-h-[1117] flex"
      >
        <div className="w-[47%] h-[100%] bg-ujenzi-white pl-[120px] pt-6 block">
          <UjenziLogo />
          <UjenziInput
            inputType={"file"}
            name={"coverimage"}
            value={this.state.imageUrl}
            onChange={this.uploadImage}
            inputStyle={
              "w-[350px] h-[300px] mt-[110px] cursor-pointer ml-[70px]  shadow hover:shadow-ujenzi-darkgray hover:text-ujenzi-darkgrey hover:bg-ujenzi-lightgrey absolute grid place-items-center"
            }
          />
        </div>
        <div className="w-[53%] h-[100%] bg-ujenzi-lightgreen pr-[70px] pt-6">
          <div className="h-[50px] w-[100%] flex place-items-center pl-[300px]">
            <span className="text-[16px] font-bold text-ujenzi-darkgray pr-4">
              Already have an account?
            </span>
            <Link to={"/signin"}>
              <UjenziButton buttonText={"Sign in"} />
            </Link>
          </div>
          <form className="w-[100%] h-[90%] block pt-[90px] pl-[80px]">
            {/* {this.renderSelect("location", "Select Location", " ", "w-[550px]")}
            {this.renderTextarea(
              "description",
              "Type a short Description Here",
              "w-[550px]"
            )} */}
            <div className="flex grid-cols-2 gap-3 justify-between pr-6 pt-4">
              <Link to={"/"}>
                <UjenziButton
                  buttonStyle={
                    "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
                  }
                  buttonText={"back"}
                />
              </Link>
              {/* {this.renderButton("Done")} */}
            </div>
          </form>
        </div>
        {this.state.submitted && <Navigate to={"/dashboard"} />}
      </form>
    );
  }
}

export default UjenziSuppliersSignUpPage2;
