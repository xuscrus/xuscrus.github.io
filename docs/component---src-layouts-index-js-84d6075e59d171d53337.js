webpackJsonp([0x67ef26645b2a,60335399758886],{73:function(A,e){A.exports={data:{site:{siteMetadata:{title:"CodeGamers"}}},layoutContext:{}}},125:function(A,e,t){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0;var r=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},o=t(1),i=n(o),a=t(45),u=n(a),c=t(73),l=n(c);e.default=function(A){return i.default.createElement(u.default,r({},A,l.default))},A.exports=e.default},74:function(A,e){"use strict";function t(A,e){if(A===e)return!0;if(A&&e&&"object"==typeof A&&"object"==typeof e){var a,u,c,l=n(A),s=n(e);if(l&&s){if(u=A.length,u!=e.length)return!1;for(a=u;0!==a--;)if(!t(A[a],e[a]))return!1;return!0}if(l!=s)return!1;var f=A instanceof Date,T=e instanceof Date;if(f!=T)return!1;if(f&&T)return A.getTime()==e.getTime();var E=A instanceof RegExp,d=e instanceof RegExp;if(E!=d)return!1;if(E&&d)return A.toString()==e.toString();var p=r(A);if(u=p.length,u!==r(e).length)return!1;for(a=u;0!==a--;)if(!o.call(e,p[a]))return!1;if(i&&A instanceof Element&&e instanceof Element)return A===e;for(a=u;0!==a--;)if(c=p[a],!("_owner"===c&&A.$$typeof||t(A[c],e[c])))return!1;return!0}return A!==A&&e!==e}var n=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;A.exports=function(A,e){try{return t(A,e)}catch(A){if(A.message&&A.message.match(/stack|recursion/i)||A.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",A.name,A.message),!1;throw A}}},75:function(A,e,t){function n(A){return A&&A.__esModule?A:{default:A}}function r(A,e){var t={};for(var n in A)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n]);return t}function o(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function i(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}function a(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}e.__esModule=!0,e.Helmet=void 0;var u=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},c=function(){function A(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}}(),l=t(1),s=n(l),f=t(2),T=n(f),E=t(81),d=n(E),p=t(74),m=n(p),S=t(76),h=t(28),y=function(A){var e,t;return t=e=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.shouldComponentUpdate=function(A){return!(0,m.default)(this.props,A)},t.prototype.mapNestedChildrenToProps=function(A,e){if(!e)return null;switch(A.type){case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case h.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+A.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(A){var e,t=A.child,n=A.arrayTypeChildren,r=A.newChildProps,o=A.nestedChildren;return u({},n,(e={},e[t.type]=[].concat(n[t.type]||[],[u({},r,this.mapNestedChildrenToProps(t,o))]),e))},t.prototype.mapObjectTypeChildren=function(A){var e,t,n=A.child,r=A.newProps,o=A.newChildProps,i=A.nestedChildren;switch(n.type){case h.TAG_NAMES.TITLE:return u({},r,(e={},e[n.type]=i,e.titleAttributes=u({},o),e));case h.TAG_NAMES.BODY:return u({},r,{bodyAttributes:u({},o)});case h.TAG_NAMES.HTML:return u({},r,{htmlAttributes:u({},o)})}return u({},r,(t={},t[n.type]=u({},o),t))},t.prototype.mapArrayTypeChildrenToProps=function(A,e){var t=u({},e);return Object.keys(A).forEach(function(e){var n;t=u({},t,(n={},n[e]=A[e],n))}),t},t.prototype.warnOnInvalidChildren=function(A,e){return!0},t.prototype.mapChildrenToProps=function(A,e){var t=this,n={};return s.default.Children.forEach(A,function(A){if(A&&A.props){var o=A.props,i=o.children,a=r(o,["children"]),u=(0,S.convertReactPropstoHtmlAttributes)(a);switch(t.warnOnInvalidChildren(A,i),A.type){case h.TAG_NAMES.LINK:case h.TAG_NAMES.META:case h.TAG_NAMES.NOSCRIPT:case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.STYLE:n=t.flattenArrayTypeChildren({child:A,arrayTypeChildren:n,newChildProps:u,nestedChildren:i});break;default:e=t.mapObjectTypeChildren({child:A,newProps:e,newChildProps:u,nestedChildren:i})}}}),e=this.mapArrayTypeChildrenToProps(n,e)},t.prototype.render=function(){var e=this.props,t=e.children,n=r(e,["children"]),o=u({},n);return t&&(o=this.mapChildrenToProps(t,o)),s.default.createElement(A,o)},c(t,null,[{key:"canUseDOM",set:function(e){A.canUseDOM=e}}]),t}(s.default.Component),e.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=A.peek,e.rewind=function(){var e=A.rewind();return e||(e=(0,S.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},t},b=function(){return null},g=(0,d.default)(S.reducePropsToState,S.handleClientStateChange,S.mapStateOnServer)(b),M=y(g);M.renderStatic=M.rewind,e.Helmet=M,e.default=M},28:function(A,e){e.__esModule=!0;var t=(e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),n=(e.VALID_TAG_NAMES=Object.keys(t).map(function(A){return t[A]}),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(n).reduce(function(A,e){return A[n[e]]=e,A},{}),e.SELF_CLOSING_TAGS=[t.NOSCRIPT,t.SCRIPT,t.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},76:function(A,e,t){(function(A){function n(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},o=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},i=t(1),a=n(i),u=t(20),c=n(u),l=t(28),s=function(A){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e===!1?String(A):String(A).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(A){var e=m(A,l.TAG_NAMES.TITLE),t=m(A,l.HELMET_PROPS.TITLE_TEMPLATE);if(t&&e)return t.replace(/%s/g,function(){return e});var n=m(A,l.HELMET_PROPS.DEFAULT_TITLE);return e||n||void 0},T=function(A){return m(A,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(A,e){return e.filter(function(e){return"undefined"!=typeof e[A]}).map(function(e){return e[A]}).reduce(function(A,e){return o({},A,e)},{})},d=function(A,e){return e.filter(function(A){return"undefined"!=typeof A[l.TAG_NAMES.BASE]}).map(function(A){return A[l.TAG_NAMES.BASE]}).reverse().reduce(function(e,t){if(!e.length)for(var n=Object.keys(t),r=0;r<n.length;r++){var o=n[r],i=o.toLowerCase();if(A.indexOf(i)!==-1&&t[i])return e.concat(t)}return e},[])},p=function(A,e,t){var n={};return t.filter(function(e){return!!Array.isArray(e[A])||("undefined"!=typeof e[A]&&M("Helmet: "+A+' should be of type "Array". Instead found type "'+r(e[A])+'"'),!1)}).map(function(e){return e[A]}).reverse().reduce(function(A,t){var r={};t.filter(function(A){for(var t=void 0,o=Object.keys(A),i=0;i<o.length;i++){var a=o[i],u=a.toLowerCase();e.indexOf(u)===-1||t===l.TAG_PROPERTIES.REL&&"canonical"===A[t].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===A[u].toLowerCase()||(t=u),e.indexOf(a)===-1||a!==l.TAG_PROPERTIES.INNER_HTML&&a!==l.TAG_PROPERTIES.CSS_TEXT&&a!==l.TAG_PROPERTIES.ITEM_PROP||(t=a)}if(!t||!A[t])return!1;var c=A[t].toLowerCase();return n[t]||(n[t]={}),r[t]||(r[t]={}),!n[t][c]&&(r[t][c]=!0,!0)}).reverse().forEach(function(e){return A.push(e)});for(var o=Object.keys(r),i=0;i<o.length;i++){var a=o[i],u=(0,c.default)({},n[a],r[a]);n[a]=u}return A},[]).reverse()},m=function(A,e){for(var t=A.length-1;t>=0;t--){var n=A[t];if(n.hasOwnProperty(e))return n[e]}return null},S=function(A){return{baseTag:d([l.TAG_PROPERTIES.HREF],A),bodyAttributes:E(l.ATTRIBUTE_NAMES.BODY,A),defer:m(A,l.HELMET_PROPS.DEFER),encode:m(A,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(l.ATTRIBUTE_NAMES.HTML,A),linkTags:p(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],A),metaTags:p(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],A),noscriptTags:p(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],A),onChangeClientState:T(A),scriptTags:p(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],A),styleTags:p(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],A),title:f(A),titleAttributes:E(l.ATTRIBUTE_NAMES.TITLE,A)}},h=function(){var A=Date.now();return function(e){var t=Date.now();t-A>16?(A=t,e(t)):setTimeout(function(){h(e)},0)}}(),y=function(A){return clearTimeout(A)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:A.requestAnimationFrame||h,g="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:A.cancelAnimationFrame||y,M=function(A){return console&&"function"==typeof console.warn&&console.warn(A)},R=null,I=function(A){R&&g(R),A.defer?R=b(function(){_(A,function(){R=null})}):(_(A),R=null)},_=function(A,e){var t=A.baseTag,n=A.bodyAttributes,r=A.htmlAttributes,o=A.linkTags,i=A.metaTags,a=A.noscriptTags,u=A.onChangeClientState,c=A.scriptTags,s=A.styleTags,f=A.title,T=A.titleAttributes;O(l.TAG_NAMES.BODY,n),O(l.TAG_NAMES.HTML,r),C(f,T);var E={baseTag:v(l.TAG_NAMES.BASE,t),linkTags:v(l.TAG_NAMES.LINK,o),metaTags:v(l.TAG_NAMES.META,i),noscriptTags:v(l.TAG_NAMES.NOSCRIPT,a),scriptTags:v(l.TAG_NAMES.SCRIPT,c),styleTags:v(l.TAG_NAMES.STYLE,s)},d={},p={};Object.keys(E).forEach(function(A){var e=E[A],t=e.newTags,n=e.oldTags;t.length&&(d[A]=t),n.length&&(p[A]=E[A].oldTags)}),e&&e(),u(A,d,p)},P=function(A){return Array.isArray(A)?A.join(""):A},C=function(A,e){"undefined"!=typeof A&&document.title!==A&&(document.title=P(A)),O(l.TAG_NAMES.TITLE,e)},O=function(A,e){var t=document.getElementsByTagName(A)[0];if(t){for(var n=t.getAttribute(l.HELMET_ATTRIBUTE),r=n?n.split(","):[],o=[].concat(r),i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=e[u]||"";t.getAttribute(u)!==c&&t.setAttribute(u,c),r.indexOf(u)===-1&&r.push(u);var s=o.indexOf(u);s!==-1&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)t.removeAttribute(o[f]);r.length===o.length?t.removeAttribute(l.HELMET_ATTRIBUTE):t.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&t.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},v=function(A,e){var t=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=t.querySelectorAll(A+"["+l.HELMET_ATTRIBUTE+"]"),r=Array.prototype.slice.call(n),o=[],i=void 0;return e&&e.length&&e.forEach(function(e){var t=document.createElement(A);for(var n in e)if(e.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)t.innerHTML=e.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)t.styleSheet?t.styleSheet.cssText=e.cssText:t.appendChild(document.createTextNode(e.cssText));else{var a="undefined"==typeof e[n]?"":e[n];t.setAttribute(n,a)}t.setAttribute(l.HELMET_ATTRIBUTE,"true"),r.some(function(A,e){return i=e,t.isEqualNode(A)})?r.splice(i,1):o.push(t)}),r.forEach(function(A){return A.parentNode.removeChild(A)}),o.forEach(function(A){return t.appendChild(A)}),{oldTags:r,newTags:o}},w=function(A){return Object.keys(A).reduce(function(e,t){var n="undefined"!=typeof A[t]?t+'="'+A[t]+'"':""+t;return e?e+" "+n:n},"")},N=function(A,e,t,n){var r=w(t),o=P(e);return r?"<"+A+" "+l.HELMET_ATTRIBUTE+'="true" '+r+">"+s(o,n)+"</"+A+">":"<"+A+" "+l.HELMET_ATTRIBUTE+'="true">'+s(o,n)+"</"+A+">"},L=function(A,e,t){return e.reduce(function(e,n){var r=Object.keys(n).filter(function(A){return!(A===l.TAG_PROPERTIES.INNER_HTML||A===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(A,e){var r="undefined"==typeof n[e]?e:e+'="'+s(n[e],t)+'"';return A?A+" "+r:r},""),o=n.innerHTML||n.cssText||"",i=l.SELF_CLOSING_TAGS.indexOf(A)===-1;return e+"<"+A+" "+l.HELMET_ATTRIBUTE+'="true" '+r+(i?"/>":">"+o+"</"+A+">")},"")},G=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce(function(e,t){return e[l.REACT_TAG_MAP[t]||t]=A[t],e},e)},B=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce(function(e,t){return e[l.HTML_TAG_MAP[t]||t]=A[t],e},e)},D=function(A,e,t){var n,r=(n={key:e},n[l.HELMET_ATTRIBUTE]=!0,n),o=G(t,r);return[a.default.createElement(l.TAG_NAMES.TITLE,o,e)]},H=function(A,e){return e.map(function(e,t){var n,r=(n={key:t},n[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(e).forEach(function(A){var t=l.REACT_TAG_MAP[A]||A;if(t===l.TAG_PROPERTIES.INNER_HTML||t===l.TAG_PROPERTIES.CSS_TEXT){var n=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[t]=e[A]}),a.default.createElement(A,r)})},j=function(A,e,t){switch(A){case l.TAG_NAMES.TITLE:return{toComponent:function(){return D(A,e.title,e.titleAttributes,t)},toString:function(){return N(A,e.title,e.titleAttributes,t)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return G(e)},toString:function(){return w(e)}};default:return{toComponent:function(){return H(A,e)},toString:function(){return L(A,e,t)}}}},U=function(A){var e=A.baseTag,t=A.bodyAttributes,n=A.encode,r=A.htmlAttributes,o=A.linkTags,i=A.metaTags,a=A.noscriptTags,u=A.scriptTags,c=A.styleTags,s=A.title,f=void 0===s?"":s,T=A.titleAttributes;return{base:j(l.TAG_NAMES.BASE,e,n),bodyAttributes:j(l.ATTRIBUTE_NAMES.BODY,t,n),htmlAttributes:j(l.ATTRIBUTE_NAMES.HTML,r,n),link:j(l.TAG_NAMES.LINK,o,n),meta:j(l.TAG_NAMES.META,i,n),noscript:j(l.TAG_NAMES.NOSCRIPT,a,n),script:j(l.TAG_NAMES.SCRIPT,u,n),style:j(l.TAG_NAMES.STYLE,c,n),title:j(l.TAG_NAMES.TITLE,{title:f,titleAttributes:T},n)}};e.convertReactPropstoHtmlAttributes=B,e.handleClientStateChange=I,e.mapStateOnServer=U,e.reducePropsToState=S,e.requestAnimationFrame=b,e.warn=M}).call(e,function(){return this}())},81:function(A,e,t){"use strict";function n(A){return A&&"object"==typeof A&&"default"in A?A.default:A}function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){A.prototype=Object.create(e.prototype),A.prototype.constructor=A,A.__proto__=e}function i(A,e,t){function n(A){return A.displayName||A.name||"Component"}if("function"!=typeof A)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(i){function s(){f=A(T.map(function(A){return A.props})),E.canUseDOM?e(f):t&&(f=t(f))}if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var f,T=[],E=function(A){function e(){return A.apply(this,arguments)||this}o(e,A),e.peek=function(){return f},e.rewind=function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var A=f;return f=void 0,T=[],A};var t=e.prototype;return t.shouldComponentUpdate=function(A){return!c(A,this.props)},t.componentWillMount=function(){T.push(this),s()},t.componentDidUpdate=function(){s()},t.componentWillUnmount=function(){var A=T.indexOf(this);T.splice(A,1),s()},t.render=function(){return u.createElement(i,this.props)},e}(a.Component);return r(E,"displayName","SideEffect("+n(i)+")"),r(E,"canUseDOM",l),E}}var a=t(1),u=n(a),c=n(t(82)),l=!("undefined"==typeof window||!window.document||!window.document.createElement);A.exports=i},82:function(A,e){A.exports=function(A,e,t,n){var r=t?t.call(n,A,e):void 0;if(void 0!==r)return!!r;if(A===e)return!0;if("object"!=typeof A||!A||"object"!=typeof e||!e)return!1;var o=Object.keys(A),i=Object.keys(e);if(o.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(e),u=0;u<o.length;u++){var c=o[u];if(!a(c))return!1;var l=A[c],s=e[c];if(r=t?t.call(n,l,s,c):void 0,r===!1||void 0===r&&l!==s)return!1}return!0}},83:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},84:function(A,e){A.exports="data:image/png;base64,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AAAA/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzAAAAAAAAAAAAAAAAAEAAAAAAAAAAACs7fwAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADiAFQTHwAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7AAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAKQAAACfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAC2AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAABUE/4AAABiAKzt6AAAAF0AAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO0AAADDAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAArO0XAAAA6QAAAKIAAADjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAVBPrAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAKzt2QAAACYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8wBUEw4AAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAQwAAAPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAFQT5AAAADsAAADtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACuAAAAtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArO0aAAAAZwAAAD8AAAAeAAAAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMoAAABAAFQT9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACs7SAAAADCAAAAHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzgAAAD8AVBP0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAACs7QUAAAApAAAAVAAAAHsAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/AAAAUwBUE/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEArO0gAAAAQQAAAPoAAAAZAAAANQAAADAAAAAaAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGsAAACcAFQT+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAKztXgAAAIsAAAAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPUAAADLAAAAXABUE+UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAACs7QQAAABBAAAASgAAAE0AAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDAAAAsAAAALwAVBPSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArO0LAAAAOwAAACsAAAAbAAAAAgAAAPMAAADfAAAAzgBUE9IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMSnooEByEHeAAAAAElFTkSuQmCC"},42:function(A,e,t){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0;var r=t(1),o=n(r),i=t(84),a=n(i),u=t(83),c=n(u),l=function(A){var e=A.href,t=A.logo,n=A.title;return o.default.createElement("a",{href:e,target:"_blank",title:n},o.default.createElement("img",{src:t,style:{verticalAlign:"middle"}}))},s={position:"fixed",bottom:0,borderTop:"1px solid #bdbdbd"},f={position:"absolute",right:0};e.default=function(A){var e=A.github,t=A.twitter;return o.default.createElement("nav",{className:"grey lighten-2 ",style:s},o.default.createElement("div",{className:"nav-wrapper center"},o.default.createElement("ul",{className:"right",style:f},o.default.createElement("li",null,l({href:"//twitter.com/"+t,logo:a.default,title:"twitter"})),o.default.createElement("li",null,l({href:"//github.com/"+e,logo:c.default,title:"github"}))),o.default.createElement("ul",{className:"grey-text",style:{display:"inline-block"}},o.default.createElement("li",null,o.default.createElement("span",null,"CodeGamers ",(new Date).getFullYear()," =D")))))},A.exports=e.default},43:function(A,e,t){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0;var r=t(42),o=n(r);e.default=o.default,A.exports=e.default},85:function(A,e,t){A.exports=t.p+"static/favicon.b24f39e7.png"},44:function(A,e,t){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0;var r=t(1),o=n(r),i=t(75),a=n(i),u=t(85);e.default=function(A){var e=(A.data,A.children);return o.default.createElement("div",{className:"site"},o.default.createElement(a.default,null,o.default.createElement("title",null,"CodeGamers"),o.default.createElement("link",{rel:"shortcut icon",type:"image/png",href:u}),o.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.default.createElement("description",null,"coding passion"),o.default.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),o.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"})),e)},A.exports=e.default},45:function(A,e,t){"use strict";function n(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0,e.query=void 0;var r=t(1),o=n(r),i=t(43),a=(n(i),t(44)),u=n(a);t(72),e.default=function(A){var e=A.children;A.data;return o.default.createElement(u.default,{data:{}},e)};e.query="** extracted graphql fragment **"},72:function(A,e){}});
//# sourceMappingURL=component---src-layouts-index-js-84d6075e59d171d53337.js.map