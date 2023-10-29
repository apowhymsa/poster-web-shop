exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 94334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(16066);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 55601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(94334)();
}


/***/ }),

/***/ 16066:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 17042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports["default"] = useConfig;

var _react = __webpack_require__(18038);

function useConfig(config) {
    var _useState = (0, _react.useState)(config.count),
        _useState2 = _slicedToArray(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    var _useState3 = (0, _react.useState)(config.size),
        _useState4 = _slicedToArray(_useState3, 2),
        size = _useState4[0],
        setSize = _useState4[1];

    var _useState5 = (0, _react.useState)(config.char),
        _useState6 = _slicedToArray(_useState5, 2),
        char = _useState6[0],
        setChar = _useState6[1];

    var _useState7 = (0, _react.useState)(config.color),
        _useState8 = _slicedToArray(_useState7, 2),
        color = _useState8[0],
        setColor = _useState8[1];

    var _useState9 = (0, _react.useState)(config.activeColor),
        _useState10 = _slicedToArray(_useState9, 2),
        activeColor = _useState10[0],
        setActiveColor = _useState10[1];

    var _useState11 = (0, _react.useState)(config.isHalf),
        _useState12 = _slicedToArray(_useState11, 2),
        isHalf = _useState12[0],
        setIsHalf = _useState12[1];

    var _useState13 = (0, _react.useState)(config.edit),
        _useState14 = _slicedToArray(_useState13, 2),
        edit = _useState14[0],
        setEdit = _useState14[1];

    var _useState15 = (0, _react.useState)(config.emptyIcon),
        _useState16 = _slicedToArray(_useState15, 2),
        emptyIcon = _useState16[0],
        setEmptyIcon = _useState16[1];

    var _useState17 = (0, _react.useState)(config.halfIcon),
        _useState18 = _slicedToArray(_useState17, 2),
        halfIcon = _useState18[0],
        setHalfIcon = _useState18[1];

    var _useState19 = (0, _react.useState)(config.filledIcon),
        _useState20 = _slicedToArray(_useState19, 2),
        filledIcon = _useState20[0],
        setFilledIcon = _useState20[1];

    var _useState21 = (0, _react.useState)(config.a11y),
        _useState22 = _slicedToArray(_useState21, 2),
        a11y = _useState22[0],
        setA11y = _useState22[1];

    var configObj = {
        count: count,
        size: size,
        char: char,
        color: color,
        activeColor: activeColor,
        isHalf: isHalf,
        edit: edit,
        emptyIcon: emptyIcon,
        halfIcon: halfIcon,
        filledIcon: filledIcon,
        a11y: a11y
    };

    function setConfig(config) {
        setCount(config.count);
        setSize(config.size);
        setChar(config.char);
        setColor(config.color);
        setActiveColor(config.activeColor);
        setIsHalf(config.isHalf);
        setEdit(config.edit);
        setEmptyIcon(config.emptyIcon);
        setHalfIcon(config.halfIcon);
        setFilledIcon(config.filledIcon);
        setA11y(config.a11y);
    }

    return [configObj, setConfig];
}

/***/ }),

/***/ 62579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useConfig3 = __webpack_require__(17042);

var _useConfig4 = _interopRequireDefault(_useConfig3);

var _star = __webpack_require__(54525);

