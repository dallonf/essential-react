import React from "react";
import reactMixin from 'react-mixin';
import {IntlMixin} from 'react-intl';
import {connect} from 'react-redux';
import { getData } from "../../common/request";

let LandingPage = React.createClass({
  mixins: [IntlMixin],

  componentWillMount() {
    console.log("[LandingPage] will mount with server response: ", this.props.data.landing);
  },

  render() {
    let { title } = this.props.data.landing;

    return (
      <div id="landing-page">
        <h1>{title}</h1>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  },

  statics: {
    fetchData: function(params) {
      return getData("/landing");
    }
  }
});

let wrapped = connect(state => ({state}))(LandingPage);
wrapped.fetchData = LandingPage.fetchData;

export default wrapped;
