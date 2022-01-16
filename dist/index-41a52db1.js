import React from 'react';

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

var isAndroid = false;

if (typeof navigator !== 'undefined') {
  isAndroid = navigator.userAgent.indexOf('Android') > -1;
}

var statusBarHeight = isAndroid ? 25 : 20;
var navHeight = isAndroid ? 48 : 44;

var NavBar =
/** @class */
function (_super) {
  __extends(NavBar, _super);

  function NavBar(props) {
    var _this = _super.call(this, props) || this;

    _this.handleNavigateBack = function () {
      var onNavigateBack = _this.props.onNavigateBack;
      onNavigateBack && onNavigateBack();
    };

    return _this;
  }

  NavBar.prototype.render = function () {
    var _a = this.props,
        title = _a.title,
        statusBarHeight = _a.statusBarHeight,
        height = _a.height,
        backgroundColor = _a.backgroundColor,
        textColor = _a.textColor,
        fontSize = _a.fontSize,
        fontWeight = _a.fontWeight,
        navigationBarTextStyle = _a.navigationBarTextStyle;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "navigation",
      style: {
        backgroundColor: backgroundColor,
        paddingTop: statusBarHeight
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "navigation__bar",
      style: {
        height: height,
        lineHeight: height + 'px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "navigation__bar__left",
      style: {
        height: height
      },
      onClick: this.handleNavigateBack
    }, /*#__PURE__*/React.createElement("div", {
      className: "navigation__bar__left__back-btn__iocn",
      style: {
        backgroundColor: navigationBarTextStyle
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "navigation__bar__center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "navigation__bar__center__title",
      style: {
        color: textColor,
        fontSize: fontSize,
        fontWeight: fontWeight
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      className: "navigation__bar__right",
      style: {
        height: height
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: height,
        paddingTop: statusBarHeight
      }
    }));
  };

  NavBar.defaultProps = {
    onNavigateBack: function onNavigateBack() {},
    title: '',
    statusBarHeight: statusBarHeight,
    height: navHeight,
    backgroundColor: '#fff',
    textColor: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    navigationBarTextStyle: '#000000'
  };
  return NavBar;
}(React.PureComponent);

export { NavBar as N, __rest as _, __assign as a };
