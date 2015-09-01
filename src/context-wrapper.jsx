import React from "react";

export default class ContextWrapper extends React.Component {
  static propTypes = {
    handler: React.PropTypes.any.isRequired,
    data: React.PropTypes.object.isRequired
  };

  render() {
    let Handler = this.props.handler;
    return (
      <div id="context-wrapper">
        <Handler data={this.props.data} />
      </div>
    );
  }
}
