exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 57702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var jsxRuntime = __webpack_require__(56786);
var react = __webpack_require__(18038);
var ReactDOM = __webpack_require__(98704);

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

var invariant$1 = /*@__PURE__*/getDefaultExportFromCjs(invariant_1);

var MapContext = react.createContext(null);
function useGoogleMap() {
    invariant$1(!!react.useContext, 'useGoogleMap is React hook and requires React version 16.8+');
    var map = react.useContext(MapContext);
    invariant$1(!!map, 'useGoogleMap needs a GoogleMap available up in the tree');
    return map;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function reduce(obj, fn, acc) {
    return Object.keys(obj).reduce(function reducer(newAcc, key) {
        return fn(newAcc, obj[key], key);
    }, acc);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forEach(obj, fn) {
    Object.keys(obj).forEach(function (key) {
        return fn(obj[key], key);
    });
}

/* global google */
function applyUpdaterToNextProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
updaterMap, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
prevProps, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
nextProps, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var map = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var iter = function (fn, key) {
        var nextValue = nextProps[key];
        if (nextValue !== prevProps[key]) {
            map[key] = nextValue;
            fn(instance, nextValue);
        }
    };
    forEach(updaterMap, iter);
    return map;
}
function registerEvents(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance, eventMap) {
    var registeredList = reduce(eventMap, function reducer(acc, googleEventName, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onEventName) {
        if (typeof props[onEventName] === 'function') {
            acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
        }
        return acc;
    }, []);
    return registeredList;
}
function unregisterEvent(registered) {
    google.maps.event.removeListener(registered);
}
function unregisterEvents(events) {
    if (events === void 0) { events = []; }
    events.forEach(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents(_a) {
    var updaterMap = _a.updaterMap, eventMap = _a.eventMap, prevProps = _a.prevProps, nextProps = _a.nextProps, instance = _a.instance;
    var registeredEvents = registerEvents(nextProps, instance, eventMap);
    applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
    return registeredEvents;
}

var eventMap$i = {
    onDblClick: 'dblclick',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMapTypeIdChanged: 'maptypeid_changed',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseDown: 'mousedown',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
    onTilesLoaded: 'tilesloaded',
    onBoundsChanged: 'bounds_changed',
    onCenterChanged: 'center_changed',
    onClick: 'click',
    onDrag: 'drag',
    onHeadingChanged: 'heading_changed',
    onIdle: 'idle',
    onProjectionChanged: 'projection_changed',
    onResize: 'resize',
    onTiltChanged: 'tilt_changed',
    onZoomChanged: 'zoom_changed',
};
var updaterMap$i = {
    extraMapTypes: function (map, extra) {
        extra.forEach(function forEachExtra(it, i) {
            map.mapTypes.set(String(i), it);
        });
    },
    center: function (map, center) {
        map.setCenter(center);
    },
    clickableIcons: function (map, clickable) {
        map.setClickableIcons(clickable);
    },
    heading: function (map, heading) {
        map.setHeading(heading);
    },
    mapTypeId: function (map, mapTypeId) {
        map.setMapTypeId(mapTypeId);
    },
    options: function (map, options) {
        map.setOptions(options);
    },
    streetView: function (map, streetView) {
        map.setStreetView(streetView);
    },
    tilt: function (map, tilt) {
        map.setTilt(tilt);
    },
    zoom: function (map, zoom) {
        map.setZoom(zoom);
    },
};
// TODO: unfinished!
function GoogleMapFunctional(_a) {
    var children = _a.children, options = _a.options, id = _a.id, mapContainerStyle = _a.mapContainerStyle, mapContainerClassName = _a.mapContainerClassName, center = _a.center, 
    // clickableIcons,
    // extraMapTypes,
    // heading,
    // mapTypeId,
    onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, 
    // onMapTypeIdChanged,
    // onTilesLoaded,
    // onBoundsChanged,
    onCenterChanged = _a.onCenterChanged, 
    // onHeadingChanged,
    // onIdle,
    // onProjectionChanged,
    // onResize,
    // onTiltChanged,
    // onZoomChanged,
    onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var _b = react.useState(null), map = _b[0], setMap = _b[1];
    var ref = react.useRef(null);
    // const [extraMapTypesListener, setExtraMapTypesListener] = useState<google.maps.MapsEventListener | null>(null)
    var _c = react.useState(null), centerChangedListener = _c[0], setCenterChangedListener = _c[1];
    var _d = react.useState(null), dblclickListener = _d[0], setDblclickListener = _d[1];
    var _e = react.useState(null), dragendListener = _e[0], setDragendListener = _e[1];
    var _f = react.useState(null), dragstartListener = _f[0], setDragstartListener = _f[1];
    var _g = react.useState(null), mousedownListener = _g[0], setMousedownListener = _g[1];
    var _h = react.useState(null), mousemoveListener = _h[0], setMousemoveListener = _h[1];
    var _j = react.useState(null), mouseoutListener = _j[0], setMouseoutListener = _j[1];
    var _k = react.useState(null), mouseoverListener = _k[0], setMouseoverListener = _k[1];
    var _l = react.useState(null), mouseupListener = _l[0], setMouseupListener = _l[1];
    var _m = react.useState(null), rightclickListener = _m[0], setRightclickListener = _m[1];
    var _o = react.useState(null), clickListener = _o[0], setClickListener = _o[1];
    var _p = react.useState(null), dragListener = _p[0], setDragListener = _p[1];
    // Order does matter
    react.useEffect(function () {
        if (options && map !== null) {
            map.setOptions(options);
        }
    }, [map, options]);
    react.useEffect(function () {
        if (map !== null && typeof center !== 'undefined') {
            map.setCenter(center);
        }
    }, [map, center]);
    react.useEffect(function () {
        if (map && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(map, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (map && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(map, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (map && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(map, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (map && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(map, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (map && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(map, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (map && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(map, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (map && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(map, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (map && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(map, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (map && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(map, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (map && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(map, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (map && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(map, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (map && onCenterChanged) {
            if (centerChangedListener !== null) {
                google.maps.event.removeListener(centerChangedListener);
            }
            setCenterChangedListener(google.maps.event.addListener(map, 'center_changed', onCenterChanged));
        }
    }, [onClick]);
    react.useEffect(function () {
        var map = ref.current === null
            ? null
            : new google.maps.Map(ref.current, options);
        setMap(map);
        if (map !== null && onLoad) {
            onLoad(map);
        }
        return function () {
            if (map !== null) {
                if (onUnmount) {
                    onUnmount(map);
                }
            }
        };
    }, []);
    return (jsxRuntime.jsx("div", { id: id, ref: ref, style: mapContainerStyle, className: mapContainerClassName, children: jsxRuntime.jsx(MapContext.Provider, { value: map, children: map !== null ? children : jsxRuntime.jsx(jsxRuntime.Fragment, {}) }) }));
}
react.memo(GoogleMapFunctional);
var GoogleMap = /** @class */ (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            map: null,
        };
        _this.registeredEvents = [];
        _this.mapRef = null;
        _this.getInstance = function () {
            if (_this.mapRef === null) {
                return null;
            }
            return new google.maps.Map(_this.mapRef, _this.props.options);
        };
        _this.panTo = function (latLng) {
            var map = _this.getInstance();
            if (map) {
                map.panTo(latLng);
            }
        };
        _this.setMapCallback = function () {
            if (_this.state.map !== null) {
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.map);
                }
            }
        };
        _this.getRef = function (ref) {
            _this.mapRef = ref;
        };
        return _this;
    }
    GoogleMap.prototype.componentDidMount = function () {
        var map = this.getInstance();
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$i,
            eventMap: eventMap$i,
            prevProps: {},
            nextProps: this.props,
            instance: map,
        });
        this.setState(function setMap() {
            return {
                map: map,
            };
        }, this.setMapCallback);
    };
    GoogleMap.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.map !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$i,
                eventMap: eventMap$i,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.map,
            });
        }
    };
    GoogleMap.prototype.componentWillUnmount = function () {
        if (this.state.map !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.map);
            }
            unregisterEvents(this.registeredEvents);
        }
    };
    GoogleMap.prototype.render = function () {
        return (jsxRuntime.jsx("div", { id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName, children: jsxRuntime.jsx(MapContext.Provider, { value: this.state.map, children: this.state.map !== null ? this.props.children : jsxRuntime.jsx(jsxRuntime.Fragment, {}) }) }));
    };
    return GoogleMap;
}(react.PureComponent));

var isBrowser = typeof document !== 'undefined';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function injectScript(_a) {
    var url = _a.url, id = _a.id, nonce = _a.nonce;
    if (!isBrowser) {
        return Promise.reject(new Error('document is undefined'));
    }
    return new Promise(function injectScriptCallback(resolve, reject) {
        var existingScript = document.getElementById(id);
        var windowWithGoogleMap = window;
        if (existingScript) {
            // Same script id/url: keep same script
            var dataStateAttribute = existingScript.getAttribute('data-state');
            if (existingScript.src === url && dataStateAttribute !== 'error') {
                if (dataStateAttribute === 'ready') {
                    return resolve(id);
                }
                else {
                    var originalInitMap_1 = windowWithGoogleMap.initMap;
                    var originalErrorCallback_1 = existingScript.onerror;
                    windowWithGoogleMap.initMap = function initMap() {
                        if (originalInitMap_1) {
                            originalInitMap_1();
                        }
                        resolve(id);
                    };
                    existingScript.onerror = function (err) {
                        if (originalErrorCallback_1) {
                            originalErrorCallback_1(err);
                        }
                        reject(err);
                    };
                    return;
                }
            }
            // Same script id, but either
            // 1. requested URL is different
            // 2. script failed to load
            else {
                existingScript.remove();
            }
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = id;
        script.async = true;
        script.nonce = nonce || '';
        script.onerror = function onerror(err) {
            script.setAttribute('data-state', 'error');
            reject(err);
        };
        windowWithGoogleMap.initMap = function onload() {
            script.setAttribute('data-state', 'ready');
            resolve(id);
        };
        document.head.appendChild(script);
    }).catch(function (err) {
        console.error('injectScript error: ', err);
        throw err;
    });
}

function isGoogleFontStyle(element) {
    // 'Roboto' or 'Google Sans Text' font download
    var href = element.href;
    if (href && (href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0 ||
        href.indexOf('https://fonts.googleapis.com/css?family=Google+Sans+Text') === 0)) {
        return true;
    }
    // font style elements
    if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet.cssText &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet.cssText = '';
        return true;
    }
    // font style elements for other browsers
    if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.innerHTML &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.innerHTML = '';
        return true;
    }
    // when google tries to add empty style
    if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !element.styleSheet &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !element.innerHTML) {
        return true;
    }
    return false;
}
// Preventing the Google Maps library from downloading an extra font
function preventGoogleFonts() {
    // we override these methods only for one particular head element
    // default methods for other elements are not affected
    var head = document.getElementsByTagName('head')[0];
    if (head) {
        var trueInsertBefore_1 = head.insertBefore.bind(head);
        // TODO: adding return before reflect solves the TS issue
        head.insertBefore = function insertBefore(newElement, referenceElement) {
            if (!isGoogleFontStyle(newElement)) {
                Reflect.apply(trueInsertBefore_1, head, [newElement, referenceElement]);
            }
            return newElement;
        };
        var trueAppend_1 = head.appendChild.bind(head);
        // TODO: adding return before reflect solves the TS issue
        head.appendChild = function appendChild(textNode) {
            if (!isGoogleFontStyle(textNode)) {
                Reflect.apply(trueAppend_1, head, [textNode]);
            }
            return textNode;
        };
    }
}

function makeLoadScriptUrl(_a) {
    var googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, _b = _a.version, version = _b === void 0 ? 'weekly' : _b, language = _a.language, region = _a.region, libraries = _a.libraries, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
    var params = [];
    invariant$1((googleMapsApiKey && googleMapsClientId) || !(googleMapsApiKey && googleMapsClientId), 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.');
    if (googleMapsApiKey) {
        params.push("key=".concat(googleMapsApiKey));
    }
    else if (googleMapsClientId) {
        params.push("client=".concat(googleMapsClientId));
    }
    if (version) {
        params.push("v=".concat(version));
    }
    if (language) {
        params.push("language=".concat(language));
    }
    if (region) {
        params.push("region=".concat(region));
    }
    if (libraries && libraries.length) {
        params.push("libraries=".concat(libraries.sort().join(',')));
    }
    if (channel) {
        params.push("channel=".concat(channel));
    }
    if (mapIds && mapIds.length) {
        params.push("map_ids=".concat(mapIds.join(',')));
    }
    if (authReferrerPolicy) {
        params.push("auth_referrer_policy=".concat(authReferrerPolicy));
    }
    params.push('callback=initMap');
    return "https://maps.googleapis.com/maps/api/js?".concat(params.join('&'));
}

var cleaningUp = false;
function DefaultLoadingElement() {
    return jsxRuntime.jsx("div", { children: "Loading..." });
}
var defaultLoadScriptProps = {
    id: 'script-loader',
    version: 'weekly',
};
var LoadScript = /** @class */ (function (_super) {
    __extends(LoadScript, _super);
    function LoadScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.check = react.createRef();
        _this.state = {
            loaded: false,
        };
        _this.cleanupCallback = function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            delete window.google.maps;
            _this.injectScript();
        };
        _this.isCleaningUp = function () { return __awaiter$1(_this, void 0, void 0, function () {
            function promiseCallback(resolve) {
                if (!cleaningUp) {
                    resolve();
                }
                else {
                    if (isBrowser) {
                        var timer_1 = window.setInterval(function interval() {
                            if (!cleaningUp) {
                                window.clearInterval(timer_1);
                                resolve();
                            }
                        }, 1);
                    }
                }
                return;
            }
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(promiseCallback)];
            });
        }); };
        _this.cleanup = function () {
            cleaningUp = true;
            var script = document.getElementById(_this.props.id);
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
            Array.prototype.slice
                .call(document.getElementsByTagName('script'))
                .filter(function filter(script) {
                return typeof script.src === 'string' && script.src.includes('maps.googleapis');
            })
                .forEach(function forEach(script) {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
            Array.prototype.slice
                .call(document.getElementsByTagName('link'))
                .filter(function filter(link) {
                return (link.href === 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans');
            })
                .forEach(function forEach(link) {
                if (link.parentNode) {
                    link.parentNode.removeChild(link);
                }
            });
            Array.prototype.slice
                .call(document.getElementsByTagName('style'))
                .filter(function filter(style) {
                return (style.innerText !== undefined &&
                    style.innerText.length > 0 &&
                    style.innerText.includes('.gm-'));
            })
                .forEach(function forEach(style) {
                if (style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            });
        };
        _this.injectScript = function () {
            if (_this.props.preventGoogleFontsLoading) {
                preventGoogleFonts();
            }
            invariant$1(!!_this.props.id, 'LoadScript requires "id" prop to be a string: %s', _this.props.id);
            var injectScriptOptions = {
                id: _this.props.id,
                nonce: _this.props.nonce,
                url: makeLoadScriptUrl(_this.props),
            };
            injectScript(injectScriptOptions)
                .then(function () {
                if (_this.props.onLoad) {
                    _this.props.onLoad();
                }
                _this.setState(function setLoaded() {
                    return {
                        loaded: true,
                    };
                });
                return;
            })
                .catch(function (err) {
                if (_this.props.onError) {
                    _this.props.onError(err);
                }
                console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(_this
                    .props.googleMapsApiKey || '-', ") or Client ID (").concat(_this.props.googleMapsClientId ||
                    '-', ") to <LoadScript />\n          Otherwise it is a Network issue.\n        "));
            });
        };
        return _this;
    }
    LoadScript.prototype.componentDidMount = function () {
        if (isBrowser) {
            if (window.google && window.google.maps && !cleaningUp) {
                console.error('google api is already presented');
                return;
            }
            this.isCleaningUp()
                .then(this.injectScript)
                .catch(function error(err) {
                console.error('Error at injecting script after cleaning up: ', err);
            });
        }
    };
    LoadScript.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.libraries !== prevProps.libraries) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        if (isBrowser && prevProps.language !== this.props.language) {
            this.cleanup();
            // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
            this.setState(function setLoaded() {
                return {
                    loaded: false,
                };
            }, this.cleanupCallback);
        }
    };
    LoadScript.prototype.componentWillUnmount = function () {
        var _this = this;
        if (isBrowser) {
            this.cleanup();
            var timeoutCallback = function () {
                if (!_this.check.current) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    delete window.google;
                    cleaningUp = false;
                }
            };
            window.setTimeout(timeoutCallback, 1);
            if (this.props.onUnmount) {
                this.props.onUnmount();
            }
        }
    };
    LoadScript.prototype.render = function () {
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { ref: this.check }), this.state.loaded
                    ? this.props.children
                    : this.props.loadingElement || jsxRuntime.jsx(DefaultLoadingElement, {})] }));
    };
    LoadScript.defaultProps = defaultLoadScriptProps;
    return LoadScript;
}(react.PureComponent));

/* eslint-disable filenames/match-regex */
var previouslyLoadedUrl;
function useLoadScript(_a) {
    var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, language = _a.language, region = _a.region, libraries = _a.libraries, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
    var isMounted = react.useRef(false);
    var _d = react.useState(false), isLoaded = _d[0], setLoaded = _d[1];
    var _e = react.useState(undefined), loadError = _e[0], setLoadError = _e[1];
    react.useEffect(function trackMountedState() {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    react.useEffect(function applyPreventGoogleFonts() {
        if (isBrowser && preventGoogleFontsLoading) {
            preventGoogleFonts();
        }
    }, [preventGoogleFontsLoading]);
    react.useEffect(function validateLoadedState() {
        if (isLoaded) {
            invariant$1(!!window.google, 'useLoadScript was marked as loaded, but window.google is not present. Something went wrong.');
        }
    }, [isLoaded]);
    var url = makeLoadScriptUrl({
        version: version,
        googleMapsApiKey: googleMapsApiKey,
        googleMapsClientId: googleMapsClientId,
        language: language,
        region: region,
        libraries: libraries,
        channel: channel,
        mapIds: mapIds,
        authReferrerPolicy: authReferrerPolicy
    });
    react.useEffect(function loadScriptAndModifyLoadedState() {
        if (!isBrowser) {
            return;
        }
        function setLoadedIfMounted() {
            if (isMounted.current) {
                setLoaded(true);
                previouslyLoadedUrl = url;
            }
        }
        if (window.google && window.google.maps && previouslyLoadedUrl === url) {
            setLoadedIfMounted();
            return;
        }
        injectScript({ id: id, url: url, nonce: nonce })
            .then(setLoadedIfMounted)
            .catch(function handleInjectError(err) {
            if (isMounted.current) {
                setLoadError(err);
            }
            console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(googleMapsApiKey ||
                '-', ") or Client ID (").concat(googleMapsClientId || '-', ")\n        Otherwise it is a Network issue.\n      "));
            console.error(err);
        });
    }, [id, url, nonce]);
    var prevLibraries = react.useRef();
    react.useEffect(function checkPerformance() {
        if (prevLibraries.current && libraries !== prevLibraries.current) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        prevLibraries.current = libraries;
    }, [libraries]);
    return { isLoaded: isLoaded, loadError: loadError, url: url };
}

var defaultLoadingElement = jsxRuntime.jsx(DefaultLoadingElement, {});
function LoadScriptNext(_a) {
    var loadingElement = _a.loadingElement, onLoad = _a.onLoad, onError = _a.onError, onUnmount = _a.onUnmount, children = _a.children, hookOptions = __rest$1(_a, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);
    var _b = useLoadScript(hookOptions), isLoaded = _b.isLoaded, loadError = _b.loadError;
    react.useEffect(function handleOnLoad() {
        if (isLoaded && typeof onLoad === 'function') {
            onLoad();
        }
    }, [isLoaded, onLoad]);
    react.useEffect(function handleOnError() {
        if (loadError && typeof onError === 'function') {
            onError(loadError);
        }
    }, [loadError, onError]);
    react.useEffect(function handleOnUnmount() {
        return function () {
            if (onUnmount) {
                onUnmount();
            }
        };
    }, [onUnmount]);
    return isLoaded ? children : loadingElement || defaultLoadingElement;
}
var LoadScriptNext$1 = react.memo(LoadScriptNext);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual$1 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual$1(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */
    createUrl() {
        let url = this.url;
        url += `?callback=__googleMapsCallback`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    importLibrary(name) {
        this.execute();
        return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        var _a, _b;
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const params = {
            key: this.apiKey,
            channel: this.channel,
            client: this.client,
            libraries: this.libraries.length && this.libraries,
            v: this.version,
            mapIds: this.mapIds,
            language: this.language,
            region: this.region,
            authReferrerPolicy: this.authReferrerPolicy,
        };
        // keep the URL minimal:
        Object.keys(params).forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key) => !params[key] && delete params[key]);
        if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
            // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
            // which also sets the base url, the id, and the nonce
            /* eslint-disable */
            ((g) => {
                // @ts-ignore
                let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
                // @ts-ignore
                b = b[c] || (b[c] = {});
                // @ts-ignore
                const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => 
                // @ts-ignore
                h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    yield (a = m.createElement("script"));
                    a.id = this.id;
                    e.set("libraries", [...r] + "");
                    // @ts-ignore
                    for (k in g)
                        e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
                    e.set("callback", c + ".maps." + q);
                    a.src = this.url + `?` + e;
                    d[q] = f;
                    a.onerror = () => (h = n(Error(p + " could not load.")));
                    // @ts-ignore
                    a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                    m.head.append(a);
                })));
                // @ts-ignore
                d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
            })(params);
            /* eslint-enable */
        }
        // While most libraries populate the global namespace when loaded via bootstrap params,
        // this is not the case for "marker" when used with the inline bootstrap loader
        // (and maybe others in the future). So ensure there is an importLibrary for each:
        const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
        // ensure at least one library, to kick off loading...
        if (!libraryPromises.length) {
            libraryPromises.push(this.importLibrary("core"));
        }
        Promise.all(libraryPromises).then(() => this.callback(), (error) => {
            const event = new ErrorEvent("error", { error }); // for backwards compat
            this.loadErrorCallback(event);
        });
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setScript();
            }
        }
    }
}

var defaultLibraries = ['maps'];
function useJsApiLoader(_a) {
    var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, 
    // googleMapsClientId,
    language = _a.language, region = _a.region, _d = _a.libraries, libraries = _d === void 0 ? defaultLibraries : _d, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, 
    // channel,
    mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
    var isMounted = react.useRef(false);
    var _e = react.useState(false), isLoaded = _e[0], setLoaded = _e[1];
    var _f = react.useState(undefined), loadError = _f[0], setLoadError = _f[1];
    react.useEffect(function trackMountedState() {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    var loader = react.useMemo(function () {
        return new Loader({
            id: id,
            apiKey: googleMapsApiKey,
            version: version,
            libraries: libraries,
            language: language || 'en',
            region: region || 'US',
            mapIds: mapIds || [],
            nonce: nonce || '',
            authReferrerPolicy: authReferrerPolicy || 'origin',
        });
    }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce, authReferrerPolicy]);
    react.useEffect(function effect() {
        if (isLoaded) {
            return;
        }
        else {
            loader.load().then(function () {
                if (isMounted.current) {
                    setLoaded(true);
                }
                return;
            })
                .catch(function (error) {
                setLoadError(error);
            });
        }
    }, []);
    react.useEffect(function () {
        if (isBrowser && preventGoogleFontsLoading) {
            preventGoogleFonts();
        }
    }, [preventGoogleFontsLoading]);
    var prevLibraries = react.useRef();
    react.useEffect(function () {
        if (prevLibraries.current && libraries !== prevLibraries.current) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        prevLibraries.current = libraries;
    }, [libraries]);
    return { isLoaded: isLoaded, loadError: loadError };
}

var eventMap$h = {};
var updaterMap$h = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
};
function TrafficLayerFunctional(_a) {
    var options = _a.options, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, (options || {})), { map: map }));
        setInstance(trafficLayer);
        if (onLoad) {
            onLoad(trafficLayer);
        }
        return function () {
            if (instance !== null) {
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var TrafficLayerF = react.memo(TrafficLayerFunctional);
var TrafficLayer = /** @class */ (function (_super) {
    __extends(TrafficLayer, _super);
    function TrafficLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            trafficLayer: null,
        };
        _this.setTrafficLayerCallback = function () {
            if (_this.state.trafficLayer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.trafficLayer);
            }
        };
        _this.registeredEvents = [];
        return _this;
    }
    TrafficLayer.prototype.componentDidMount = function () {
        var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$h,
            eventMap: eventMap$h,
            prevProps: {},
            nextProps: this.props,
            instance: trafficLayer,
        });
        this.setState(function setTrafficLayer() {
            return {
                trafficLayer: trafficLayer,
            };
        }, this.setTrafficLayerCallback);
    };
    TrafficLayer.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.trafficLayer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$h,
                eventMap: eventMap$h,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.trafficLayer,
            });
        }
    };
    TrafficLayer.prototype.componentWillUnmount = function () {
        if (this.state.trafficLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.trafficLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.trafficLayer.setMap(null);
        }
    };
    TrafficLayer.prototype.render = function () {
        return null;
    };
    TrafficLayer.contextType = MapContext;
    return TrafficLayer;
}(react.PureComponent));

function BicyclingLayerFunctional(_a) {
    var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        var bicyclingLayer = new google.maps.BicyclingLayer();
        setInstance(bicyclingLayer);
        bicyclingLayer.setMap(map);
        if (onLoad) {
            onLoad(bicyclingLayer);
        }
        return function () {
            if (bicyclingLayer !== null) {
                if (onUnmount) {
                    onUnmount(bicyclingLayer);
                }
                bicyclingLayer.setMap(null);
            }
        };
    }, []);
    return null;
}
var BicyclingLayerF = react.memo(BicyclingLayerFunctional);
var BicyclingLayer = /** @class */ (function (_super) {
    __extends(BicyclingLayer, _super);
    function BicyclingLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            bicyclingLayer: null,
        };
        _this.setBicyclingLayerCallback = function () {
            if (_this.state.bicyclingLayer !== null) {
                _this.state.bicyclingLayer.setMap(_this.context);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.bicyclingLayer);
                }
            }
        };
        return _this;
    }
    BicyclingLayer.prototype.componentDidMount = function () {
        var bicyclingLayer = new google.maps.BicyclingLayer();
        this.setState(function () {
            return {
                bicyclingLayer: bicyclingLayer,
            };
        }, this.setBicyclingLayerCallback);
    };
    BicyclingLayer.prototype.componentWillUnmount = function () {
        if (this.state.bicyclingLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.bicyclingLayer);
            }
            this.state.bicyclingLayer.setMap(null);
        }
    };
    BicyclingLayer.prototype.render = function () {
        return null;
    };
    BicyclingLayer.contextType = MapContext;
    return BicyclingLayer;
}(react.PureComponent));

function TransitLayerFunctional(_a) {
    var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        var transitLayer = new google.maps.TransitLayer();
        setInstance(transitLayer);
        transitLayer.setMap(map);
        if (onLoad) {
            onLoad(transitLayer);
        }
        return function () {
            if (instance !== null) {
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var TransitLayerF = react.memo(TransitLayerFunctional);
var TransitLayer = /** @class */ (function (_super) {
    __extends(TransitLayer, _super);
    function TransitLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            transitLayer: null,
        };
        _this.setTransitLayerCallback = function () {
            if (_this.state.transitLayer !== null) {
                _this.state.transitLayer.setMap(_this.context);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.transitLayer);
                }
            }
        };
        return _this;
    }
    TransitLayer.prototype.componentDidMount = function () {
        var transitLayer = new google.maps.TransitLayer();
        this.setState(function setTransitLayer() {
            return {
                transitLayer: transitLayer,
            };
        }, this.setTransitLayerCallback);
    };
    TransitLayer.prototype.componentWillUnmount = function () {
        if (this.state.transitLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.transitLayer);
            }
            this.state.transitLayer.setMap(null);
        }
    };
    TransitLayer.prototype.render = function () {
        return null;
    };
    TransitLayer.contextType = MapContext;
    return TransitLayer;
}(react.PureComponent));