var _star2 = _interopRequireDefault(_star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parentStyles = {
    overflow: "hidden",
    position: "relative"
};

function getHalfStarStyles(color, uniqueness) {
    return '\n    .react-stars-' + uniqueness + ':before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: ' + color + ';\n  }';
}

function getHalfStarStyleForIcons(color) {
    return '\n          span.react-stars-half > * {\n          color: ' + color + ';\n      }';
};

function ReactStars(props) {
    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        uniqueness = _useState2[0],
        setUniqueness = _useState2[1];

    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        currentValue = _useState4[0],
        setCurrentValue = _useState4[1];

    var _useState5 = (0, _react.useState)([]),
        _useState6 = _slicedToArray(_useState5, 2),
        stars = _useState6[0],
        setStars = _useState6[1];

    var _useState7 = (0, _react.useState)(false),
        _useState8 = _slicedToArray(_useState7, 2),
        isUsingIcons = _useState8[0],
        setIsUsingIcons = _useState8[1];

    var _useConfig = (0, _useConfig4.default)(props),
        _useConfig2 = _slicedToArray(_useConfig, 2),
        config = _useConfig2[0],
        setConfig = _useConfig2[1];

    var _useState9 = (0, _react.useState)(0),
        _useState10 = _slicedToArray(_useState9, 2),
        halfStarAt = _useState10[0],
        setHalfStarAt = _useState10[1];

    var _useState11 = (0, _react.useState)(false),
        _useState12 = _slicedToArray(_useState11, 2),
        halfStarHidden = _useState12[0],
        setHalfStarHidden = _useState12[1];

    var _useState13 = (0, _react.useState)(''),
        _useState14 = _slicedToArray(_useState13, 2),
        classNames = _useState14[0],
        setClassNames = _useState14[1];

    function iconsUsed(config) {
        return !config.isHalf && config.emptyIcon && config.filledIcon || config.isHalf && config.emptyIcon && config.halfIcon && config.filledIcon;
    }

    function createUniqueness() {
        setUniqueness((Math.random() + "").replace(".", ""));
    }

    (0, _react.useEffect)(function () {
        addClassNames();
        validateInitialValue(props.value, props.count);
        setStars(getStars(props.value));
        setConfig(props);
        createUniqueness();
        setIsUsingIcons(iconsUsed(props));
        setHalfStarAt(Math.floor(props.value));
        setHalfStarHidden(props.isHalf && props.value % 1 < 0.5);
    }, []);

    function validateInitialValue(value, count) {
        if (value < 0 || value > count) {
            setCurrentValue(0);
        } else {
            setCurrentValue(value);
        }
    }

    function addClassNames() {
        var reactStarsClass = 'react-stars';
        setClassNames(props.classNames + (' ' + reactStarsClass));
    }

    function isDecimal(value) {
        return value % 1 === 0;
    }

    function getRate() {
        return config.isHalf ? Math.floor(currentValue) : Math.round(currentValue);
    }

    function getStars(activeCount) {
        if (typeof activeCount === 'undefined') {
            activeCount = getRate();
        }

        var stars = [];
        for (var i = 0; i < config.count; i++) {
            stars.push({
                active: i <= activeCount - 1
            });
        }
        return stars;
    }

    function mouseOver(event) {
        if (!config.edit) return;

        var index = Number(event.currentTarget.getAttribute('data-index'));

        if (config.isHalf) {
            var isAtHalf = moreThanHalf(event);
            setHalfStarHidden(isAtHalf);
            if (isAtHalf) index += 1;
            setHalfStarAt(index);
        } else {
            index += 1;
        }

        updateStars(index);
    }

    function updateStars(index) {
        var currentActive = stars.filter(function (x) {
            return x.active;
        });
        if (index !== currentActive.length) {
            setStars(getStars(index));
        }
    }

    function moreThanHalf(event) {
        var target = event.target;

        var boundingClientRect = target.getBoundingClientRect();
        var mouseAt = event.clientX - boundingClientRect.left;
        mouseAt = Math.round(Math.abs(mouseAt));

        return mouseAt > boundingClientRect.width / 2;
    }

    function mouseLeave() {
        if (!config.edit) return;

        updateHalfStarValues(currentValue);
        setStars(getStars());
    }

    function updateHalfStarValues(value) {
        if (config.isHalf) {
            setHalfStarHidden(isDecimal(value));
            setHalfStarAt(Math.floor(value));
        }
    }

    function onClick(event) {
        if (!config.edit) return;

        var index = Number(event.currentTarget.getAttribute('data-index'));
        var value = void 0;
        if (config.isHalf) {
            var isAtHalf = moreThanHalf(event);
            setHalfStarHidden(isAtHalf);
            if (isAtHalf) index += 1;
            value = isAtHalf ? index : index + 0.5;
            setHalfStarAt(index);
        } else {
            value = index = index + 1;
        }

        currentValueUpdated(value);
    }

    function renderHalfStarStyleElement() {
        return _react2.default.createElement('style', { dangerouslySetInnerHTML: {
                __html: isUsingIcons ? getHalfStarStyleForIcons(config.activeColor) : getHalfStarStyles(config.activeColor, uniqueness)
            } });
    }

    function currentValueUpdated(value) {
        if (value !== currentValue) {
            setStars(getStars(value));
            setCurrentValue(value);
            props.onChange(value);
        }
    }

    function handleKeyDown(event) {
        if (!config.a11y && !config.edit) return;

        var key = event.key;

        var value = currentValue;

        var keyNumber = Number(key); // e.g. "1" => 1, "ArrowUp" => NaN
        if (keyNumber) {
            if (Number.isInteger(keyNumber) && keyNumber > 0 && keyNumber <= config.count) {
                value = keyNumber;
            }
        } else {
            if ((key === "ArrowUp" || key === "ArrowRight") && value < config.count) {
                event.preventDefault();

                value += config.isHalf ? 0.5 : 1;
            } else if ((key === "ArrowDown" || key === "ArrowLeft") && value > 0.5) {
                event.preventDefault();
                value -= config.isHalf ? 0.5 : 1;
            }
        }

        updateHalfStarValues(value);

        currentValueUpdated(value);
    }

    function renderStars() {
        return stars.map(function (star, i) {
            return _react2.default.createElement(_star2.default, {
                key: i,
                index: i,
                active: star.active,
                config: config,
                onMouseOver: mouseOver,
                onMouseLeave: mouseLeave,
                onClick: onClick,
                halfStarHidden: halfStarHidden,
                halfStarAt: halfStarAt,
                isUsingIcons: isUsingIcons,
                uniqueness: uniqueness
            });
        });
    }

    return _react2.default.createElement(
        'div',
        { className: 'react-stars-wrapper-' + uniqueness,
            style: { display: 'flex' } },
        _react2.default.createElement(
            'div',
            { tabIndex: config.a11y && config.edit ? 0 : null,
                'aria-label': 'add rating by typing an integer from 0 to 5 or pressing arrow keys',
                onKeyDown: handleKeyDown,
                className: classNames,
                style: parentStyles },
            config.isHalf && renderHalfStarStyleElement(),
            renderStars(),
            _react2.default.createElement(
                'p',
                { style: { position: 'absolute', left: '-200rem' }, role: 'status' },
                currentValue
            )
        )
    );
}

ReactStars.propTypes = {
    classNames: _propTypes2.default.string,
    edit: _propTypes2.default.bool,
    half: _propTypes2.default.bool,
    value: _propTypes2.default.number,
    count: _propTypes2.default.number,
    char: _propTypes2.default.string,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string,
    activeColor: _propTypes2.default.string,
    emptyIcon: _propTypes2.default.element,
    halfIcon: _propTypes2.default.element,
    filledIcon: _propTypes2.default.element,
    a11y: _propTypes2.default.bool
};

ReactStars.defaultProps = {
    edit: true,
    half: false,
    value: 0,
    count: 5,
    char: '★',
    size: 15,
    color: 'gray',
    activeColor: '#ffd700',
    a11y: true,

    onChange: function onChange() {}
};

exports.Z = ReactStars;

/***/ }),

