(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),i=n.n(o),l=n(1),r=n(2),u=n(4),s=n(3),m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.clockName,a=e.clockName;this.props.clockName!==e.clockName&&console.log("The Clock was renamed from ".concat(n," to ").concat(a))}},{key:"render",value:function(){var e=this.props.initialValue;return c.a.createElement("p",null,"Current time: ".concat(e))}}]),n}(a.Component),k=(n(12),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!1,initialValue:"00:00:00 AM",clockName:0},e.show=function(){return e.setState({isClockVisible:!0})},e.hide=function(){return e.setState({isClockVisible:!1})},e.randomNumber=function(){var t=Math.round(100*Math.random());e.setState({clockName:t})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=(new Date).toLocaleTimeString();console.log(t),e.setState({initialValue:t})}),1e3)}},{key:"render",value:function(){var e=this.show,t=this.hide,n=this.randomNumber,a=this.state,o=a.isClockVisible,i=a.initialValue,l=a.clockName;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),o&&c.a.createElement(m,{initialValue:i,clockName:l}),c.a.createElement("button",{type:"button",onClick:e},"Show Clock"),c.a.createElement("button",{type:"button",onClick:t},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:n},"Set random name"))}}]),n}(a.Component));i.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5fdf4541.chunk.js.map