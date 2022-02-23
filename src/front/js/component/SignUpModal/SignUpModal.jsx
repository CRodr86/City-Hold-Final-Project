// import React from "react";
// import SignUpForm from "../SignUpForm/SignUpForm.jsx";
// // import { useState } from "react";

// const SignUpModal = () => {

//   // const [user, setUser] = useState("");

//   const addNewUser = () => {
// 		fetch("https://3001-crodr86-cityholdfinalpr-xhpw0iaxvhj.ws-eu31.gitpod.io/api/user", {
// 			method: "POST",
// 			body: JSON.stringify(),
// 			headers: { "Content-Type": "application/json" }
// 		})
// 			.then(response => {
// 				return response.json(input);
// 			})
// 			.then(data => {
// 				console.log(data);
// 			})
// 			.catch(error => {
// 				console.log("Error", error);
// 			});
// 	};



//   return (
//     <div
//       className="tab-pane fade"
//       id="pills-signUp"
//       role="tabpanel"
//       aria-labelledby="pills-signUp-tab"
//     >
//       <SignUpForm />
//       <div class="col-12 d-flex justify-content-end">
//         <button
//           type="submit"
//           class="btn btn-primary border-0 px-5 my-3"
//           id="signUpButton"
//           onClick={addNewUser}
//         >
//           Sign up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUpModal;
