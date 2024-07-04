import { Dispatch } from "react";

export default ({
  setErrors,
  email,
  password
}: {
  setErrors: Dispatch<any> | Function;
  email: string;
  password: string;
}) => {
  let isValid = true;

  let newErrors = {
    email: "",
    password: ""
  };

  if (email === "") {
    newErrors.email = "이메일을 입력해주세요.";
    isValid = false;
  }

  if (password === "") {
    newErrors.password = "비밀번호를 입력해주세요.";
    isValid = false;
  }

  setErrors(newErrors);

  return isValid;
};
