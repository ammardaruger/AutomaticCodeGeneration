import React, { Component } from "react";
import NavStyle2 from "./Navbars/NavStyle2";

class Web extends Component {
  render() {
    //const { style, arr, head, fontColor, backgroundClr } = this.props;
    let content;
    if(this.props.style === 1){
      content = <NavStyle2  {...this.props} />
    }else{
      content = <NavStyle2  {...this.props} />
    }

    return (
     <div>
       {content}
     </div>
    );
  }
}

export default Web;
