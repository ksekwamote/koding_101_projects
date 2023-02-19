import React from "react";
import UploadImage from "./components/Misc/UploadImage";

export default function App() {
  return (
    <div>
      <UploadImage />
    </div>
  );
}

// import { useState } from "react";
// import { createContext } from "react";
// import UploadImage from "./components/Misc/UploadImage";
// import Login from "./components/PasswordRecovery/Login";
// import OTPInput from "./components/PasswordRecovery/OTPInput";
// import Recovered from "./components/PasswordRecovery/Recovered";
// import Reset from "./components/PasswordRecovery/Reset";

// export const RecoveryContext = createContext();
// function App() {
//   const [page, setPage] = useState("login");
//   const [email, setEmail] = useState();
//   const [otp, setOTP] = useState();

//   function NavigateComponents() {
//     if (page === "login") return <Login />;
//     if (page === "otp") return <OTPInput />;
//     if (page === "reset") return <Reset />;
//     return <Recovered />;
//   }

//   return (
//     <RecoveryContext.Provider
//       value={{ page, setPage, otp, setOTP, setEmail, email }}
//     >
//       <div className="flex justify-center items-center">
//         <NavigateComponents />
//       </div>
//     </RecoveryContext.Provider>
//   );
// }
// export default App;