var eventMap$g = {
    onCircleComplete: 'circlecomplete',
    onMarkerComplete: 'markercomplete',
    onOverlayComplete: 'overlaycomplete',
    onPolygonComplete: 'polygoncomplete',
    onPolylineComplete: 'polylinecomplete',
    onRectangleComplete: 'rectanglecomplete',
};
var updaterMap$g = {
    drawingMode: function (instance, drawingMode) {
        instance.setDrawingMode(drawingMode);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
};
function DrawingManagerFunctional(_a) {
    var options = _a.options, drawingMode = _a.drawingMode, onCircleComplete = _a.onCircleComplete, onMarkerComplete = _a.onMarkerComplete, onOverlayComplete = _a.onOverlayComplete, onPolygonComplete = _a.onPolygonComplete, onPolylineComplete = _a.onPolylineComplete, onRectangleComplete = _a.onRectangleComplete, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), circlecompleteListener = _c[0], setCircleCompleteListener = _c[1];
    var _d = react.useState(null), markercompleteListener = _d[0], setMarkerCompleteListener = _d[1];
    var _e = react.useState(null), overlaycompleteListener = _e[0], setOverlayCompleteListener = _e[1];
    var _f = react.useState(null), polygoncompleteListener = _f[0], setPolygonCompleteListener = _f[1];
    var _g = react.useState(null), polylinecompleteListener = _g[0], setPolylineCompleteListener = _g[1];
    var _h = react.useState(null), rectanglecompleteListener = _h[0], setRectangleCompleteListener = _h[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (drawingMode && instance !== null) {
            instance.setDrawingMode(drawingMode);
        }
    }, [instance, drawingMode]);
    react.useEffect(function () {
        if (instance && onCircleComplete) {
            if (circlecompleteListener !== null) {
                google.maps.event.removeListener(circlecompleteListener);
            }
            setCircleCompleteListener(google.maps.event.addListener(instance, 'circlecomplete', onCircleComplete));
        }
    }, [instance, onCircleComplete]);
    react.useEffect(function () {
        if (instance && onMarkerComplete) {
            if (markercompleteListener !== null) {
                google.maps.event.removeListener(markercompleteListener);
            }
            setMarkerCompleteListener(google.maps.event.addListener(instance, 'markercomplete', onMarkerComplete));
        }
    }, [instance, onMarkerComplete]);
    react.useEffect(function () {
        if (instance && onOverlayComplete) {
            if (overlaycompleteListener !== null) {
                google.maps.event.removeListener(overlaycompleteListener);
            }
            setOverlayCompleteListener(google.maps.event.addListener(instance, 'overlaycomplete', onOverlayComplete));
        }
    }, [instance, onOverlayComplete]);
    react.useEffect(function () {
        if (instance && onPolygonComplete) {
            if (polygoncompleteListener !== null) {
                google.maps.event.removeListener(polygoncompleteListener);
            }
            setPolygonCompleteListener(google.maps.event.addListener(instance, 'polygoncomplete', onPolygonComplete));
        }
    }, [instance, onPolygonComplete]);
    react.useEffect(function () {
        if (instance && onPolylineComplete) {
            if (polylinecompleteListener !== null) {
                google.maps.event.removeListener(polylinecompleteListener);
            }
            setPolylineCompleteListener(google.maps.event.addListener(instance, 'polylinecomplete', onPolylineComplete));
        }
    }, [instance, onPolylineComplete]);
    react.useEffect(function () {
        if (instance && onRectangleComplete) {
            if (rectanglecompleteListener !== null) {
                google.maps.event.removeListener(rectanglecompleteListener);
            }
            setRectangleCompleteListener(google.maps.event.addListener(instance, 'rectanglecomplete', onRectangleComplete));
        }
    }, [instance, onRectangleComplete]);
    react.useEffect(function () {
        invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
        var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, (options || {})), { map: map }));
        if (drawingMode) {
            drawingManager.setDrawingMode(drawingMode);
        }
        if (onCircleComplete) {
            setCircleCompleteListener(google.maps.event.addListener(drawingManager, 'circlecomplete', onCircleComplete));
        }
        if (onMarkerComplete) {
            setMarkerCompleteListener(google.maps.event.addListener(drawingManager, 'markercomplete', onMarkerComplete));
        }
        if (onOverlayComplete) {
            setOverlayCompleteListener(google.maps.event.addListener(drawingManager, 'overlaycomplete', onOverlayComplete));
        }
        if (onPolygonComplete) {
            setPolygonCompleteListener(google.maps.event.addListener(drawingManager, 'polygoncomplete', onPolygonComplete));
        }
        if (onPolylineComplete) {
            setPolylineCompleteListener(google.maps.event.addListener(drawingManager, 'polylinecomplete', onPolylineComplete));
        }
        if (onRectangleComplete) {
            setRectangleCompleteListener(google.maps.event.addListener(drawingManager, 'rectanglecomplete', onRectangleComplete));
        }
        setInstance(drawingManager);
        if (onLoad) {
            onLoad(drawingManager);
        }
        return function () {
            if (instance !== null) {
                if (circlecompleteListener) {
                    google.maps.event.removeListener(circlecompleteListener);
                }
                if (markercompleteListener) {
                    google.maps.event.removeListener(markercompleteListener);
                }
                if (overlaycompleteListener) {
                    google.maps.event.removeListener(overlaycompleteListener);
                }
                if (polygoncompleteListener) {
                    google.maps.event.removeListener(polygoncompleteListener);
                }
                if (polylinecompleteListener) {
                    google.maps.event.removeListener(polylinecompleteListener);
                }
                if (rectanglecompleteListener) {
                    google.maps.event.removeListener(rectanglecompleteListener);
                }
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var DrawingManagerF = react.memo(DrawingManagerFunctional);
var DrawingManager = /** @class */ (function (_super) {
    __extends(DrawingManager, _super);
    function DrawingManager(props) {
        var _this = _super.call(this, props) || this;
        _this.registeredEvents = [];
        _this.state = {
            drawingManager: null,
        };
        _this.setDrawingManagerCallback = function () {
            if (_this.state.drawingManager !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.drawingManager);
            }
        };
        invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
        return _this;
    }
    DrawingManager.prototype.componentDidMount = function () {
        var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$g,
            eventMap: eventMap$g,
            prevProps: {},
            nextProps: this.props,
            instance: drawingManager,
        });
        this.setState(function setDrawingManager() {
            return {
                drawingManager: drawingManager,
            };
        }, this.setDrawingManagerCallback);
    };
    DrawingManager.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.drawingManager !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$g,
                eventMap: eventMap$g,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.drawingManager,
            });
        }
    };
    DrawingManager.prototype.componentWillUnmount = function () {
        if (this.state.drawingManager !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.drawingManager);
            }
            unregisterEvents(this.registeredEvents);
            this.state.drawingManager.setMap(null);
        }
    };
    DrawingManager.prototype.render = function () {
        return null;
    };
    DrawingManager.contextType = MapContext;
    return DrawingManager;
}(react.PureComponent));

var eventMap$f = {
    onAnimationChanged: 'animation_changed',
    onClick: 'click',
    onClickableChanged: 'clickable_changed',
    onCursorChanged: 'cursor_changed',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDraggableChanged: 'draggable_changed',
    onDragStart: 'dragstart',
    onFlatChanged: 'flat_changed',
    onIconChanged: 'icon_changed',
    onMouseDown: 'mousedown',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onPositionChanged: 'position_changed',
    onRightClick: 'rightclick',
    onShapeChanged: 'shape_changed',
    onTitleChanged: 'title_changed',
    onVisibleChanged: 'visible_changed',
    onZindexChanged: 'zindex_changed',
};
var updaterMap$f = {
    animation: function (instance, animation) {
        instance.setAnimation(animation);
    },
    clickable: function (instance, clickable) {
        instance.setClickable(clickable);
    },
    cursor: function (instance, cursor) {
        instance.setCursor(cursor);
    },
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    icon: function (instance, icon) {
        instance.setIcon(icon);
    },
    label: function (instance, label) {
        instance.setLabel(label);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    opacity: function (instance, opacity) {
        instance.setOpacity(opacity);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    position: function (instance, position) {
        instance.setPosition(position);
    },
    shape: function (instance, shape) {
        instance.setShape(shape);
    },
    title: function (instance, title) {
        instance.setTitle(title);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
var defaultOptions$5 = {};
function MarkerFunctional(_a) {
    var position = _a.position, options = _a.options, clusterer = _a.clusterer, noClustererRedraw = _a.noClustererRedraw, children = _a.children, draggable = _a.draggable, visible = _a.visible, animation = _a.animation, clickable = _a.clickable, cursor = _a.cursor, icon = _a.icon, label = _a.label, opacity = _a.opacity, shape = _a.shape, title = _a.title, zIndex = _a.zIndex, onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onMouseDown = _a.onMouseDown, onRightClick = _a.onRightClick, onClickableChanged = _a.onClickableChanged, onCursorChanged = _a.onCursorChanged, onAnimationChanged = _a.onAnimationChanged, onDraggableChanged = _a.onDraggableChanged, onFlatChanged = _a.onFlatChanged, onIconChanged = _a.onIconChanged, onPositionChanged = _a.onPositionChanged, onShapeChanged = _a.onShapeChanged, onTitleChanged = _a.onTitleChanged, onVisibleChanged = _a.onVisibleChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mouseoutListener = _g[0], setMouseoutListener = _g[1];
    var _h = react.useState(null), mouseoverListener = _h[0], setMouseoverListener = _h[1];
    var _j = react.useState(null), mouseupListener = _j[0], setMouseupListener = _j[1];
    var _k = react.useState(null), rightclickListener = _k[0], setRightclickListener = _k[1];
    var _l = react.useState(null), clickListener = _l[0], setClickListener = _l[1];
    var _m = react.useState(null), dragListener = _m[0], setDragListener = _m[1];
    var _o = react.useState(null), clickableChangedListener = _o[0], setClickableChangedListener = _o[1];
    var _p = react.useState(null), cursorChangedListener = _p[0], setCursorChangedListener = _p[1];
    var _q = react.useState(null), animationChangedListener = _q[0], setAnimationChangedListener = _q[1];
    var _r = react.useState(null), draggableChangedListener = _r[0], setDraggableChangedListener = _r[1];
    var _s = react.useState(null), flatChangedListener = _s[0], setFlatChangedListener = _s[1];
    var _t = react.useState(null), iconChangedListener = _t[0], setIconChangedListener = _t[1];
    var _u = react.useState(null), positionChangedListener = _u[0], setPositionChangedListener = _u[1];
    var _v = react.useState(null), shapeChangedListener = _v[0], setShapeChangedListener = _v[1];
    var _w = react.useState(null), titleChangedListener = _w[0], setTitleChangedListener = _w[1];
    var _x = react.useState(null), visibleChangedListener = _x[0], setVisibleChangedListener = _x[1];
    var _y = react.useState(null), zIndexChangedListener = _y[0], setZindexChangedListener = _y[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (position && instance !== null) {
            instance.setPosition(position);
        }
    }, [instance, position]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        instance === null || instance === void 0 ? void 0 : instance.setAnimation(animation);
    }, [instance, animation]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (instance && onClickableChanged) {
            if (clickableChangedListener !== null) {
                google.maps.event.removeListener(clickableChangedListener);
            }
            setClickableChangedListener(google.maps.event.addListener(instance, 'clickable_changed', onClickableChanged));
        }
    }, [onClickableChanged]);
    react.useEffect(function () {
        if (instance && onCursorChanged) {
            if (cursorChangedListener !== null) {
                google.maps.event.removeListener(cursorChangedListener);
            }
            setCursorChangedListener(google.maps.event.addListener(instance, 'cursor_changed', onCursorChanged));
        }
    }, [onCursorChanged]);
    react.useEffect(function () {
        if (instance && onAnimationChanged) {
            if (animationChangedListener !== null) {
                google.maps.event.removeListener(animationChangedListener);
            }
            setAnimationChangedListener(google.maps.event.addListener(instance, 'animation_changed', onAnimationChanged));
        }
    }, [onAnimationChanged]);
    react.useEffect(function () {
        if (instance && onDraggableChanged) {
            if (draggableChangedListener !== null) {
                google.maps.event.removeListener(draggableChangedListener);
            }
            setDraggableChangedListener(google.maps.event.addListener(instance, 'draggable_changed', onDraggableChanged));
        }
    }, [onDraggableChanged]);
    react.useEffect(function () {
        if (instance && onFlatChanged) {
            if (flatChangedListener !== null) {
                google.maps.event.removeListener(flatChangedListener);
            }
            setFlatChangedListener(google.maps.event.addListener(instance, 'flat_changed', onFlatChanged));
        }
    }, [onFlatChanged]);
    react.useEffect(function () {
        if (instance && onIconChanged) {
            if (iconChangedListener !== null) {
                google.maps.event.removeListener(iconChangedListener);
            }
            setIconChangedListener(google.maps.event.addListener(instance, 'icon_changed', onIconChanged));
        }
    }, [onIconChanged]);
    react.useEffect(function () {
        if (instance && onPositionChanged) {
            if (positionChangedListener !== null) {
                google.maps.event.removeListener(positionChangedListener);
            }
            setPositionChangedListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
        }
    }, [onPositionChanged]);
    react.useEffect(function () {
        if (instance && onShapeChanged) {
            if (shapeChangedListener !== null) {
                google.maps.event.removeListener(shapeChangedListener);
            }
            setShapeChangedListener(google.maps.event.addListener(instance, 'shape_changed', onShapeChanged));
        }
    }, [onShapeChanged]);
    react.useEffect(function () {
        if (instance && onTitleChanged) {
            if (titleChangedListener !== null) {
                google.maps.event.removeListener(titleChangedListener);
            }
            setTitleChangedListener(google.maps.event.addListener(instance, 'title_changed', onTitleChanged));
        }
    }, [onTitleChanged]);
    react.useEffect(function () {
        if (instance && onVisibleChanged) {
            if (visibleChangedListener !== null) {
                google.maps.event.removeListener(visibleChangedListener);
            }
            setVisibleChangedListener(google.maps.event.addListener(instance, 'visible_changed', onVisibleChanged));
        }
    }, [onVisibleChanged]);
    react.useEffect(function () {
        if (instance && onZindexChanged) {
            if (zIndexChangedListener !== null) {
                google.maps.event.removeListener(zIndexChangedListener);
            }
            setZindexChangedListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
        }
    }, [onZindexChanged]);
    react.useEffect(function () {
        var markerOptions = __assign(__assign(__assign({}, (options || defaultOptions$5)), (clusterer ? defaultOptions$5 : { map: map })), { position: position });
        var marker = new google.maps.Marker(markerOptions);
        if (clusterer) {
            clusterer.addMarker(marker, !!noClustererRedraw);
        }
        else {
            marker.setMap(map);
        }
        if (position) {
            marker.setPosition(position);
        }
        if (typeof visible !== 'undefined') {
            marker.setVisible(visible);
        }
        if (typeof draggable !== 'undefined') {
            marker.setDraggable(draggable);
        }
        if (typeof clickable !== 'undefined') {
            marker.setClickable(clickable);
        }
        if (typeof cursor === 'string') {
            marker.setCursor(cursor);
        }
        if (icon) {
            marker.setIcon(icon);
        }
        if (typeof label !== 'undefined') {
            marker.setLabel(label);
        }
        if (typeof opacity !== 'undefined') {
            marker.setOpacity(opacity);
        }
        if (shape) {
            marker.setShape(shape);
        }
        if (typeof title === 'string') {
            marker.setTitle(title);
        }
        if (typeof zIndex === 'number') {
            marker.setZIndex(zIndex);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(marker, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(marker, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(marker, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(marker, 'mousedown', onMouseDown));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(marker, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(marker, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(marker, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(marker, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(marker, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(marker, 'drag', onDrag));
        }
        if (onClickableChanged) {
            setClickableChangedListener(google.maps.event.addListener(marker, 'clickable_changed', onClickableChanged));
        }
        if (onCursorChanged) {
            setCursorChangedListener(google.maps.event.addListener(marker, 'cursor_changed', onCursorChanged));
        }
        if (onAnimationChanged) {
            setAnimationChangedListener(google.maps.event.addListener(marker, 'animation_changed', onAnimationChanged));
        }
        if (onDraggableChanged) {
            setDraggableChangedListener(google.maps.event.addListener(marker, 'draggable_changed', onDraggableChanged));
        }
        if (onFlatChanged) {
            setFlatChangedListener(google.maps.event.addListener(marker, 'flat_changed', onFlatChanged));
        }
        if (onIconChanged) {
            setIconChangedListener(google.maps.event.addListener(marker, 'icon_changed', onIconChanged));
        }
        if (onPositionChanged) {
            setPositionChangedListener(google.maps.event.addListener(marker, 'position_changed', onPositionChanged));
        }
        if (onShapeChanged) {
            setShapeChangedListener(google.maps.event.addListener(marker, 'shape_changed', onShapeChanged));
        }
        if (onTitleChanged) {
            setTitleChangedListener(google.maps.event.addListener(marker, 'title_changed', onTitleChanged));
        }
        if (onVisibleChanged) {
            setVisibleChangedListener(google.maps.event.addListener(marker, 'visible_changed', onVisibleChanged));
        }
        if (onZindexChanged) {
            setZindexChangedListener(google.maps.event.addListener(marker, 'zindex_changed', onZindexChanged));
        }
        setInstance(marker);
        if (onLoad) {
            onLoad(marker);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (clickableChangedListener !== null) {
                google.maps.event.removeListener(clickableChangedListener);
            }
            if (cursorChangedListener !== null) {
                google.maps.event.removeListener(cursorChangedListener);
            }
            if (animationChangedListener !== null) {
                google.maps.event.removeListener(animationChangedListener);
            }
            if (draggableChangedListener !== null) {
                google.maps.event.removeListener(draggableChangedListener);
            }
            if (flatChangedListener !== null) {
                google.maps.event.removeListener(flatChangedListener);
            }
            if (iconChangedListener !== null) {
                google.maps.event.removeListener(iconChangedListener);
            }
            if (positionChangedListener !== null) {
                google.maps.event.removeListener(positionChangedListener);
            }
            if (titleChangedListener !== null) {
                google.maps.event.removeListener(titleChangedListener);
            }
            if (visibleChangedListener !== null) {
                google.maps.event.removeListener(visibleChangedListener);
            }
            if (zIndexChangedListener !== null) {
                google.maps.event.removeListener(zIndexChangedListener);
            }
            if (onUnmount) {
                onUnmount(marker);
            }
            if (clusterer) {
                clusterer.removeMarker(marker, !!noClustererRedraw);
            }
            else if (marker) {
                marker.setMap(null);
            }
        };
    }, []);
    var chx = react.useMemo(function () {
        return children
            ? react.Children.map(children, function (child) {
                if (!react.isValidElement(child)) {
                    return child;
                }
                var elementChild = child;
                return react.cloneElement(elementChild, { anchor: instance });
            })
            : null;
    }, [children, instance]);
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: chx }) || null;
}
var MarkerF = react.memo(MarkerFunctional);
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        return _this;
    }
    Marker.prototype.componentDidMount = function () {
        var markerOptions = __assign(__assign(__assign({}, (this.props.options || defaultOptions$5)), (this.props.clusterer ? defaultOptions$5 : { map: this.context })), { position: this.props.position });
        // Unfortunately we can't just do this in the contstructor, because the
        // `MapContext` might not be filled in yet.
        this.marker = new google.maps.Marker(markerOptions);
        if (this.props.clusterer) {
            this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw);
        }
        else {
            this.marker.setMap(this.context);
        }
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$f,
            eventMap: eventMap$f,
            prevProps: {},
            nextProps: this.props,
            instance: this.marker,
        });
        if (this.props.onLoad) {
            this.props.onLoad(this.marker);
        }
    };
    Marker.prototype.componentDidUpdate = function (prevProps) {
        if (this.marker) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$f,
                eventMap: eventMap$f,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.marker,
            });
        }
    };
    Marker.prototype.componentWillUnmount = function () {
        if (this.marker) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.marker);
            }
            unregisterEvents(this.registeredEvents);
            if (this.props.clusterer) {
                this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw);
            }
            else {
                this.marker && this.marker.setMap(null);
            }
        }
    };
    Marker.prototype.render = function () {
        var _this = this;
        var children = null;
        if (this.props.children) {
            children = react.Children.map(this.props.children, function (child) {
                if (!react.isValidElement(child)) {
                    return child;
                }
                var elementChild = child;
                return react.cloneElement(elementChild, { anchor: _this.marker });
            });
        }
        return children || null;
    };
    Marker.contextType = MapContext;
    return Marker;
}(react.PureComponent));

var ClusterIcon = /** @class */ (function () {
    function ClusterIcon(cluster, styles) {
        cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
        this.cluster = cluster;
        this.clusterClassName = this.cluster.getClusterer().getClusterClass();
        this.className = this.clusterClassName;
        this.styles = styles;
        this.center = undefined;
        this.div = null;
        this.sums = null;
        this.visible = false;
        this.boundsChangedListener = null;
        this.url = '';
        this.height = 0;
        this.width = 0;
        this.anchorText = [0, 0];
        this.anchorIcon = [0, 0];
        this.textColor = 'black';
        this.textSize = 11;
        this.textDecoration = 'none';
        this.fontWeight = 'bold';
        this.fontStyle = 'normal';
        this.fontFamily = 'Arial,sans-serif';
        this.backgroundPosition = '0 0';
        this.cMouseDownInCluster = null;
        this.cDraggingMapByCluster = null;
        this.timeOut = null;
        this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
        this.onBoundsChanged = this.onBoundsChanged.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.draw = this.draw.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.useStyle = this.useStyle.bind(this);
        this.setCenter = this.setCenter.bind(this);
        this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
    }
    ClusterIcon.prototype.onBoundsChanged = function () {
        this.cDraggingMapByCluster = this.cMouseDownInCluster;
    };
    ClusterIcon.prototype.onMouseDown = function () {
        this.cMouseDownInCluster = true;
        this.cDraggingMapByCluster = false;
    };
    ClusterIcon.prototype.onClick = function (event) {
        this.cMouseDownInCluster = false;
        if (!this.cDraggingMapByCluster) {
            var markerClusterer_1 = this.cluster.getClusterer();
            /**
             * This event is fired when a cluster marker is clicked.
             * @name MarkerClusterer#click
             * @param {Cluster} c The cluster that was clicked.
             * @event
             */
            google.maps.event.trigger(markerClusterer_1, 'click', this.cluster);
            google.maps.event.trigger(markerClusterer_1, 'clusterclick', this.cluster); // deprecated name
            // The default click handler follows. Disable it by setting
            // the zoomOnClick property to false.
            if (markerClusterer_1.getZoomOnClick()) {
                // Zoom into the cluster.
                var maxZoom_1 = markerClusterer_1.getMaxZoom();
                var bounds_1 = this.cluster.getBounds();
                var map = markerClusterer_1.getMap();
                if (map !== null && 'fitBounds' in map) {
                    map.fitBounds(bounds_1);
                }
                // There is a fix for Issue 170 here:
                this.timeOut = window.setTimeout(function () {
                    var map = markerClusterer_1.getMap();
                    if (map !== null) {
                        if ('fitBounds' in map) {
                            map.fitBounds(bounds_1);
                        }
                        var zoom = map.getZoom() || 0;
                        // Don't zoom beyond the max zoom level
                        if (maxZoom_1 !== null &&
                            zoom > maxZoom_1) {
                            map.setZoom(maxZoom_1 + 1);
                        }
                    }
                }, 100);
            }
            // Prevent event propagation to the map:
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
        }
    };
    ClusterIcon.prototype.onMouseOver = function () {
        /**
         * This event is fired when the mouse moves over a cluster marker.
         * @name MarkerClusterer#mouseover
         * @param {Cluster} c The cluster that the mouse moved over.
         * @event
         */
        google.maps.event.trigger(this.cluster.getClusterer(), 'mouseover', this.cluster);
    };
    ClusterIcon.prototype.onMouseOut = function () {
        /**
         * This event is fired when the mouse moves out of a cluster marker.
         * @name MarkerClusterer#mouseout
         * @param {Cluster} c The cluster that the mouse moved out of.
         * @event
         */
        google.maps.event.trigger(this.cluster.getClusterer(), 'mouseout', this.cluster);
    };
    ClusterIcon.prototype.onAdd = function () {
        var _a;
        this.div = document.createElement('div');
        this.div.className = this.className;
        if (this.visible) {
            this.show();
        }
        (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a.overlayMouseTarget.appendChild(this.div);
        var map = this.getMap();
        if (map !== null) {
            // Fix for Issue 157
            this.boundsChangedListener = google.maps.event.addListener(map, 'bounds_changed', this.onBoundsChanged);
            this.div.addEventListener('mousedown', this.onMouseDown);
            this.div.addEventListener('click', this.onClick);
            this.div.addEventListener('mouseover', this.onMouseOver);
            this.div.addEventListener('mouseout', this.onMouseOut);
        }
    };
    ClusterIcon.prototype.onRemove = function () {
        if (this.div && this.div.parentNode) {
            this.hide();
            if (this.boundsChangedListener !== null) {
                google.maps.event.removeListener(this.boundsChangedListener);
            }
            this.div.removeEventListener('mousedown', this.onMouseDown);
            this.div.removeEventListener('click', this.onClick);
            this.div.removeEventListener('mouseover', this.onMouseOver);
            this.div.removeEventListener('mouseout', this.onMouseOut);
            this.div.parentNode.removeChild(this.div);
            if (this.timeOut !== null) {
                window.clearTimeout(this.timeOut);
                this.timeOut = null;
            }
            this.div = null;
        }
    };
    ClusterIcon.prototype.draw = function () {
        if (this.visible && this.div !== null && this.center) {
            var pos = this.getPosFromLatLng(this.center);
            this.div.style.top = pos !== null ? "".concat(pos.y, "px") : '0';
            this.div.style.left = pos !== null ? "".concat(pos.x, "px") : '0';
        }
    };
    ClusterIcon.prototype.hide = function () {
        if (this.div) {
            this.div.style.display = 'none';
        }
        this.visible = false;
    };
    ClusterIcon.prototype.show = function () {
        var _a, _b, _c, _d, _e, _f;
        if (this.div && this.center) {
            var divTitle = this.sums === null ||
                typeof this.sums.title === 'undefined' ||
                this.sums.title === '' ? this.cluster.getClusterer().getTitle() : this.sums.title;
            // NOTE: values must be specified in px units
            var bp = this.backgroundPosition.split(' ');
            var spriteH = parseInt(((_a = bp[0]) === null || _a === void 0 ? void 0 : _a.replace(/^\s+|\s+$/g, '')) || '0', 10);
            var spriteV = parseInt(((_b = bp[1]) === null || _b === void 0 ? void 0 : _b.replace(/^\s+|\s+$/g, '')) || '0', 10);
            var pos = this.getPosFromLatLng(this.center);
            this.div.className = this.className;
            this.div.setAttribute('style', "cursor: pointer; position: absolute; top: ".concat(pos !== null ? "".concat(pos.y, "px") : '0', "; left: ").concat(pos !== null ? "".concat(pos.x, "px") : '0', "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
            var img = document.createElement('img');
            img.alt = divTitle;
            img.src = this.url;
            img.width = this.width;
            img.height = this.height;
            img.setAttribute('style', "position: absolute; top: ".concat(spriteV, "px; left: ").concat(spriteH, "px"));
            if (!this.cluster.getClusterer().enableRetinaIcons) {
                img.style.clip = "rect(-".concat(spriteV, "px, -").concat(spriteH + this.width, "px, -").concat(spriteV + this.height, ", -").concat(spriteH, ")");
            }
            var textElm = document.createElement('div');
            textElm.setAttribute('style', "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px"));
            if ((_c = this.sums) === null || _c === void 0 ? void 0 : _c.text)
                textElm.innerText = "".concat((_d = this.sums) === null || _d === void 0 ? void 0 : _d.text);
            if ((_e = this.sums) === null || _e === void 0 ? void 0 : _e.html)
                textElm.innerHTML = "".concat((_f = this.sums) === null || _f === void 0 ? void 0 : _f.html);
            this.div.innerHTML = '';
            this.div.appendChild(img);
            this.div.appendChild(textElm);
            this.div.title = divTitle;
            this.div.style.display = '';
        }
        this.visible = true;
    };
    ClusterIcon.prototype.useStyle = function (sums) {
        this.sums = sums;
        var styles = this.cluster.getClusterer().getStyles();
        var style = styles[Math.min(styles.length - 1, Math.max(0, sums.index - 1))];
        if (style) {
            this.url = style.url;
            this.height = style.height;
            this.width = style.width;
            if (style.className) {
                this.className = "".concat(this.clusterClassName, " ").concat(style.className);
            }
            this.anchorText = style.anchorText || [0, 0];
            this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
            this.textColor = style.textColor || 'black';
            this.textSize = style.textSize || 11;
            this.textDecoration = style.textDecoration || 'none';
            this.fontWeight = style.fontWeight || 'bold';
            this.fontStyle = style.fontStyle || 'normal';
            this.fontFamily = style.fontFamily || 'Arial,sans-serif';
            this.backgroundPosition = style.backgroundPosition || '0 0';
        }
    };
    ClusterIcon.prototype.setCenter = function (center) {
        this.center = center;
    };
    ClusterIcon.prototype.getPosFromLatLng = function (latlng) {
        var pos = this.getProjection().fromLatLngToDivPixel(latlng);
        if (pos !== null) {
            pos.x -= this.anchorIcon[1];
            pos.y -= this.anchorIcon[0];
        }
        return pos;
    };
    return ClusterIcon;
}());

/* global google */
var Cluster$1 = /** @class */ (function () {
    function Cluster(markerClusterer) {
        this.markerClusterer = markerClusterer;
        this.map = this.markerClusterer.getMap();
        this.gridSize = this.markerClusterer.getGridSize();
        this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
        this.averageCenter = this.markerClusterer.getAverageCenter();
        this.markers = [];
        this.center = undefined;
        this.bounds = null;
        this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
        this.getSize = this.getSize.bind(this);
        this.getMarkers = this.getMarkers.bind(this);
        this.getCenter = this.getCenter.bind(this);
        this.getMap = this.getMap.bind(this);
        this.getClusterer = this.getClusterer.bind(this);
        this.getBounds = this.getBounds.bind(this);
        this.remove = this.remove.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this);
        this.calculateBounds = this.calculateBounds.bind(this);
        this.updateIcon = this.updateIcon.bind(this);
        this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
    }
    Cluster.prototype.getSize = function () {
        return this.markers.length;
    };
    Cluster.prototype.getMarkers = function () {
        return this.markers;
    };
    Cluster.prototype.getCenter = function () {
        return this.center;
    };
    Cluster.prototype.getMap = function () {
        return this.map;
    };
    Cluster.prototype.getClusterer = function () {
        return this.markerClusterer;
    };
    Cluster.prototype.getBounds = function () {
        var bounds = new google.maps.LatLngBounds(this.center, this.center);
        var markers = this.getMarkers();
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            var position = marker.getPosition();
            if (position) {
                bounds.extend(position);
            }
        }
        return bounds;
    };
    Cluster.prototype.remove = function () {
        this.clusterIcon.setMap(null);
        this.markers = [];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete this.markers;
    };
    Cluster.prototype.addMarker = function (marker) {
        var _a;
        if (this.isMarkerAlreadyAdded(marker)) {
            return false;
        }
        if (!this.center) {
            var position = marker.getPosition();
            if (position) {
                this.center = position;
                this.calculateBounds();
            }
        }
        else {
            if (this.averageCenter) {
                var position = marker.getPosition();
                if (position) {
                    var length_1 = this.markers.length + 1;
                    this.center = new google.maps.LatLng((this.center.lat() * (length_1 - 1) + position.lat()) / length_1, (this.center.lng() * (length_1 - 1) + position.lng()) / length_1);
                    this.calculateBounds();
                }
            }
        }
        marker.isAdded = true;
        this.markers.push(marker);
        var mCount = this.markers.length;
        var maxZoom = this.markerClusterer.getMaxZoom();
        var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
        if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
            // Zoomed in past max zoom, so show the marker.
            if (marker.getMap() !== this.map) {
                marker.setMap(this.map);
            }
        }
        else if (mCount < this.minClusterSize) {
            // Min cluster size not reached so show the marker.
            if (marker.getMap() !== this.map) {
                marker.setMap(this.map);
            }
        }
        else if (mCount === this.minClusterSize) {
            // Hide the markers that were showing.
            for (var _i = 0, _b = this.markers; _i < _b.length; _i++) {
                var markerElement = _b[_i];
                markerElement.setMap(null);
            }
        }
        else {
            marker.setMap(null);
        }
        return true;
    };
    Cluster.prototype.isMarkerInClusterBounds = function (marker) {
        if (this.bounds !== null) {
            var position = marker.getPosition();
            if (position) {
                return this.bounds.contains(position);
            }
        }
        return false;
    };
    Cluster.prototype.calculateBounds = function () {
        this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    };
    Cluster.prototype.updateIcon = function () {
        var _a;
        var mCount = this.markers.length;
        var maxZoom = this.markerClusterer.getMaxZoom();
        var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
        if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
            this.clusterIcon.hide();
            return;
        }
        if (mCount < this.minClusterSize) {
            // Min cluster size not yet reached.
            this.clusterIcon.hide();
            return;
        }
        if (this.center) {
            this.clusterIcon.setCenter(this.center);
        }
        this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
        this.clusterIcon.show();
    };
    Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
        if (this.markers.includes) {
            return this.markers.includes(marker);
        }
        for (var i = 0; i < this.markers.length; i++) {
            if (marker === this.markers[i]) {
                return true;
            }
        }
        return false;
    };
    return Cluster;
}());

