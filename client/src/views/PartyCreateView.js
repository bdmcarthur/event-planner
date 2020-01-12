// import React, { Component } from "react";
// import * as PartyServices from "../services/party-services";
// import { Redirect } from "react-router-dom";
// import PlanForm from "../Components/PlanForm";
// import PartyCard from "../Components/PartyCard";
// import Backgrounds from "../Components/Backgrounds";
// import FontPicker from "../Components/FontPicker";

// class PartyCreateView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: this.props.user._id,
//       title: "",
//       description: "",
//       date: "",
//       time: "",
//       address: "",
//       imageUrl: "",
//       guestList: "",
//       planStage: "text",
//       redirectTo: null,
//       background: 1,
//       mainFont: "Abril Fatface",
//       bodyFont: "Playfair Display"
//     };
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleClick = (state, value) => {
//     this.setState({
//       [state]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const {
//       user,
//       title,
//       description,
//       address,
//       imageUrl,
//       guestList,
//       date,
//       time,
//       background,
//       mainFont,
//       bodyFont
//     } = this.state;
//     PartyServices.addService({
//       user,
//       title,
//       description,
//       address,
//       imageUrl,
//       guestList,
//       date,
//       time,
//       design: [background, mainFont, bodyFont]
//     })
//       .then(response => {
//         this.props.getParties();
//         this.setState({
//           redirectTo: `/parties/${response._id}`
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   fontChange = (state, font) => {
//     this.setState({
//       [state]: font
//     });
//   };

//   designParty = event => {
//     event.preventDefault();
//     this.setState({
//       planStage: "design"
//     });
//   };

//   render() {
//     if (this.state.redirectTo) {
//       return <Redirect to={{ pathname: this.state.redirectTo }} />;
//     } else if (this.state.planStage === "text") {
//       return (
//         <PlanForm
//           state={this.state}
//           handleChange={this.handleChange}
//           designParty={this.designParty}
//         />
//       );
//     } else {
//       return (
//         <div className="container mb-5">
//           <PartyCard party={this.state} />
//           <div className="container mt-3 mx-auto text-center">
//             {this.state.planStage === "design" ? (
//               <div>
//                 <button
//                   className="btn btn-secondary mx-2 mt-3 py-2 px-4 design-btn"
//                   onClick={() => {
//                     this.handleClick("planStage", "backgrounds");
//                   }}
//                 >
//                   Change Background
//                 </button>
//                 <button
//                   className="btn btn-secondary mx-2 mt-3 py-2 px-4 design-btn"
//                   onClick={() => {
//                     this.handleClick("planStage", "fonts");
//                   }}
//                 >
//                   Change Fonts
//                 </button>
//               </div>
//             ) : this.state.planStage === "backgrounds" ? (
//               <div>
//                 <Backgrounds handleClick={this.handleClick} />
//                 <button
//                   className="btn btn-secondary mt-4 py-2 px-4 design-btn"
//                   onClick={() => {
//                     this.handleClick("planStage", "fonts");
//                   }}
//                 >
//                   Change Fonts
//                 </button>
//               </div>
//             ) : (
//               <div className="picker-font">
//                 <div class="container">
//                   <div class="row justify-content-center">
//                     <div class="col-sm col-md-3">
//                       <h3>Title Font</h3>
//                       <FontPicker
//                         name="mainFont"
//                         fontChange={("titleFont", this.fontChange)}
//                         defaultFont={this.state.mainFont}
//                       />
//                     </div>
//                     <div class="col-sm col-md-3">
//                       <h3>Body Font</h3>
//                       <FontPicker
//                         name="bodyFont"
//                         fontChange={("bodyFont", this.fontChange)}
//                         defaultFont={this.state.bodyFont}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   className="btn btn-secondary mt-4 py-2 px-4 design-btn"
//                   onClick={() => {
//                     this.handleClick("planStage", "backgrounds");
//                   }}
//                 >
//                   Change Background
//                 </button>
//               </div>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="btn btn-secondary btn-lg mx-2 mt-5 design-btn d-block mx-auto create"
//             onClick={this.handleSubmit}
//           >
//             Create Party
//           </button>
//         </div>
//       );
//     }
//   }
// }

// export default PartyCreateView;

import React, { Component } from "react";
import * as PartyServices from "../services/party-services";
import { Redirect } from "react-router-dom";
import PlanForm from "../Components/PlanForm";
import PartyCard from "../Components/PartyCard";
import Backgrounds from "../Components/Backgrounds";
import FontPicker from "../Components/FontPicker";

class PartyCreateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user._id,
      title: "",
      description: "",
      date: "",
      time: "",
      address: "",
      imageUrl: "",
      guestList: "",
      planStage: "text",
      redirectTo: null,
      background: 1,
      mainFont: "Abril Fatface",
      bodyFont: "Playfair Display"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = (state, value) => {
    this.setState({
      [state]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      user,
      title,
      description,
      address,
      imageUrl,
      guestList,
      date,
      time,
      background,
      mainFont,
      bodyFont
    } = this.state;
    PartyServices.addService({
      user,
      title,
      description,
      address,
      imageUrl,
      guestList,
      date,
      time,
      design: [background, mainFont, bodyFont]
    })
      .then(response => {
        this.props.getParties();
        this.setState({
          redirectTo: `/parties/${response._id}`
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  fontChange = (state, font) => {
    this.setState({
      [state]: font
    });
  };

  designParty = event => {
    event.preventDefault();
    this.setState({
      planStage: "design"
    });
  };

  render() {
    let test = this.state.planStage;
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else if (this.state.planStage === "text") {
      return (
        <PlanForm
          state={this.state}
          handleChange={this.handleChange}
          designParty={this.designParty}
        />
      );
    } else {
      return (
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-7">
              <PartyCard party={this.state} />
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center text-center">
                <div class="col-md-6">
                  <h5>Title Font</h5>
                  <FontPicker
                    name="mainFont"
                    fontChange={("titleFont", this.fontChange)}
                    defaultFont={this.state.mainFont}
                  />
                </div>
                <div class="col-md-6">
                  <h5>Body Font</h5>
                  <FontPicker
                    name="bodyFont"
                    fontChange={("bodyFont", this.fontChange)}
                    defaultFont={this.state.bodyFont}
                  />
                </div>
              </div>
              <Backgrounds handleClick={this.handleClick} />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-secondary btn-lg mx-2 mt-5 design-btn d-block mx-auto create"
            onClick={this.handleSubmit}
          >
            Create Party
          </button>
        </div>
      );
    }
  }
}

export default PartyCreateView;
