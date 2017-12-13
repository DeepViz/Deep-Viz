"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),_react=require("react"),_react2=_interopRequireDefault(_react),GaugePan=function(t){function e(t){function i(t,e,i,n,h,s,a,r,o,l,c,u,g){this.outerCircle=t,this.innerCircle=e,this.hand=i,this.centerCircle=n,this.clockCircle=h,this.tickMark=s,this.context=a,this.offScreen=r,this.offContext=o,this.minLength=l,this.realVaule=0,this.lastNum=null,this.leftLable=c,this.rightLable=u,this.displayLable=g}function n(t,e,i,n,h,s,a,r,o,l){this.x=t,this.y=e,this.radius=i,this.strokeStyle=n,this.fillStyle=h,this.startAngle=s,this.endAngle=a,this.lineWidth=r,this.context=o,this.clock=l}function h(t,e,i,n,h,s,a,r,o,l,c){this.tickMarkNum=t,this.bigMarkLength=e,this.smallMarkLength=i,this.bigMarkSpan=n,this.degreeStart=h,this.degreeSpan=s,this.context=a,this.minLength=r,this.startAngle=o,this.endAngle=l,this.unite=c}function s(t,e,i,n,h,s){this.centerX=t,this.centerY=e,this.angle=i,this.color=n,this.minLength=h,this.lineSpan=Math.ceil(.031*h)+.5,this.lineLength=Math.floor(.061*h),this.handLength=Math.ceil(h/2-Math.floor(.19*h)),this.context=s}_classCallCheck(this,e);var a=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return a.tickMarkNum=37,a.bigMarkSpan=3,a.degreeStart=t.startNumber||0,a.degreeSpan=t.numberInterval||20,a.leftLable=t.leftLabel||"男",a.rightLable=t.rightLabel||"女",a.displayLable=t.displayLable||!1,a.unite=t.unit||"km/h",a.startAngle=Math.PI/4,a.endAngle=3*Math.PI/4,a.canvas=null,a.context=null,a.outerCircle=null,a.innerCircle=null,a.centerCircle=null,a.clockCircle=null,a.tickMark=null,a.hand=null,a.minLength=0,a.centerX=0,a.centerY=0,a.Circle=n,a.TickMark=h,a.Hand=s,a.offScreen=document.createElement("canvas"),a.realContext=null,a.gauge=null,a.GaugeConstructor=i,i.prototype.initPan=function(){if(this.offContext.clearRect(0,0,this.minLength,this.minLength),this.outerCircle.stroke(),this.innerCircle.stroke(),this.hand.draw(),this.centerCircle.fill(),this.clockCircle.stroke(),this.tickMark.draw(),this.context.drawImage(this.offScreen,0,0,this.minLength,this.minLength),this.displayLable){var t=this.outerCircle.x+Math.cos(this.outerCircle.endAngle)*this.minLength/2*1.15,e=this.outerCircle.y+Math.sin(this.outerCircle.endAngle)*this.minLength/2*1.15,i=this.outerCircle.x+Math.cos(this.outerCircle.startAngle)*this.minLength/2*1.15,n=this.outerCircle.y+Math.sin(this.outerCircle.startAngle)*this.minLength/2*1.15;this.context.save(),this.context.font=Math.floor(.042*this.minLength)+"px serial",this.context.fillText(this.leftLable,t,e),this.context.fillText(this.rightLable,i,n),this.context.restore()}},i.prototype.calNum=function(t){!this.maxNum&&(this.maxNum=Math.floor(this.tickMark.tickMarkNum/this.tickMark.bigMarkSpan)*this.tickMark.degreeSpan+this.tickMark.degreeStart),!this.numPerDegree&&(this.numPerDegree=(2*Math.PI-(this.outerCircle.endAngle-this.outerCircle.startAngle))/this.maxNum),t<=this.maxNum&&(this.currentDegree=this.outerCircle.endAngle+t*this.numPerDegree,this.hand.angle=this.currentDegree,this.currentNum=t)},i.prototype.drawNum=function(){this.context.save(),this.context.textAlign="center",this.context.textBaseline="middle",this.context.fillStyle=this.hand.color,this.context.font=Math.floor(.1*this.minLength)+"px serial",this.context.fillText(this.currentNum,this.minLength/2,this.minLength-Math.floor(.2*this.minLength)),this.context.fillStyle="black",this.context.font=Math.floor(.05*this.minLength)+"px serial",this.context.fillText("单位："+this.tickMark.unite,this.minLength/2,this.minLength-Math.floor(.1*this.minLength)),this.context.restore()},i.prototype.drawPan=function(t){this.context.clearRect(0,0,this.minLength,this.minLength),this.calNum(t),this.initPan(),this.drawNum()},i.prototype.animateDrawPan=function(){null!==this.lastNum?(this.animateCount+=1,this.lastNum+=this.animateSpan,this.drawPan(this.lastNum),Math.abs(this.realVaule-this.lastNum)<=Math.abs(this.animateSpan)?(this.drawPan(this.realVaule),window.cancelAnimationFrame(this.animate)):(window.cancelAnimationFrame(this.animate),this.animate=window.requestAnimationFrame(this.animateDrawPan.bind(this)))):(this.drawPan(this.realVaule),this.lastNum=this.realVaule)},i.prototype.setValue=function(t){this.realVaule=t;var e=2;if(null!==this.lastNum){var i=Math.abs(this.realVaule-this.lastNum)/(this.realVaule-this.lastNum);e=1*i,Math.abs(this.realVaule-this.lastNum)>this.maxNum/2&&(e=6*i)}this.animateSpan=e,this.animateCount=0,window.requestAnimationFrame(this.animateDrawPan.bind(this))},n.prototype.createPath=function(){this.context.beginPath(),this.context.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.clock)},n.prototype.stroke=function(){this.createPath(),this.context.save(),this.context.strokeStyle=this.strokeStyle,this.context.lineWidth=this.lineWidth,this.context.stroke(),this.context.restore()},n.prototype.fill=function(){this.createPath(),this.context.save(),this.context.fillStyle=this.fillStyle,this.context.fill(),this.context.restore()},h.prototype.draw=function(){this.centerX=this.minLength/2,this.centerY=this.minLength/2;for(var t=(2*Math.PI-(this.endAngle-this.startAngle))/(this.tickMarkNum-1),e=0,i=this.endAngle;e<this.tickMarkNum;e+=1,i+=t){var n=this.centerX+(this.minLength/2-4-.5+Math.ceil(.004*this.minLength))*Math.cos(i),h=this.centerY+(this.minLength/2-4-.5+Math.ceil(.004*this.minLength))*Math.sin(i);if(e%3==0){this.context.beginPath(),this.context.moveTo(n,h),this.context.lineTo(n-this.bigMarkLength*Math.cos(i),h-this.bigMarkLength*Math.sin(i)),this.context.save(),this.context.strokeStyle="#2B92F9",this.context.lineWidth=Math.floor(.012*this.minLength)-.5,this.context.stroke(),this.context.restore(),this.context.beginPath();var s=n-(this.bigMarkLength+7)*Math.cos(i),a=h-(this.bigMarkLength+7)*Math.sin(i);this.context.save(),this.context.textAlign="center",this.context.textBaseline="middle",this.context.font=Math.floor(.027*this.minLength)+"px serial",this.context.fillText(this.degreeStart+e/3*this.degreeSpan,s,a),this.context.restore()}else this.context.beginPath(),this.context.moveTo(n,h),this.context.lineTo(n-this.smallMarkLength*Math.cos(i),h-this.smallMarkLength*Math.sin(i)),this.context.save(),this.context.strokeStyle="#2B92F9",this.context.lineWidth=Math.floor(.008*this.minLength)-.5,this.context.stroke(),this.context.restore()}},s.prototype.drawLine=function(){this.lx=this.centerX+Math.cos(this.angle)*this.lineSpan,this.ly=this.centerY+Math.sin(this.angle)*this.lineSpan,this.context.beginPath(),this.context.moveTo(this.lx,this.ly),this.context.lineTo(this.lx+Math.cos(this.angle)*this.lineLength,this.ly+Math.sin(this.angle)*this.lineLength),this.context.stroke()},s.prototype.drawHand=function(){var t=this.lx+Math.cos(this.angle)*(this.lineLength+Math.ceil(.011*this.minLength)),e=this.ly+Math.sin(this.angle)*(this.lineLength+Math.ceil(.011*this.minLength)),i=this.centerX+Math.cos(this.angle)*this.handLength,n=this.centerX+Math.sin(this.angle)*this.handLength;this.context.save(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.beginPath(),this.context.arc(t,e,Math.ceil(.011*this.minLength),0,2*Math.PI),this.context.fill();var h=t+Math.cos(this.angle)*Math.ceil(.011*this.minLength),s=e+Math.sin(this.angle)*Math.ceil(.011*this.minLength);this.context.beginPath(),this.context.moveTo(h,s),this.context.lineTo(i,n),this.context.closePath(),this.context.lineWidth=.0133*this.minLength,this.context.lineJoin="round",this.context.stroke(),this.context.restore()},s.prototype.draw=function(){this.drawLine(),this.drawHand()},a}return _inherits(e,_react2.default.Component),_createClass(e,[{key:"componentDidMount",value:function(){this.context=this.offScreen.getContext("2d"),this.realContext=this.canvas.getContext("2d");var t=window.getComputedStyle(this.canvas.parentNode),e=Math.floor(window.parseInt(t.width)),i=Math.floor(window.parseInt(t.height));this.minLength=Math.min(e,i),this.centerX=Math.floor(this.minLength/2)+.5,this.centerY=Math.floor(this.minLength/2)-.5,this.offScreen.width=1*this.minLength,this.offScreen.height=1*this.minLength,this.context.scale(1,1),this.canvas.width=this.minLength,this.canvas.height=this.minLength;var n=this.context.createLinearGradient(0,0,this.minLength,this.minLength);n.addColorStop(0,"#06F0FB"),n.addColorStop(.1,"#13E2FA"),n.addColorStop(.2,"#1CD8F9"),n.addColorStop(.3,"#2ACAF8"),n.addColorStop(.4,"#36BDF6"),n.addColorStop(.5,"#42B0F5"),n.addColorStop(.6,"#50A1F4"),n.addColorStop(.7,"#5D94F3"),n.addColorStop(.8,"#628FF2"),n.addColorStop(1,"#6D83F1"),this.outerCircle=new this.Circle(this.centerX,this.centerY,this.minLength/2-4+.5,n,null,this.startAngle,this.endAngle,Math.ceil(.0088*this.minLength)-.5,this.context,!0),this.innerCircle=new this.Circle(this.centerX,this.centerY,this.minLength/2-4-Math.floor(.15*this.minLength)+.5,n,null,this.startAngle,this.endAngle,Math.floor(.0065*this.minLength)+.5,this.context,!0),this.centerCircle=new this.Circle(this.centerX,this.centerY,Math.floor(.093*this.minLength)+.5,null,"rgba(43,146,249,0.2)",0,2*Math.PI,1,this.context,!0),this.clockCircle=new this.Circle(this.centerX,this.centerY,Math.ceil(.031*this.minLength)+.5,"#2B92F9",null,0,2*Math.PI,Math.floor(.031*this.minLength/2)+.5,this.context,!0),this.tickMark=new this.TickMark(this.tickMarkNum,Math.ceil(.062*this.minLength),Math.ceil(.039*this.minLength),3,this.degreeStart,this.degreeSpan,this.context,this.minLength,this.startAngle,this.endAngle,this.unite),this.hand=new this.Hand(this.centerX,this.centerY,3*Math.PI/4,"#2B92F9",this.minLength,this.context),this.gauge=new this.GaugeConstructor(this.outerCircle,this.innerCircle,this.hand,this.centerCircle,this.clockCircle,this.tickMark,this.realContext,this.offScreen,this.context,this.minLength,this.leftLable,this.rightLable,this.displayLable),this.gauge.setValue(this.props.number)}},{key:"componentWillReceiveProps",value:function(t){this.gauge.currentNum&&(this.gauge.lastNum=this.gauge.currentNum),t.number&&this.gauge.setValue(t.number)}},{key:"render",value:function(){var t=this;return _react2.default.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},_react2.default.createElement("canvas",{ref:function(e){t.canvas=e}},"对不起，您的浏览器不行，请升级浏览器！"))}}]),e}();exports.default=GaugePan;