/* global google */
/**
 * Supports up to 9007199254740991 (Number.MAX_SAFE_INTEGER) markers
 * which is not a problem as max array length is 4294967296 (2**32)
 */
function CALCULATOR(markers, numStyles) {
    var count = markers.length;
    var numberOfDigits = count.toString().length;
    var index = Math.min(numberOfDigits, numStyles);
    return {
        text: count.toString(),
        index: index,
        title: '',
    };
}
var BATCH_SIZE = 2000;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
var IMAGE_EXTENSION = 'png';
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = 'cluster';
var Clusterer = /** @class */ (function () {
    function Clusterer(map, optMarkers, optOptions) {
        if (optMarkers === void 0) { optMarkers = []; }
        if (optOptions === void 0) { optOptions = {}; }
        this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this);
        this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this);
        this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this);
        this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this);
        this.addToClosestCluster = this.addToClosestCluster.bind(this);
        this.getImageExtension = this.getImageExtension.bind(this);
        this.setImageExtension = this.setImageExtension.bind(this);
        this.getExtendedBounds = this.getExtendedBounds.bind(this);
        this.getAverageCenter = this.getAverageCenter.bind(this);
        this.setAverageCenter = this.setAverageCenter.bind(this);
        this.getTotalClusters = this.getTotalClusters.bind(this);
        this.fitMapToMarkers = this.fitMapToMarkers.bind(this);
        this.getIgnoreHidden = this.getIgnoreHidden.bind(this);
        this.setIgnoreHidden = this.setIgnoreHidden.bind(this);
        this.getClusterClass = this.getClusterClass.bind(this);
        this.setClusterClass = this.setClusterClass.bind(this);
        this.getTotalMarkers = this.getTotalMarkers.bind(this);
        this.getZoomOnClick = this.getZoomOnClick.bind(this);
        this.setZoomOnClick = this.setZoomOnClick.bind(this);
        this.getBatchSizeIE = this.getBatchSizeIE.bind(this);
        this.setBatchSizeIE = this.setBatchSizeIE.bind(this);
        this.createClusters = this.createClusters.bind(this);
        this.onZoomChanged = this.onZoomChanged.bind(this);
        this.getImageSizes = this.getImageSizes.bind(this);
        this.setImageSizes = this.setImageSizes.bind(this);
        this.getCalculator = this.getCalculator.bind(this);
        this.setCalculator = this.setCalculator.bind(this);
        this.removeMarkers = this.removeMarkers.bind(this);
        this.resetViewport = this.resetViewport.bind(this);
        this.getImagePath = this.getImagePath.bind(this);
        this.setImagePath = this.setImagePath.bind(this);
        this.pushMarkerTo = this.pushMarkerTo.bind(this);
        this.removeMarker = this.removeMarker.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.setupStyles = this.setupStyles.bind(this);
        this.getGridSize = this.getGridSize.bind(this);
        this.setGridSize = this.setGridSize.bind(this);
        this.getClusters = this.getClusters.bind(this);
        this.getMaxZoom = this.getMaxZoom.bind(this);
        this.setMaxZoom = this.setMaxZoom.bind(this);
        this.getMarkers = this.getMarkers.bind(this);
        this.addMarkers = this.addMarkers.bind(this);
        this.getStyles = this.getStyles.bind(this);
        this.setStyles = this.setStyles.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.repaint = this.repaint.bind(this);
        this.onIdle = this.onIdle.bind(this);
        this.redraw = this.redraw.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.draw = this.draw.bind(this);
        this.extend = this.extend.bind(this);
        this.extend(Clusterer, google.maps.OverlayView);
        this.markers = [];
        this.clusters = [];
        this.listeners = [];
        this.activeMap = null;
        this.ready = false;
        this.gridSize = optOptions.gridSize || 60;
        this.minClusterSize = optOptions.minimumClusterSize || 2;
        this.maxZoom = optOptions.maxZoom || null;
        this.styles = optOptions.styles || [];
        this.title = optOptions.title || '';
        this.zoomOnClick = true;
        if (optOptions.zoomOnClick !== undefined) {
            this.zoomOnClick = optOptions.zoomOnClick;
        }
        this.averageCenter = false;
        if (optOptions.averageCenter !== undefined) {
            this.averageCenter = optOptions.averageCenter;
        }
        this.ignoreHidden = false;
        if (optOptions.ignoreHidden !== undefined) {
            this.ignoreHidden = optOptions.ignoreHidden;
        }
        this.enableRetinaIcons = false;
        if (optOptions.enableRetinaIcons !== undefined) {
            this.enableRetinaIcons = optOptions.enableRetinaIcons;
        }
        this.imagePath = optOptions.imagePath || IMAGE_PATH;
        this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
        this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
        this.calculator = optOptions.calculator || CALCULATOR;
        this.batchSize = optOptions.batchSize || BATCH_SIZE;
        this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
        this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;
        if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
            // Try to avoid IE timeout when processing a huge number of markers:
            this.batchSize = this.batchSizeIE;
        }
        this.timerRefStatic = null;
        this.setupStyles();
        this.addMarkers(optMarkers, true);
        this.setMap(map); // Note: this causes onAdd to be called
    }
    Clusterer.prototype.onZoomChanged = function () {
        var _a, _b;
        this.resetViewport(false);
        // Workaround for this Google bug: when map is at level 0 and "-" of
        // zoom slider is clicked, a "zoom_changed" event is fired even though
        // the map doesn't zoom out any further. In this situation, no "idle"
        // event is triggered so the cluster markers that have been removed
        // do not get redrawn. Same goes for a zoom in at maxZoom.
        if (((_a = this.getMap()) === null || _a === void 0 ? void 0 : _a.getZoom()) === (this.get('minZoom') || 0) ||
            ((_b = this.getMap()) === null || _b === void 0 ? void 0 : _b.getZoom()) === this.get('maxZoom')) {
            google.maps.event.trigger(this, 'idle');
        }
    };
    Clusterer.prototype.onIdle = function () {
        this.redraw();
    };
    Clusterer.prototype.onAdd = function () {
        var map = this.getMap();
        this.activeMap = map;
        this.ready = true;
        this.repaint();
        if (map !== null) {
            // Add the map event listeners
            this.listeners = [
                google.maps.event.addListener(map, 'zoom_changed', this.onZoomChanged),
                google.maps.event.addListener(map, 'idle', this.onIdle),
            ];
        }
    };
    Clusterer.prototype.onRemove = function () {
        // Put all the managed markers back on the map:
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            if (marker.getMap() !== this.activeMap) {
                marker.setMap(this.activeMap);
            }
        }
        // Remove all clusters:
        for (var _b = 0, _c = this.clusters; _b < _c.length; _b++) {
            var cluster = _c[_b];
            cluster.remove();
        }
        this.clusters = [];
        // Remove map event listeners:
        for (var _d = 0, _e = this.listeners; _d < _e.length; _d++) {
            var listener = _e[_d];
            google.maps.event.removeListener(listener);
        }
        this.listeners = [];
        this.activeMap = null;
        this.ready = false;
    };
    Clusterer.prototype.draw = function () { return; };
    Clusterer.prototype.getMap = function () { return null; };
    Clusterer.prototype.getPanes = function () { return null; };
    Clusterer.prototype.getProjection = function () {
        return {
            fromContainerPixelToLatLng: function () { return null; },
            fromDivPixelToLatLng: function () { return null; },
            fromLatLngToContainerPixel: function () { return null; },
            fromLatLngToDivPixel: function () { return null; },
            getVisibleRegion: function () { return null; },
            getWorldWidth: function () { return 0; }
        };
    };
    Clusterer.prototype.setMap = function () { return; };
    Clusterer.prototype.addListener = function () {
        return {
            remove: function () { return; }
        };
    };
    Clusterer.prototype.bindTo = function () { return; };
    Clusterer.prototype.get = function () { return; };
    Clusterer.prototype.notify = function () { return; };
    Clusterer.prototype.set = function () { return; };
    Clusterer.prototype.setValues = function () { return; };
    Clusterer.prototype.unbind = function () { return; };
    Clusterer.prototype.unbindAll = function () { return; };
    Clusterer.prototype.setupStyles = function () {
        if (this.styles.length > 0) {
            return;
        }
        for (var i = 0; i < this.imageSizes.length; i++) {
            this.styles.push({
                url: "".concat(this.imagePath + (i + 1), ".").concat(this.imageExtension),
                height: this.imageSizes[i] || 0,
                width: this.imageSizes[i] || 0,
            });
        }
    };
    Clusterer.prototype.fitMapToMarkers = function () {
        var markers = this.getMarkers();
        var bounds = new google.maps.LatLngBounds();
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            var position = marker.getPosition();
            if (position) {
                bounds.extend(position);
            }
        }
        var map = this.getMap();
        if (map !== null && 'fitBounds' in map) {
            map.fitBounds(bounds);
        }
    };
    Clusterer.prototype.getGridSize = function () {
        return this.gridSize;
    };
    Clusterer.prototype.setGridSize = function (gridSize) {
        this.gridSize = gridSize;
    };
    Clusterer.prototype.getMinimumClusterSize = function () {
        return this.minClusterSize;
    };
    Clusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
        this.minClusterSize = minimumClusterSize;
    };
    Clusterer.prototype.getMaxZoom = function () {
        return this.maxZoom;
    };
    Clusterer.prototype.setMaxZoom = function (maxZoom) {
        this.maxZoom = maxZoom;
    };
    Clusterer.prototype.getStyles = function () {
        return this.styles;
    };
    Clusterer.prototype.setStyles = function (styles) {
        this.styles = styles;
    };
    Clusterer.prototype.getTitle = function () {
        return this.title;
    };
    Clusterer.prototype.setTitle = function (title) {
        this.title = title;
    };
    Clusterer.prototype.getZoomOnClick = function () {
        return this.zoomOnClick;
    };
    Clusterer.prototype.setZoomOnClick = function (zoomOnClick) {
        this.zoomOnClick = zoomOnClick;
    };
    Clusterer.prototype.getAverageCenter = function () {
        return this.averageCenter;
    };
    Clusterer.prototype.setAverageCenter = function (averageCenter) {
        this.averageCenter = averageCenter;
    };
    Clusterer.prototype.getIgnoreHidden = function () {
        return this.ignoreHidden;
    };
    Clusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
        this.ignoreHidden = ignoreHidden;
    };
    Clusterer.prototype.getEnableRetinaIcons = function () {
        return this.enableRetinaIcons;
    };
    Clusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
        this.enableRetinaIcons = enableRetinaIcons;
    };
    Clusterer.prototype.getImageExtension = function () {
        return this.imageExtension;
    };
    Clusterer.prototype.setImageExtension = function (imageExtension) {
        this.imageExtension = imageExtension;
    };
    Clusterer.prototype.getImagePath = function () {
        return this.imagePath;
    };
    Clusterer.prototype.setImagePath = function (imagePath) {
        this.imagePath = imagePath;
    };
    Clusterer.prototype.getImageSizes = function () {
        return this.imageSizes;
    };
    Clusterer.prototype.setImageSizes = function (imageSizes) {
        this.imageSizes = imageSizes;
    };
    Clusterer.prototype.getCalculator = function () {
        return this.calculator;
    };
    Clusterer.prototype.setCalculator = function (calculator) {
        this.calculator = calculator;
    };
    Clusterer.prototype.getBatchSizeIE = function () {
        return this.batchSizeIE;
    };
    Clusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
        this.batchSizeIE = batchSizeIE;
    };
    Clusterer.prototype.getClusterClass = function () {
        return this.clusterClass;
    };
    Clusterer.prototype.setClusterClass = function (clusterClass) {
        this.clusterClass = clusterClass;
    };
    Clusterer.prototype.getMarkers = function () {
        return this.markers;
    };
    Clusterer.prototype.getTotalMarkers = function () {
        return this.markers.length;
    };
    Clusterer.prototype.getClusters = function () {
        return this.clusters;
    };
    Clusterer.prototype.getTotalClusters = function () {
        return this.clusters.length;
    };
    Clusterer.prototype.addMarker = function (marker, optNoDraw) {
        this.pushMarkerTo(marker);
        if (!optNoDraw) {
            this.redraw();
        }
    };
    Clusterer.prototype.addMarkers = function (markers, optNoDraw) {
        for (var key in markers) {
            if (Object.prototype.hasOwnProperty.call(markers, key)) {
                var marker = markers[key];
                if (marker) {
                    this.pushMarkerTo(marker);
                }
            }
        }
        if (!optNoDraw) {
            this.redraw();
        }
    };
    Clusterer.prototype.pushMarkerTo = function (marker) {
        var _this = this;
        // If the marker is draggable add a listener so we can update the clusters on the dragend:
        if (marker.getDraggable()) {
            google.maps.event.addListener(marker, 'dragend', function () {
                if (_this.ready) {
                    marker.isAdded = false;
                    _this.repaint();
                }
            });
        }
        marker.isAdded = false;
        this.markers.push(marker);
    };
    Clusterer.prototype.removeMarker_ = function (marker) {
        var index = -1;
        if (this.markers.indexOf) {
            index = this.markers.indexOf(marker);
        }
        else {
            for (var i = 0; i < this.markers.length; i++) {
                if (marker === this.markers[i]) {
                    index = i;
                    break;
                }
            }
        }
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        marker.setMap(null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        return true;
    };
    Clusterer.prototype.removeMarker = function (marker, optNoDraw) {
        var removed = this.removeMarker_(marker);
        if (!optNoDraw && removed) {
            this.repaint();
        }
        return removed;
    };
    Clusterer.prototype.removeMarkers = function (markers, optNoDraw) {
        var removed = false;
        for (var _i = 0, markers_2 = markers; _i < markers_2.length; _i++) {
            var marker = markers_2[_i];
            removed = removed || this.removeMarker_(marker);
        }
        if (!optNoDraw && removed) {
            this.repaint();
        }
        return removed;
    };
    Clusterer.prototype.clearMarkers = function () {
        this.resetViewport(true);
        this.markers = [];
    };
    Clusterer.prototype.repaint = function () {
        var oldClusters = this.clusters.slice();
        this.clusters = [];
        this.resetViewport(false);
        this.redraw();
        // Remove the old clusters.
        // Do it in a timeout to prevent blinking effect.
        setTimeout(function timeout() {
            for (var _i = 0, oldClusters_1 = oldClusters; _i < oldClusters_1.length; _i++) {
                var oldCluster = oldClusters_1[_i];
                oldCluster.remove();
            }
        }, 0);
    };
    Clusterer.prototype.getExtendedBounds = function (bounds) {
        var projection = this.getProjection();
        // Convert the points to pixels and the extend out by the grid size.
        var trPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
        if (trPix !== null) {
            trPix.x += this.gridSize;
            trPix.y -= this.gridSize;
        }
        var blPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
        if (blPix !== null) {
            blPix.x -= this.gridSize;
            blPix.y += this.gridSize;
        }
        // Extend the bounds to contain the new bounds.
        if (trPix !== null) {
            // Convert the pixel points back to LatLng nw
            var point1 = projection.fromDivPixelToLatLng(trPix);
            if (point1 !== null) {
                bounds.extend(point1);
            }
        }
        if (blPix !== null) {
            // Convert the pixel points back to LatLng sw
            var point2 = projection.fromDivPixelToLatLng(blPix);
            if (point2 !== null) {
                bounds.extend(point2);
            }
        }
        return bounds;
    };
    Clusterer.prototype.redraw = function () {
        // Redraws all the clusters.
        this.createClusters(0);
    };
    Clusterer.prototype.resetViewport = function (optHide) {
        // Remove all the clusters
        for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
            var cluster = _a[_i];
            cluster.remove();
        }
        this.clusters = [];
        // Reset the markers to not be added and to be removed from the map.
        for (var _b = 0, _c = this.markers; _b < _c.length; _b++) {
            var marker = _c[_b];
            marker.isAdded = false;
            if (optHide) {
                marker.setMap(null);
            }
        }
    };
    Clusterer.prototype.distanceBetweenPoints = function (p1, p2) {
        var R = 6371; // Radius of the Earth in km
        var dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
        var dLon = ((p2.lng() - p1.lng()) * Math.PI) / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((p1.lat() * Math.PI) / 180) *
                Math.cos((p2.lat() * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    };
    Clusterer.prototype.isMarkerInBounds = function (marker, bounds) {
        var position = marker.getPosition();
        if (position) {
            return bounds.contains(position);
        }
        return false;
    };
    Clusterer.prototype.addToClosestCluster = function (marker) {
        var cluster;
        var distance = 40000; // Some large number
        var clusterToAddTo = null;
        for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
            var clusterElement = _a[_i];
            cluster = clusterElement;
            var center = cluster.getCenter();
            var position = marker.getPosition();
            if (center && position) {
                var d = this.distanceBetweenPoints(center, position);
                if (d < distance) {
                    distance = d;
                    clusterToAddTo = cluster;
                }
            }
        }
        if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
            clusterToAddTo.addMarker(marker);
        }
        else {
            cluster = new Cluster$1(this);
            cluster.addMarker(marker);
            this.clusters.push(cluster);
        }
    };
    Clusterer.prototype.createClusters = function (iFirst) {
        var _this = this;
        if (!this.ready) {
            return;
        }
        // Cancel previous batch processing if we're working on the first batch:
        if (iFirst === 0) {
            /**
             * This event is fired when the <code>Clusterer</code> begins
             *  clustering markers.
             * @name Clusterer#clusteringbegin
             * @param {Clusterer} mc The Clusterer whose markers are being clustered.
             * @event
             */
            google.maps.event.trigger(this, 'clusteringbegin', this);
            if (this.timerRefStatic !== null) {
                window.clearTimeout(this.timerRefStatic);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                delete this.timerRefStatic;
            }
        }
        var map = this.getMap();
        var bounds = map !== null && 'getBounds' in map ? map.getBounds() : null;
        var zoom = (map === null || map === void 0 ? void 0 : map.getZoom()) || 0;
        // Get our current map view bounds.
        // Create a new bounds object so we don't affect the map.
        //
        // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
        var mapBounds = zoom > 3
            ? new google.maps.LatLngBounds(bounds === null || bounds === void 0 ? void 0 : bounds.getSouthWest(), bounds === null || bounds === void 0 ? void 0 : bounds.getNorthEast())
            : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
        var extendedMapBounds = this.getExtendedBounds(mapBounds);
        var iLast = Math.min(iFirst + this.batchSize, this.markers.length);
        for (var i = iFirst; i < iLast; i++) {
            var marker = this.markers[i];
            if (marker && !marker.isAdded && this.isMarkerInBounds(marker, extendedMapBounds) && (!this.ignoreHidden || (this.ignoreHidden && marker.getVisible()))) {
                this.addToClosestCluster(marker);
            }
        }
        if (iLast < this.markers.length) {
            this.timerRefStatic = window.setTimeout(function () {
                _this.createClusters(iLast);
            }, 0);
        }
        else {
            this.timerRefStatic = null;
            /**
             * This event is fired when the <code>Clusterer</code> stops
             *  clustering markers.
             * @name Clusterer#clusteringend
             * @param {Clusterer} mc The Clusterer whose markers are being clustered.
             * @event
             */
            google.maps.event.trigger(this, 'clusteringend', this);
            for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
                var cluster = _a[_i];
                cluster.updateIcon();
            }
        }
    };
    Clusterer.prototype.extend = function (obj1, obj2) {
        return function applyExtend(object) {
            for (var property in object.prototype) {
                // eslint-disable-next-line @typescript-eslint/ban-types
                var prop = property;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.prototype[prop] = object.prototype[prop];
            }
            return this;
        }.apply(obj1, [obj2]);
    };
    return Clusterer;
}());

var eventMap$e = {
    onClick: 'click',
    onClusteringBegin: 'clusteringbegin',
    onClusteringEnd: 'clusteringend',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
};
var updaterMap$e = {
    averageCenter: function (instance, averageCenter) {
        instance.setAverageCenter(averageCenter);
    },
    batchSizeIE: function (instance, batchSizeIE) {
        instance.setBatchSizeIE(batchSizeIE);
    },
    calculator: function (instance, calculator) {
        instance.setCalculator(calculator);
    },
    clusterClass: function (instance, clusterClass) {
        instance.setClusterClass(clusterClass);
    },
    enableRetinaIcons: function (instance, enableRetinaIcons) {
        instance.setEnableRetinaIcons(enableRetinaIcons);
    },
    gridSize: function (instance, gridSize) {
        instance.setGridSize(gridSize);
    },
    ignoreHidden: function (instance, ignoreHidden) {
        instance.setIgnoreHidden(ignoreHidden);
    },
    imageExtension: function (instance, imageExtension) {
        instance.setImageExtension(imageExtension);
    },
    imagePath: function (instance, imagePath) {
        instance.setImagePath(imagePath);
    },
    imageSizes: function (instance, imageSizes) {
        instance.setImageSizes(imageSizes);
    },
    maxZoom: function (instance, maxZoom) {
        instance.setMaxZoom(maxZoom);
    },
    minimumClusterSize: function (instance, minimumClusterSize) {
        instance.setMinimumClusterSize(minimumClusterSize);
    },
    styles: function (instance, styles) {
        instance.setStyles(styles);
    },
    title: function (instance, title) {
        instance.setTitle(title);
    },
    zoomOnClick: function (instance, zoomOnClick) {
        instance.setZoomOnClick(zoomOnClick);
    },
};
var defaultOptions$4 = {};
function MarkerClustererFunctional(props) {
    var children = props.children, options = props.options, averageCenter = props.averageCenter, batchSizeIE = props.batchSizeIE, calculator = props.calculator, clusterClass = props.clusterClass, enableRetinaIcons = props.enableRetinaIcons, gridSize = props.gridSize, ignoreHidden = props.ignoreHidden, imageExtension = props.imageExtension, imagePath = props.imagePath, imageSizes = props.imageSizes, maxZoom = props.maxZoom, minimumClusterSize = props.minimumClusterSize, styles = props.styles, title = props.title, zoomOnClick = props.zoomOnClick, onClick = props.onClick, onClusteringBegin = props.onClusteringBegin, onClusteringEnd = props.onClusteringEnd, onMouseOver = props.onMouseOver, onMouseOut = props.onMouseOut, onLoad = props.onLoad, onUnmount = props.onUnmount;
    var _a = react.useState(null), instance = _a[0], setInstance = _a[1];
    var map = react.useContext(MapContext);
    var _b = react.useState(null), clickListener = _b[0], setClickListener = _b[1];
    var _c = react.useState(null), clusteringBeginListener = _c[0], setClusteringBeginListener = _c[1];
    var _d = react.useState(null), clusteringEndListener = _d[0], setClusteringEndListener = _d[1];
    var _e = react.useState(null), mouseoutListener = _e[0], setMouseoutListener = _e[1];
    var _f = react.useState(null), mouseoverListener = _f[0], setMouseoverListener = _f[1];
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, eventMap$e.onMouseOut, onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, eventMap$e.onMouseOver, onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, eventMap$e.onClick, onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onClusteringBegin) {
            if (clusteringBeginListener !== null) {
                google.maps.event.removeListener(clusteringBeginListener);
            }
            setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringBegin, onClusteringBegin));
        }
    }, [onClusteringBegin]);
    react.useEffect(function () {
        if (instance && onClusteringEnd) {
            if (clusteringEndListener !== null) {
                google.maps.event.removeListener(clusteringEndListener);
            }
            setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringEnd, onClusteringEnd));
        }
    }, [onClusteringEnd]);
    react.useEffect(function () {
        if (typeof averageCenter !== 'undefined' && instance !== null) {
            updaterMap$e.averageCenter(instance, averageCenter);
        }
    }, [instance, averageCenter]);
    react.useEffect(function () {
        if (typeof batchSizeIE !== 'undefined' && instance !== null) {
            updaterMap$e.batchSizeIE(instance, batchSizeIE);
        }
    }, [instance, batchSizeIE]);
    react.useEffect(function () {
        if (typeof calculator !== 'undefined' && instance !== null) {
            updaterMap$e.calculator(instance, calculator);
        }
    }, [instance, calculator]);
    react.useEffect(function () {
        if (typeof clusterClass !== 'undefined' && instance !== null) {
            updaterMap$e.clusterClass(instance, clusterClass);
        }
    }, [instance, clusterClass]);
    react.useEffect(function () {
        if (typeof enableRetinaIcons !== 'undefined' && instance !== null) {
            updaterMap$e.enableRetinaIcons(instance, enableRetinaIcons);
        }
    }, [instance, enableRetinaIcons]);
    react.useEffect(function () {
        if (typeof gridSize !== 'undefined' && instance !== null) {
            updaterMap$e.gridSize(instance, gridSize);
        }
    }, [instance, gridSize]);
    react.useEffect(function () {
        if (typeof ignoreHidden !== 'undefined' && instance !== null) {
            updaterMap$e.ignoreHidden(instance, ignoreHidden);
        }
    }, [instance, ignoreHidden]);
    react.useEffect(function () {
        if (typeof imageExtension !== 'undefined' && instance !== null) {
            updaterMap$e.imageExtension(instance, imageExtension);
        }
    }, [instance, imageExtension]);
    react.useEffect(function () {
        if (typeof imagePath !== 'undefined' && instance !== null) {
            updaterMap$e.imagePath(instance, imagePath);
        }
    }, [instance, imagePath]);
    react.useEffect(function () {
        if (typeof imageSizes !== 'undefined' && instance !== null) {
            updaterMap$e.imageSizes(instance, imageSizes);
        }
    }, [instance, imageSizes]);
    react.useEffect(function () {
        if (typeof maxZoom !== 'undefined' && instance !== null) {
            updaterMap$e.maxZoom(instance, maxZoom);
        }
    }, [instance, maxZoom]);
    react.useEffect(function () {
        if (typeof minimumClusterSize !== 'undefined' && instance !== null) {
            updaterMap$e.minimumClusterSize(instance, minimumClusterSize);
        }
    }, [instance, minimumClusterSize]);
    react.useEffect(function () {
        if (typeof styles !== 'undefined' && instance !== null) {
            updaterMap$e.styles(instance, styles);
        }
    }, [instance, styles]);
    react.useEffect(function () {
        if (typeof title !== 'undefined' && instance !== null) {
            updaterMap$e.title(instance, title);
        }
    }, [instance, title]);
    react.useEffect(function () {
        if (typeof zoomOnClick !== 'undefined' && instance !== null) {
            updaterMap$e.zoomOnClick(instance, zoomOnClick);
        }
    }, [instance, zoomOnClick]);
    react.useEffect(function () {
        if (!map)
            return;
        var clustererOptions = __assign({}, (options || defaultOptions$4));
        var clusterer = new Clusterer(map, [], clustererOptions);
        if (averageCenter) {
            updaterMap$e.averageCenter(clusterer, averageCenter);
        }
        if (batchSizeIE) {
            updaterMap$e.batchSizeIE(clusterer, batchSizeIE);
        }
        if (calculator) {
            updaterMap$e.calculator(clusterer, calculator);
        }
        if (clusterClass) {
            updaterMap$e.clusterClass(clusterer, clusterClass);
        }
        if (enableRetinaIcons) {
            updaterMap$e.enableRetinaIcons(clusterer, enableRetinaIcons);
        }
        if (gridSize) {
            updaterMap$e.gridSize(clusterer, gridSize);
        }
        if (ignoreHidden) {
            updaterMap$e.ignoreHidden(clusterer, ignoreHidden);
        }
        if (imageExtension) {
            updaterMap$e.imageExtension(clusterer, imageExtension);
        }
        if (imagePath) {
            updaterMap$e.imagePath(clusterer, imagePath);
        }
        if (imageSizes) {
            updaterMap$e.imageSizes(clusterer, imageSizes);
        }
        if (maxZoom) {
            updaterMap$e.maxZoom(clusterer, maxZoom);
        }
        if (minimumClusterSize) {
            updaterMap$e.minimumClusterSize(clusterer, minimumClusterSize);
        }
        if (styles) {
            updaterMap$e.styles(clusterer, styles);
        }
        if (title) {
            updaterMap$e.title(clusterer, title);
        }
        if (zoomOnClick) {
            updaterMap$e.zoomOnClick(clusterer, zoomOnClick);
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOut, onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOver, onMouseOver));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(clusterer, eventMap$e.onClick, onClick));
        }
        if (onClusteringBegin) {
            setClusteringBeginListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringBegin, onClusteringBegin));
        }
        if (onClusteringEnd) {
            setClusteringEndListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringEnd, onClusteringEnd));
        }
        setInstance(clusterer);
        if (onLoad) {
            onLoad(clusterer);
        }
        return function () {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (clusteringBeginListener !== null) {
                google.maps.event.removeListener(clusteringBeginListener);
            }
            if (clusteringEndListener !== null) {
                google.maps.event.removeListener(clusteringEndListener);
            }
            if (onUnmount) {
                onUnmount(clusterer);
            }
        };
    }, []);
    return instance !== null ? children(instance) || null : null;
}
var MarkerClustererF = react.memo(MarkerClustererFunctional);
var ClustererComponent = /** @class */ (function (_super) {
    __extends(ClustererComponent, _super);
    function ClustererComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            markerClusterer: null,
        };
        _this.setClustererCallback = function () {
            if (_this.state.markerClusterer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.markerClusterer);
            }
        };
        return _this;
    }
    ClustererComponent.prototype.componentDidMount = function () {
        if (this.context) {
            var markerClusterer_1 = new Clusterer(this.context, [], this.props.options);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$e,
                eventMap: eventMap$e,
                prevProps: {},
                nextProps: this.props,
                instance: markerClusterer_1,
            });
            this.setState(function () {
                return {
                    markerClusterer: markerClusterer_1,
                };
            }, this.setClustererCallback);
        }
    };
    ClustererComponent.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.markerClusterer) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$e,
                eventMap: eventMap$e,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.markerClusterer,
            });
        }
    };
    ClustererComponent.prototype.componentWillUnmount = function () {
        if (this.state.markerClusterer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.markerClusterer);
            }
            unregisterEvents(this.registeredEvents);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.state.markerClusterer.setMap(null);
        }
    };
    ClustererComponent.prototype.render = function () {
        return this.state.markerClusterer !== null
            ? this.props.children(this.state.markerClusterer)
            : null;
    };
    ClustererComponent.contextType = MapContext;
    return ClustererComponent;
}(react.PureComponent));

