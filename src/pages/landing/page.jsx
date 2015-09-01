import React from "react";
import reactMixin from 'react-mixin';
import {IntlMixin} from 'react-intl';
import {connect} from 'react-redux';
import { getData } from "../../common/request";

@connect(state => ({state}))
@reactMixin.decorate(IntlMixin)
export default class LandingPage extends React.Component {
  componentWillMount() {
    console.log("[LandingPage] will mount with server response: ", this.props.data.landing);
  }

  render() {
    let { title } = this.props.data.landing;

    return (
      <div id="landing-page">
        <h1>{title}</h1>
        <pre>{JSON.stringify(this.props.state)}</pre>
      </div>
    );
  }

  static fetchData = function(params) {
    return getData("/landing");
  }
}
