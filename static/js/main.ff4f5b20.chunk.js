(window.webpackJsonprobotcard=window.webpackJsonprobotcard||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(13),n(3)),l=n(4),s=n(6),u=n(5),h=n(7),d=(n(14),n(15),n(16),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.robot.id,"?set=set2&size=180x180"),alt:"robot-card"}),a.a.createElement("h2",null,e.robot.name),a.a.createElement("p",null,e.robot.email," "),a.a.createElement("p",null,e.robot.phone," "))}),m=function(e){return a.a.createElement("div",{className:"card-list"},e.robot.map((function(e){return a.a.createElement(d,{key:e.id,robot:e})})))},b=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"serch box",type:"search",placeholder:t,onChange:n})}),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={robot:[],searchField:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robot:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.robot,o=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Monster Robot"),a.a.createElement(b,{className:"searchbox",placeholder:"search robot",handleChange:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(m,{robot:r}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ff4f5b20.chunk.js.map