// This handler prevents an event in the InfoBox from being passed on to the map.
function cancelHandler(event) {
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
}
var InfoBox = /** @class */ (function () {
    function InfoBox(options) {
        if (options === void 0) { options = {}; }
        this.getCloseClickHandler = this.getCloseClickHandler.bind(this);
        this.closeClickHandler = this.closeClickHandler.bind(this);
        this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this);
        this.addClickHandler = this.addClickHandler.bind(this);
        this.getCloseBoxImg = this.getCloseBoxImg.bind(this);
        this.getBoxWidths = this.getBoxWidths.bind(this);
        this.setBoxStyle = this.setBoxStyle.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.setOptions = this.setOptions.bind(this);
        this.setContent = this.setContent.bind(this);
        this.setVisible = this.setVisible.bind(this);
        this.getContent = this.getContent.bind(this);
        this.getVisible = this.getVisible.bind(this);
        this.setZIndex = this.setZIndex.bind(this);
        this.getZIndex = this.getZIndex.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.panBox = this.panBox.bind(this);
        this.extend = this.extend.bind(this);
        this.close = this.close.bind(this);
        this.draw = this.draw.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.open = this.open.bind(this);
        this.extend(InfoBox, google.maps.OverlayView);
        // Standard options (in common with google.maps.InfoWindow):
        this.content = options.content || '';
        this.disableAutoPan = options.disableAutoPan || false;
        this.maxWidth = options.maxWidth || 0;
        this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
        this.position = options.position || new google.maps.LatLng(0, 0);
        this.zIndex = options.zIndex || null;
        // Additional options (unique to InfoBox):
        this.boxClass = options.boxClass || 'infoBox';
        this.boxStyle = options.boxStyle || {};
        this.closeBoxMargin = options.closeBoxMargin || '2px';
        this.closeBoxURL = options.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';
        if (options.closeBoxURL === '') {
            this.closeBoxURL = '';
        }
        this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);
        if (typeof options.visible === 'undefined') {
            if (typeof options.isHidden === 'undefined') {
                options.visible = true;
            }
            else {
                options.visible = !options.isHidden;
            }
        }
        this.isHidden = !options.visible;
        this.alignBottom = options.alignBottom || false;
        this.pane = options.pane || 'floatPane';
        this.enableEventPropagation = options.enableEventPropagation || false;
        this.div = null;
        this.closeListener = null;
        this.moveListener = null;
        this.mapListener = null;
        this.contextListener = null;
        this.eventListeners = null;
        this.fixedWidthSet = null;
    }
    InfoBox.prototype.createInfoBoxDiv = function () {
        var _this = this;
        // This handler ignores the current event in the InfoBox and conditionally prevents
        // the event from being passed on to the map. It is used for the contextmenu event.
        var ignoreHandler = function (event) {
            event.returnValue = false;
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (!_this.enableEventPropagation) {
                cancelHandler(event);
            }
        };
        if (!this.div) {
            this.div = document.createElement('div');
            this.setBoxStyle();
            if (typeof this.content === 'string') {
                this.div.innerHTML = this.getCloseBoxImg() + this.content;
            }
            else {
                this.div.innerHTML = this.getCloseBoxImg();
                this.div.appendChild(this.content);
            }
            var panes = this.getPanes();
            if (panes !== null) {
                panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM
            }
            this.addClickHandler();
            if (this.div.style.width) {
                this.fixedWidthSet = true;
            }
            else {
                if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
                    this.div.style.width = this.maxWidth + 'px';
                    this.fixedWidthSet = true;
                }
                else {
                    // The following code is needed to overcome problems with MSIE
                    var bw = this.getBoxWidths();
                    this.div.style.width = this.div.offsetWidth - bw.left - bw.right + 'px';
                    this.fixedWidthSet = false;
                }
            }
            this.panBox(this.disableAutoPan);
            if (!this.enableEventPropagation) {
                this.eventListeners = [];
                // Cancel event propagation.
                // Note: mousemove not included (to resolve Issue 152)
                var events = [
                    'mousedown',
                    'mouseover',
                    'mouseout',
                    'mouseup',
                    'click',
                    'dblclick',
                    'touchstart',
                    'touchend',
                    'touchmove',
                ];
                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                    var event_1 = events_1[_i];
                    this.eventListeners.push(google.maps.event.addListener(this.div, event_1, cancelHandler));
                }
                // Workaround for Google bug that causes the cursor to change to a pointer
                // when the mouse moves over a marker underneath InfoBox.
                this.eventListeners.push(google.maps.event.addListener(this.div, 'mouseover', function () {
                    if (_this.div) {
                        _this.div.style.cursor = 'default';
                    }
                }));
            }
            this.contextListener = google.maps.event.addListener(this.div, 'contextmenu', ignoreHandler);
            /**
             * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
             * @name InfoBox#domready
             * @event
             */
            google.maps.event.trigger(this, 'domready');
        }
    };
    InfoBox.prototype.getCloseBoxImg = function () {
        var img = '';
        if (this.closeBoxURL !== '') {
            img = '<img alt=""';
            img += ' aria-hidden="true"';
            img += " src='" + this.closeBoxURL + "'";
            img += ' align=right'; // Do this because Opera chokes on style='float: right;'
            img += " style='";
            img += ' position: relative;'; // Required by MSIE
            img += ' cursor: pointer;';
            img += ' margin: ' + this.closeBoxMargin + ';';
            img += "'>";
        }
        return img;
    };
    InfoBox.prototype.addClickHandler = function () {
        this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== ''
            ? google.maps.event.addListener(this.div.firstChild, 'click', this.getCloseClickHandler())
            : null;
    };
    InfoBox.prototype.closeClickHandler = function (event) {
        // 1.0.3 fix: Always prevent propagation of a close box click to the map:
        event.cancelBubble = true;
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        /**
         * This event is fired when the InfoBox's close box is clicked.
         * @name InfoBox#closeclick
         * @event
         */
        google.maps.event.trigger(this, 'closeclick');
        this.close();
    };
    InfoBox.prototype.getCloseClickHandler = function () {
        return this.closeClickHandler;
    };
    InfoBox.prototype.panBox = function (disablePan) {
        if (this.div && !disablePan) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var map = this.getMap();
            // Only pan if attached to map, not panorama
            if (map instanceof google.maps.Map) {
                var xOffset = 0;
                var yOffset = 0;
                var bounds = map.getBounds();
                if (bounds && !bounds.contains(this.position)) {
                    // Marker not in visible area of map, so set center
                    // of map to the marker position first.
                    map.setCenter(this.position);
                }
                var mapDiv = map.getDiv();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var mapWidth = mapDiv.offsetWidth;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var mapHeight = mapDiv.offsetHeight;
                var iwOffsetX = this.pixelOffset.width;
                var iwOffsetY = this.pixelOffset.height;
                var iwWidth = this.div.offsetWidth;
                var iwHeight = this.div.offsetHeight;
                var padX = this.infoBoxClearance.width;
                var padY = this.infoBoxClearance.height;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var projection = this.getProjection();
                var pixPosition = projection.fromLatLngToContainerPixel(this.position);
                if (pixPosition !== null) {
                    if (pixPosition.x < -iwOffsetX + padX) {
                        xOffset = pixPosition.x + iwOffsetX - padX;
                    }
                    else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
                        xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
                    }
                    if (this.alignBottom) {
                        if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
                            yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
                        }
                        else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
                            yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
                        }
                    }
                    else {
                        if (pixPosition.y < -iwOffsetY + padY) {
                            yOffset = pixPosition.y + iwOffsetY - padY;
                        }
                        else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
                            yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
                        }
                    }
                }
                if (!(xOffset === 0 && yOffset === 0)) {
                    // Move the map to the shifted center.
                    map.panBy(xOffset, yOffset);
                }
            }
        }
    };
    InfoBox.prototype.setBoxStyle = function () {
        if (this.div) {
            // Apply style values from the style sheet defined in the boxClass parameter:
            this.div.className = this.boxClass;
            // Clear existing inline style values:
            this.div.style.cssText = '';
            // Apply style values defined in the boxStyle parameter:
            var boxStyle = this.boxStyle;
            for (var i in boxStyle) {
                if (Object.prototype.hasOwnProperty.call(boxStyle, i)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.div.style[i] = boxStyle[i];
                }
            }
            // Fix for iOS disappearing InfoBox problem
            // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
            this.div.style.webkitTransform = 'translateZ(0)';
            // Fix up opacity style for benefit of MSIE
            if (typeof this.div.style.opacity !== 'undefined' && this.div.style.opacity !== '') {
                // See http://www.quirksmode.org/css/opacity.html
                var opacity = parseFloat(this.div.style.opacity || '');
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.div.style.msFilter =
                    '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
                this.div.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
            }
            // Apply required styles
            this.div.style.position = 'absolute';
            this.div.style.visibility = 'hidden';
            if (this.zIndex !== null) {
                this.div.style.zIndex = this.zIndex + '';
            }
            if (!this.div.style.overflow) {
                this.div.style.overflow = 'auto';
            }
        }
    };
    InfoBox.prototype.getBoxWidths = function () {
        var bw = { top: 0, bottom: 0, left: 0, right: 0 };
        if (!this.div) {
            return bw;
        }
        if (document.defaultView) {
            var ownerDocument = this.div.ownerDocument;
            var computedStyle = ownerDocument && ownerDocument.defaultView
                ? ownerDocument.defaultView.getComputedStyle(this.div, '')
                : null;
            if (computedStyle) {
                // The computed styles are always in pixel units (good!)
                bw.top = parseInt(computedStyle.borderTopWidth || '', 10) || 0;
                bw.bottom = parseInt(computedStyle.borderBottomWidth || '', 10) || 0;
                bw.left = parseInt(computedStyle.borderLeftWidth || '', 10) || 0;
                bw.right = parseInt(computedStyle.borderRightWidth || '', 10) || 0;
            }
        }
        else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.documentElement.currentStyle // MSIE
        ) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var currentStyle = this.div.currentStyle;
            if (currentStyle) {
                // The current styles may not be in pixel units, but assume they are (bad!)
                bw.top = parseInt(currentStyle.borderTopWidth || '', 10) || 0;
                bw.bottom = parseInt(currentStyle.borderBottomWidth || '', 10) || 0;
                bw.left = parseInt(currentStyle.borderLeftWidth || '', 10) || 0;
                bw.right = parseInt(currentStyle.borderRightWidth || '', 10) || 0;
            }
        }
        return bw;
    };
    InfoBox.prototype.onRemove = function () {
        if (this.div && this.div.parentNode) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
        }
    };
    InfoBox.prototype.draw = function () {
        this.createInfoBoxDiv();
        if (this.div) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var projection = this.getProjection();
            var pixPosition = projection.fromLatLngToDivPixel(this.position);
            if (pixPosition !== null) {
                this.div.style.left = pixPosition.x + this.pixelOffset.width + 'px';
                if (this.alignBottom) {
                    this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + 'px';
                }
                else {
                    this.div.style.top = pixPosition.y + this.pixelOffset.height + 'px';
                }
            }
            if (this.isHidden) {
                this.div.style.visibility = 'hidden';
            }
            else {
                this.div.style.visibility = 'visible';
            }
        }
    };
    InfoBox.prototype.setOptions = function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.boxClass !== 'undefined') {
            // Must be first
            this.boxClass = options.boxClass;
            this.setBoxStyle();
        }
        if (typeof options.boxStyle !== 'undefined') {
            // Must be second
            this.boxStyle = options.boxStyle;
            this.setBoxStyle();
        }
        if (typeof options.content !== 'undefined') {
            this.setContent(options.content);
        }
        if (typeof options.disableAutoPan !== 'undefined') {
            this.disableAutoPan = options.disableAutoPan;
        }
        if (typeof options.maxWidth !== 'undefined') {
            this.maxWidth = options.maxWidth;
        }
        if (typeof options.pixelOffset !== 'undefined') {
            this.pixelOffset = options.pixelOffset;
        }
        if (typeof options.alignBottom !== 'undefined') {
            this.alignBottom = options.alignBottom;
        }
        if (typeof options.position !== 'undefined') {
            this.setPosition(options.position);
        }
        if (typeof options.zIndex !== 'undefined') {
            this.setZIndex(options.zIndex);
        }
        if (typeof options.closeBoxMargin !== 'undefined') {
            this.closeBoxMargin = options.closeBoxMargin;
        }
        if (typeof options.closeBoxURL !== 'undefined') {
            this.closeBoxURL = options.closeBoxURL;
        }
        if (typeof options.infoBoxClearance !== 'undefined') {
            this.infoBoxClearance = options.infoBoxClearance;
        }
        if (typeof options.isHidden !== 'undefined') {
            this.isHidden = options.isHidden;
        }
        if (typeof options.visible !== 'undefined') {
            this.isHidden = !options.visible;
        }
        if (typeof options.enableEventPropagation !== 'undefined') {
            this.enableEventPropagation = options.enableEventPropagation;
        }
        if (this.div) {
            this.draw();
        }
    };
    InfoBox.prototype.setContent = function (content) {
        this.content = content;
        if (this.div) {
            if (this.closeListener) {
                google.maps.event.removeListener(this.closeListener);
                this.closeListener = null;
            }
            // Odd code required to make things work with MSIE.
            if (!this.fixedWidthSet) {
                this.div.style.width = '';
            }
            if (typeof content === 'string') {
                this.div.innerHTML = this.getCloseBoxImg() + content;
            }
            else {
                this.div.innerHTML = this.getCloseBoxImg();
                this.div.appendChild(content);
            }
            // Perverse code required to make things work with MSIE.
            // (Ensures the close box does, in fact, float to the right.)
            if (!this.fixedWidthSet) {
                this.div.style.width = this.div.offsetWidth + 'px';
                if (typeof content === 'string') {
                    this.div.innerHTML = this.getCloseBoxImg() + content;
                }
                else {
                    this.div.innerHTML = this.getCloseBoxImg();
                    this.div.appendChild(content);
                }
            }
            this.addClickHandler();
        }
        /**
         * This event is fired when the content of the InfoBox changes.
         * @name InfoBox#content_changed
         * @event
         */
        google.maps.event.trigger(this, 'content_changed');
    };
    InfoBox.prototype.setPosition = function (latLng) {
        this.position = latLng;
        if (this.div) {
            this.draw();
        }
        /**
         * This event is fired when the position of the InfoBox changes.
         * @name InfoBox#position_changed
         * @event
         */
        google.maps.event.trigger(this, 'position_changed');
    };
    InfoBox.prototype.setVisible = function (isVisible) {
        this.isHidden = !isVisible;
        if (this.div) {
            this.div.style.visibility = this.isHidden ? 'hidden' : 'visible';
        }
    };
    InfoBox.prototype.setZIndex = function (index) {
        this.zIndex = index;
        if (this.div) {
            this.div.style.zIndex = index + '';
        }
        /**
         * This event is fired when the zIndex of the InfoBox changes.
         * @name InfoBox#zindex_changed
         * @event
         */
        google.maps.event.trigger(this, 'zindex_changed');
    };
    InfoBox.prototype.getContent = function () {
        return this.content;
    };
    InfoBox.prototype.getPosition = function () {
        return this.position;
    };
    InfoBox.prototype.getZIndex = function () {
        return this.zIndex;
    };
    InfoBox.prototype.getVisible = function () {
        var map = this.getMap();
        return typeof map === 'undefined' || map === null ? false : !this.isHidden;
    };
    InfoBox.prototype.show = function () {
        this.isHidden = false;
        if (this.div) {
            this.div.style.visibility = 'visible';
        }
    };
    InfoBox.prototype.hide = function () {
        this.isHidden = true;
        if (this.div) {
            this.div.style.visibility = 'hidden';
        }
    };
    InfoBox.prototype.open = function (map, anchor) {
        var _this = this;
        if (anchor) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.position = anchor.getPosition();
            this.moveListener = google.maps.event.addListener(anchor, 'position_changed', function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var position = anchor.getPosition();
                _this.setPosition(position);
            });
            this.mapListener = google.maps.event.addListener(anchor, 'map_changed', function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _this.setMap(anchor.map);
            });
        }
        this.setMap(map);
        if (this.div) {
            this.panBox();
        }
    };
    InfoBox.prototype.close = function () {
        if (this.closeListener) {
            google.maps.event.removeListener(this.closeListener);
            this.closeListener = null;
        }
        if (this.eventListeners) {
            for (var _i = 0, _a = this.eventListeners; _i < _a.length; _i++) {
                var eventListener = _a[_i];
                google.maps.event.removeListener(eventListener);
            }
            this.eventListeners = null;
        }
        if (this.moveListener) {
            google.maps.event.removeListener(this.moveListener);
            this.moveListener = null;
        }
        if (this.mapListener) {
            google.maps.event.removeListener(this.mapListener);
            this.mapListener = null;
        }
        if (this.contextListener) {
            google.maps.event.removeListener(this.contextListener);
            this.contextListener = null;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.setMap(null);
    };
    InfoBox.prototype.extend = function (obj1, obj2) {
        return function applyExtend(object) {
            for (var property in object.prototype) {
                if (!Object.prototype.hasOwnProperty.call(this, property)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.prototype[property] = object.prototype[property];
                }
            }
            return this;
        }.apply(obj1, [obj2]);
    };
    return InfoBox;
}());

var eventMap$d = {
    onCloseClick: 'closeclick',
    onContentChanged: 'content_changed',
    onDomReady: 'domready',
    onPositionChanged: 'position_changed',
    onZindexChanged: 'zindex_changed',
};
var updaterMap$d = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
    position: function (instance, position) {
        if (position instanceof google.maps.LatLng) {
            instance.setPosition(position);
        }
        else {
            instance.setPosition(new google.maps.LatLng(position.lat, position.lng));
        }
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
var defaultOptions$3 = {};
function InfoBoxFunctional(_a) {
    var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), closeClickListener = _c[0], setCloseClickListener = _c[1];
    var _d = react.useState(null), domReadyClickListener = _d[0], setDomReadyClickListener = _d[1];
    var _e = react.useState(null), contentChangedClickListener = _e[0], setContentChangedClickListener = _e[1];
    var _f = react.useState(null), positionChangedClickListener = _f[0], setPositionChangedClickListener = _f[1];
    var _g = react.useState(null), zIndexChangedClickListener = _g[0], setZindexChangedClickListener = _g[1];
    var containerElementRef = react.useRef(null);
    // Order does matter
    react.useEffect(function () {
        if (map && instance !== null) {
            instance.close();
            if (anchor) {
                instance.open(map, anchor);
            }
            else if (instance.getPosition()) {
                instance.open(map);
            }
        }
    }, [map, instance, anchor]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (position && instance !== null) {
            var positionLatLng = position instanceof google.maps.LatLng
                ? position
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                : new google.maps.LatLng(position.lat, position.lng);
            instance.setPosition(positionLatLng);
        }
    }, [position]);
    react.useEffect(function () {
        if (typeof zIndex === 'number' && instance !== null) {
            instance.setZIndex(zIndex);
        }
    }, [zIndex]);
    react.useEffect(function () {
        if (instance && onCloseClick) {
            if (closeClickListener !== null) {
                google.maps.event.removeListener(closeClickListener);
            }
            setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
        }
    }, [onCloseClick]);
    react.useEffect(function () {
        if (instance && onDomReady) {
            if (domReadyClickListener !== null) {
                google.maps.event.removeListener(domReadyClickListener);
            }
            setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
        }
    }, [onDomReady]);
    react.useEffect(function () {
        if (instance && onContentChanged) {
            if (contentChangedClickListener !== null) {
                google.maps.event.removeListener(contentChangedClickListener);
            }
            setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
        }
    }, [onContentChanged]);
    react.useEffect(function () {
        if (instance && onPositionChanged) {
            if (positionChangedClickListener !== null) {
                google.maps.event.removeListener(positionChangedClickListener);
            }
            setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
        }
    }, [onPositionChanged]);
    react.useEffect(function () {
        if (instance && onZindexChanged) {
            if (zIndexChangedClickListener !== null) {
                google.maps.event.removeListener(zIndexChangedClickListener);
            }
            setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
        }
    }, [onZindexChanged]);
    react.useEffect(function () {
        if (map) {
            var _a = options || defaultOptions$3, position_1 = _a.position, infoBoxOptions = __rest$1(_a, ["position"]);
            var positionLatLng = void 0;
            if (position_1 && !(position_1 instanceof google.maps.LatLng)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                positionLatLng = new google.maps.LatLng(position_1.lat, position_1.lng);
            }
            var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), (positionLatLng ? { position: positionLatLng } : {})));
            containerElementRef.current = document.createElement('div');
            setInstance(infoBox);
            if (onCloseClick) {
                setCloseClickListener(google.maps.event.addListener(infoBox, 'closeclick', onCloseClick));
            }
            if (onDomReady) {
                setDomReadyClickListener(google.maps.event.addListener(infoBox, 'domready', onDomReady));
            }
            if (onContentChanged) {
                setContentChangedClickListener(google.maps.event.addListener(infoBox, 'content_changed', onContentChanged));
            }
            if (onPositionChanged) {
                setPositionChangedClickListener(google.maps.event.addListener(infoBox, 'position_changed', onPositionChanged));
            }
            if (onZindexChanged) {
                setZindexChangedClickListener(google.maps.event.addListener(infoBox, 'zindex_changed', onZindexChanged));
            }
            infoBox.setContent(containerElementRef.current);
            if (anchor) {
                infoBox.open(map, anchor);
            }
            else if (infoBox.getPosition()) {
                infoBox.open(map);
            }
            else {
                invariant$1(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
            }
            if (onLoad) {
                onLoad(infoBox);
            }
        }
        return function () {
            if (instance !== null) {
                if (closeClickListener) {
                    google.maps.event.removeListener(closeClickListener);
                }
                if (contentChangedClickListener) {
                    google.maps.event.removeListener(contentChangedClickListener);
                }
                if (domReadyClickListener) {
                    google.maps.event.removeListener(domReadyClickListener);
                }
                if (positionChangedClickListener) {
                    google.maps.event.removeListener(positionChangedClickListener);
                }
                if (zIndexChangedClickListener) {
                    google.maps.event.removeListener(zIndexChangedClickListener);
                }
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.close();
            }
        };
    }, []);
    return containerElementRef.current ? ReactDOM.createPortal(react.Children.only(children), containerElementRef.current) : null;
}
var InfoBoxF = react.memo(InfoBoxFunctional);
var InfoBoxComponent = /** @class */ (function (_super) {
    __extends(InfoBoxComponent, _super);
    function InfoBoxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = null;
        _this.state = {
            infoBox: null,
        };
        _this.open = function (infoBox, anchor) {
            if (anchor) {
                if (_this.context !== null) {
                    infoBox.open(_this.context, anchor);
                }
            }
            else if (infoBox.getPosition()) {
                if (_this.context !== null) {
                    infoBox.open(_this.context);
                }
            }
            else {
                invariant$1(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
            }
        };
        _this.setInfoBoxCallback = function () {
            if (_this.state.infoBox !== null && _this.containerElement !== null) {
                _this.state.infoBox.setContent(_this.containerElement);
                _this.open(_this.state.infoBox, _this.props.anchor);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.infoBox);
                }
            }
        };
        return _this;
    }
    InfoBoxComponent.prototype.componentDidMount = function () {
        var _a = this.props.options || {}, position = _a.position, infoBoxOptions = __rest$1(_a, ["position"]);
        var positionLatLng;
        if (position && !(position instanceof google.maps.LatLng)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            positionLatLng = new google.maps.LatLng(position.lat, position.lng);
        }
        var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), (positionLatLng ? { position: positionLatLng } : {})));
        this.containerElement = document.createElement('div');
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$d,
            eventMap: eventMap$d,
            prevProps: {},
            nextProps: this.props,
            instance: infoBox,
        });
        this.setState({ infoBox: infoBox }, this.setInfoBoxCallback);
    };
    InfoBoxComponent.prototype.componentDidUpdate = function (prevProps) {
        var infoBox = this.state.infoBox;
        if (infoBox !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$d,
                eventMap: eventMap$d,
                prevProps: prevProps,
                nextProps: this.props,
                instance: infoBox,
            });
        }
    };
    InfoBoxComponent.prototype.componentWillUnmount = function () {
        var onUnmount = this.props.onUnmount;
        var infoBox = this.state.infoBox;
        if (infoBox !== null) {
            if (onUnmount) {
                onUnmount(infoBox);
            }
            unregisterEvents(this.registeredEvents);
            infoBox.close();
        }
    };
    InfoBoxComponent.prototype.render = function () {
        return this.containerElement ? ReactDOM.createPortal(react.Children.only(this.props.children), this.containerElement) : null;
    };
    InfoBoxComponent.contextType = MapContext;
    return InfoBoxComponent;
}(react.PureComponent));

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

var equal = /*@__PURE__*/getDefaultExportFromCjs(fastDeepEqual);

const ARRAY_TYPES = [
    Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
    Int32Array, Uint32Array, Float32Array, Float64Array
];

/** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor} TypedArrayConstructor */

const VERSION = 1; // serialized format version
const HEADER_SIZE = 8;

class KDBush {

    /**
     * Creates an index from raw `ArrayBuffer` data.
     * @param {ArrayBuffer} data
     */
    static from(data) {
        if (!(data instanceof ArrayBuffer)) {
            throw new Error('Data must be an instance of ArrayBuffer.');
        }
        const [magic, versionAndType] = new Uint8Array(data, 0, 2);
        if (magic !== 0xdb) {
            throw new Error('Data does not appear to be in a KDBush format.');
        }
        const version = versionAndType >> 4;
        if (version !== VERSION) {
            throw new Error(`Got v${version} data when expected v${VERSION}.`);
        }
        const ArrayType = ARRAY_TYPES[versionAndType & 0x0f];
        if (!ArrayType) {
            throw new Error('Unrecognized array type.');
        }
        const [nodeSize] = new Uint16Array(data, 2, 1);
        const [numItems] = new Uint32Array(data, 4, 1);

        return new KDBush(numItems, nodeSize, ArrayType, data);
    }

