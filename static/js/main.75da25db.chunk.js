(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),l=a.n(o),r=a(1),i=a(2),u=a(4),s=a(3),m=a(5);function d(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0}))}function p(e){var t=e.completed,a=e.title;return c.a.createElement("li",{className:t?"completed":""},c.a.createElement("div",{className:"view"},c.a.createElement("input",{className:"toggle",type:"checkbox",checked:t}),c.a.createElement("label",null,a),c.a.createElement("button",{className:"destroy"})))}var f=a(8),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={todos:f},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("ul",{className:"todo-list"},this.state.todos.map(function(e){return c.a.createElement(p,{key:e.id,title:e.title,completed:e.completed})}),";")}}]),t}(n.Component);function b(e){return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{class:"todo-count"},c.a.createElement("strong",null,e.todo_count)," item(s) left"),e.todo_count>0&&c.a.createElement("button",{class:"clear-completed"},"Clear completed"))}var h=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"todoapp"},c.a.createElement(d,null),c.a.createElement(E,null),c.a.createElement(b,{todo_count:1}))}}]),t}(n.Component);a(14);l.a.render(c.a.createElement(h,null),document.getElementById("root"))},8:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.75da25db.chunk.js.map