import React from "react";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

let store = createStore((data, action={}) => data);

export default class ContextWrapper extends React.Component {
  static propTypes = {
    handler: React.PropTypes.any.isRequired,
    data: React.PropTypes.object.isRequired
  };

  render() {
    let Handler = this.props.handler;
    return (
      <div id="context-wrapper">
        <Provider store={store}>
          {() =>
            <Handler data={this.props.data} locales={['en-US']} />
          }
        </Provider>
      </div>
    );
  }
}
