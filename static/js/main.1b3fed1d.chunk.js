(this.webpackJsonpthe_snake=this.webpackJsonpthe_snake||[]).push([[0],{1:function(e,t,a){e.exports={container:"setting_container__1Nerv",button:"setting_button__388Q4",active:"setting_active__3HII6",input:"setting_input__jFB5y",div:"setting_div__2wLzg"}},12:function(e,t,a){e.exports={container1:"game_container1__3YcSU",score_box:"game_score_box__3UALe",button:"game_button__3zKn7",button1:"game_button1__1X52O",game:"game_game__2K-vD",q:"game_q__3jsqJ"}},25:function(e,t,a){e.exports={div:"game_over_div__1c3E0",GameOver:"game_over_GameOver__1CE6G"}},26:function(e,t,a){e.exports={div:"logo_div__AgPFA",logo:"logo_logo__1BLQM"}},43:function(e,t,a){e.exports={canvas:"core_canvas__37Crl"}},45:function(e,t,a){e.exports=a.p+"static/media/settings.7e19eab3.svg"},46:function(e,t,a){e.exports=a.p+"static/media/home.569e8718.svg"},47:function(e,t,a){e.exports=a(85)},52:function(e,t,a){},53:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n,s,o=a(0),r=a.n(o),i=a(42),l=a.n(i),c=(a(52),a(6)),h=a(7),d=a(9),u=a(8),g=(a(53),a(43)),p=a.n(g),m=Math.floor(400*Math.random()),y={grow:0,length1:100,hardx:50,hardy:m,start_x1:150,start_y1:m,toggle1:"right",ways:[],snack:[],speed:2,arr:[],angle1:0,angle2:0},_={x:Math.floor(200*Math.random()),y:Math.floor(200*Math.random())};function f(e,t,a,o,r,i,l){var c=document.querySelector("canvas");window.innerWidth<700?c.width=window.innerWidth-25:c.width=window.innerWidth/2,l&&(c.width=l),y.width=c.width,y.height=c.height;var h=c.getContext("2d");h.lineWidth=16;var d=a.the_color,u=a.the_headColor;function g(e,t,a,n,s,o,r,i,l,c,d){if(h.beginPath(),h.fillStyle=d?"black":i,h.beginPath(),h.fillStyle=r,h.arc(e,t,h.lineWidth/2,0*Math.PI/180,360*Math.PI/180),h.fill(),h.strokeStyle=r,h.beginPath(),h.moveTo(e,t),h.lineTo(a,n),h.stroke(),h.beginPath(),h.fillStyle=i,h.arc(a,n,h.lineWidth/2,s*Math.PI/180,o*Math.PI/180),h.fill(),h.closePath(),l[0]){for(var u=0;u<l.length-1;u++)l.length>1&&!l[u].connect&&(h.beginPath(),h.fillStyle=r,h.arc(l[u].x2,l[u].y2,h.lineWidth/2,0*Math.PI/180,360*Math.PI/180),h.fill(),h.beginPath(),h.moveTo(l[u].x2,l[u].y2),h.lineTo(l[u+1].x2,l[u+1].y2),h.stroke());if(h.beginPath(),h.moveTo(l[0].x1,l[0].y1),h.lineTo(l[0].x2,l[0].y2),h.stroke(),h.beginPath(),h.fillStyle=r,h.arc(l[0].x1,l[0].y1,h.lineWidth/2,0*Math.PI/180,360*Math.PI/180),h.fill(),l.find((function(e){return e.connect}))&&c[0])for(var g=0;g<c.length;g++)h.beginPath(),h.moveTo(c[g].x1,c[g].y1),h.lineTo(c[g].x2,c[g].y2),h.stroke()}}!function l(){o&&o.emit("onPlay",{room_id:r,the_snake:y,color:{head:u,body:d},fruit:_}),n=requestAnimationFrame(l),function(){switch(h.clearRect(0,0,c.width,c.height),y.length1+=y.grow,y.toggle1){case"right":y.angle1=270,y.angle2=90,y.start_x1+=y.speed,y.start_x1+=y.grow,y.start_x1>=y.hardx+y.length1&&(y.hardx+=y.speed);break;case"left":y.angle1=90,y.angle2=270,y.start_x1-=y.speed,y.start_x1-=y.grow,y.start_x1<=y.hardx-y.length1&&(y.hardx-=y.speed);break;case"down":y.angle1=360,y.angle2=180,y.start_y1+=y.speed,y.start_y1+=y.grow,y.start_y1>=y.hardy+y.length1&&(y.hardy+=y.speed);break;case"up":y.angle1=180,y.angle2=360,y.start_y1-=y.speed,y.start_y1-=y.grow,y.start_y1<=y.hardy-y.length1&&(y.hardy-=y.speed);break;default:y.toggle1="right"}h.beginPath(),h.fillStyle="red",h.arc(_.x,_.y,h.lineWidth,0,2*Math.PI,!1),h.fill(),g(y.hardx,y.hardy,y.start_x1,y.start_y1,y.angle1,y.angle2,d,u,y.ways,y.arr),y.grow=0}(),function(){y.ways[0]&&(e=y.ways)[0]&&(e[0].y1===e[0].y2?(e[0].x1<e[0].x2&&(e[0].x1+=y.speed,e[0].x1>e[0].x2&&(e[0].x1=e[0].x2)),e[0].x1>e[0].x2&&(e[0].x1-=y.speed,e[0].x1<e[0].x2&&(e[0].x1=e[0].x2)),e[0].x1===e[0].x2&&(e[0].connect&&y.arr.splice(0,1),e.splice(0,1),y.snack.splice(0,1))):e[0].x1===e[0].x2&&(e[0].y1<e[0].y2&&(e[0].y1+=y.speed,e[0].y1>e[0].y2&&(e[0].y1=e[0].y2)),e[0].y1>e[0].y2&&(e[0].y1-=y.speed,e[0].y1<e[0].y2&&(e[0].y1=e[0].y2)),e[0].y1===e[0].y2&&(e[0].connect&&y.arr.splice(0,1),e.splice(0,1),y.snack.splice(0,1))));var e;(y.start_x1>c.width||y.start_y1>c.height||y.start_x1<0||y.start_y1<0)&&(y.ways.push({x1:y.hardx,y1:y.hardy,x2:y.start_x1,y2:y.start_y1,connect:!0}),y.start_x1>c.width&&(y.start_x1=0,y.hardx=0),y.start_y1>c.height&&(y.start_y1=0,y.hardy=0),y.start_x1<0&&(y.start_x1=c.width,y.hardx=c.width),y.start_y1<0&&(y.start_y1=c.height,y.hardy=c.height))}(),function(){if("restricted"===a.mode&&(y.start_x1>=c.width||y.start_y1>=c.height||y.start_x1<=0||y.start_y1<=0))return void t();1===y.ways.length&&(y.length1>=c.width-h.lineWidth||y.length1>=c.height-h.lineWidth)&&!0===y.ways[0].connect&&t();y.ways.forEach((function(e){var a=y.start_x1-e.x1,n=y.start_y1-e.y1;Math.abs(n)<=h.lineWidth&&(y.start_x1<e.x2&&y.start_x1>e.x1||y.start_x1>e.x2&&y.start_x1<e.x1)&&t(),Math.abs(a)<=h.lineWidth&&(y.start_y1<e.y2&&y.start_y1>e.y1||y.start_y1>e.y2&&y.start_y1<e.y1)&&t()}))}(),function(e,t,a,n){var s=e-a,o=t-n;return Math.sqrt(Math.pow(s,2)+Math.pow(o,2))}(_.x,_.y,y.start_x1,y.start_y1)<h.lineWidth+h.lineWidth/2&&(o?(o.emit("ate",r),_={},e(y.speed),i()):(_.x=Math.floor(Math.random()*c.width),_.y=Math.floor(Math.random()*c.height),e(y.speed)),"increased"===a.speed&&(y.speed>=a.thespeed||(y.speed+=.2)),y.grow=10),s&&g(s.the_snake.hardx,s.the_snake.hardy,s.the_snake.start_x1,s.the_snake.start_y1,s.the_snake.angle1,s.the_snake.angle2,s.color.body,s.color.head,s.the_snake.ways,s.the_snake.arr,!0)}()}function x(e){37!==e.keyCode&&39!==e.keyCode||0===y.speed||(y.ways[0]&&y.ways[y.ways.length-1].connect&&y.arr.push({x1:y.hardx,y1:y.hardy,x2:y.start_x1,y2:y.start_y1,draw:!0}),y.ways.push({x1:y.hardx,y1:y.hardy,x2:y.start_x1,y2:y.start_y1}),39===e.keyCode&&(y.hardy=y.start_y1,y.hardx=y.start_x1,"right"===y.toggle1||""===y.toggle1?y.toggle1="down":"down"===y.toggle1?y.toggle1="left":"left"===y.toggle1?y.toggle1="up":"up"===y.toggle1&&(y.toggle1="right")),37===e.keyCode&&(y.hardy=y.start_y1,y.hardx=y.start_x1,"right"===y.toggle1||""===y.toggle1?y.toggle1="up":"up"===y.toggle1?y.toggle1="left":"left"===y.toggle1?y.toggle1="down":"down"===y.toggle1&&(y.toggle1="right")))}function v(e){y.speed=e}var w=0;function b(e){w=e.changedTouches[0].clientX}function E(e){var t=e.changedTouches[0].clientX;w>t&&(e.keyCode=37),w<t&&(e.keyCode=39),x(e)}var k=r.a.memo((function(e){var t=e.add,a=e.die,i=e.spee,l=e.options,c=e.socket,h=e.room_id,d=e.send;return Object(o.useEffect)((function(){c&&(c.emit("ate",h),c.on("onPlay",(function(e){!function(e){s=e}(e)})),c.on("ate",(function(e){!function(e){_=e}(e)})),c.emit("adjust",{height:window.innerHeight,width:window.innerWidth,room_id:h}))}),[c,h]),Object(o.useEffect)((function(){0===i?v(0):"fixed"===l.speed?v(+l.thespeed):"increased"===l.speed&&v(i)}),[i,l]),Object(o.useEffect)((function(){return window.addEventListener("keyup",x),window.addEventListener("touchstart",b),window.addEventListener("touchend",E),function(){window.removeEventListener("keyup",x),window.removeEventListener("touchstart",b),window.removeEventListener("touchend",E),y.length1=100,y.hardx=50,y.hardy=Math.floor(400*Math.random()),y.start_x1=y.hardx+y.length1,y.start_y1=y.hardy,y.toggle1="right",y.speed=2,y.ways=[],y.arr=[],y.snack=[],window.cancelAnimationFrame(n)}}),[]),Object(o.useEffect)((function(){c?c.on("adjust",(function(e){var n;(n=e.width<window.innerWidth?e.width:window.innerWidth)>700&&(n*=.5),f(t,a,l,c,h,d,n)})):f(t,a,l,c,h,d)}),[t,a,l,c,h,d]),r.a.createElement("canvas",{width:"400px",height:"400px",className:p.a.canvas})}));function S(e){return r.a.createElement("div",{className:"score_box"},r.a.createElement("h1",null," Score"),r.a.createElement("span",{style:{fontSize:"2.2rem"}},e.num),e.num2?r.a.createElement("span",{style:{display:"inline-block",marginLeft:"10px",fontSize:"2.2rem",color:"rgba(255,0,0,.2)"}},e.num2):"")}var C=a(25),O=a.n(C);function M(e){var t=e.score,a=e.result;return r.a.createElement("div",{className:O.a.div},r.a.createElement("div",{className:O.a.GameOver},r.a.createElement("h1",null,"Game Over"),r.a.createElement("h1",null,a),r.a.createElement("h1",{style:{marginTop:0}},"Your score is ",t)))}var j,P=a(12),N=a.n(P),W=a(44),I=a.n(W),T=(r.a.PureComponent,function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={score:0,scoreOpponent:0,alive:!0,start:!1,online:!1,speed:2,message:""},e.raw_speed=0,e.increase_score=function(t){e.raw_speed=t,e.setState((function(e){return{score:e.score+1}}))},e.getScoreOpponent=function(t){e.setState({scoreOpponent:t})},e.die=function(t,a){e.setState({alive:!1}),t&&e.setState({message:a})},e.pause=function(){e.setState({speed:0})},e.resume=function(){e.setState({speed:e.raw_speed||2})},e.start=function(){e.setState({start:!0})},e.startOnline=function(){e.setState({start:!0,online:!0})},e.restart=function(){e.setState({score:0,alive:!0,start:!0,speed:2})},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:N.a.game},this.state.start?this.state.alive?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{num:this.state.score,num2:this.state.scoreOpponent}),this.state.online?"":r.a.createElement(k,{options:this.props.options,spee:this.state.speed,alive:this.state.alive,add:this.increase_score,die:this.die})):r.a.createElement(M,{result:this.state.message,score:this.state.score}):"",r.a.createElement("div",{style:{flex:2,display:"flex",alignItems:"center"}},this.state.start?this.state.speed>0?this.state.alive?r.a.createElement("button",{className:N.a.button,onClick:this.pause}," Pause"):r.a.createElement("button",{className:N.a.button,onClick:this.restart},"ReStart"):r.a.createElement("button",{className:N.a.button,onClick:this.resume}," resume"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:N.a.button1,onClick:this.start},"Start"))))}}]),a}(o.Component)),L=a(45),F=a.n(L),A=a(46),q=a.n(A),B=a(26),G=a.n(B);function R(e){var t=e.click,a=e.home;return r.a.createElement("div",{className:G.a.div,onClick:t},r.a.createElement("img",{className:G.a.logo,src:a?q.a:F.a,alt:"setting",height:"50px",width:"50px"}))}var z=a(1),H=a.n(z),J=["red","blue","green","black","orange","white"],U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={options:{}},e.set_thespeed=function(t){var a=Object.assign(e.state.options,{thespeed:t.target.value});e.setState({options:a})},e.set_color=function(t){document.querySelector("#body").style.backgroundColor=t.target.value;var a=Object.assign(e.state.options,{the_color:t.target.value});e.setState({options:a})},e.set_headColor=function(t){document.querySelector("#head").style.backgroundColor=t.target.value;var a=Object.assign(e.state.options,{the_headColor:t.target.value});e.setState({options:a})},e}return Object(h.a)(a,[{key:"componentWillUnmount",value:function(){this.props.Set(this.state.options)}},{key:"componentDidMount",value:function(){this.setState({options:this.props.options})}},{key:"set_mode",value:function(e){var t=Object.assign(this.state.options,{mode:e});this.setState({options:t})}},{key:"set_speed",value:function(e){var t=Object.assign(this.state.options,{speed:e});this.setState({options:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:H.a.container},r.a.createElement("h1",null,"setting"),r.a.createElement("div",{className:H.a.div},r.a.createElement("h2",null,"mode of game"),r.a.createElement("button",{className:"".concat(H.a.button," \n                ").concat("free"===this.state.options.mode?H.a.active:""),onClick:this.set_mode.bind(this,"free")},"Free"),r.a.createElement("button",{className:"".concat(H.a.button," \n                ").concat("restricted"===this.state.options.mode?H.a.active:""),onClick:this.set_mode.bind(this,"restricted")},"Resticted")),r.a.createElement("div",{className:H.a.div},r.a.createElement("h2",null,"speed"),r.a.createElement("button",{className:"".concat(H.a.button," \n                ").concat("fixed"===this.state.options.speed?H.a.active:""),onClick:this.set_speed.bind(this,"fixed")},"Fixed"),r.a.createElement("button",{className:"".concat(H.a.button," \n                ").concat("increased"===this.state.options.speed?H.a.active:""),onClick:this.set_speed.bind(this,"increased")},"Increased"),"fixed"===this.state.options.speed?r.a.createElement("div",null,r.a.createElement("label",null,"fixed speed :"),r.a.createElement("input",{onChange:this.set_thespeed,className:H.a.input,maxLength:"1",autoFocus:!0,max:"10",defaultValue:"2",type:"range"})):"increased"===this.state.options.speed?r.a.createElement("div",null,r.a.createElement("label",null,"Max-speed :"),r.a.createElement("input",{className:H.a.input,onChange:this.set_thespeed,autoFocus:!0,max:"10",defaultValue:"5",type:"range"})):""),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement("div",null,r.a.createElement("h2",null,"Head color"),r.a.createElement("select",{onChange:this.set_headColor},r.a.createElement("option",null,"pick color---"),J.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))),r.a.createElement("div",null,r.a.createElement("h2",null,"Body color"),r.a.createElement("select",{onChange:this.set_color},r.a.createElement("option",null,"pick color---"),J.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))),r.a.createElement("div",{style:{marginTop:40}},r.a.createElement("span",{id:"body",style:{display:"inline-block",borderRadius:"10px 0 0 10px",width:"90px",height:"20px"}}),r.a.createElement("span",{id:"head",style:{display:"inline-block",borderRadius:"0 10px 10px 0",width:"10px",height:"20px"}})))}}]),a}(o.Component),X=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={setting:!1,options:{mode:"free",speed:"increased",thespeed:6,the_color:"blue",the_headColor:"red"}},e.setOptions=function(t){e.setState({options:t})},e}return Object(h.a)(a,[{key:"setSetting",value:function(){this.setState((function(e){return{setting:!e.setting}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,{home:this.state.setting,click:this.setSetting.bind(this)}),this.state.setting?r.a.createElement(U,{options:this.state.options,Set:this.setOptions}):r.a.createElement(T,{options:this.state.options}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.1b3fed1d.chunk.js.map