    /**
     * Creates an index that will hold a given number of items.
     * @param {number} numItems
     * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
     * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
     * @param {ArrayBuffer} [data] (For internal use only)
     */
    constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
        if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);

        this.numItems = +numItems;
        this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
        this.ArrayType = ArrayType;
        this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;

        const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
        const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
        const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
        const padCoords = (8 - idsByteSize % 8) % 8;

        if (arrayTypeIndex < 0) {
            throw new Error(`Unexpected typed array class: ${ArrayType}.`);
        }

        if (data && (data instanceof ArrayBuffer)) { // reconstruct an index from a buffer
            this.data = data;
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = numItems * 2;
            this._finished = true;
        } else { // initialize a new index
            this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = 0;
            this._finished = false;

            // set header
            new Uint8Array(this.data, 0, 2).set([0xdb, (VERSION << 4) + arrayTypeIndex]);
            new Uint16Array(this.data, 2, 1)[0] = nodeSize;
            new Uint32Array(this.data, 4, 1)[0] = numItems;
        }
    }

    /**
     * Add a point to the index.
     * @param {number} x
     * @param {number} y
     * @returns {number} An incremental index associated with the added item (starting from `0`).
     */
    add(x, y) {
        const index = this._pos >> 1;
        this.ids[index] = index;
        this.coords[this._pos++] = x;
        this.coords[this._pos++] = y;
        return index;
    }

    /**
     * Perform indexing of the added points.
     */
    finish() {
        const numAdded = this._pos >> 1;
        if (numAdded !== this.numItems) {
            throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
        }
        // kd-sort both arrays for efficient search
        sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);

        this._finished = true;
        return this;
    }

    /**
     * Search the index for items within a given bounding box.
     * @param {number} minX
     * @param {number} minY
     * @param {number} maxX
     * @param {number} maxY
     * @returns {number[]} An array of indices correponding to the found items.
     */
    range(minX, minY, maxX, maxY) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

        const {ids, coords, nodeSize} = this;
        const stack = [0, ids.length - 1, 0];
        const result = [];

        // recursively search for items in range in the kd-sorted arrays
        while (stack.length) {
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;

            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for (let i = left; i <= right; i++) {
                    const x = coords[2 * i];
                    const y = coords[2 * i + 1];
                    if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
                }
                continue;
            }

            // otherwise find the middle index
            const m = (left + right) >> 1;

            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

            // queue search in halves that intersect the query
            if (axis === 0 ? minX <= x : minY <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? maxX >= x : maxY >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }

        return result;
    }

    /**
     * Search the index for items within a given radius.
     * @param {number} qx
     * @param {number} qy
     * @param {number} r Query radius.
     * @returns {number[]} An array of indices correponding to the found items.
     */
    within(qx, qy, r) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

        const {ids, coords, nodeSize} = this;
        const stack = [0, ids.length - 1, 0];
        const result = [];
        const r2 = r * r;

        // recursively search for items within radius in the kd-sorted arrays
        while (stack.length) {
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;

            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for (let i = left; i <= right; i++) {
                    if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
                }
                continue;
            }

            // otherwise find the middle index
            const m = (left + right) >> 1;

            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

            // queue search in halves that intersect the query
            if (axis === 0 ? qx - r <= x : qy - r <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? qx + r >= x : qy + r >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }

        return result;
    }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} nodeSize
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function sort(ids, coords, nodeSize, left, right, axis) {
    if (right - left <= nodeSize) return;

    const m = (left + right) >> 1; // middle index

    // sort ids and coords around the middle index so that the halves lie
    // either left/right or top/bottom correspondingly (taking turns)
    select(ids, coords, m, left, right, axis);

    // recursively kd-sort first half and second half on the opposite axis
    sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
    sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}

/**
 * Custom Floyd-Rivest selection algorithm: sort ids and coords so that
 * [left..k-1] items are smaller than k-th item (on either x or y axis)
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} k
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function select(ids, coords, k, left, right, axis) {

    while (right > left) {
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, axis);
        }

        const t = coords[2 * k + axis];
        let i = left;
        let j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + axis] < t) i++;
            while (coords[2 * j + axis] > t) j--;
        }

        if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} i
 * @param {number} j
 */
function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

/**
 * @param {InstanceType<TypedArrayConstructor>} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * @param {number} ax
 * @param {number} ay
 * @param {number} bx
 * @param {number} by
 */
function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

const defaultOptions$2 = {
    minZoom: 0,   // min zoom to generate clusters on
    maxZoom: 16,  // max zoom level to cluster the points on
    minPoints: 2, // minimum points to form a cluster
    radius: 40,   // cluster radius in pixels
    extent: 512,  // tile extent (radius is calculated relative to it)
    nodeSize: 64, // size of the KD-tree leaf node, affects performance
    log: false,   // whether to log timing info

    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,

    // a reduce function for calculating custom cluster properties
    reduce: null, // (accumulated, props) => { accumulated.sum += props.sum; }

    // properties to use for individual points when running the reducer
    map: props => props // props => ({sum: props.my_value})
};

const fround = Math.fround || (tmp => ((x) => { tmp[0] = +x; return tmp[0]; }))(new Float32Array(1));

const OFFSET_ZOOM = 2;
const OFFSET_ID = 3;
const OFFSET_PARENT = 4;
const OFFSET_NUM = 5;
const OFFSET_PROP = 6;

class Supercluster {
    constructor(options) {
        this.options = Object.assign(Object.create(defaultOptions$2), options);
        this.trees = new Array(this.options.maxZoom + 1);
        this.stride = this.options.reduce ? 7 : 6;
        this.clusterProps = [];
    }

    load(points) {
        const {log, minZoom, maxZoom} = this.options;

        if (log) console.time('total time');

        const timerId = `prepare ${  points.length  } points`;
        if (log) console.time(timerId);

        this.points = points;

        // generate a cluster object for each point and index input points into a KD-tree
        const data = [];

        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            if (!p.geometry) continue;

            const [lng, lat] = p.geometry.coordinates;
            const x = fround(lngX(lng));
            const y = fround(latY(lat));
            // store internal point/cluster data in flat numeric arrays for performance
            data.push(
                x, y, // projected point coordinates
                Infinity, // the last zoom the point was processed at
                i, // index of the source feature in the original input array
                -1, // parent cluster id
                1 // number of points in a cluster
            );
            if (this.options.reduce) data.push(0); // noop
        }
        let tree = this.trees[maxZoom + 1] = this._createTree(data);

        if (log) console.timeEnd(timerId);

        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
        // results in a cluster hierarchy across zoom levels
        for (let z = maxZoom; z >= minZoom; z--) {
            const now = +Date.now();

            // create a new set of clusters for the zoom and index them with a KD-tree
            tree = this.trees[z] = this._createTree(this._cluster(tree, z));

            if (log) console.log('z%d: %d clusters in %dms', z, tree.numItems, +Date.now() - now);
        }

        if (log) console.timeEnd('total time');

        return this;
    }

    getClusters(bbox, zoom) {
        let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
        const minLat = Math.max(-90, Math.min(90, bbox[1]));
        let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
        const maxLat = Math.max(-90, Math.min(90, bbox[3]));

        if (bbox[2] - bbox[0] >= 360) {
            minLng = -180;
            maxLng = 180;
        } else if (minLng > maxLng) {
            const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
            const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
            return easternHem.concat(westernHem);
        }

        const tree = this.trees[this._limitZoom(zoom)];
        const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
        const data = tree.data;
        const clusters = [];
        for (const id of ids) {
            const k = this.stride * id;
            clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
        }
        return clusters;
    }

    getChildren(clusterId) {
        const originId = this._getOriginId(clusterId);
        const originZoom = this._getOriginZoom(clusterId);
        const errorMsg = 'No cluster with the specified id.';

        const tree = this.trees[originZoom];
        if (!tree) throw new Error(errorMsg);

        const data = tree.data;
        if (originId * this.stride >= data.length) throw new Error(errorMsg);

        const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
        const x = data[originId * this.stride];
        const y = data[originId * this.stride + 1];
        const ids = tree.within(x, y, r);
        const children = [];
        for (const id of ids) {
            const k = id * this.stride;
            if (data[k + OFFSET_PARENT] === clusterId) {
                children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
            }
        }

        if (children.length === 0) throw new Error(errorMsg);

        return children;
    }

    getLeaves(clusterId, limit, offset) {
        limit = limit || 10;
        offset = offset || 0;

        const leaves = [];
        this._appendLeaves(leaves, clusterId, limit, offset, 0);

        return leaves;
    }

    getTile(z, x, y) {
        const tree = this.trees[this._limitZoom(z)];
        const z2 = Math.pow(2, z);
        const {extent, radius} = this.options;
        const p = radius / extent;
        const top = (y - p) / z2;
        const bottom = (y + 1 + p) / z2;

        const tile = {
            features: []
        };

        this._addTileFeatures(
            tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
            tree.data, x, y, z2, tile);

        if (x === 0) {
            this._addTileFeatures(
                tree.range(1 - p / z2, top, 1, bottom),
                tree.data, z2, y, z2, tile);
        }
        if (x === z2 - 1) {
            this._addTileFeatures(
                tree.range(0, top, p / z2, bottom),
                tree.data, -1, y, z2, tile);
        }

        return tile.features.length ? tile : null;
    }

    getClusterExpansionZoom(clusterId) {
        let expansionZoom = this._getOriginZoom(clusterId) - 1;
        while (expansionZoom <= this.options.maxZoom) {
            const children = this.getChildren(clusterId);
            expansionZoom++;
            if (children.length !== 1) break;
            clusterId = children[0].properties.cluster_id;
        }
        return expansionZoom;
    }

    _appendLeaves(result, clusterId, limit, offset, skipped) {
        const children = this.getChildren(clusterId);

        for (const child of children) {
            const props = child.properties;

            if (props && props.cluster) {
                if (skipped + props.point_count <= offset) {
                    // skip the whole cluster
                    skipped += props.point_count;
                } else {
                    // enter the cluster
                    skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
                    // exit the cluster
                }
            } else if (skipped < offset) {
                // skip a single point
                skipped++;
            } else {
                // add a single point
                result.push(child);
            }
            if (result.length === limit) break;
        }

        return skipped;
    }

    _createTree(data) {
        const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
        for (let i = 0; i < data.length; i += this.stride) tree.add(data[i], data[i + 1]);
        tree.finish();
        tree.data = data;
        return tree;
    }

    _addTileFeatures(ids, data, x, y, z2, tile) {
        for (const i of ids) {
            const k = i * this.stride;
            const isCluster = data[k + OFFSET_NUM] > 1;

            let tags, px, py;
            if (isCluster) {
                tags = getClusterProperties(data, k, this.clusterProps);
                px = data[k];
                py = data[k + 1];
            } else {
                const p = this.points[data[k + OFFSET_ID]];
                tags = p.properties;
                const [lng, lat] = p.geometry.coordinates;
                px = lngX(lng);
                py = latY(lat);
            }

            const f = {
                type: 1,
                geometry: [[
                    Math.round(this.options.extent * (px * z2 - x)),
                    Math.round(this.options.extent * (py * z2 - y))
                ]],
                tags
            };

            // assign id
            let id;
            if (isCluster || this.options.generateId) {
                // optionally generate id for points
                id = data[k + OFFSET_ID];
            } else {
                // keep id if already assigned
                id = this.points[data[k + OFFSET_ID]].id;
            }

            if (id !== undefined) f.id = id;

            tile.features.push(f);
        }
    }

    _limitZoom(z) {
        return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
    }

    _cluster(tree, zoom) {
        const {radius, extent, reduce, minPoints} = this.options;
        const r = radius / (extent * Math.pow(2, zoom));
        const data = tree.data;
        const nextData = [];
        const stride = this.stride;

        // loop through each point
        for (let i = 0; i < data.length; i += stride) {
            // if we've already visited the point at this zoom level, skip it
            if (data[i + OFFSET_ZOOM] <= zoom) continue;
            data[i + OFFSET_ZOOM] = zoom;

            // find all nearby points
            const x = data[i];
            const y = data[i + 1];
            const neighborIds = tree.within(data[i], data[i + 1], r);

            const numPointsOrigin = data[i + OFFSET_NUM];
            let numPoints = numPointsOrigin;

            // count the number of points in a potential cluster
            for (const neighborId of neighborIds) {
                const k = neighborId * stride;
                // filter out neighbors that are already processed
                if (data[k + OFFSET_ZOOM] > zoom) numPoints += data[k + OFFSET_NUM];
            }

            // if there were neighbors to merge, and there are enough points to form a cluster
            if (numPoints > numPointsOrigin && numPoints >= minPoints) {
                let wx = x * numPointsOrigin;
                let wy = y * numPointsOrigin;

                let clusterProperties;
                let clusterPropIndex = -1;

                // encode both zoom and point index on which the cluster originated -- offset by total length of features
                const id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;

                for (const neighborId of neighborIds) {
                    const k = neighborId * stride;

                    if (data[k + OFFSET_ZOOM] <= zoom) continue;
                    data[k + OFFSET_ZOOM] = zoom; // save the zoom (so it doesn't get processed twice)

                    const numPoints2 = data[k + OFFSET_NUM];
                    wx += data[k] * numPoints2; // accumulate coordinates for calculating weighted center
                    wy += data[k + 1] * numPoints2;

                    data[k + OFFSET_PARENT] = id;

                    if (reduce) {
                        if (!clusterProperties) {
                            clusterProperties = this._map(data, i, true);
                            clusterPropIndex = this.clusterProps.length;
                            this.clusterProps.push(clusterProperties);
                        }
                        reduce(clusterProperties, this._map(data, k));
                    }
                }

                data[i + OFFSET_PARENT] = id;
                nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
                if (reduce) nextData.push(clusterPropIndex);

            } else { // left points as unclustered
                for (let j = 0; j < stride; j++) nextData.push(data[i + j]);

                if (numPoints > 1) {
                    for (const neighborId of neighborIds) {
                        const k = neighborId * stride;
                        if (data[k + OFFSET_ZOOM] <= zoom) continue;
                        data[k + OFFSET_ZOOM] = zoom;
                        for (let j = 0; j < stride; j++) nextData.push(data[k + j]);
                    }
                }
            }
        }

        return nextData;
    }

    // get index of the point from which the cluster originated
    _getOriginId(clusterId) {
        return (clusterId - this.points.length) >> 5;
    }

    // get zoom of the point from which the cluster originated
    _getOriginZoom(clusterId) {
        return (clusterId - this.points.length) % 32;
    }

    _map(data, i, clone) {
        if (data[i + OFFSET_NUM] > 1) {
            const props = this.clusterProps[data[i + OFFSET_PROP]];
            return clone ? Object.assign({}, props) : props;
        }
        const original = this.points[data[i + OFFSET_ID]].properties;
        const result = this.options.map(original);
        return clone && result === original ? Object.assign({}, result) : result;
    }
}

function getClusterJSON(data, i, clusterProps) {
    return {
        type: 'Feature',
        id: data[i + OFFSET_ID],
        properties: getClusterProperties(data, i, clusterProps),
        geometry: {
            type: 'Point',
            coordinates: [xLng(data[i]), yLat(data[i + 1])]
        }
    };
}

function getClusterProperties(data, i, clusterProps) {
    const count = data[i + OFFSET_NUM];
    const abbrev =
        count >= 10000 ? `${Math.round(count / 1000)  }k` :
        count >= 1000 ? `${Math.round(count / 100) / 10  }k` : count;
    const propIndex = data[i + OFFSET_PROP];
    const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
    return Object.assign(properties, {
        cluster: true,
        cluster_id: data[i + OFFSET_ID],
        point_count: count,
        point_count_abbreviated: abbrev
    });
}

// longitude/latitude to spherical mercator in [0..1] range
function lngX(lng) {
    return lng / 360 + 0.5;
}
function latY(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
    return y < 0 ? 0 : y > 1 ? 1 : y;
}

