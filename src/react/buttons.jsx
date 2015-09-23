/**
 * MUI React buttons module
 * @module react/buttons
 */

'use strict';

var util = require('../js/lib/util.js'),
    Ripple = require('./ripple.jsx');

var buttonClass = 'mui-btn';


/**
 * Button constructor
 * @class
 */
var Button = React.createClass({
  mixins: [Ripple],
  getDefaultProps: function() {
    return {
      color: 'default', // default|primary|danger|accent
      style: 'default', // default|flat|raised|fab
      size: 'default', // default|small|large
      disabled: false
    };
  },
  render: function() {
    return (
      <button
        className={ buttonClass }
        data-mui-color={ this.props.color }
        data-mui-style={ this.props.style }
        data-mui-size={ this.props.size }
        disabled={ this.props.disabled }
        onMouseDown={ this.ripple }
        onTouchStart={ this.ripple }
        onClick={ this.props.onClick }
      >
        { this.props.children }
        { this.state.ripples && this.renderRipples() }
      </button>
    );
  }
});


/** Define module API */
module.exports = {
  Button: Button
};
