import * as yup from "yup";

export const signupSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phoneNumber: yup.string().required("Please enter your Phone Number"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().min(3).required("Please enter your password."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
  gender: yup
    .object()
    .shape({
      label: yup.string().optional(),
      value: yup.string().optional(),
    })
    .optional(),
});
