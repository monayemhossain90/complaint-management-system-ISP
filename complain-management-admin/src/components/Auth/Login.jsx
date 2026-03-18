// import {
//   Card,
//   Input,
//   Typography,
//   Button,
//   Spinner,
// } from "@material-tailwind/react";
// import { useForm } from "react-hook-form";
// import { useLoginMutation } from "../../redux/features/auth/authApi.js";
// import { useDispatch, useSelector } from "react-redux";
// import Error from "../validation/Error.jsx";
// import { SetLoginError } from "../../redux/features/auth/authSlice.js";

// const Login = () => {
//   const [login, { isLoading }] = useLoginMutation();
//   const dispatch = useDispatch();
//   const error = useSelector((state) => state.auth.LoginError);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     // console.log(data);
//     dispatch(SetLoginError(""));
//     login(data);
//   };

//   return (
//     <>
//       <div className="min-h-screen grid place-items-center form-container">
//       <h1 className="text-center text-4xl font-bold mb-3">Complain Management System Admin</h1>
//         <Card
//           color="transparent"
//           className="p-7 bg-white w-[90%] sm:w-[450px]"
//           shadow={true}
//         >
//           <Typography variant="h4" color="blue-gray">
//             Admin Login
//           </Typography>
//           <Typography color="gray" className="mt-1 font-normal">
//             Enter your phonenumber & password to login
//           </Typography>
//           {error && (
//             <>
//               <Error message={error} />
//             </>
//           )}
//           <br />
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="py-4 grid grid-cols-1 w-[100%] gap-6"
//           >
//             <div>
//               <Input
//                 size="lg"
//                 type="string"
//                 label="Phone number"
//                 {...register("phonenumber", {
//                   required: "phonenumber is required",
//                   pattern: {
//                     value: /^01[3-9]\d{8}$/,
//                     message: "Enter a valid Bangladeshi phone number",
//                   },
//                   maxLength: {
//                     value: 14,
//                     message: "Phone number cannot exceed 14 digits",
//                   },

//                   minLength: {
//                     value: 11,
//                     message: "Phone number must be at least 11 digits",
//                   },
//                 })}
//                 error={Boolean(errors?.email?.message)}
//               />
//               {errors?.email?.message && (
//                 <span className="error-text">{errors?.email?.message}</span>
//               )}
//             </div>

//             <div>
//               <Input
//                 size="lg"
//                 type="password"
//                 label="Password"
//                 {...register("password", {
//                   required: { value: true, message: "Password is required!" },
//                   minLength: { value: 6, message: "Minimum 6 character" },
//                   maxLength: { value: 32, message: "Maximum 32 character" },
//                 })}
//                 error={Boolean(errors?.password?.message)}
//               />
//               {errors?.password?.message && (
//                 <span className="error-text">{errors?.password?.message}</span>
//               )}
//             </div>
//             <div className="w-full">
//               <Button
//                 disabled={isLoading}
//                 className={`${
//                   isLoading && "capitalize"
//                 } w-full flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
//                 type="submit"
//               >
//                 {isLoading ? (
//                   <>
//                     <Spinner className="h-4 w-4" /> Processing...
//                   </>
//                 ) : (
//                   <>Login</>
//                 )}
//               </Button>
//             </div>
//           </form>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default Login;


import {
  Card,
  Input,
  Typography,
  Button,
  Spinner,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi.js";
import { useDispatch, useSelector } from "react-redux";
import Error from "../validation/Error.jsx";
import { SetLoginError } from "../../redux/features/auth/authSlice.js";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.LoginError);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(SetLoginError(""));
    login(data);
  };

  const handleAutoFill = () => {
    setValue("phonenumber", "01777930838");
    setValue("password", "123456");
  };

  return (
    <div className="min-h-screen grid place-items-center form-container">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold mb-3">
          Complain Management System Admin
        </h1>

        <Card
          color="transparent"
          className="p-7 bg-white w-[90%] sm:w-[450px]"
          shadow={true}
        >
          <Typography variant="h4" color="blue-gray">
            Admin Login
          </Typography>

          <Typography color="gray" className="mt-1 font-normal">
            Enter your phonenumber & password to login
          </Typography>

          {error && <Error message={error} />}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="py-4 grid grid-cols-1 w-full gap-6"
          >
            {/* Phone Number */}
            <div>
              <Input
                size="lg"
                type="text"
                label="Phone number"
                {...register("phonenumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^01[3-9]\d{8}$/,
                    message: "Enter a valid Bangladeshi phone number",
                  },
                  minLength: {
                    value: 11,
                    message: "Phone number must be at least 11 digits",
                  },
                  maxLength: {
                    value: 14,
                    message: "Phone number cannot exceed 14 digits",
                  },
                })}
                error={Boolean(errors?.phonenumber)}
              />
              {errors?.phonenumber && (
                <span className="error-text">
                  {errors.phonenumber.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div>
              <Input
                size="lg"
                type="password"
                label="Password"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                  maxLength: {
                    value: 32,
                    message: "Maximum 32 characters",
                  },
                })}
                error={Boolean(errors?.password)}
              />
              {errors?.password && (
                <span className="error-text">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Login Button */}
            <div className="w-full">
              <Button
                disabled={isLoading}
                className="w-full flex gap-3 items-center justify-center"
                type="submit"
              >
                {isLoading ? (
                  <>
                    <Spinner className="h-4 w-4" /> Processing...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>

            {/* 🔥 Eye-catching Demo Button BELOW login */}
            <div className="w-full text-center mt-2">
              <Button
                type="button"
                onClick={handleAutoFill}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
              >
                🚀 Try Demo Admin Account
              </Button>

              <p className="text-xs text-gray-500 mt-2">
                Click to auto-fill demo credentials
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;