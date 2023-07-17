import React, { Component } from "react";
import Draggable from "react-draggable";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { RiSendPlaneFill, RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCopy, FaList, FaEllipsisV, FaShareAlt } from "react-icons/fa";
import "uikit/dist/css/uikit.min.css";
import { ChromePicker } from "react-color";

export default class Main extends Component {
  state = {
    disabled: false,
    showIcons: false,
  };

  render() {
    const onHover = () => {
      this.setState({ showIcons: true });
    };

    const onHoverOut = () => {
      this.setState({ showIcons: false });
    };

    const onClick = () => {
      this.setState({ disabled: !this.state.disabled });
    };
    const { disabled, colorDiv } = this.state;
    const { onRemove, index } = this.props;

    return (
      <Draggable disabled={disabled} bounds="parent">
        <div
          className="wrapper"
          style={{ backgroundColor: colorDiv }}
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
          <div
            className="icons"
            style={{ opacity: this.state.showIcons ? "1" : "0" }}
            onClick={onClick}
          >
            {this.state.disabled ? (
              <i style={{ opacity: "0.4" }} className="fas fa-ellipsis-v" />
            ) : (
              <i style={{ opacity: "0.4" }} className="fas fa-window-close" />
            )}
          </div>
          <div
            className="icons icons-del"
            style={{ opacity: this.state.showIcons ? "1" : "0" }}
            onClick={() => onRemove(index)}
          >
            <i class="far fa-trash-alt" />
          </div>
        </div>
      </Draggable>
    );
  }
}
