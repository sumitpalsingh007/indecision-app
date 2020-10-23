'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visible = function (_React$component) {
  _inherits(Visible, _React$component);

  function Visible() {
    _classCallCheck(this, Visible);

    return _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).apply(this, arguments));
  }

  _createClass(Visible, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visiblity Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.toggleNum },
          React.createElement(
            'p',
            null,
            this.state.num === 1 ? 'Hide details' : 'Show details'
          )
        ),
        React.createElement(
          'p',
          null,
          this.state.num === 1 ? 'Hello World' : ''
        )
      );
    }
  }, {
    key: 'toggleNum',
    value: function toggleNum() {
      if (this.state.num === 0) {
        this.state.num = 1;
      } else {
        this.state.num = 0;
      }
    }
  }]);

  return Visible;
}(React.component);

ReactDOM.render(React.createElement(Visible, null), document.getElementById('app'));
// var num = 0;
// const toggleNum = () => { 
//     if (num ===0) {
//         num =1;
//     }
//     else {
//       num =0;
//     }
//     render();
// };

// const render = () => {
//     const c = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={toggleNum}><p>{num === 1 ? 'Hide details' : 'Show details'}</p></button>
//             <p>{num === 1 ? 'Hello World' : ''}</p>
//         </div>
//     );
//     ReactDOM.render(c, appRoot);    
// };
// const appRoot = document.getElementById('app');

// render();
