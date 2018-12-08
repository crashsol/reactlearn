
import React, { Component } from 'react'
import { ContextMenu,MenuItem,ContextMenuTrigger  } from "react-contextmenu";
export default class rightclick extends Component {

  handleClick = (e, data) => {
    console.log(data.foo);
  }
  render() {
    return (
      <div>
        <ContextMenuTrigger id="some_unique_identifier">
          <div className="well">Right click to see the menu</div>
        </ContextMenuTrigger>

        <ContextMenu id="some_unique_identifier">
          <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
            ContextMenu Item 1
        </MenuItem>
          <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
            ContextMenu Item 2
        </MenuItem>
          <MenuItem divider />
          <MenuItem data={{ foo: 'bar' }} onClick={this.handleClick}>
            ContextMenu Item 3
        </MenuItem>
        </ContextMenu>
      </div>
    )
  }
}