/***/ 54525:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = Star;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    display: "block",
    float: "left"
};

function Star(props) {
    var index = props.index,
        active = props.active,
        config = props.config,
        onMouseOver = props.onMouseOver,
        onMouseLeave = props.onMouseLeave,
        onClick = props.onClick,
        halfStarHidden = props.halfStarHidden,
        halfStarAt = props.halfStarAt,
        isUsingIcons = props.isUsingIcons,
        uniqueness = props.uniqueness;
    var color = config.color,
        activeColor = config.activeColor,
        size = config.size,
        char = config.char,
        isHalf = config.isHalf,
        edit = config.edit,
        halfIcon = config.halfIcon,
        emptyIcon = config.emptyIcon,
        filledIcon = config.filledIcon;


    var starClass = '';
    var half = false;

    if (isHalf && !halfStarHidden && halfStarAt === index) {
        if (!isUsingIcons) starClass = "react-stars-" + uniqueness;else starClass = 'react-stars-half';
        half = true;
    }

    var style = _extends({}, defaultStyles, {
        color: active ? activeColor : color,
        cursor: edit ? 'pointer' : 'default',
        fontSize: size + "px"
    });

    function renderIcon() {
        if (!isUsingIcons) {
            return char;
        } else {
            if (active) {
                return filledIcon;
            } else if (!active && half) {
                return halfIcon;
            } else {
                return emptyIcon;
            }
        }
    }

    return _react2.default.createElement(
        "span",
        {
            className: starClass,
            style: style,
            key: index,
            "data-index": index,
            "data-forhalf": filledIcon ? index : char,
            onMouseOver: onMouseOver,
            onMouseMove: onMouseOver,
            onMouseLeave: onMouseLeave,
            onClick: onClick },
        renderIcon()
    );
}

/***/ }),

/***/ 17743:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);

function StarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

};
;