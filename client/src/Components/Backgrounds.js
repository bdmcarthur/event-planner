// import React from "../../node_modules/react";

// const Backgrounds = props => {
//   return (
//     <div class="container">
//       <div class="row">
//         <div class="col-md-2 col-6">
//           <img
//             onClick={() => {
//               props.handleClick("background", 1);
//             }}
//             className="w-100"
//             alt="background"
//             src={`/images/${1}.jpg`}
//           ></img>
//         </div>
//         <div class="col-md-2 col-6">
//           <img
//             onClick={() => {
//               props.handleClick("background", 2);
//             }}
//             className="w-100"
//             alt="background"
//             src={`/images/${2}.jpg`}
//           ></img>
//         </div>
//         <div class="col-md-2 col-6">
//           <img
//             onClick={() => {
//               props.handleClick("background", 3);
//             }}
//             className="w-100"
//             alt="background"
//             src={`/images/${3}.jpg`}
//           ></img>
//         </div>
//         <div class="col-md-2 col-6">
//           <img
//             onClick={() => {
//               props.handleClick("background", 4);
//             }}
//             className="w-100"
//             alt="background"
//             src={`/images/${4}.jpg`}
//           ></img>
//         </div>
//         <div class="col-md-2 col-6">
//           <img
//             onClick={() => {
//               props.handleClick("background", 5);
//             }}
//             className="w-100"
//             alt="background"
//             src={`/images/${5}.jpg`}
//           ></img>
//         </div>
//         <div class="col-md-2 col-6">
//           <img
//             onClick={() => {
//               props.handleClick("background", 6);
//             }}
//             className="w-100"
//             alt="background"
//             src={`/images/${6}.jpg`}
//           ></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Backgrounds;

import React from "../../node_modules/react";

const Backgrounds = props => {
  return (
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6 mt-3 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 1);
            }}
            className="w-100"
            alt="background"
            src={`/images/${1}.jpg`}
          ></img>
        </div>
        <div class="col-md-6 mt-3 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 2);
            }}
            className="w-100"
            alt="background"
            src={`/images/${2}.jpg`}
          ></img>
        </div>
        <div class="col-md-6 mt-3 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 3);
            }}
            className="w-100"
            alt="background"
            src={`/images/${3}.jpg`}
          ></img>
        </div>
        <div class="col-md-6 mt-3 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 4);
            }}
            className="w-100"
            alt="background"
            src={`/images/${4}.jpg`}
          ></img>
        </div>
        <div class="col-md-6 mt-3 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 5);
            }}
            className="w-100"
            alt="background"
            src={`/images/${5}.jpg`}
          ></img>
        </div>
        <div class="col-md-6 mt-3 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 6);
            }}
            className="w-100"
            alt="background"
            src={`/images/${6}.jpg`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Backgrounds;
