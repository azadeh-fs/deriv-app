(window.webpackJsonp=window.webpackJsonp||[]).push([["profit_table"],{692:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(0),i=n.n(o),c=n(3),l=n(172),s=n(4),u=n.n(s);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=function(e){var t=e.className,n=d(e,["className"]);return i.a.createElement("svg",f({className:u()("inline-icon",t),width:"16",height:"16",viewBox:"0 0 16 16"},n),i.a.createElement("g",{fill:"#7F8397",fillRule:"nonzero"},i.a.createElement("path",{className:"color1-fill",d:"M4 3H2v11h12V3h-2v.5a.5.5 0 1 1-1 0V3H5v.5a.5.5 0 0 1-1 0V3zm1-1h6v-.5a.5.5 0 1 1 1 0V2h2a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2v-.5a.5.5 0 0 1 1 0V2zM2 5h12v1H2V5z"}),i.a.createElement("path",{className:"color1-fill",d:"M10.134 9H4.5a.5.5 0 0 1 0-1h5.634a1 1 0 1 1 0 1zM4 11h7.5a.5.5 0 1 1 0 1H4v-1z"})))};p.propTypes={className:r.a.string,classNamePath:r.a.string,onClick:r.a.func};var h=p,b=n(5),m=function(e){var t=e.onClick,n=e.is_active,a=e.children;return i.a.createElement("li",{className:u()({"composite-calendar__prepopulated-list--is-active":n}),onClick:t},a)};m.propTypes={children:r.a.oneOfType([r.a.func,r.a.node,r.a.array]),is_active:r.a.bool,onClick:r.a.func};var y=m;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=function(e){var t=e.items;return i.a.createElement("ul",{className:"composite-calendar__prepopulated-list"},t.map(function(e){var t=e.duration,n=e.is_active,a=v(e,["duration","is_active"]);return i.a.createElement(y,_({key:t,is_active:n||void 0},a))}))};O.propTypes={items:r.a.array};var g=O,j=n(6),w=n.n(j),k=n(176),E=n(177),D=n(175);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,T(t).call(this,e))).state={left_pane_date:Object(b.s)(e.value,1).unix(),right_pane_date:e.value},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,i.a.PureComponent),n=t,(a=[{key:"navigateFrom",value:function(e){this.setState({left_pane_date:e.unix(),right_pane_date:Object(b.b)(e,1).unix()})}},{key:"validateFromArrows",value:function(e,t){return"year"===t||-1!==Object(b.f)(Object(b.g)(this.state.left_pane_date),e)}},{key:"shouldDisableDate",value:function(e){return this.props.isPeriodDisabled(e.unix())}},{key:"validateToArrows",value:function(e,t){if("year"===t)return!0;var n=Object(b.g)(this.state.right_pane_date).startOf("month");return 0===Object(b.f)(Object(b.v)().startOf("month"),n)||1!==Object(b.f)(n,e)}},{key:"jumpToCurrentMonth",value:function(){var e=Object(b.v)().endOf("month").unix();this.setState({left_pane_date:Object(b.g)(e).endOf("month").subtract(1,"month").unix(),right_pane_date:e})}},{key:"navigateTo",value:function(e){this.setState({left_pane_date:Object(b.s)(e,1).unix(),right_pane_date:Object(b.v)(e).unix()})}},{key:"updateSelectedDate",value:function(e){this.props.onChange(w.a.utc(e.currentTarget.dataset.date,"YYYY-MM-DD").unix())}},{key:"render",value:function(){var e=this.state,t=e.right_pane_date,n=e.left_pane_date;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"first-month"},i.a.createElement(E.a,{calendar_date:n,calendar_view:"date",navigateTo:this.navigateFrom.bind(this),isPeriodDisabled:this.validateFromArrows.bind(this),hide_disabled_periods:!0,switchView:function(){return{}}}),i.a.createElement(k.a,{calendar_view:"date",calendar_date:n,selected_date:this.props.value,date_format:"YYYY-MM-DD",isPeriodDisabled:this.shouldDisableDate.bind(this),hide_others:!0,updateSelected:this.updateSelectedDate.bind(this)})),i.a.createElement("div",{className:"second-month"},i.a.createElement(E.a,{calendar_date:t,calendar_view:"date",isPeriodDisabled:this.validateToArrows.bind(this),navigateTo:this.navigateTo.bind(this),hide_disabled_periods:!0,switchView:function(){return{}}}),i.a.createElement(k.a,{calendar_view:"date",calendar_date:t,selected_date:this.props.value,date_format:"YYYY-MM-DD",isPeriodDisabled:this.shouldDisableDate.bind(this),hide_others:!0,updateSelected:this.updateSelectedDate.bind(this)}),i.a.createElement(D.a,{use_icon:"IconCalendarForwardToday",has_today_btn:!0,onClick:this.jumpToCurrentMonth.bind(this)})))}}])&&S(n.prototype,a),r&&S(n,r),t}();M.propTypes={isPeriodDisabled:r.a.func,onChange:r.a.func,value:r.a.number};var Y=M;function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=N(t).call(this,e),(n=!r||"object"!==R(r)&&"function"!=typeof r?L(a):r).state={show_to:!1,show_from:!1,list:[{children:Object(c.localize)("All time"),onClick:function(){return n.selectDateRange(0)},duration:0,is_active:!0},{children:Object(c.localize)("Last 7 days"),onClick:function(){return n.selectDateRange(7)},duration:7,is_active:!1},{children:Object(c.localize)("Last 30 days"),onClick:function(){return n.selectDateRange(30)},duration:30,is_active:!1},{children:Object(c.localize)("Last 60 days"),onClick:function(){return n.selectDateRange(60)},duration:60,is_active:!1},{children:Object(c.localize)("Last quarter"),onClick:function(){return n.selectDateRange(90)},duration:90,is_active:!1}]},n.setWrapperRef=n.setWrapperRef.bind(L(n)),n.handleClickOutside=n.handleClickOutside.bind(L(n)),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,i.a.PureComponent),n=t,(a=[{key:"selectDateRange",value:function(e){this.setActiveList(),this.hideCalendar(),this.applyBatch({from:e?Object(b.v)().startOf("day").subtract(e,"day").add(1,"s").unix():null,to:Object(b.v)().startOf("day").add(1,"d").subtract(1,"s").unix()})}},{key:"setActiveList",value:function(){var e=this,t=A(this.state.list);t.forEach(function(t){return t.is_active=!!e.isBoundToAList(t.duration)}),t.some(function(e){return e.is_active})||t.forEach(function(e){0===e.duration&&(e.is_active=!0)}),this.setState({list:t})}},{key:"hideCalendar",value:function(){this.setState({show_from:!1,show_to:!1})}},{key:"showCalendar",value:function(e){this.setState(z({},"show_".concat(e),!0))}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&(e.stopPropagation(),e.preventDefault(),this.hideCalendar())}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"isBoundToAList",value:function(e){var t=Object(b.v)().startOf("day").unix(),n=Object(b.g)(this.props.to).startOf("day").unix(),a=Object(b.g)(this.props.from).startOf("day").unix(),r=Object(b.g)(this.props.to).startOf("day").subtract(e,"days").unix();return t===n&&r===a}},{key:"setToDate",value:function(e){this.updateState("to",Object(b.g)(e).endOf("day").unix())}},{key:"setFromDate",value:function(e){this.updateState("from",e)}},{key:"updateState",value:function(e,t){this.setActiveList(),this.apply(e,t)}},{key:"applyBatch",value:function(e){this.props.onChange(e)}},{key:"apply",value:function(e,t){this.applyBatch(z({},e,t))}},{key:"isPeriodDisabledTo",value:function(e){return e+1<=this.props.from||e>Object(b.v)().endOf("day").unix()}},{key:"isPeriodDisabledFrom",value:function(e){return e-1>=this.props.to}},{key:"render",value:function(){var e=this.state,t=e.show_from,n=e.show_to,a=e.list,r=this.props,o=r.to,s=r.from;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"composite-calendar__input-fields"},i.a.createElement(l.a,{is_read_only:!0,placeholder:Object(c.localize)("Date from"),icon:h,onClick:this.showCalendar.bind(this,"from"),value:this.from_date_label}),i.a.createElement(l.a,{is_read_only:!0,placeholder:Object(c.localize)("Date to"),icon:h,onClick:this.showCalendar.bind(this,"to"),value:this.to_date_label})),n&&i.a.createElement("div",{className:"composite-calendar",ref:this.setWrapperRef},i.a.createElement(g,{items:a}),i.a.createElement(Y,{value:o,onChange:this.setToDate.bind(this),isPeriodDisabled:this.isPeriodDisabledTo.bind(this)})),t&&i.a.createElement("div",{className:"composite-calendar",ref:this.setWrapperRef},i.a.createElement(g,{items:a}),i.a.createElement(Y,{value:s,onChange:this.setFromDate.bind(this),isPeriodDisabled:this.isPeriodDisabledFrom.bind(this)})))}},{key:"to_date_label",get:function(){var e=Object(b.g)(this.props.to);return 0===Object(b.e)(e)?Object(c.localize)("Today"):e.format("MMM, DD YYYY")}},{key:"from_date_label",get:function(){var e=Object(b.g)(this.props.from);return this.props.from?e.format("MMM, DD YYYY"):""}}])&&F(n.prototype,a),r&&F(n,r),t}();B.propTypes={from:r.a.number,onChange:r.a.func,to:r.a.number};t.a=B},705:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),i=n(0),c=n.n(i),l=n(33),s=n(3),u=n(20),f=n(115),d=n(698),p=n(14),h=n(692),b=n(90),m=n(35),y=n(9),_=n(694),v=n(696),O=n(695),g=n(697),j=n(171),w=n.n(j);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=D(this,(e=C(t)).call.apply(e,[this].concat(r)))).getRowAction=function(e){return Object(m.c)()[w.a.extractInfoFromShortcode(e.shortcode).category.toUpperCase()]?Object(b.b)(e.contract_id):{component:c.a.createElement(p.a,{i18n_default_text:"This trade type is currently not supported on {{website_name}}. Please go to <0>Binary.com</0> for details.",values:{website_name:f.b},components:[c.a.createElement("a",{key:0,className:"link link--orange",rel:"noopener noreferrer",target:"_blank",href:Object(u.urlFor)("user/profit_tablews",void 0,void 0,!0)})]})}},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,c.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"componentWillUnmount",value:function(){this.props.onUnmount()}},{key:"render",value:function(){var e=this.props,t=e.component_icon,n=e.currency,a=e.data,r=e.date_from,o=e.date_to,i=e.is_empty,l=e.is_loading,u=e.error,f=e.handleDateChange,p=e.handleScroll,b=e.has_selected_date,m=e.totals;if(u)return c.a.createElement("p",null,u);var y=c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{onChange:f,from:r,to:o})),j=Object(g.b)(n,a.length);return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{i18n_heading:Object(s.localize)("Profit table"),i18n_message:Object(s.localize)("View all trades purchased on your account, and a summary of your total profit/loss."),filter_component:y}),l&&0===a.length||i?c.a.createElement(v.a,{is_loading:l,has_selected_date:b,is_empty:i,empty_message_component:_.a,component_icon:t,localized_message:Object(s.localize)("You have no trading activity yet."),localized_period_message:Object(s.localize)("You have no trading activity for this period.")}):c.a.createElement(d.a,{className:"profit-table",data_source:a,columns:j,onScroll:p,footer:m,is_empty:i,getRowAction:this.getRowAction},c.a.createElement(v.a,{is_loading:l})))}}])&&E(n.prototype,a),r&&E(n,r),t}();P.propTypes={component_icon:r.a.string,currency:r.a.string,data:o.PropTypes.arrayOrObservableArray,date_from:r.a.number,date_to:r.a.number,error:r.a.string,handleDateChange:r.a.func,handleScroll:r.a.func,has_selected_date:r.a.bool,history:r.a.object,is_empty:r.a.bool,is_loading:r.a.bool,onMount:r.a.func,onUnmount:r.a.func,totals:r.a.object};t.default=Object(y.b)(function(e){var t=e.modules;return{currency:e.client.currency,data:t.profit_table.data,date_from:t.profit_table.date_from,date_to:t.profit_table.date_to,error:t.profit_table.error,handleScroll:t.profit_table.handleScroll,handleDateChange:t.profit_table.handleDateChange,has_selected_date:t.profit_table.has_selected_date,is_empty:t.profit_table.is_empty,is_loading:t.profit_table.is_loading,onMount:t.profit_table.onMount,onUnmount:t.profit_table.onUnmount,totals:t.profit_table.totals}})(Object(l.g)(P))}}]);
//# sourceMappingURL=profit_table.456aeef852b1be2aa484.js.map