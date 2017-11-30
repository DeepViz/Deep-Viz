"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_echartsForReact=require("echarts-for-react"),_echartsForReact2=_interopRequireDefault(_echartsForReact),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_Basic2=require("./Basic"),_Basic3=_interopRequireDefault(_Basic2),ScatterNet=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,_Basic3.default),_createClass(t,[{key:"genOption",value:function(e){var t=e.config,r=e.color,o=t.data,n=t.x,i=t.y,a=t.maxSize,c=t.minSize,s=[],u=[],l={},p={};o.forEach(function(e){"effect"===e.type?(u=e.typeData,p="option"in e?e.option:{}):(s=e.typeData,l="option"in e?e.option:{})});var f=a||20,y=c||5,_=s.length>0?s:u,h=_.reduce(function(e,t){return e[2]>t[2]?e:t})[2],d=_.reduce(function(e,t){return e[2]>t[2]?t:e})[2],b={type:"category",data:[],splitLine:{show:!0,lineStyle:{color:this.fontColor,type:"dashed"}},nameTextStyle:{color:this.fontColor,fontSize:this.fontSize},axisLabel:{textStyle:{color:this.fontColor,fontSize:this.fontSize}},scale:!0};return _extends({grid:{left:20,right:20,bottom:0,top:50,containLabel:!0},title:{text:""},legend:{show:!1},tooltip:{formatter:function(e){return e.value[2]}},xAxis:_extends({},b,n),yAxis:_extends({},b,{nameLocation:"start"},i),series:[_extends({type:"scatter",itemStyle:{normal:{color:r&&"normal"in r?r.normal:"#D7D7D7"}},symbolSize:function(e){return y+(e[2]-d+.1)/(h-d+.1)*(f-y)},animationDelay:function(e){return 5*e},data:s},l),_extends({type:"effectScatter",itemStyle:{normal:{color:r&&"effect"in r?r.effect:"#108EE9"}},z:10,symbolSize:function(e){return y+(e[2]-d+.1)/(h-d+.1)*(f-y)},data:u},p)]},t.option)}},{key:"render",value:function(){return _react2.default.createElement(_echartsForReact2.default,{style:this.props.style||{height:450,width:"100%"},option:this.genOption(this.props),lazyUpdate:!1,notMerge:!0})}}]),t}();exports.default=ScatterNet,ScatterNet.propTypes={config:_propTypes2.default.shape({x:_propTypes2.default.object.isRequired,y:_propTypes2.default.object.isRequired,data:_propTypes2.default.array.isRequired})};