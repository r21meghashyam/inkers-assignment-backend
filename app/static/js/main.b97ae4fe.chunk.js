(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){e.exports=a(374)},182:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(62),s=a.n(c),u=(a(182),a(12)),i=a.n(u),l=a(18),o=a(8),h=a(13),m=a(10),p=a(9),b=a(11),f=a(34),d=a(31),v=a(144),g=a(26),O=(a(185),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={classList:"input",value:""},a.setFocus=a.setFocus.bind(Object(g.a)(a)),a.setBlur=a.setBlur.bind(Object(g.a)(a)),a.handleChange=a.handleChange.bind(Object(g.a)(a)),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},function(){t.state.value&&t.setFocus()}),this.props.onChange&&this.props.onChange(e)}},{key:"setFocus",value:function(){this.setState({classList:"input focused"})}},{key:"setBlur",value:function(){this.state.value.length||this.setState({classList:"input"})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.classList},r.a.createElement("label",{htmlFor:this.props.label},this.props.label),r.a.createElement("input",Object.assign({},this.props,{value:this.state.value,autoComplete:"off",onChange:this.handleChange,id:this.props.label,onFocus:this.setFocus,onBlur:this.setBlur})))}}]),t}(n.Component)),j=(a(186),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"button"},r.a.createElement("button",Object.assign({},this.props,{disabled:!!this.props.disabled&&"disabled"}),this.props.children))}}]),t}(n.Component)),E=(a(187),a(89)),y=Object(E.a)(function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return arguments.length>1?arguments[1]:void 0}),k=function(e){return y.dispatch({type:"TOAST",message:e})},w=Object(E.a)(function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return arguments.length>1?arguments[1]:void 0}),C=function(e){return w.dispatch({type:e})},S="http://localhost:3003/api",N=function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(S,"/bargraph"),{credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:if(200!==(a=e.sent).status){e.next=11;break}return e.abrupt("return",a.data);case 11:return k(a.message),e.abrupt("return",null);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),k(e.t0.message);case 18:case"end":return e.stop()}},e,null,[[0,15]])}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(S,"/piechart"),{credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:if(200!==(a=e.sent).status){e.next=11;break}return e.abrupt("return",a.data);case 11:return k(a.message),e.abrupt("return",null);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),k(e.t0.message);case 18:case"end":return e.stop()}},e,null,[[0,15]])}));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(i.a.mark(function e(t,a){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(S,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:a}),credentials:"include"});case 3:return n=e.sent,e.next=6,n.json();case 6:if(200!==(r=e.sent).status){e.next=13;break}return localStorage.setItem("userCredentials",JSON.stringify(r.data)),C("LOGGED_IN"),e.abrupt("return",r.data);case 13:return k(r.message),e.abrupt("return",null);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),k(e.t0.message);case 20:case"end":return e.stop()}},e,null,[[0,17]])}));return function(t,a){return e.apply(this,arguments)}}(),F=function(){return localStorage.removeItem("userCredentials"),C("LOGGED_OUT"),!0},L=function(){return JSON.parse(localStorage.getItem("userCredentials"))},T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).BUTTON_NORMAL="Login",a.BUTTON_ONCLICK="Logging in...",a.state={buttonName:a.BUTTON_NORMAL},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(l.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.state.username){e.next=3;break}return e.abrupt("return",k("Please enter username"));case 3:if(this.state.password){e.next=5;break}return e.abrupt("return",k("Please enter password"));case 5:return e.next=7,this.setState({buttonName:this.BUTTON_ONCLICK});case 7:return e.next=9,B(this.state.username,this.state.password);case 9:if(!e.sent){e.next=13;break}this.setState({redirect:!0}),e.next=14;break;case 13:this.setState({buttonName:this.BUTTON_NORMAL});case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.redirect?r.a.createElement(f.a,{to:"/"}):r.a.createElement("div",{className:"loginBox"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"AUTHENTICATE"),r.a.createElement(O,{type:"text",name:"username",onChange:this.handleChange,label:"Username"}),r.a.createElement(O,{type:"password",name:"password",onChange:this.handleChange,label:"Password"}),r.a.createElement(j,{disabled:this.state.buttonName===this.BUTTON_ONCLICK},this.state.buttonName)))}}]),t}(r.a.Component),A=a(16),U=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"INKERS Assignment"),r.a.createElement(A.g,{width:800,height:100,data:U},r.a.createElement(A.f,{type:"monotone",dataKey:"pv",stroke:"#8884d8",strokeWidth:2})))},a}return Object(b.a)(t,e),t}(r.a.Component),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",null,"Not Found")},a}return Object(b.a)(t,e),t}(r.a.Component),K=(a(372),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showNav:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this;w.subscribe(function(){e.updateState()}),this.updateState()}},{key:"updateState",value:function(){this.setState({showNav:!!L()})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{id:"logo"},r.a.createElement(d.b,{to:"/"},"INKERS")),this.state.showNav?r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.c,{to:"/bargraph",activeClassName:"active"},"Bar Graph")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/piechart",activeClassName:"active"},"Pie Chart")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"#",onClick:F},"Logout")))):r.a.createElement("span",{className:"filler"},"\xa0"))}}]),t}(n.Component)),G=["#0088FE","#00C49F","#FFBB28","#FF8042"],R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.render=function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h1",null,"Bar Graph"),r.a.createElement(A.b,{width:730,height:250,data:a.state.data,label:!0,style:{alignSelf:"center"}},r.a.createElement(A.c,{strokeDasharray:"3 3"}),r.a.createElement(A.k,{dataKey:"name"}),r.a.createElement(A.l,null),r.a.createElement(A.j,null),r.a.createElement(A.e,null),r.a.createElement(A.a,{dataKey:"points",fill:"#8884d8"},a.state.data.map(function(e,t){return r.a.createElement(A.d,{key:"cell-".concat(t),fill:G[t%G.length]})})))))},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:console.log(t),t=t.map(function(e,t){return{name:"Bar "+(t+1),points:e}}),this.setState({data:t});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),_=["#0088FE","#00C49F","#FFBB28","#FF8042"],M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.render=function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h1",null,"Pie Chart"),r.a.createElement(A.i,{width:730,height:300},r.a.createElement(A.h,{labelLine:!0,data:a.state.data,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:120,fill:"#8884d8",label:!0},a.state.data.map(function(e,t){return r.a.createElement(A.d,{key:"cell-".concat(t),fill:_[t%_.length]})})))))},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:console.log(t),t=t.map(function(e,t){return{name:"Slice "+(t+1),value:e}}),this.setState({data:t});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),W=(a(373),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={animate:"toast",message:""},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.subscribe(function(){e.setState({animate:"toast show",message:y.getState().message},function(){setTimeout(function(){e.setState({animate:"toast"})},2e3)})})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.animate},this.state.message)}}]),t}(n.Component)),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={requireLogin:!0},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this;L()&&this.setState({requireLogin:!1}),this.UNSUBSCRIBE=w.subscribe(Object(l.a)(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=w.getState(),console.log(a),t.next=4,e.setState({requireLogin:"LOGGED_OUT"===a.type});case 4:console.log(e.state);case 5:case"end":return t.stop()}},t)})))}},{key:"componentWillUnmount",value:function(){this.UNSUBSCRIBE()}},{key:"render",value:function(){if(this.state.requireLogin)return r.a.createElement(f.a,{to:"/login"});var e=this.props.component;return r.a.createElement(e,null)}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(K,null),r.a.createElement("section",null,r.a.createElement(f.d,null,r.a.createElement(D,{path:"/",component:I,exact:!0}),r.a.createElement(D,{path:"/bargraph",component:R}),r.a.createElement(D,{path:"/piechart",component:M}),r.a.createElement(f.b,{path:"/Login",component:T}),r.a.createElement(f.b,{component:P}))),r.a.createElement(W,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.title="INKERS",s.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.b97ae4fe.chunk.js.map