// spherical mercator to longitude/latitude
function xLng(x) {
    return (x - 0.5) * 360;
}
function yLat(y) {
    const y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MarkerUtils {
    static isAdvancedMarkerAvailable(map) {
        return (google.maps.marker &&
            map.getMapCapabilities().isAdvancedMarkersAvailable === true);
    }
    static isAdvancedMarker(marker) {
        return (google.maps.marker &&
            marker instanceof google.maps.marker.AdvancedMarkerElement);
    }
    static setMap(marker, map) {
        if (this.isAdvancedMarker(marker)) {
            marker.map = map;
        }
        else {
            marker.setMap(map);
        }
    }
    static getPosition(marker) {
        // SuperClusterAlgorithm.calculate expects a LatLng instance so we fake it for Adv Markers
        if (this.isAdvancedMarker(marker)) {
            if (marker.position) {
                if (marker.position instanceof google.maps.LatLng) {
                    return marker.position;
                }
                // since we can't cast to LatLngLiteral for reasons =(
                if (marker.position.lat && marker.position.lng) {
                    return new google.maps.LatLng(marker.position.lat, marker.position.lng);
                }
            }
            return new google.maps.LatLng(null);
        }
        return marker.getPosition();
    }
    static getVisible(marker) {
        if (this.isAdvancedMarker(marker)) {
            /**
             * Always return true for Advanced Markers because the clusterer
             * uses getVisible as a way to count legacy markers not as an actual
             * indicator of visibility for some reason. Even when markers are hidden
             * Marker.getVisible returns `true` and this is used to set the marker count
             * on the cluster. See the behavior of Cluster.count
             */
            return true;
        }
        return marker.getVisible();
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cluster {
    constructor({ markers, position }) {
        this.markers = markers;
        if (position) {
            if (position instanceof google.maps.LatLng) {
                this._position = position;
            }
            else {
                this._position = new google.maps.LatLng(position);
            }
        }
    }
    get bounds() {
        if (this.markers.length === 0 && !this._position) {
            return;
        }
        const bounds = new google.maps.LatLngBounds(this._position, this._position);
        for (const marker of this.markers) {
            bounds.extend(MarkerUtils.getPosition(marker));
        }
        return bounds;
    }
    get position() {
        return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */
    get count() {
        return this.markers.filter((m) => MarkerUtils.getVisible(m)).length;
    }
    /**
     * Add a marker to the cluster.
     */
    push(marker) {
        this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */
    delete() {
        if (this.marker) {
            MarkerUtils.setMap(this.marker, null);
            this.marker = undefined;
        }
        this.markers.length = 0;
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the markers visible in a padded map viewport
 *
 * @param map
 * @param mapCanvasProjection
 * @param markers The list of marker to filter
 * @param viewportPaddingPixels The padding in pixel
 * @returns The list of markers in the padded viewport
 */
const filterMarkersToPaddedViewport = (map, mapCanvasProjection, markers, viewportPaddingPixels) => {
    const extendedMapBounds = extendBoundsToPaddedViewport(map.getBounds(), mapCanvasProjection, viewportPaddingPixels);
    return markers.filter((marker) => extendedMapBounds.contains(MarkerUtils.getPosition(marker)));
};
/**
 * Extends a bounds by a number of pixels in each direction
 */
const extendBoundsToPaddedViewport = (bounds, projection, numPixels) => {
    const { northEast, southWest } = latLngBoundsToPixelBounds(bounds, projection);
    const extendedPixelBounds = extendPixelBounds({ northEast, southWest }, numPixels);
    return pixelBoundsToLatLngBounds(extendedPixelBounds, projection);
};
/**
 * Returns the distance between 2 positions.
 *
 * @hidden
 */
const distanceBetweenPoints = (p1, p2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((p2.lat - p1.lat) * Math.PI) / 180;
    const dLon = ((p2.lng - p1.lng) * Math.PI) / 180;
    const sinDLat = Math.sin(dLat / 2);
    const sinDLon = Math.sin(dLon / 2);
    const a = sinDLat * sinDLat +
        Math.cos((p1.lat * Math.PI) / 180) *
            Math.cos((p2.lat * Math.PI) / 180) *
            sinDLon *
            sinDLon;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
/**
 * Converts a LatLng bound to pixels.
 *
 * @hidden
 */
const latLngBoundsToPixelBounds = (bounds, projection) => {
    return {
        northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
        southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest()),
    };
};
/**
 * Extends a pixel bounds by numPixels in all directions.
 *
 * @hidden
 */
const extendPixelBounds = ({ northEast, southWest }, numPixels) => {
    northEast.x += numPixels;
    northEast.y -= numPixels;
    southWest.x -= numPixels;
    southWest.y += numPixels;
    return { northEast, southWest };
};
/**
 * @hidden
 */
const pixelBoundsToLatLngBounds = ({ northEast, southWest }, projection) => {
    const sw = projection.fromDivPixelToLatLng(southWest);
    const ne = projection.fromDivPixelToLatLng(northEast);
    return new google.maps.LatLngBounds(sw, ne);
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @hidden
 */
class AbstractAlgorithm {
    constructor({ maxZoom = 16 }) {
        this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers})
     *    }
     * }
     * ```
     */
    noop({ markers, }) {
        return noop$1(markers);
    }
}
/**
 * Abstract viewport algorithm proves a class to filter markers by a padded
 * viewport. This is a common optimization.
 *
 * @hidden
 */
class AbstractViewportAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { viewportPadding = 60 } = _a, options = __rest(_a, ["viewportPadding"]);
        super(options);
        this.viewportPadding = 60;
        this.viewportPadding = viewportPadding;
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        if (map.getZoom() >= this.maxZoom) {
            return {
                clusters: this.noop({
                    markers,
                }),
                changed: false,
            };
        }
        return {
            clusters: this.cluster({
                markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                map,
                mapCanvasProjection,
            }),
        };
    }
}
/**
 * @hidden
 */
const noop$1 = (markers) => {
    const clusters = markers.map((marker) => new Cluster({
        position: MarkerUtils.getPosition(marker),
        markers: [marker],
    }));
    return clusters;
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default Grid algorithm historically used in Google Maps marker
 * clustering.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 */
class GridAlgorithm extends AbstractViewportAlgorithm {
    constructor(_a) {
        var { maxDistance = 40000, gridSize = 40 } = _a, options = __rest(_a, ["maxDistance", "gridSize"]);
        super(options);
        this.clusters = [];
        this.state = { zoom: -1 };
        this.maxDistance = maxDistance;
        this.gridSize = gridSize;
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        const state = { zoom: map.getZoom() };
        let changed = false;
        if (this.state.zoom >= this.maxZoom && state.zoom >= this.maxZoom) ;
        else {
            changed = !equal(this.state, state);
        }
        this.state = state;
        if (map.getZoom() >= this.maxZoom) {
            return {
                clusters: this.noop({
                    markers,
                }),
                changed,
            };
        }
        return {
            clusters: this.cluster({
                markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                map,
                mapCanvasProjection,
            }),
        };
    }
    cluster({ markers, map, mapCanvasProjection, }) {
        this.clusters = [];
        markers.forEach((marker) => {
            this.addToClosestCluster(marker, map, mapCanvasProjection);
        });
        return this.clusters;
    }
    addToClosestCluster(marker, map, projection) {
        let maxDistance = this.maxDistance; // Some large number
        let cluster = null;
        for (let i = 0; i < this.clusters.length; i++) {
            const candidate = this.clusters[i];
            const distance = distanceBetweenPoints(candidate.bounds.getCenter().toJSON(), MarkerUtils.getPosition(marker).toJSON());
            if (distance < maxDistance) {
                maxDistance = distance;
                cluster = candidate;
            }
        }
        if (cluster &&
            extendBoundsToPaddedViewport(cluster.bounds, projection, this.gridSize).contains(MarkerUtils.getPosition(marker))) {
            cluster.push(marker);
        }
        else {
            const cluster = new Cluster({ markers: [marker] });
            this.clusters.push(cluster);
        }
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
 */
class NoopAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var options = __rest(_a, []);
        super(options);
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        return {
            clusters: this.cluster({ markers, map, mapCanvasProjection }),
            changed: false,
        };
    }
    cluster(input) {
        return this.noop(input);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */
class SuperClusterAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
        super({ maxZoom });
        this.state = { zoom: -1 };
        this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
    }
    calculate(input) {
        let changed = false;
        const state = { zoom: input.map.getZoom() };
        if (!equal(input.markers, this.markers)) {
            changed = true;
            // TODO use proxy to avoid copy?
            this.markers = [...input.markers];
            const points = this.markers.map((marker) => {
                const position = MarkerUtils.getPosition(marker);
                const coordinates = [position.lng(), position.lat()];
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates,
                    },
                    properties: { marker },
                };
            });
            this.superCluster.load(points);
        }
        if (!changed) {
            if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
                changed = !equal(this.state, state);
            }
        }
        this.state = state;
        if (changed) {
            this.clusters = this.cluster(input);
        }
        return { clusters: this.clusters, changed };
    }
    cluster({ map }) {
        return this.superCluster
            .getClusters([-180, -90, 180, 90], Math.round(map.getZoom()))
            .map((feature) => this.transformCluster(feature));
    }
    transformCluster({ geometry: { coordinates: [lng, lat], }, properties, }) {
        if (properties.cluster) {
            return new Cluster({
                markers: this.superCluster
                    .getLeaves(properties.cluster_id, Infinity)
                    .map((leaf) => leaf.properties.marker),
                position: { lat, lng },
            });
        }
        const marker = properties.marker;
        return new Cluster({
            markers: [marker],
            position: MarkerUtils.getPosition(marker),
        });
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
 */
class ClusterStats {
    constructor(markers, clusters) {
        this.markers = { sum: markers.length };
        const clusterMarkerCounts = clusters.map((a) => a.count);
        const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
        this.clusters = {
            count: clusters.length,
            markers: {
                mean: clusterMarkerSum / clusters.length,
                sum: clusterMarkerSum,
                min: Math.min(...clusterMarkerCounts),
                max: Math.max(...clusterMarkerCounts),
            },
        };
    }
}
class DefaultRenderer {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */
    render({ count, position }, stats, map) {
        // change color if this cluster has more markers than the mean cluster
        const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
        // create svg literal with fill color
        const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
        const title = `Cluster of ${count} markers`, 
        // adjust zIndex to be above other markers
        zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
        if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
            // create cluster SVG element
            const div = document.createElement("div");
            div.innerHTML = svg;
            const svgEl = div.firstElementChild;
            svgEl.setAttribute("transform", "translate(0 25)");
            const clusterOptions = {
                map,
                position,
                zIndex,
                title,
                content: svgEl,
            };
            return new google.maps.marker.AdvancedMarkerElement(clusterOptions);
        }
        const clusterOptions = {
            position,
            zIndex,
            title,
            icon: {
                url: `data:image/svg+xml;base64,${btoa(svg)}`,
                anchor: new google.maps.Point(25, 25),
            },
        };
        return new google.maps.Marker(clusterOptions);
    }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
    /* istanbul ignore next */
    // eslint-disable-next-line prefer-const
    for (let property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
    }
}
/**
 * @ignore
 */
class OverlayViewSafe {
    constructor() {
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        extend(OverlayViewSafe, google.maps.OverlayView);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MarkerClustererEvents;
(function (MarkerClustererEvents) {
    MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
const defaultOnClusterClickHandler = (_, cluster, map) => {
    map.fitBounds(cluster.bounds);
};
/**
 * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
 * of markers. See {@link MarkerClustererOptions} for more details.
 *
 */
class MarkerClusterer extends OverlayViewSafe {
    constructor({ map, markers = [], algorithmOptions = {}, algorithm = new SuperClusterAlgorithm(algorithmOptions), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler, }) {
        super();
        this.markers = [...markers];
        this.clusters = [];
        this.algorithm = algorithm;
        this.renderer = renderer;
        this.onClusterClick = onClusterClick;
        if (map) {
            this.setMap(map);
        }
    }
    addMarker(marker, noDraw) {
        if (this.markers.includes(marker)) {
            return;
        }
        this.markers.push(marker);
        if (!noDraw) {
            this.render();
        }
    }
    addMarkers(markers, noDraw) {
        markers.forEach((marker) => {
            this.addMarker(marker, true);
        });
        if (!noDraw) {
            this.render();
        }
    }
    removeMarker(marker, noDraw) {
        const index = this.markers.indexOf(marker);
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        MarkerUtils.setMap(marker, null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        if (!noDraw) {
            this.render();
        }
        return true;
    }
    removeMarkers(markers, noDraw) {
        let removed = false;
        markers.forEach((marker) => {
            removed = this.removeMarker(marker, true) || removed;
        });
        if (removed && !noDraw) {
            this.render();
        }
        return removed;
    }
    clearMarkers(noDraw) {
        this.markers.length = 0;
        if (!noDraw) {
            this.render();
        }
    }
    /**
     * Recalculates and draws all the marker clusters.
     */
    render() {
        const map = this.getMap();
        if (map instanceof google.maps.Map && map.getProjection()) {
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
            const { clusters, changed } = this.algorithm.calculate({
                markers: this.markers,
                map,
                mapCanvasProjection: this.getProjection(),
            });
            // Allow algorithms to return flag on whether the clusters/markers have changed.
            if (changed || changed == undefined) {
                // Accumulate the markers of the clusters composed of a single marker.
                // Those clusters directly use the marker.
                // Clusters with more than one markers use a group marker generated by a renderer.
                const singleMarker = new Set();
                for (const cluster of clusters) {
                    if (cluster.markers.length == 1) {
                        singleMarker.add(cluster.markers[0]);
                    }
                }
                const groupMarkers = [];
                // Iterate the clusters that are currently rendered.
                for (const cluster of this.clusters) {
                    if (cluster.marker == null) {
                        continue;
                    }
                    if (cluster.markers.length == 1) {
                        if (!singleMarker.has(cluster.marker)) {
                            // The marker:
                            // - was previously rendered because it is from a cluster with 1 marker,
                            // - should no more be rendered as it is not in singleMarker.
                            MarkerUtils.setMap(cluster.marker, null);
                        }
                    }
                    else {
                        // Delay the removal of old group markers to avoid flickering.
                        groupMarkers.push(cluster.marker);
                    }
                }
                this.clusters = clusters;
                this.renderClusters();
                // Delayed removal of the markers of the former groups.
                requestAnimationFrame(() => groupMarkers.forEach((marker) => MarkerUtils.setMap(marker, null)));
            }
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
        }
    }
    onAdd() {
        this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
        this.render();
    }
    onRemove() {
        google.maps.event.removeListener(this.idleListener);
        this.reset();
    }
    reset() {
        this.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
        this.clusters.forEach((cluster) => cluster.delete());
        this.clusters = [];
    }
    renderClusters() {
        // Generate stats to pass to renderers.
        const stats = new ClusterStats(this.markers, this.clusters);
        const map = this.getMap();
        this.clusters.forEach((cluster) => {
            if (cluster.markers.length === 1) {
                cluster.marker = cluster.markers[0];
            }
            else {
                // Generate the marker to represent the group.
                cluster.marker = this.renderer.render(cluster, stats, map);
                // Make sure all individual markers are removed from the map.
                cluster.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
                if (this.onClusterClick) {
                    cluster.marker.addListener("click", 
                    /* istanbul ignore next */
                    (event) => {
                        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
                        this.onClusterClick(event, cluster, map);
                    });
                }
            }
            MarkerUtils.setMap(cluster.marker, map);
        });
    }
}

var index_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AbstractAlgorithm: AbstractAlgorithm,
    AbstractViewportAlgorithm: AbstractViewportAlgorithm,
    Cluster: Cluster,
    ClusterStats: ClusterStats,
    DefaultRenderer: DefaultRenderer,
    GridAlgorithm: GridAlgorithm,
    MarkerClusterer: MarkerClusterer,
    get MarkerClustererEvents () { return MarkerClustererEvents; },
    NoopAlgorithm: NoopAlgorithm,
    SuperClusterAlgorithm: SuperClusterAlgorithm,
    defaultOnClusterClickHandler: defaultOnClusterClickHandler,
    distanceBetweenPoints: distanceBetweenPoints,
    extendBoundsToPaddedViewport: extendBoundsToPaddedViewport,
    extendPixelBounds: extendPixelBounds,
    filterMarkersToPaddedViewport: filterMarkersToPaddedViewport,
    noop: noop$1,
    pixelBoundsToLatLngBounds: pixelBoundsToLatLngBounds
});

function useGoogleMarkerClusterer(options) {
    var map = useGoogleMap();
    var _a = react.useState(null), markerClusterer = _a[0], setMarkerClusterer = _a[1];
    react.useEffect(function () {
        if (map && markerClusterer === null) {
            var markerCluster = new MarkerClusterer(__assign(__assign({}, options), { map: map }));
            setMarkerClusterer(markerCluster);
        }
    }, [map]);
    return markerClusterer;
}
/** Wrapper around [@googlemaps/markerclusterer](https://github.com/googlemaps/js-markerclusterer)
 *
 * Accepts {@link  MarkerClustererOptionsSubset} which is a subset of  {@link MarkerClustererOptions}
 */
function GoogleMarkerClusterer(_a) {
    var children = _a.children, options = _a.options;
    var markerClusterer = useGoogleMarkerClusterer(options);
    return markerClusterer !== null ? children(markerClusterer) : null;
}
var GoogleMarkerClusterer$1 = react.memo(GoogleMarkerClusterer);

var eventMap$c = {
    onCloseClick: 'closeclick',
    onContentChanged: 'content_changed',
    onDomReady: 'domready',
    onPositionChanged: 'position_changed',
    onZindexChanged: 'zindex_changed',
};
var updaterMap$c = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
    position: function (instance, position) {
        instance.setPosition(position);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
function InfoWindowFunctional(_a) {
    var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), closeclickListener = _c[0], setCloseClickListener = _c[1];
    var _d = react.useState(null), domreadyclickListener = _d[0], setDomReadyClickListener = _d[1];
    var _e = react.useState(null), contentchangedclickListener = _e[0], setContentChangedClickListener = _e[1];
    var _f = react.useState(null), positionchangedclickListener = _f[0], setPositionChangedClickListener = _f[1];
    var _g = react.useState(null), zindexchangedclickListener = _g[0], setZindexChangedClickListener = _g[1];
    var containerElementRef = react.useRef(null);
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.close();
            if (anchor) {
                instance.open(map, anchor);
            }
            else if (instance.getPosition()) {
                instance.open(map);
            }
        }
    }, [map, instance, anchor]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (position && instance !== null) {
            instance.setPosition(position);
        }
    }, [position]);
    react.useEffect(function () {
        if (typeof zIndex === 'number' && instance !== null) {
            instance.setZIndex(zIndex);
        }
    }, [zIndex]);
    react.useEffect(function () {
        if (instance && onCloseClick) {
            if (closeclickListener !== null) {
                google.maps.event.removeListener(closeclickListener);
            }
            setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
        }
    }, [onCloseClick]);
    react.useEffect(function () {
        if (instance && onDomReady) {
            if (domreadyclickListener !== null) {
                google.maps.event.removeListener(domreadyclickListener);
            }
            setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
        }
    }, [onDomReady]);
    react.useEffect(function () {
        if (instance && onContentChanged) {
            if (contentchangedclickListener !== null) {
                google.maps.event.removeListener(contentchangedclickListener);
            }
            setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
        }
    }, [onContentChanged]);
    react.useEffect(function () {
        if (instance && onPositionChanged) {
            if (positionchangedclickListener !== null) {
                google.maps.event.removeListener(positionchangedclickListener);
            }
            setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
        }
    }, [onPositionChanged]);
    react.useEffect(function () {
        if (instance && onZindexChanged) {
            if (zindexchangedclickListener !== null) {
                google.maps.event.removeListener(zindexchangedclickListener);
            }
            setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
        }
    }, [onZindexChanged]);
    react.useEffect(function () {
        var infoWindow = new google.maps.InfoWindow(__assign({}, (options || {})));
        setInstance(infoWindow);
        containerElementRef.current = document.createElement('div');
        if (onCloseClick) {
            setCloseClickListener(google.maps.event.addListener(infoWindow, 'closeclick', onCloseClick));
        }
        if (onDomReady) {
            setDomReadyClickListener(google.maps.event.addListener(infoWindow, 'domready', onDomReady));
        }
        if (onContentChanged) {
            setContentChangedClickListener(google.maps.event.addListener(infoWindow, 'content_changed', onContentChanged));
        }
        if (onPositionChanged) {
            setPositionChangedClickListener(google.maps.event.addListener(infoWindow, 'position_changed', onPositionChanged));
        }
        if (onZindexChanged) {
            setZindexChangedClickListener(google.maps.event.addListener(infoWindow, 'zindex_changed', onZindexChanged));
        }
        infoWindow.setContent(containerElementRef.current);
        if (position) {
            infoWindow.setPosition(position);
        }
        if (zIndex) {
            infoWindow.setZIndex(zIndex);
        }
        if (anchor) {
            infoWindow.open(map, anchor);
        }
        else if (infoWindow.getPosition()) {
            infoWindow.open(map);
        }
        else {
            invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
        }
        if (onLoad) {
            onLoad(infoWindow);
        }
        return function () {
            if (closeclickListener) {
                google.maps.event.removeListener(closeclickListener);
            }
            if (contentchangedclickListener) {
                google.maps.event.removeListener(contentchangedclickListener);
            }
            if (domreadyclickListener) {
                google.maps.event.removeListener(domreadyclickListener);
            }
            if (positionchangedclickListener) {
                google.maps.event.removeListener(positionchangedclickListener);
            }
            if (zindexchangedclickListener) {
                google.maps.event.removeListener(zindexchangedclickListener);
            }
            if (onUnmount) {
                onUnmount(infoWindow);
            }
            infoWindow.close();
        };
    }, []);
    return containerElementRef.current ? (ReactDOM.createPortal(react.Children.only(children), containerElementRef.current)) : (null);
}
var InfoWindowF = react.memo(InfoWindowFunctional);
var InfoWindow = /** @class */ (function (_super) {
    __extends(InfoWindow, _super);
    function InfoWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = null;
        _this.state = {
            infoWindow: null,
        };
        _this.open = function (infoWindow, anchor) {
            if (anchor) {
                infoWindow.open(_this.context, anchor);
            }
            else if (infoWindow.getPosition()) {
                infoWindow.open(_this.context);
            }
            else {
                invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
            }
        };
        _this.setInfoWindowCallback = function () {
            if (_this.state.infoWindow !== null && _this.containerElement !== null) {
                _this.state.infoWindow.setContent(_this.containerElement);
                _this.open(_this.state.infoWindow, _this.props.anchor);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.infoWindow);
                }
            }
        };
        return _this;
    }
    InfoWindow.prototype.componentDidMount = function () {
        var infoWindow = new google.maps.InfoWindow(__assign({}, (this.props.options || {})));
        this.containerElement = document.createElement('div');
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$c,
            eventMap: eventMap$c,
            prevProps: {},
            nextProps: this.props,
            instance: infoWindow,
        });
        this.setState(function () {
            return {
                infoWindow: infoWindow,
            };
        }, this.setInfoWindowCallback);
    };
    InfoWindow.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.infoWindow !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$c,
                eventMap: eventMap$c,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.infoWindow,
            });
        }
    };
    InfoWindow.prototype.componentWillUnmount = function () {
        if (this.state.infoWindow !== null) {
            unregisterEvents(this.registeredEvents);
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.infoWindow);
            }
            this.state.infoWindow.close();
        }
    };
    InfoWindow.prototype.render = function () {
        return this.containerElement ? (ReactDOM.createPortal(react.Children.only(this.props.children), this.containerElement)) : (null);
    };
    InfoWindow.contextType = MapContext;
    return InfoWindow;
}(react.PureComponent));

var eventMap$b = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$b = {
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    path: function (instance, path) {
        instance.setPath(path);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
var defaultOptions$1 = {};
function PolylineFunctional(_a) {
    var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof path !== 'undefined' && instance !== null) {
            instance.setPath(path);
        }
    }, [instance, path]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        var polyline = new google.maps.Polyline(__assign(__assign({}, (options || defaultOptions$1)), { map: map }));
        if (path) {
            polyline.setPath(path);
        }
        if (typeof visible !== 'undefined') {
            polyline.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            polyline.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            polyline.setDraggable(draggable);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(polyline, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(polyline, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(polyline, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(polyline, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(polyline, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(polyline, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(polyline, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(polyline, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(polyline, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(polyline, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(polyline, 'drag', onDrag));
        }
        setInstance(polyline);
        if (onLoad) {
            onLoad(polyline);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (onUnmount) {
                onUnmount(polyline);
            }
            polyline.setMap(null);
        };
    }, []);
    return null;
}
var PolylineF = react.memo(PolylineFunctional);
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            polyline: null,
        };
        _this.setPolylineCallback = function () {
            if (_this.state.polyline !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.polyline);
            }
        };
        return _this;
    }
    Polyline.prototype.componentDidMount = function () {
        var polyline = new google.maps.Polyline(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$b,
            eventMap: eventMap$b,
            prevProps: {},
            nextProps: this.props,
            instance: polyline,
        });
        this.setState(function setPolyline() {
            return {
                polyline: polyline,
            };
        }, this.setPolylineCallback);
    };
    Polyline.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.polyline !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$b,
                eventMap: eventMap$b,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.polyline,
            });
        }
    };
    Polyline.prototype.componentWillUnmount = function () {
        if (this.state.polyline !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.polyline);
            }
            unregisterEvents(this.registeredEvents);
            this.state.polyline.setMap(null);
        }
    };
    Polyline.prototype.render = function () {
        return null;
    };
    Polyline.contextType = MapContext;
    return Polyline;
}(react.PureComponent));

var eventMap$a = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$a = {
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    path: function (instance, path) {
        instance.setPath(path);
    },
    paths: function (instance, paths) {
        instance.setPaths(paths);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
function PolygonFunctional(_a) {
    var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, paths = _a.paths, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof path !== 'undefined' && instance !== null) {
            instance.setPath(path);
        }
    }, [instance, path]);
    react.useEffect(function () {
        if (typeof paths !== 'undefined' && instance !== null) {
            instance.setPaths(paths);
        }
    }, [instance, paths]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        var polygon = new google.maps.Polygon(__assign(__assign({}, (options || {})), { map: map }));
        if (path) {
            polygon.setPath(path);
        }
        if (paths) {
            polygon.setPaths(paths);
        }
        if (typeof visible !== 'undefined') {
            polygon.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            polygon.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            polygon.setDraggable(draggable);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(polygon, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(polygon, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(polygon, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(polygon, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(polygon, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(polygon, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(polygon, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(polygon, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(polygon, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(polygon, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(polygon, 'drag', onDrag));
        }
        setInstance(polygon);
        if (onLoad) {
            onLoad(polygon);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (onUnmount) {
                onUnmount(polygon);
            }
            polygon.setMap(null);
        };
    }, []);
    return null;
}
var PolygonF = react.memo(PolygonFunctional);
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            polygon: null,
        };
        _this.setPolygonCallback = function () {
            if (_this.state.polygon !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.polygon);
            }
        };
        return _this;
    }
    Polygon.prototype.componentDidMount = function () {
        var polygon = new google.maps.Polygon(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$a,
            eventMap: eventMap$a,
            prevProps: {},
            nextProps: this.props,
            instance: polygon,
        });
        this.setState(function setPolygon() {
            return {
                polygon: polygon,
            };
        }, this.setPolygonCallback);
    };
    Polygon.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.polygon !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$a,
                eventMap: eventMap$a,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.polygon,
            });
        }
    };
    Polygon.prototype.componentWillUnmount = function () {
        if (this.state.polygon !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.polygon);
            }
            unregisterEvents(this.registeredEvents);
            this.state.polygon && this.state.polygon.setMap(null);
        }
    };
    Polygon.prototype.render = function () {
        return null;
    };
    Polygon.contextType = MapContext;
    return Polygon;
}(react.PureComponent));

var eventMap$9 = {
    onBoundsChanged: 'bounds_changed',
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$9 = {
    bounds: function (instance, bounds) {
        instance.setBounds(bounds);
    },
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
function RectangleFunctional(_a) {
    var options = _a.options, bounds = _a.bounds, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onBoundsChanged = _a.onBoundsChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightClickListener = _l[0], setRightClickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    var _p = react.useState(null), boundsChangedListener = _p[0], setBoundsChangedListener = _p[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof bounds !== 'undefined' && instance !== null) {
            instance.setBounds(bounds);
        }
    }, [instance, bounds]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightClickListener !== null) {
                google.maps.event.removeListener(rightClickListener);
            }
            setRightClickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (instance && onBoundsChanged) {
            if (boundsChangedListener !== null) {
                google.maps.event.removeListener(boundsChangedListener);
            }
            setBoundsChangedListener(google.maps.event.addListener(instance, 'bounds_changed', onBoundsChanged));
        }
    }, [onBoundsChanged]);
    react.useEffect(function () {
        var rectangle = new google.maps.Rectangle(__assign(__assign({}, (options || {})), { map: map }));
        if (typeof visible !== 'undefined') {
            rectangle.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            rectangle.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            rectangle.setDraggable(draggable);
        }
        if (typeof bounds !== 'undefined') {
            rectangle.setBounds(bounds);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(rectangle, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(rectangle, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(rectangle, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(rectangle, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(rectangle, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(rectangle, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(rectangle, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(rectangle, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightClickListener(google.maps.event.addListener(rectangle, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(rectangle, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(rectangle, 'drag', onDrag));
        }
        if (onBoundsChanged) {
            setBoundsChangedListener(google.maps.event.addListener(rectangle, 'bounds_changed', onBoundsChanged));
        }
        setInstance(rectangle);
        if (onLoad) {
            onLoad(rectangle);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightClickListener !== null) {
                google.maps.event.removeListener(rightClickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            if (boundsChangedListener !== null) {
                google.maps.event.removeListener(boundsChangedListener);
            }
            if (onUnmount) {
                onUnmount(rectangle);
            }
            rectangle.setMap(null);
        };
    }, []);
    return null;
}
var RectangleF = react.memo(RectangleFunctional);
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            rectangle: null,
        };
        _this.setRectangleCallback = function () {
            if (_this.state.rectangle !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.rectangle);
            }
        };
        return _this;
    }
    Rectangle.prototype.componentDidMount = function () {
        var rectangle = new google.maps.Rectangle(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$9,
            eventMap: eventMap$9,
            prevProps: {},
            nextProps: this.props,
            instance: rectangle,
        });
        this.setState(function setRectangle() {
            return {
                rectangle: rectangle,
            };
        }, this.setRectangleCallback);
    };
    Rectangle.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.rectangle !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$9,
                eventMap: eventMap$9,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.rectangle,
            });
        }
    };
    Rectangle.prototype.componentWillUnmount = function () {
        if (this.state.rectangle !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.rectangle);
            }
            unregisterEvents(this.registeredEvents);
            this.state.rectangle.setMap(null);
        }
    };
    Rectangle.prototype.render = function () {
        return null;
    };
    Rectangle.contextType = MapContext;
    return Rectangle;
}(react.PureComponent));

var eventMap$8 = {
    onCenterChanged: 'center_changed',
    onRadiusChanged: 'radius_changed',
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$8 = {
    center: function (instance, center) {
        instance.setCenter(center);
    },
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    radius: function (instance, radius) {
        instance.setRadius(radius);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
var defaultOptions = {};
function CircleFunctional(_a) {
    var options = _a.options, center = _a.center, radius = _a.radius, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onCenterChanged = _a.onCenterChanged, onRadiusChanged = _a.onRadiusChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    var _p = react.useState(null), centerChangedListener = _p[0], setCenterChangedListener = _p[1];
    var _q = react.useState(null), radiusChangedListener = _q[0], setRadiusChangedListener = _q[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof radius === 'number' && instance !== null) {
            instance.setRadius(radius);
        }
    }, [instance, radius]);
    react.useEffect(function () {
        if (typeof center !== 'undefined' && instance !== null) {
            instance.setCenter(center);
        }
    }, [instance, center]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (instance && onCenterChanged) {
            if (centerChangedListener !== null) {
                google.maps.event.removeListener(centerChangedListener);
            }
            setCenterChangedListener(google.maps.event.addListener(instance, 'center_changed', onCenterChanged));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onRadiusChanged) {
            if (radiusChangedListener !== null) {
                google.maps.event.removeListener(radiusChangedListener);
            }
            setRadiusChangedListener(google.maps.event.addListener(instance, 'radius_changed', onRadiusChanged));
        }
    }, [onRadiusChanged]);
    react.useEffect(function () {
        var circle = new google.maps.Circle(__assign(__assign({}, (options || defaultOptions)), { map: map }));
        if (typeof radius === 'number') {
            circle.setRadius(radius);
        }
        if (typeof center !== 'undefined') {
            circle.setCenter(center);
        }
        if (typeof radius === 'number') {
            circle.setRadius(radius);
        }
        if (typeof visible !== 'undefined') {
            circle.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            circle.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            circle.setDraggable(draggable);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(circle, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(circle, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(circle, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(circle, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(circle, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(circle, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(circle, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(circle, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(circle, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(circle, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(circle, 'drag', onDrag));
        }
        if (onCenterChanged) {
            setCenterChangedListener(google.maps.event.addListener(circle, 'center_changed', onCenterChanged));
        }
        if (onRadiusChanged) {
            setRadiusChangedListener(google.maps.event.addListener(circle, 'radius_changed', onRadiusChanged));
        }
        setInstance(circle);
        if (onLoad) {
            onLoad(circle);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (centerChangedListener !== null) {
                google.maps.event.removeListener(centerChangedListener);
            }
            if (radiusChangedListener !== null) {
                google.maps.event.removeListener(radiusChangedListener);
            }
            if (onUnmount) {
                onUnmount(circle);
            }
            circle.setMap(null);
        };
    }, []);
    return null;
}
var CircleF = react.memo(CircleFunctional);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            circle: null,
        };
        _this.setCircleCallback = function () {
            if (_this.state.circle !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.circle);
            }
        };
        return _this;
    }
    Circle.prototype.componentDidMount = function () {
        var circle = new google.maps.Circle(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$8,
            eventMap: eventMap$8,
            prevProps: {},
            nextProps: this.props,
            instance: circle,
        });
        this.setState(function setCircle() {
            return {
                circle: circle,
            };
        }, this.setCircleCallback);
    };
    Circle.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.circle !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$8,
                eventMap: eventMap$8,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.circle,
            });
        }
    };
    Circle.prototype.componentWillUnmount = function () {
        var _a;
        if (this.state.circle !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.circle);
            }
            unregisterEvents(this.registeredEvents);
            (_a = this.state.circle) === null || _a === void 0 ? void 0 : _a.setMap(null);
        }
    };
    Circle.prototype.render = function () {
        return null;
    };
    Circle.contextType = MapContext;
    return Circle;
}(react.PureComponent));

var eventMap$7 = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onMouseDown: 'mousedown',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
    onAddFeature: 'addfeature',
    onRemoveFeature: 'removefeature',
    onRemoveProperty: 'removeproperty',
    onSetGeometry: 'setgeometry',
    onSetProperty: 'setproperty',
};
var updaterMap$7 = {
    add: function (instance, feature) {
        instance.add(feature);
    },
    addgeojson: function (instance, geojson, options) {
        instance.addGeoJson(geojson, options);
    },
    contains: function (instance, feature) {
        instance.contains(feature);
    },
    foreach: function (instance, callback) {
        instance.forEach(callback);
    },
    loadgeojson: function (instance, url, options, callback) {
        instance.loadGeoJson(url, options, callback);
    },
    overridestyle: function (instance, feature, style) {
        instance.overrideStyle(feature, style);
    },
    remove: function (instance, feature) {
        instance.remove(feature);
    },
    revertstyle: function (instance, feature) {
        instance.revertStyle(feature);
    },
    controlposition: function (instance, controlPosition) {
        instance.setControlPosition(controlPosition);
    },
    controls: function (instance, controls) {
        instance.setControls(controls);
    },
    drawingmode: function (instance, mode) {
        instance.setDrawingMode(mode);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    style: function (instance, style) {
        instance.setStyle(style);
    },
    togeojson: function (instance, callback) {
        instance.toGeoJson(callback);
    },
};
function DataFunctional(_a) {
    var options = _a.options, onClick = _a.onClick, onDblClick = _a.onDblClick, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onAddFeature = _a.onAddFeature, onRemoveFeature = _a.onRemoveFeature, onRemoveProperty = _a.onRemoveProperty, onSetGeometry = _a.onSetGeometry, onSetProperty = _a.onSetProperty, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), mousedownListener = _d[0], setMousedownListener = _d[1];
    var _e = react.useState(null), mousemoveListener = _e[0], setMousemoveListener = _e[1];
    var _f = react.useState(null), mouseoutListener = _f[0], setMouseoutListener = _f[1];
    var _g = react.useState(null), mouseoverListener = _g[0], setMouseoverListener = _g[1];
    var _h = react.useState(null), mouseupListener = _h[0], setMouseupListener = _h[1];
    var _j = react.useState(null), rightclickListener = _j[0], setRightclickListener = _j[1];
    var _k = react.useState(null), clickListener = _k[0], setClickListener = _k[1];
    var _l = react.useState(null), addFeatureListener = _l[0], setAddFeatureListener = _l[1];
    var _m = react.useState(null), removeFeatureListener = _m[0], setRemoveFeatureListener = _m[1];
    var _o = react.useState(null), removePropertyListener = _o[0], setRemovePropertyListener = _o[1];
    var _p = react.useState(null), setGeometryListener = _p[0], setSetGeometryListener = _p[1];
    var _q = react.useState(null), setPropertyListener = _q[0], setSetPropertyListener = _q[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onAddFeature) {
            if (addFeatureListener !== null) {
                google.maps.event.removeListener(addFeatureListener);
            }
            setAddFeatureListener(google.maps.event.addListener(instance, 'addfeature', onAddFeature));
        }
    }, [onAddFeature]);
    react.useEffect(function () {
        if (instance && onRemoveFeature) {
            if (removeFeatureListener !== null) {
                google.maps.event.removeListener(removeFeatureListener);
            }
            setRemoveFeatureListener(google.maps.event.addListener(instance, 'removefeature', onRemoveFeature));
        }
    }, [onRemoveFeature]);
    react.useEffect(function () {
        if (instance && onRemoveProperty) {
            if (removePropertyListener !== null) {
                google.maps.event.removeListener(removePropertyListener);
            }
            setRemovePropertyListener(google.maps.event.addListener(instance, 'removeproperty', onRemoveProperty));
        }
    }, [onRemoveProperty]);
    react.useEffect(function () {
        if (instance && onSetGeometry) {
            if (setGeometryListener !== null) {
                google.maps.event.removeListener(setGeometryListener);
            }
            setSetGeometryListener(google.maps.event.addListener(instance, 'setgeometry', onSetGeometry));
        }
    }, [onSetGeometry]);
    react.useEffect(function () {
        if (instance && onSetProperty) {
            if (setPropertyListener !== null) {
                google.maps.event.removeListener(setPropertyListener);
            }
            setSetPropertyListener(google.maps.event.addListener(instance, 'setproperty', onSetProperty));
        }
    }, [onSetProperty]);
    react.useEffect(function () {
        if (map !== null) {
            var data = new google.maps.Data(__assign(__assign({}, (options || {})), { map: map }));
            if (onDblClick) {
                setDblclickListener(google.maps.event.addListener(data, 'dblclick', onDblClick));
            }
            if (onMouseDown) {
                setMousedownListener(google.maps.event.addListener(data, 'mousedown', onMouseDown));
            }
            if (onMouseMove) {
                setMousemoveListener(google.maps.event.addListener(data, 'mousemove', onMouseMove));
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(data, 'mouseout', onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(data, 'mouseover', onMouseOver));
            }
            if (onMouseUp) {
                setMouseupListener(google.maps.event.addListener(data, 'mouseup', onMouseUp));
            }
            if (onRightClick) {
                setRightclickListener(google.maps.event.addListener(data, 'rightclick', onRightClick));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(data, 'click', onClick));
            }
            if (onAddFeature) {
                setAddFeatureListener(google.maps.event.addListener(data, 'addfeature', onAddFeature));
            }
            if (onRemoveFeature) {
                setRemoveFeatureListener(google.maps.event.addListener(data, 'removefeature', onRemoveFeature));
            }
            if (onRemoveProperty) {
                setRemovePropertyListener(google.maps.event.addListener(data, 'removeproperty', onRemoveProperty));
            }
            if (onSetGeometry) {
                setSetGeometryListener(google.maps.event.addListener(data, 'setgeometry', onSetGeometry));
            }
            if (onSetProperty) {
                setSetPropertyListener(google.maps.event.addListener(data, 'setproperty', onSetProperty));
            }
            setInstance(data);
            if (onLoad) {
                onLoad(data);
            }
        }
        return function () {
            if (instance) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (addFeatureListener !== null) {
                    google.maps.event.removeListener(addFeatureListener);
                }
                if (removeFeatureListener !== null) {
                    google.maps.event.removeListener(removeFeatureListener);
                }
                if (removePropertyListener !== null) {
                    google.maps.event.removeListener(removePropertyListener);
                }
                if (setGeometryListener !== null) {
                    google.maps.event.removeListener(setGeometryListener);
                }
                if (setPropertyListener !== null) {
                    google.maps.event.removeListener(setPropertyListener);
                }
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var DataF = react.memo(DataFunctional);
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            data: null,
        };
        _this.setDataCallback = function () {
            if (_this.state.data !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.data);
            }
        };
        return _this;
    }
    Data.prototype.componentDidMount = function () {
        if (this.context !== null) {
            var data_1 = new google.maps.Data(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$7,
                eventMap: eventMap$7,
                prevProps: {},
                nextProps: this.props,
                instance: data_1,
            });
            this.setState(function () {
                return {
                    data: data_1,
                };
            }, this.setDataCallback);
        }
    };
    Data.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.data !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$7,
                eventMap: eventMap$7,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.data,
            });
        }
    };
    Data.prototype.componentWillUnmount = function () {
        if (this.state.data !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.data);
            }
            unregisterEvents(this.registeredEvents);
            if (this.state.data) {
                this.state.data.setMap(null);
            }
        }
    };
    Data.prototype.render = function () {
        return null;
    };
    Data.contextType = MapContext;
    return Data;
}(react.PureComponent));

var eventMap$6 = {
    onClick: 'click',
    onDefaultViewportChanged: 'defaultviewport_changed',
    onStatusChanged: 'status_changed',
};
var updaterMap$6 = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
    url: function (instance, url) {
        instance.setUrl(url);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
var KmlLayer = /** @class */ (function (_super) {
    __extends(KmlLayer, _super);
    function KmlLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            kmlLayer: null,
        };
        _this.setKmlLayerCallback = function () {
            if (_this.state.kmlLayer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.kmlLayer);
            }
        };
        return _this;
    }
    KmlLayer.prototype.componentDidMount = function () {
        var kmlLayer = new google.maps.KmlLayer(__assign(__assign({}, this.props.options), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$6,
            eventMap: eventMap$6,
            prevProps: {},
            nextProps: this.props,
            instance: kmlLayer,
        });
        this.setState(function setLmlLayer() {
            return {
                kmlLayer: kmlLayer,
            };
        }, this.setKmlLayerCallback);
    };
    KmlLayer.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.kmlLayer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$6,
                eventMap: eventMap$6,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.kmlLayer,
            });
        }
    };
    KmlLayer.prototype.componentWillUnmount = function () {
        if (this.state.kmlLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.kmlLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.kmlLayer.setMap(null);
        }
    };
    KmlLayer.prototype.render = function () {
        return null;
    };
    KmlLayer.contextType = MapContext;
    return KmlLayer;
}(react.PureComponent));

function getOffsetOverride(containerElement, getPixelPositionOffset) {
    return typeof getPixelPositionOffset === 'function'
        ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight)
        : {
            x: 0,
            y: 0,
        };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createLatLng(inst, Type) { return new Type(inst.lat, inst.lng); }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createLatLngBounds(inst, Type) {
    return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ensureOfType(inst, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
factory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    return inst instanceof type ? inst : factory(inst, type);
}
function ensureOfTypeBounds(inst, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
factory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    return inst instanceof type ? inst : factory(inst, type);
}
function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
    var ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
    var sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
    if (ne && sw) {
        return {
            left: "".concat(sw.x + offset.x, "px"),
            top: "".concat(ne.y + offset.y, "px"),
            width: "".concat(ne.x - sw.x - offset.x, "px"),
            height: "".concat(sw.y - ne.y - offset.y, "px"),
        };
    }
    return {
        left: '-9999px',
        top: '-9999px',
    };
}
function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
    var point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);
    if (point) {
        var x = point.x, y = point.y;
        return {
            left: "".concat(x + offset.x, "px"),
            top: "".concat(y + offset.y, "px"),
        };
    }
    return {
        left: '-9999px',
        top: '-9999px',
    };
}
function getLayoutStyles(mapCanvasProjection, offset, bounds, position) {
    return bounds !== undefined
        ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfTypeBounds(bounds, google.maps.LatLngBounds, createLatLngBounds))
        : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
}
function arePositionsEqual(currentPosition, previousPosition) {
    return currentPosition.left === previousPosition.left
        && currentPosition.top === previousPosition.top
        && currentPosition.width === previousPosition.height
        && currentPosition.height === previousPosition.height;
}

function createOverlay(container, pane, position, bounds, getPixelPositionOffset) {
    var Overlay = /** @class */ (function (_super) {
        __extends(Overlay, _super);
        function Overlay(container, pane, position, bounds) {
            var _this = _super.call(this) || this;
            _this.container = container;
            _this.pane = pane;
            _this.position = position;
            _this.bounds = bounds;
            return _this;
        }
        Overlay.prototype.onAdd = function () {
            var _a;
            var pane = (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a[this.pane];
            pane === null || pane === void 0 ? void 0 : pane.appendChild(this.container);
        };
        Overlay.prototype.draw = function () {
            var projection = this.getProjection();
            var offset = __assign({}, (this.container
                ? getOffsetOverride(this.container, getPixelPositionOffset)
                : {
                    x: 0,
                    y: 0,
                }));
            var layoutStyles = getLayoutStyles(projection, offset, this.bounds, this.position);
            for (var _i = 0, _a = Object.entries(layoutStyles); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.container.style[key] = value;
            }
        };
        Overlay.prototype.onRemove = function () {
            if (this.container.parentNode !== null) {
                this.container.parentNode.removeChild(this.container);
            }
        };
        return Overlay;
    }(google.maps.OverlayView));
    return new Overlay(container, pane, position, bounds);
}

function convertToLatLngString(latLngLike) {
    if (!latLngLike) {
        return '';
    }
    var latLng = latLngLike instanceof google.maps.LatLng
        ? latLngLike
        : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
    return latLng + '';
}
function convertToLatLngBoundsString(latLngBoundsLike) {
    if (!latLngBoundsLike) {
        return '';
    }
    var latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds
        ? latLngBoundsLike
        : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
    return latLngBounds + '';
}
var FLOAT_PANE = "floatPane";
var MAP_PANE = "mapPane";
var MARKER_LAYER = "markerLayer";
var OVERLAY_LAYER = "overlayLayer";
var OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
function OverlayViewFunctional(_a) {
    var position = _a.position, bounds = _a.bounds, mapPaneName = _a.mapPaneName, zIndex = _a.zIndex, onLoad = _a.onLoad, onUnmount = _a.onUnmount, getPixelPositionOffset = _a.getPixelPositionOffset, children = _a.children;
    var map = react.useContext(MapContext);
    var container = react.useMemo(function () {
        var div = document.createElement('div');
        div.style.position = 'absolute';
        return div;
    }, []);
    var overlay = react.useMemo(function () {
        return createOverlay(container, mapPaneName, position, bounds, getPixelPositionOffset);
    }, [container, mapPaneName, position, bounds]);
    react.useEffect(function () {
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(overlay);
        overlay === null || overlay === void 0 ? void 0 : overlay.setMap(map);
        return function () {
            onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(overlay);
            overlay === null || overlay === void 0 ? void 0 : overlay.setMap(null);
        };
    }, [map, overlay]);
    // to move the container to the foreground and background
    react.useEffect(function () {
        container.style.zIndex = "".concat(zIndex);
    }, [zIndex, container]);
    return ReactDOM__namespace.createPortal(children, container);
}
var OverlayViewF = react.memo(OverlayViewFunctional);
var OverlayView = /** @class */ (function (_super) {
    __extends(OverlayView, _super);
    function OverlayView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            paneEl: null,
            containerStyle: {
                // set initial position
                position: 'absolute',
            },
        };
        _this.updatePane = function () {
            var mapPaneName = _this.props.mapPaneName;
            // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
            var mapPanes = _this.overlayView.getPanes();
            invariant$1(!!mapPaneName, "OverlayView requires props.mapPaneName but got %s", mapPaneName);
            if (mapPanes) {
                _this.setState({
                    paneEl: mapPanes[mapPaneName],
                });
            }
            else {
                _this.setState({
                    paneEl: null,
                });
            }
        };
        _this.onAdd = function () {
            var _a, _b;
            _this.updatePane();
            (_b = (_a = _this.props).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
        };
        _this.onPositionElement = function () {
            var _a;
            var mapCanvasProjection = _this.overlayView.getProjection();
            var offset = __assign({ x: 0, y: 0 }, (_this.containerRef.current
                ? getOffsetOverride(_this.containerRef.current, _this.props.getPixelPositionOffset)
                : {}));
            var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, _this.props.bounds, _this.props.position);
            var left = (_a = _this.state.containerStyle, _a.left), top = _a.top, width = _a.width, height = _a.height;
            if (!arePositionsEqual(layoutStyles, { left: left, top: top, width: width, height: height })) {
                _this.setState({
                    containerStyle: {
                        top: layoutStyles.top || 0,
                        left: layoutStyles.left || 0,
                        width: layoutStyles.width || 0,
                        height: layoutStyles.height || 0,
                        position: 'absolute',
                    },
                });
            }
        };
        _this.draw = function () {
            _this.onPositionElement();
        };
        _this.onRemove = function () {
            var _a, _b;
            _this.setState(function () { return ({
                paneEl: null,
            }); });
            (_b = (_a = _this.props).onUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
        };
        _this.containerRef = react.createRef();
        // You must implement three methods: onAdd(), draw(), and onRemove().
        var overlayView = new google.maps.OverlayView();
        overlayView.onAdd = _this.onAdd;
        overlayView.draw = _this.draw;
        overlayView.onRemove = _this.onRemove;
        _this.overlayView = overlayView;
        return _this;
    }
    OverlayView.prototype.componentDidMount = function () {
        this.overlayView.setMap(this.context);
    };
    OverlayView.prototype.componentDidUpdate = function (prevProps) {
        var prevPositionString = convertToLatLngString(prevProps.position);
        var positionString = convertToLatLngString(this.props.position);
        var prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
        var boundsString = convertToLatLngBoundsString(this.props.bounds);
        if (prevPositionString !== positionString ||
            prevBoundsString !== boundsString) {
            this.overlayView.draw();
        }
        if (prevProps.mapPaneName !== this.props.mapPaneName) {
            this.updatePane();
        }
    };
    OverlayView.prototype.componentWillUnmount = function () {
        this.overlayView.setMap(null);
    };
    OverlayView.prototype.render = function () {
        var paneEl = this.state.paneEl;
        if (paneEl) {
            return ReactDOM__namespace.createPortal(jsxRuntime.jsx("div", { ref: this.containerRef, style: this.state.containerStyle, children: react.Children.only(this.props.children) }), paneEl);
        }
        else {
            return null;
        }
    };
    OverlayView.FLOAT_PANE = "floatPane";
    OverlayView.MAP_PANE = "mapPane";
    OverlayView.MARKER_LAYER = "markerLayer";
    OverlayView.OVERLAY_LAYER = "overlayLayer";
    OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
    OverlayView.contextType = MapContext;
    return OverlayView;
}(react.PureComponent));

function noop() { return; }

var eventMap$5 = {
    onDblClick: 'dblclick',
    onClick: 'click',
};
var updaterMap$5 = {
    opacity: function (instance, opacity) {
        instance.setOpacity(opacity);
    },
};
function GroundOverlayFunctional(_a) {
    var url = _a.url, bounds = _a.bounds, options = _a.options, visible = _a.visible;
    var map = react.useContext(MapContext);
    var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
    var groundOverlay = react.useMemo(function () {
        var overlay = new google.maps.GroundOverlay(url, imageBounds, __assign({}, options));
        return overlay;
    }, []);
    react.useEffect(function () {
        if (groundOverlay !== null) {
            groundOverlay.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof url !== 'undefined' && groundOverlay !== null) {
            groundOverlay.set("url", url);
            groundOverlay.setMap(map);
        }
    }, [groundOverlay, url]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && groundOverlay !== null) {
            groundOverlay.setOpacity(visible ? 1 : 0);
        }
    }, [groundOverlay, visible]);
    react.useEffect(function () {
        var newBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
        if (typeof bounds !== 'undefined' && groundOverlay !== null) {
            groundOverlay.set("bounds", newBounds);
            groundOverlay.setMap(map);
        }
    }, [groundOverlay, bounds]);
    return null;
}
var GroundOverlayF = react.memo(GroundOverlayFunctional);
var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            groundOverlay: null,
        };
        _this.setGroundOverlayCallback = function () {
            if (_this.state.groundOverlay !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.groundOverlay);
            }
        };
        return _this;
    }
    GroundOverlay.prototype.componentDidMount = function () {
        invariant$1(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
        var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, __assign(__assign({}, this.props.options), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$5,
            eventMap: eventMap$5,
            prevProps: {},
            nextProps: this.props,
            instance: groundOverlay,
        });
        this.setState(function setGroundOverlay() {
            return {
                groundOverlay: groundOverlay,
            };
        }, this.setGroundOverlayCallback);
    };
    GroundOverlay.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.groundOverlay !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$5,
                eventMap: eventMap$5,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.groundOverlay,
            });
        }
    };
    GroundOverlay.prototype.componentWillUnmount = function () {
        if (this.state.groundOverlay) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.groundOverlay);
            }
            this.state.groundOverlay.setMap(null);
        }
    };
    GroundOverlay.prototype.render = function () {
        return null;
    };
    GroundOverlay.defaultProps = {
        onLoad: noop,
    };
    GroundOverlay.contextType = MapContext;
    return GroundOverlay;
}(react.PureComponent));

var eventMap$4 = {};
var updaterMap$4 = {
    data: function (instance, data) {
        instance.setData(data);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
};
function HeatmapLayerFunctional(_a) {
    var data = _a.data, onLoad = _a.onLoad, onUnmount = _a.onUnmount, options = _a.options;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    react.useEffect(function () {
        if (!google.maps.visualization) {
            invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
        }
    }, []);
    react.useEffect(function () {
        invariant$1(!!data, 'data property is required in HeatmapLayer %s', data);
    }, [data]);
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, (options || {})), { data: data, map: map }));
        setInstance(heatmapLayer);
        if (onLoad) {
            onLoad(heatmapLayer);
        }
        return function () {
            if (instance !== null) {
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var HeatmapLayerF = react.memo(HeatmapLayerFunctional);
var HeatmapLayer = /** @class */ (function (_super) {
    __extends(HeatmapLayer, _super);
    function HeatmapLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            heatmapLayer: null,
        };
        _this.setHeatmapLayerCallback = function () {
            if (_this.state.heatmapLayer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.heatmapLayer);
            }
        };
        return _this;
    }
    HeatmapLayer.prototype.componentDidMount = function () {
        invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization);
        invariant$1(!!this.props.data, 'data property is required in HeatmapLayer %s', this.props.data);
        var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, (this.props.options || {})), { data: this.props.data, map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$4,
            eventMap: eventMap$4,
            prevProps: {},
            nextProps: this.props,
            instance: heatmapLayer,
        });
        this.setState(function setHeatmapLayer() {
            return {
                heatmapLayer: heatmapLayer,
            };
        }, this.setHeatmapLayerCallback);
    };
    HeatmapLayer.prototype.componentDidUpdate = function (prevProps) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$4,
            eventMap: eventMap$4,
            prevProps: prevProps,
            nextProps: this.props,
            instance: this.state.heatmapLayer,
        });
    };
    HeatmapLayer.prototype.componentWillUnmount = function () {
        if (this.state.heatmapLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.heatmapLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.heatmapLayer.setMap(null);
        }
    };
    HeatmapLayer.prototype.render = function () {
        return null;
    };
    HeatmapLayer.contextType = MapContext;
    return HeatmapLayer;
}(react.PureComponent));

var eventMap$3 = {
    onCloseClick: 'closeclick',
    onPanoChanged: 'pano_changed',
    onPositionChanged: 'position_changed',
    onPovChanged: 'pov_changed',
    onResize: 'resize',
    onStatusChanged: 'status_changed',
    onVisibleChanged: 'visible_changed',
    onZoomChanged: 'zoom_changed',
};
var updaterMap$3 = {
    register: function (instance, provider, options) {
        instance.registerPanoProvider(provider, options);
    },
    links: function (instance, links) {
        instance.setLinks(links);
    },
    motionTracking: function (instance, motionTracking) {
        instance.setMotionTracking(motionTracking);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    pano: function (instance, pano) {
        instance.setPano(pano);
    },
    position: function (instance, position) {
        instance.setPosition(position);
    },
    pov: function (instance, pov) {
        instance.setPov(pov);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
    zoom: function (instance, zoom) {
        instance.setZoom(zoom);
    },
};
var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            streetViewPanorama: null,
        };
        _this.setStreetViewPanoramaCallback = function () {
            if (_this.state.streetViewPanorama !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.streetViewPanorama);
            }
        };
        return _this;
    }
    StreetViewPanorama.prototype.componentDidMount = function () {
        var _a, _b;
        var streetViewPanorama = (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.getStreetView()) !== null && _b !== void 0 ? _b : null;
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$3,
            eventMap: eventMap$3,
            prevProps: {},
            nextProps: this.props,
            instance: streetViewPanorama,
        });
        this.setState(function () {
            return {
                streetViewPanorama: streetViewPanorama,
            };
        }, this.setStreetViewPanoramaCallback);
    };
    StreetViewPanorama.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.streetViewPanorama !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$3,
                eventMap: eventMap$3,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.streetViewPanorama,
            });
        }
    };
    StreetViewPanorama.prototype.componentWillUnmount = function () {
        if (this.state.streetViewPanorama !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.streetViewPanorama);
            }
            unregisterEvents(this.registeredEvents);
            this.state.streetViewPanorama.setVisible(false);
        }
    };
    StreetViewPanorama.prototype.render = function () {
        return null;
    };
    StreetViewPanorama.contextType = MapContext;
    return StreetViewPanorama;
}(react.PureComponent));

var StreetViewService = /** @class */ (function (_super) {
    __extends(StreetViewService, _super);
    function StreetViewService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            streetViewService: null,
        };
        _this.setStreetViewServiceCallback = function () {
            if (_this.state.streetViewService !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.streetViewService);
            }
        };
        return _this;
    }
    StreetViewService.prototype.componentDidMount = function () {
        var streetViewService = new google.maps.StreetViewService();
        this.setState(function setStreetViewService() {
            return {
                streetViewService: streetViewService,
            };
        }, this.setStreetViewServiceCallback);
    };
    StreetViewService.prototype.componentWillUnmount = function () {
        if (this.state.streetViewService !== null && this.props.onUnmount) {
            this.props.onUnmount(this.state.streetViewService);
        }
    };
    StreetViewService.prototype.render = function () {
        return null;
    };
    StreetViewService.contextType = MapContext;
    return StreetViewService;
}(react.PureComponent));

var DirectionsService = /** @class */ (function (_super) {
    __extends(DirectionsService, _super);
    function DirectionsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            directionsService: null,
        };
        _this.setDirectionsServiceCallback = function () {
            if (_this.state.directionsService !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.directionsService);
            }
        };
        return _this;
    }
    DirectionsService.prototype.componentDidMount = function () {
        invariant$1(!!this.props.options, 'DirectionsService expected options object as parameter, but got %s', this.props.options);
        var directionsService = new google.maps.DirectionsService();
        this.setState(function setDirectionsService() {
            return {
                directionsService: directionsService,
            };
        }, this.setDirectionsServiceCallback);
    };
    DirectionsService.prototype.componentDidUpdate = function () {
        if (this.state.directionsService !== null) {
            this.state.directionsService.route(this.props.options, this.props.callback);
        }
    };
    DirectionsService.prototype.componentWillUnmount = function () {
        if (this.state.directionsService !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.directionsService);
            }
        }
    };
    DirectionsService.prototype.render = function () {
        return null;
    };
    return DirectionsService;
}(react.PureComponent));

var eventMap$2 = {
    onDirectionsChanged: 'directions_changed',
};
var updaterMap$2 = {
    directions: function (instance, directions) {
        instance.setDirections(directions);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    panel: function (instance, panel) {
        instance.setPanel(panel);
    },
    routeIndex: function (instance, routeIndex) {
        instance.setRouteIndex(routeIndex);
    },
};
var DirectionsRenderer = /** @class */ (function (_super) {
    __extends(DirectionsRenderer, _super);
    function DirectionsRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            directionsRenderer: null,
        };
        _this.setDirectionsRendererCallback = function () {
            if (_this.state.directionsRenderer !== null) {
                _this.state.directionsRenderer.setMap(_this.context);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.directionsRenderer);
                }
            }
        };
        return _this;
    }
    DirectionsRenderer.prototype.componentDidMount = function () {
        var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$2,
            eventMap: eventMap$2,
            prevProps: {},
            nextProps: this.props,
            instance: directionsRenderer,
        });
        this.setState(function setDirectionsRenderer() {
            return {
                directionsRenderer: directionsRenderer,
            };
        }, this.setDirectionsRendererCallback);
    };
    DirectionsRenderer.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.directionsRenderer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$2,
                eventMap: eventMap$2,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.directionsRenderer,
            });
        }
    };
    DirectionsRenderer.prototype.componentWillUnmount = function () {
        if (this.state.directionsRenderer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.directionsRenderer);
            }
            unregisterEvents(this.registeredEvents);
            if (this.state.directionsRenderer) {
                this.state.directionsRenderer.setMap(null);
            }
        }
    };
    DirectionsRenderer.prototype.render = function () {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };
    DirectionsRenderer.contextType = MapContext;
    return DirectionsRenderer;
}(react.PureComponent));

var DistanceMatrixService = /** @class */ (function (_super) {
    __extends(DistanceMatrixService, _super);
    function DistanceMatrixService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            distanceMatrixService: null,
        };
        _this.setDistanceMatrixServiceCallback = function () {
            if (_this.state.distanceMatrixService !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.distanceMatrixService);
            }
        };
        return _this;
    }
    DistanceMatrixService.prototype.componentDidMount = function () {
        invariant$1(!!this.props.options, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options);
        var distanceMatrixService = new google.maps.DistanceMatrixService();
        this.setState(function setDistanceMatrixService() {
            return {
                distanceMatrixService: distanceMatrixService,
            };
        }, this.setDistanceMatrixServiceCallback);
    };
    DistanceMatrixService.prototype.componentDidUpdate = function () {
        if (this.state.distanceMatrixService !== null) {
            this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
        }
    };
    DistanceMatrixService.prototype.componentWillUnmount = function () {
        if (this.state.distanceMatrixService !== null && this.props.onUnmount) {
            this.props.onUnmount(this.state.distanceMatrixService);
        }
    };
    DistanceMatrixService.prototype.render = function () {
        return null;
    };
    return DistanceMatrixService;
}(react.PureComponent));

var eventMap$1 = {
    onPlacesChanged: 'places_changed',
};
var updaterMap$1 = {
    bounds: function (instance, bounds) {
        instance.setBounds(bounds);
    },
};
var StandaloneSearchBox = /** @class */ (function (_super) {
    __extends(StandaloneSearchBox, _super);
    function StandaloneSearchBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = react.createRef();
        _this.state = {
            searchBox: null,
        };
        _this.setSearchBoxCallback = function () {
            if (_this.state.searchBox !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.searchBox);
            }
        };
        return _this;
    }
    StandaloneSearchBox.prototype.componentDidMount = function () {
        invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
        if (this.containerElement !== null && this.containerElement.current !== null) {
            var input = this.containerElement.current.querySelector('input');
            if (input !== null) {
                var searchBox_1 = new google.maps.places.SearchBox(input, this.props.options);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$1,
                    eventMap: eventMap$1,
                    prevProps: {},
                    nextProps: this.props,
                    instance: searchBox_1,
                });
                this.setState(function setSearchBox() {
                    return {
                        searchBox: searchBox_1,
                    };
                }, this.setSearchBoxCallback);
            }
        }
    };
    StandaloneSearchBox.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.searchBox !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$1,
                eventMap: eventMap$1,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.searchBox,
            });
        }
    };
    StandaloneSearchBox.prototype.componentWillUnmount = function () {
        if (this.state.searchBox !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.searchBox);
            }
            unregisterEvents(this.registeredEvents);
        }
    };
    StandaloneSearchBox.prototype.render = function () {
        return jsxRuntime.jsx("div", { ref: this.containerElement, children: react.Children.only(this.props.children) });
    };
    StandaloneSearchBox.contextType = MapContext;
    return StandaloneSearchBox;
}(react.PureComponent));

var eventMap = {
    onPlaceChanged: 'place_changed',
};
var updaterMap = {
    bounds: function (instance, bounds) {
        instance.setBounds(bounds);
    },
    restrictions: function (instance, restrictions) {
        instance.setComponentRestrictions(restrictions);
    },
    fields: function (instance, fields) {
        instance.setFields(fields);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    types: function (instance, types) {
        instance.setTypes(types);
    },
};
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = react.createRef();
        _this.state = {
            autocomplete: null,
        };
        _this.setAutocompleteCallback = function () {
            if (_this.state.autocomplete !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.autocomplete);
            }
        };
        return _this;
    }
    Autocomplete.prototype.componentDidMount = function () {
        var _a;
        invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
        // TODO: why current could be equal null?
        var input = (_a = this.containerElement.current) === null || _a === void 0 ? void 0 : _a.querySelector('input');
        if (input) {
            var autocomplete_1 = new google.maps.places.Autocomplete(input, this.props.options);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap,
                eventMap: eventMap,
                prevProps: {},
                nextProps: this.props,
                instance: autocomplete_1,
            });
            this.setState(function () {
                return {
                    autocomplete: autocomplete_1,
                };
            }, this.setAutocompleteCallback);
        }
    };
    Autocomplete.prototype.componentDidUpdate = function (prevProps) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap,
            eventMap: eventMap,
            prevProps: prevProps,
            nextProps: this.props,
            instance: this.state.autocomplete,
        });
    };
    Autocomplete.prototype.componentWillUnmount = function () {
        if (this.state.autocomplete !== null) {
            unregisterEvents(this.registeredEvents);
        }
    };
    Autocomplete.prototype.render = function () {
        return jsxRuntime.jsx("div", { ref: this.containerElement, className: this.props.className, children: react.Children.only(this.props.children) });
    };
    Autocomplete.defaultProps = {
        className: ''
    };
    Autocomplete.contextType = MapContext;
    return Autocomplete;
}(react.PureComponent));

exports.F2 = Autocomplete;
__webpack_unused_export__ = BicyclingLayer;
__webpack_unused_export__ = BicyclingLayerF;
__webpack_unused_export__ = Circle;
__webpack_unused_export__ = CircleF;
__webpack_unused_export__ = Data;
__webpack_unused_export__ = DataF;
__webpack_unused_export__ = DirectionsRenderer;
__webpack_unused_export__ = DirectionsService;
__webpack_unused_export__ = DistanceMatrixService;
__webpack_unused_export__ = DrawingManager;
__webpack_unused_export__ = DrawingManagerF;
__webpack_unused_export__ = FLOAT_PANE;
__webpack_unused_export__ = GoogleMap;
__webpack_unused_export__ = index_esm;
__webpack_unused_export__ = GoogleMarkerClusterer$1;
__webpack_unused_export__ = GroundOverlay;
__webpack_unused_export__ = GroundOverlayF;
__webpack_unused_export__ = HeatmapLayer;
__webpack_unused_export__ = HeatmapLayerF;
__webpack_unused_export__ = InfoBoxComponent;
__webpack_unused_export__ = InfoBoxF;
__webpack_unused_export__ = InfoWindow;
__webpack_unused_export__ = InfoWindowF;
__webpack_unused_export__ = KmlLayer;
__webpack_unused_export__ = LoadScript;
__webpack_unused_export__ = LoadScriptNext$1;
__webpack_unused_export__ = MAP_PANE;
__webpack_unused_export__ = MARKER_LAYER;
__webpack_unused_export__ = MapContext;
__webpack_unused_export__ = Marker;
__webpack_unused_export__ = ClustererComponent;
__webpack_unused_export__ = MarkerClustererF;
__webpack_unused_export__ = MarkerF;
__webpack_unused_export__ = OVERLAY_LAYER;
__webpack_unused_export__ = OVERLAY_MOUSE_TARGET;
__webpack_unused_export__ = OverlayView;
__webpack_unused_export__ = OverlayViewF;
__webpack_unused_export__ = Polygon;
__webpack_unused_export__ = PolygonF;
__webpack_unused_export__ = Polyline;
__webpack_unused_export__ = PolylineF;
__webpack_unused_export__ = Rectangle;
__webpack_unused_export__ = RectangleF;
__webpack_unused_export__ = StandaloneSearchBox;
__webpack_unused_export__ = StreetViewPanorama;
__webpack_unused_export__ = StreetViewService;
__webpack_unused_export__ = TrafficLayer;
__webpack_unused_export__ = TrafficLayerF;
__webpack_unused_export__ = TransitLayer;
__webpack_unused_export__ = TransitLayerF;
__webpack_unused_export__ = useGoogleMap;
__webpack_unused_export__ = useJsApiLoader;
exports.Db = useLoadScript;
//# sourceMappingURL=cjs.js.map


/***/ }),

/***/ 52353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
{
  parallel      : __webpack_require__(54668),
  serial        : __webpack_require__(23339),
  serialOrdered : __webpack_require__(99869)
};


/***/ }),

/***/ 61677:
/***/ ((module) => {

// API
module.exports = abort;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}


/***/ }),

/***/ 92792:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defer = __webpack_require__(56403);

// API
module.exports = async;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}


/***/ }),

/***/ 56403:
/***/ ((module) => {

module.exports = defer;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}


/***/ }),

/***/ 98617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var async = __webpack_require__(92792)
  , abort = __webpack_require__(61677)
  ;

// API
module.exports = iterate;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async(callback));
  }

  return aborter;
}


/***/ }),

/***/ 59478:
/***/ ((module) => {

// API
module.exports = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}


/***/ }),

/***/ 77093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var abort = __webpack_require__(61677)
  , async = __webpack_require__(92792)
  ;

// API
module.exports = terminator;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}


/***/ }),

/***/ 54668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate    = __webpack_require__(98617)
  , initState  = __webpack_require__(59478)
  , terminator = __webpack_require__(77093)
  ;

// Public API
module.exports = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator.bind(state, callback);
}


/***/ }),

/***/ 23339:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var serialOrdered = __webpack_require__(99869);

// Public API
module.exports = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}


/***/ }),

/***/ 99869:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var iterate    = __webpack_require__(98617)
  , initState  = __webpack_require__(59478)
  , terminator = __webpack_require__(77093)
  ;

// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending  = ascending;
module.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}


/***/ }),

/***/ 97143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(73837);
var Stream = (__webpack_require__(12781).Stream);
var DelayedStream = __webpack_require__(23154);

module.exports = CombinedStream;
function CombinedStream() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);

CombinedStream.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream.prototype.append = function(stream) {
  var isStreamLike = CombinedStream.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream.prototype.pipe = function(dest, options) {
  Stream.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};


/***/ }),

/***/ 52327:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(60392)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 60392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(69842);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 17783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || false === true || process.__nwjs) {
	module.exports = __webpack_require__(52327);
} else {
	module.exports = __webpack_require__(49035);
}


/***/ }),

/***/ 49035:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(76224);
const util = __webpack_require__(73837);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(35048);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(60392)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 23154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stream = (__webpack_require__(12781).Stream);
var util = __webpack_require__(73837);

module.exports = DelayedStream;
function DelayedStream() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);

DelayedStream.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream.prototype.pause = function() {
  this.source.pause();
};

DelayedStream.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream.prototype.pipe = function() {
  var r = Stream.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.'
  this.emit('error', new Error(message));
};


/***/ }),

/***/ 10361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debug;

module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = __webpack_require__(17783)("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug !== "function") {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};


/***/ }),

/***/ 71794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var url = __webpack_require__(57310);
var URL = url.URL;
var http = __webpack_require__(13685);
var https = __webpack_require__(95687);
var Writable = (__webpack_require__(12781).Writable);
var assert = __webpack_require__(39491);
var debug = __webpack_require__(10361);

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  destroyRequest(this._currentRequest);
  this._currentRequest.abort();
  this.emit("abort");
};

RedirectableRequest.prototype.destroy = function (error) {
  destroyRequest(this._currentRequest, error);
  destroy.call(this, error);
  return this;
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  }
  else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    self.removeListener("close", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  this.on("close", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ?
    url.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  destroyRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host"),
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
    return;
  }

  // Create the redirected request
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode,
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders,
    };
    try {
      beforeRedirect(this._options, responseDetails, requestDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (isString(input)) {
        var parsed;
        try {
          parsed = urlToOptions(new URL(input));
        }
        catch (err) {
          /* istanbul ignore next */
          parsed = url.parse(input);
        }
        if (!isString(parsed.protocol)) {
          throw new InvalidUrlError({ input });
        }
        input = parsed;
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    Error.captureStackTrace(this, this.constructor);
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  return CustomError;
}

function destroyRequest(request, error) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.destroy(error);
}

function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
  return typeof value === "function";
}

function isBuffer(value) {
  return typeof value === "object" && ("length" in value);
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ 20054:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var CombinedStream = __webpack_require__(97143);
var util = __webpack_require__(73837);
var path = __webpack_require__(71017);
var http = __webpack_require__(13685);
var https = __webpack_require__(95687);
var parseUrl = (__webpack_require__(57310).parse);
var fs = __webpack_require__(57147);
var Stream = (__webpack_require__(12781).Stream);
var mime = __webpack_require__(32994);
var asynckit = __webpack_require__(52353);
var populate = __webpack_require__(13024);

// Public API
module.exports = FormData;

// make it a Stream
util.inherits(FormData, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData(options) {
  if (!(this instanceof FormData)) {
    return new FormData(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response or not a stream
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};

FormData.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};

FormData.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData.prototype.setBoundary = function(boundary) {
  this._boundary = boundary;
};

FormData.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData.prototype.getBuffer = function() {
  var dataBuffer = new Buffer.alloc( 0 );
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {

      // Add content to the buffer.
      if(Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
      }else {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData.LINE_BREAK)] );
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
};

FormData.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https.request(options);
  } else {
    request = http.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err && err !== 'Unknown stream') {
      this._error(err);
      return;
    }

    // add content length
    if (length) {
      request.setHeader('Content-Length', length);
    }

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce);
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData.prototype.toString = function () {
  return '[object FormData]';
};


/***/ }),

/***/ 13024:
/***/ ((module) => {

// populates missing values
module.exports = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};


/***/ }),

/***/ 36461:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 97024:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(40572)


/***/ }),

/***/ 32994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(97024)
var extname = (__webpack_require__(71017).extname)

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ 69842:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 5670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var parseUrl = (__webpack_require__(57310).parse);

var DEFAULT_PORTS = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
};

var stringEndsWith = String.prototype.endsWith || function(s) {
  return s.length <= this.length &&
    this.indexOf(s, this.length - s.length) !== -1;
};

/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */
function getProxyForUrl(url) {
  var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
  var proto = parsedUrl.protocol;
  var hostname = parsedUrl.host;
  var port = parsedUrl.port;
  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
    return '';  // Don't proxy URLs without a valid scheme or host.
  }

  proto = proto.split(':', 1)[0];
  // Stripping ports in this way instead of using parsedUrl.hostname to make
  // sure that the brackets around IPv6 addresses are kept.
  hostname = hostname.replace(/:\d*$/, '');
  port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
  if (!shouldProxy(hostname, port)) {
    return '';  // Don't proxy URLs that match NO_PROXY.
  }

  var proxy =
    getEnv('npm_config_' + proto + '_proxy') ||
    getEnv(proto + '_proxy') ||
    getEnv('npm_config_proxy') ||
    getEnv('all_proxy');
  if (proxy && proxy.indexOf('://') === -1) {
    // Missing scheme in proxy, default to the requested URL's scheme.
    proxy = proto + '://' + proxy;
  }
  return proxy;
}

/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */
function shouldProxy(hostname, port) {
  var NO_PROXY =
    (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
  if (!NO_PROXY) {
    return true;  // Always proxy if NO_PROXY is not set.
  }
  if (NO_PROXY === '*') {
    return false;  // Never proxy if wildcard is set.
  }

  return NO_PROXY.split(/[,\s]/).every(function(proxy) {
    if (!proxy) {
      return true;  // Skip zero-length hosts.
    }
    var parsedProxy = proxy.match(/^(.+):(\d+)$/);
    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true;  // Skip if ports don't match.
    }

    if (!/^[.*]/.test(parsedProxyHostname)) {
      // No wildcards, so stop proxying if there is an exact match.
      return hostname !== parsedProxyHostname;
    }

    if (parsedProxyHostname.charAt(0) === '*') {
      // Remove leading wildcard.
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }
    // Stop proxying if the hostname ends with the no_proxy host.
    return !stringEndsWith.call(hostname, parsedProxyHostname);
  });
}

/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */
function getEnv(key) {
  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}

exports.j = getProxyForUrl;


/***/ }),

/***/ 35048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(22037);
const tty = __webpack_require__(76224);
const hasFlag = __webpack_require__(36461);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 71698:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0});var e=__webpack_require__(18038);function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},t.apply(this,arguments)}var n=function(t){var n=e.useRef(t);return n.current=t,n},o="💡 use-places-autocomplete: Please provide a place Id when using getDetails() either as a string or as part of an Autocomplete Prediction.";__webpack_unused_export__=function(o){var a,r,s,u=void 0===o?{}:o,c=u.requestOptions,i=u.debounce,l=void 0===i?200:i,d=u.cache,p=void 0===d?86400:d,g=u.cacheKey,f=void 0===g?"upa":g,v=u.googleMaps,m=u.callbackName,w=u.defaultValue,h=void 0===w?"":w,y=u.initOnMount,b=void 0===y||y,O=e.useState(!1),P=O[0],S=O[1],x=e.useState(h),k=x[0],C=x[1],A=e.useState({loading:!1,status:"",data:[]}),I=A[0],_=A[1],j=e.useRef(),D=n(c),K=n(v),G=e.useCallback((function(){var e;if(!j.current){var t=window.google,n=K.current,o=(null==n?void 0:n.places)||(null==t||null==(e=t.maps)?void 0:e.places);o?(j.current=new o.AutocompleteService,S(!0)):console.error("💡 use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library")}}),[K]),M=e.useCallback((function(){_({loading:!1,status:"",data:[]})}),[]),R=e.useCallback((function(e){void 0===e&&(e=f);try{sessionStorage.removeItem(e)}catch(e){}}),[f]),N=e.useCallback((a=function(e){var n;if(e){_((function(e){return t({},e,{loading:!0})}));var o={};try{o=JSON.parse(sessionStorage.getItem(f)||"{}")}catch(e){}p&&(o=Object.keys(o).reduce((function(e,t){return o[t].maxAge-Date.now()>=0&&(e[t]=o[t]),e}),{}))[e]?_({loading:!1,status:"OK",data:o[e].data}):null==(n=j.current)||n.getPlacePredictions(t({},D.current,{input:e}),(function(t,n){if(_({loading:!1,status:n,data:t||[]}),p&&"OK"===n){o[e]={data:t,maxAge:Date.now()+1e3*p};try{sessionStorage.setItem(f,JSON.stringify(o))}catch(e){}}}))}else M()},r=l,function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];null!==s&&(clearTimeout(s),s=null),s=setTimeout((function(){return a.apply(e,n)}),r)}),[p,f,M,D]),q=e.useCallback((function(e,t){void 0===t&&(t=!0),C(e),j.current&&t&&N(e)}),[N]);return e.useEffect((function(){if(!b)return function(){return null};var e=window.google;return K.current||null!=e&&e.maps||!m?G():window[m]=G,function(){window[m]&&delete window[m]}}),[m,K,G,b]),{ready:P,value:k,suggestions:I,setValue:q,clearSuggestions:M,clearCache:R,init:G}},__webpack_unused_export__=function(e){var t=new window.google.maps.places.PlacesService(document.createElement("div"));return e.placeId?new Promise((function(n,o){t.getDetails(e,(function(e,t){"OK"!==t&&o(t),n(e)}))})):(console.error(o),Promise.reject(o))},exports.LM=function(e){var t=new window.google.maps.Geocoder;return new Promise((function(n,o){t.geocode(e,(function(t,a){"OK"!==a&&o(a),!e.address&&e.componentRestrictions&&(console.error("💡 use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions."),n(t)),n(t)}))}))},exports.WV=function(e){var t=e.geometry.location,n=t.lat,o=t.lng;return{lat:n(),lng:o()}},__webpack_unused_export__=function(e,t){var n=e.address_components.find((function(e){return e.types.includes("postal_code")}));if(n)return t?n.short_name:n.long_name};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 93258:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ lib_axios)
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

/* harmony default export */ const utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const core_AxiosError = (AxiosError);

// EXTERNAL MODULE: ./node_modules/form-data/lib/form_data.js
var form_data = __webpack_require__(20054);
;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/node/classes/FormData.js


/* harmony default export */ const classes_FormData = (form_data);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (classes_FormData || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ const defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(57310);
;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/node/classes/URLSearchParams.js



/* harmony default export */ const URLSearchParams = (external_url_.URLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/node/index.js



/* harmony default export */ const node = ({
  isNode: true,
  classes: {
    URLSearchParams: URLSearchParams,
    FormData: classes_FormData,
    Blob: typeof Blob !== 'undefined' && Blob || null
  },
  protocols: [ 'http', 'https', 'file', 'data' ]
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new node.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (node.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: node.classes.FormData,
    Blob: node.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

/* harmony default export */ const core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ const cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// EXTERNAL MODULE: ./node_modules/proxy-from-env/index.js
var proxy_from_env = __webpack_require__(5670);
// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(13685);
// EXTERNAL MODULE: external "https"
var external_https_ = __webpack_require__(95687);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(73837);
// EXTERNAL MODULE: ./node_modules/follow-redirects/index.js
var follow_redirects = __webpack_require__(71794);
// EXTERNAL MODULE: external "zlib"
var external_zlib_ = __webpack_require__(59796);
;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.5.1";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/fromDataURI.js






const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;

/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || node.classes.Blob;
  const protocol = parseProtocol(uri);

  if (asBlob === undefined && _Blob) {
    asBlob = true;
  }

  if (protocol === 'data') {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;

    const match = DATA_URL_PATTERN.exec(uri);

    if (!match) {
      throw new core_AxiosError('Invalid URL', core_AxiosError.ERR_INVALID_URL);
    }

    const mime = match[1];
    const isBase64 = match[2];
    const body = match[3];
    const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? 'base64' : 'utf8');

    if (asBlob) {
      if (!_Blob) {
        throw new core_AxiosError('Blob is not supported', core_AxiosError.ERR_NOT_SUPPORT);
      }

      return new _Blob([buffer], {type: mime});
    }

    return buffer;
  }

  throw new core_AxiosError('Unsupported protocol ' + protocol, core_AxiosError.ERR_NOT_SUPPORT);
}

// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(12781);
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/throttle.js


/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  const threshold = 1000 / freq;
  let timer = null;
  return function throttled(force, args) {
    const now = Date.now();
    if (force || now - timestamp > threshold) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timestamp = now;
      return fn.apply(null, args);
    }
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        timestamp = Date.now();
        return fn.apply(null, args);
      }, threshold - (now - timestamp));
    }
  };
}

/* harmony default export */ const helpers_throttle = (throttle);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosTransformStream.js







const kInternals = Symbol('internals');

class AxiosTransformStream extends external_stream_.Transform{
  constructor(options) {
    options = utils.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils.isUndefined(source[prop]);
    });

    super({
      readableHighWaterMark: options.chunkSize
    });

    const self = this;

    const internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };

    const _speedometer = helpers_speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);

    this.on('newListener', event => {
      if (event === 'progress') {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });

    let bytesNotified = 0;

    internals.updateProgress = helpers_throttle(function throttledHandler() {
      const totalBytes = internals.length;
      const bytesTransferred = internals.bytesSeen;
      const progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self.destroyed) return;

      const rate = _speedometer(progressBytes);

      bytesNotified = bytesTransferred;

      process.nextTick(() => {
        self.emit('progress', {
          'loaded': bytesTransferred,
          'total': totalBytes,
          'progress': totalBytes ? (bytesTransferred / totalBytes) : undefined,
          'bytes': progressBytes,
          'rate': rate ? rate : undefined,
          'estimated': rate && totalBytes && bytesTransferred <= totalBytes ?
            (totalBytes - bytesTransferred) / rate : undefined
        });
      });
    }, internals.ticksRate);

    const onFinish = () => {
      internals.updateProgress(true);
    };

    this.once('end', onFinish);
    this.once('error', onFinish);
  }

  _read(size) {
    const internals = this[kInternals];

    if (internals.onReadCallback) {
      internals.onReadCallback();
    }

    return super._read(size);
  }

  _transform(chunk, encoding, callback) {
    const self = this;
    const internals = this[kInternals];
    const maxRate = internals.maxRate;

    const readableHighWaterMark = this.readableHighWaterMark;

    const timeWindow = internals.timeWindow;

    const divider = 1000 / timeWindow;
    const bytesThreshold = (maxRate / divider);
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;

    function pushChunk(_chunk, _callback) {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;

      if (internals.isCaptured) {
        internals.updateProgress();
      }

      if (self.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    }

    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;

      if (maxRate) {
        const now = Date.now();

        if (!internals.ts || (passed = (now - internals.ts)) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }

        bytesLeft = bytesThreshold - internals.bytes;
      }

      if (maxRate) {
        if (bytesLeft <= 0) {
          // next time window
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }

        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }

      if (maxChunkSize && chunkSize > maxChunkSize && (chunkSize - maxChunkSize) > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }

      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };

    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }

      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }

  setLength(length) {
    this[kInternals].length = +length;
    return this;
  }
}

/* harmony default export */ const helpers_AxiosTransformStream = (AxiosTransformStream);

// EXTERNAL MODULE: external "events"
var external_events_ = __webpack_require__(82361);
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/readBlob.js
const {asyncIterator} = Symbol;

const readBlob = async function* (blob) {
  if (blob.stream) {
    yield* blob.stream()
  } else if (blob.arrayBuffer) {
    yield await blob.arrayBuffer()
  } else if (blob[asyncIterator]) {
    yield* blob[asyncIterator]();
  } else {
    yield blob;
  }
}

/* harmony default export */ const helpers_readBlob = (readBlob);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToStream.js





const BOUNDARY_ALPHABET = utils.ALPHABET.ALPHA_DIGIT + '-_';

const textEncoder = new external_util_.TextEncoder();

const CRLF = '\r\n';
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;

class FormDataPart {
  constructor(name, value) {
    const {escapeName} = this.constructor;
    const isStringValue = utils.isString(value);

    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${
      !isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ''
    }${CRLF}`;

    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`
    }

    this.headers = textEncoder.encode(headers + CRLF);

    this.contentLength = isStringValue ? value.byteLength : value.size;

    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;

    this.name = name;
    this.value = value;
  }

  async *encode(){
    yield this.headers;

    const {value} = this;

    if(utils.isTypedArray(value)) {
      yield value;
    } else {
      yield* helpers_readBlob(value);
    }

    yield CRLF_BYTES;
  }

  static escapeName(name) {
      return String(name).replace(/[\r\n"]/g, (match) => ({
        '\r' : '%0D',
        '\n' : '%0A',
        '"' : '%22',
      }[match]));
  }
}

const formDataToStream = (form, headersHandler, options) => {
  const {
    tag = 'form-data-boundary',
    size = 25,
    boundary = tag + '-' + utils.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};

  if(!utils.isFormData(form)) {
    throw TypeError('FormData instance required');
  }

  if (boundary.length < 1 || boundary.length > 70) {
    throw Error('boundary must be 10-70 characters long')
  }

  const boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
  const footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF + CRLF);
  let contentLength = footerBytes.byteLength;

  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });

  contentLength += boundaryBytes.byteLength * parts.length;

  contentLength = utils.toFiniteNumber(contentLength);

  const computedHeaders = {
    'Content-Type': `multipart/form-data; boundary=${boundary}`
  }

  if (Number.isFinite(contentLength)) {
    computedHeaders['Content-Length'] = contentLength;
  }

  headersHandler && headersHandler(computedHeaders);

  return external_stream_.Readable.from((async function *() {
    for(const part of parts) {
      yield boundaryBytes;
      yield* part.encode();
    }

    yield footerBytes;
  })());
};

/* harmony default export */ const helpers_formDataToStream = (formDataToStream);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js




class ZlibHeaderTransformStream extends external_stream_.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }

  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;

      // Add Default Compression headers if no zlib headers are present
      if (chunk[0] !== 120) { // Hex: 78
        const header = Buffer.alloc(2);
        header[0] = 120; // Hex: 78
        header[1] = 156; // Hex: 9C 
        this.push(header, encoding);
      }
    }

    this.__transform(chunk, encoding, callback);
  }
}

/* harmony default export */ const helpers_ZlibHeaderTransformStream = (ZlibHeaderTransformStream);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/callbackify.js


const callbackify = (fn, reducer) => {
  return utils.isAsyncFn(fn) ? function (...args) {
    const cb = args.pop();
    fn.apply(this, args).then((value) => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
}

/* harmony default export */ const helpers_callbackify = (callbackify);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/http.js



























const zlibOptions = {
  flush: external_zlib_.constants.Z_SYNC_FLUSH,
  finishFlush: external_zlib_.constants.Z_SYNC_FLUSH
};

const brotliOptions = {
  flush: external_zlib_.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: external_zlib_.constants.BROTLI_OPERATION_FLUSH
}

const isBrotliSupported = utils.isFunction(external_zlib_.createBrotliDecompress);

const {http: httpFollow, https: httpsFollow} = follow_redirects;

const isHttps = /https:?/;

const supportedProtocols = node.protocols.map(protocol => {
  return protocol + ':';
});

/**
 * If the proxy or config beforeRedirects functions are defined, call them with the options
 * object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */
function dispatchBeforeRedirect(options) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options);
  }
}

/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 *
 * @returns {http.ClientRequestArgs}
 */
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== false) {
    const proxyUrl = (0,proxy_from_env/* getProxyForUrl */.j)(location);
    if (proxyUrl) {
      proxy = new URL(proxyUrl);
    }
  }
  if (proxy) {
    // Basic proxy authorization
    if (proxy.username) {
      proxy.auth = (proxy.username || '') + ':' + (proxy.password || '');
    }

    if (proxy.auth) {
      // Support proxy auth object form
      if (proxy.auth.username || proxy.auth.password) {
        proxy.auth = (proxy.auth.username || '') + ':' + (proxy.auth.password || '');
      }
      const base64 = Buffer
        .from(proxy.auth, 'utf8')
        .toString('base64');
      options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    }

    options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
    const proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost;
    // Replace 'host' since options is not a URL object
    options.host = proxyHost;
    options.port = proxy.port;
    options.path = location;
    if (proxy.protocol) {
      options.protocol = proxy.protocol.includes(':') ? proxy.protocol : `${proxy.protocol}:`;
    }
  }

  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    // Configure proxy for redirected request, passing the original config proxy to apply
    // the exact same logic as if the redirected request was performed by axios directly.
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}

const isHttpAdapterSupported = typeof process !== 'undefined' && utils.kindOf(process) === 'process';

// temporary hotfix

const wrapAsync = (asyncExecutor) => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;

    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    }

    const _resolve = (value) => {
      done(value);
      resolve(value);
    };

    const _reject = (reason) => {
      done(reason, true);
      reject(reason);
    }

    asyncExecutor(_resolve, _reject, (onDoneHandler) => (onDone = onDoneHandler)).catch(_reject);
  })
};

/*eslint consistent-return:0*/
/* harmony default export */ const http = (isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
    let {data, lookup, family} = config;
    const {responseType, responseEncoding} = config;
    const method = config.method.toUpperCase();
    let isDone;
    let rejected = false;
    let req;

    if (lookup && utils.isAsyncFn(lookup)) {
      lookup = helpers_callbackify(lookup, (entry) => {
        if(utils.isString(entry)) {
          entry = [entry, entry.indexOf('.') < 0 ? 6 : 4]
        } else if (!utils.isArray(entry)) {
          throw new TypeError('lookup async function must return an array [ip: string, family: number]]')
        }
        return entry;
      })
    }

    // temporary internal emitter until the AxiosRequest class will be implemented
    const emitter = new external_events_();

    const onFinished = () => {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(abort);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', abort);
      }

      emitter.removeAllListeners();
    }

    onDone((value, isRejected) => {
      isDone = true;
      if (isRejected) {
        rejected = true;
        onFinished();
      }
    });

    function abort(reason) {
      emitter.emit('abort', !reason || reason.type ? new cancel_CanceledError(null, config, req) : reason);
    }

    emitter.once('abort', reject);

    if (config.cancelToken || config.signal) {
      config.cancelToken && config.cancelToken.subscribe(abort);
      if (config.signal) {
        config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
      }
    }

    // Parse url
    const fullPath = buildFullPath(config.baseURL, config.url);
    const parsed = new URL(fullPath, 'http://localhost');
    const protocol = parsed.protocol || supportedProtocols[0];

    if (protocol === 'data:') {
      let convertedData;

      if (method !== 'GET') {
        return settle(resolve, reject, {
          status: 405,
          statusText: 'method not allowed',
          headers: {},
          config
        });
      }

      try {
        convertedData = fromDataURI(config.url, responseType === 'blob', {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw core_AxiosError.from(err, core_AxiosError.ERR_BAD_REQUEST, config);
      }

      if (responseType === 'text') {
        convertedData = convertedData.toString(responseEncoding);

        if (!responseEncoding || responseEncoding === 'utf8') {
          convertedData = utils.stripBOM(convertedData);
        }
      } else if (responseType === 'stream') {
        convertedData = external_stream_.Readable.from(convertedData);
      }

      return settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: 'OK',
        headers: new core_AxiosHeaders(),
        config
      });
    }

    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(new core_AxiosError(
        'Unsupported protocol ' + protocol,
        core_AxiosError.ERR_BAD_REQUEST,
        config
      ));
    }

    const headers = core_AxiosHeaders.from(config.headers).normalize();

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    // User-Agent is specified; handle case where no UA header is desired
    // Only set header if it hasn't been set in config
    headers.set('User-Agent', 'axios/' + VERSION, false);

    const onDownloadProgress = config.onDownloadProgress;
    const onUploadProgress = config.onUploadProgress;
    const maxRate = config.maxRate;
    let maxUploadRate = undefined;
    let maxDownloadRate = undefined;

    // support for spec compliant FormData objects
    if (utils.isSpecCompliantForm(data)) {
      const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);

      data = helpers_formDataToStream(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || undefined
      });
      // support for https://www.npmjs.com/package/form-data api
    } else if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
      headers.set(data.getHeaders());

      if (!headers.hasContentLength()) {
        try {
          const knownLength = await external_util_.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
          /*eslint no-empty:0*/
        } catch (e) {
        }
      }
    } else if (utils.isBlob(data)) {
      data.size && headers.setContentType(data.type || 'application/octet-stream');
      headers.setContentLength(data.size || 0);
      data = external_stream_.Readable.from(helpers_readBlob(data));
    } else if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(new core_AxiosError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          core_AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }

      // Add Content-Length header if data exists
      headers.setContentLength(data.length, false);

      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(new core_AxiosError(
          'Request body larger than maxBodyLength limit',
          core_AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }
    }

    const contentLength = utils.toFiniteNumber(headers.getContentLength());

    if (utils.isArray(maxRate)) {
      maxUploadRate = maxRate[0];
      maxDownloadRate = maxRate[1];
    } else {
      maxUploadRate = maxDownloadRate = maxRate;
    }

    if (data && (onUploadProgress || maxUploadRate)) {
      if (!utils.isStream(data)) {
        data = external_stream_.Readable.from(data, {objectMode: false});
      }

      data = external_stream_.pipeline([data, new helpers_AxiosTransformStream({
        length: contentLength,
        maxRate: utils.toFiniteNumber(maxUploadRate)
      })], utils.noop);

      onUploadProgress && data.on('progress', progress => {
        onUploadProgress(Object.assign(progress, {
          upload: true
        }));
      });
    }

    // HTTP basic authentication
    let auth = undefined;
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password || '';
      auth = username + ':' + password;
    }

    if (!auth && parsed.username) {
      const urlUsername = parsed.username;
      const urlPassword = parsed.password;
      auth = urlUsername + ':' + urlPassword;
    }

    auth && headers.delete('authorization');

    let path;

    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, '');
    } catch (err) {
      const customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      return reject(customErr);
    }

    headers.set(
      'Accept-Encoding',
      'gzip, compress, deflate' + (isBrotliSupported ? ', br' : ''), false
      );

    const options = {
      path,
      method: method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };

    // cacheable-lookup integration hotfix
    !utils.isUndefined(lookup) && (options.lookup = lookup);

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
      setProxy(options, config.proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    let transport;
    const isHttpsRequest = isHttps.test(options.protocol);
    options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsRequest ? external_https_ : external_http_;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      if (config.beforeRedirect) {
        options.beforeRedirects.config = config.beforeRedirect;
      }
      transport = isHttpsRequest ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    } else {
      // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
      options.maxBodyLength = Infinity;
    }

    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    req = transport.request(options, function handleResponse(res) {
      if (req.destroyed) return;

      const streams = [res];

      const responseLength = +res.headers['content-length'];

      if (onDownloadProgress) {
        const transformStream = new helpers_AxiosTransformStream({
          length: utils.toFiniteNumber(responseLength),
          maxRate: utils.toFiniteNumber(maxDownloadRate)
        });

        onDownloadProgress && transformStream.on('progress', progress => {
          onDownloadProgress(Object.assign(progress, {
            download: true
          }));
        });

        streams.push(transformStream);
      }

      // decompress the response body transparently if required
      let responseStream = res;

      // return the last request in case of redirects
      const lastRequest = res.req || req;

      // if decompress disabled we should not decompress
      if (config.decompress !== false && res.headers['content-encoding']) {
        // if no content, but headers still say that it is encoded,
        // remove the header not confuse downstream operations
        if (method === 'HEAD' || res.statusCode === 204) {
          delete res.headers['content-encoding'];
        }

        switch ((res.headers['content-encoding'] || '').toLowerCase()) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'x-gzip':
        case 'compress':
        case 'x-compress':
          // add the unzipper to the body stream processing pipeline
          streams.push(external_zlib_.createUnzip(zlibOptions));

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        case 'deflate':
          streams.push(new helpers_ZlibHeaderTransformStream());

          // add the unzipper to the body stream processing pipeline
          streams.push(external_zlib_.createUnzip(zlibOptions));

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        case 'br':
          if (isBrotliSupported) {
            streams.push(external_zlib_.createBrotliDecompress(brotliOptions));
            delete res.headers['content-encoding'];
          }
        }
      }

      responseStream = streams.length > 1 ? external_stream_.pipeline(streams, utils.noop) : streams[0];

      const offListeners = external_stream_.finished(responseStream, () => {
        offListeners();
        onFinished();
      });

      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new core_AxiosHeaders(res.headers),
        config,
        request: lastRequest
      };

      if (responseType === 'stream') {
        response.data = responseStream;
        settle(resolve, reject, response);
      } else {
        const responseBuffer = [];
        let totalResponseBytes = 0;

        responseStream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destroy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            responseStream.destroy();
            reject(new core_AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              core_AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
          }
        });

        responseStream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }

          const err = new core_AxiosError(
            'maxContentLength size of ' + config.maxContentLength + ' exceeded',
            core_AxiosError.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err);
          reject(err);
        });

        responseStream.on('error', function handleStreamError(err) {
          if (req.destroyed) return;
          reject(core_AxiosError.from(err, null, config, lastRequest));
        });

        responseStream.on('end', function handleStreamEnd() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (responseType !== 'arraybuffer') {
              responseData = responseData.toString(responseEncoding);
              if (!responseEncoding || responseEncoding === 'utf8') {
                responseData = utils.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            reject(core_AxiosError.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }

      emitter.once('abort', err => {
        if (!responseStream.destroyed) {
          responseStream.emit('error', err);
          responseStream.destroy();
        }
      });
    });

    emitter.once('abort', err => {
      reject(err);
      req.destroy(err);
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      // @todo remove
      // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
      reject(core_AxiosError.from(err, null, config, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      const timeout = parseInt(config.timeout, 10);

      if (Number.isNaN(timeout)) {
        reject(new core_AxiosError(
          'error trying to parse `config.timeout` to int',
          core_AxiosError.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devouring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        if (isDone) return;
        let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
        const transitional = config.transitional || defaults_transitional;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new core_AxiosError(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
          config,
          req
        ));
        abort();
      });
    }


    // Send the request
    if (utils.isStream(data)) {
      let ended = false;
      let errored = false;

      data.on('end', () => {
        ended = true;
      });

      data.once('error', err => {
        errored = true;
        req.destroy(err);
      });

      data.on('close', () => {
        if (!ended && !errored) {
          abort(new cancel_CanceledError('Request stream has been aborted', config, req));
        }
      });

      data.pipe(req);
    } else {
      req.end(data);
    }
  });
});

const __setProxy = (/* unused pure expression or super */ null && (setProxy));

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js





/* harmony default export */ const cookies = (node.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ const isURLSameOrigin = (node.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (utils.isFormData(requestData)) {
      if (node.isStandardBrowserEnv || node.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if(!requestHeaders.getContentType(/^\s*multipart\/form-data/)){
        requestHeaders.setContentType('multipart/form-data'); // mobile/desktop app frameworks
      } else if(utils.isString(contentType = requestHeaders.getContentType())){
        // fix semicolon duplication issue for ReactNative FormData implementation
        requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, '$1'))
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || defaults_transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (node.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && node.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js





const knownAdapters = {
  http: http,
  xhr: xhr
}

utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new core_AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new core_AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const lib_axios = (axios);


/***/ }),

/***/ 40572:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}');

/***/ })

};
;