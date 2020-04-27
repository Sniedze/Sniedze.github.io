(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/biohazard.46bba648.png"},28:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},34:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(23),o=a.n(c),l=(a(33),a(5)),i=a(6),s=a(8),u=a(7),m=a(14),h=a(10),d=(a(34),a(13)),p=a.n(d),y=a(15),E="xxxxxxxxxxxxxxxxxxxxxxxxxxx",g=(a(21),a(16)),f=a.n(g),v=a(12),w=function(e){var t=e.humidity,a=e.searchedCity,r=e.searchedCountry,c=e.temperature,o=e.weather,l=e.weather_icon,i=e.pressure,s=e.wind,u=e.loadingWeather,m=e.error,h=e.errorMessage,d="http://openweathermap.org/img/wn/".concat(l,"@2x.png");return n.a.createElement("div",{className:"today-weather-container"},n.a.createElement("h3",{className:"date"},function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();return e=t+"/"+a+"/"+r,e}()),m&&n.a.createElement("div",{className:"error-container"},n.a.createElement("h2",{className:"error-message"},h),n.a.createElement("h2",null,"Please enter the city")),u&&n.a.createElement("div",{className:"loader-container"},n.a.createElement(f.a,{type:"Puff",color:"#1d4e89",height:100,width:100})),a&&n.a.createElement("div",{className:"weather-container"},n.a.createElement("h2",{className:"city"},a," ",r),n.a.createElement("h3",{className:"weather"},o),n.a.createElement("div",{className:"icon-temperature"},n.a.createElement("img",{className:"weather-icon",src:d,alt:"weather icon"}),n.a.createElement("h1",{className:"temperature-container"},c,"\xb0C")),n.a.createElement("div",{className:"measurement-container"},n.a.createElement("div",{className:"icon-container"},n.a.createElement(v.a,null),n.a.createElement("h2",null,i)),n.a.createElement("div",{className:"icon-container"},n.a.createElement(v.b,null),n.a.createElement("h2",null,t)),n.a.createElement("div",{className:"icon-container"},n.a.createElement(v.c,null),n.a.createElement("h2",null,s)))))},x=a(24),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={city:"",country:""},e.onInput=function(t){t.preventDefault(),e.setState(Object(x.a)({},t.target.name,t.target.value))},e.onFormSubmit=function(){var t=e.state,a=t.city,r=t.country;e.props.handleInputChange(a,r)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.city,a=e.country;return n.a.createElement("div",{className:"search_container"},n.a.createElement("form",{method:"get"},n.a.createElement("input",{onChange:this.onInput,type:"text",name:"city",defaultValue:t,placeholder:"City..."}),n.a.createElement("input",{onChange:this.handleInput,type:"text",name:"country",defaultValue:a,placeholder:"Country..."}),n.a.createElement("button",{onClick:this.onFormSubmit},"Get Weather")))}}]),a}(r.Component),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={humidity:"",searchedCity:"",searchedCountry:"",weather:"",weather_icon:"",temperature:"",pressure:"",wind:"",loadingWeather:!0,error:!1,errorMessage:""},e.onNewInput=function(e,t){localStorage.setItem("storedCity",e),localStorage.setItem("storedCountry",t)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("storedCity"),a=localStorage.getItem("storedCountry");if(0===t.length&&this.setState({error:!0,loadingWeather:!1}),t){var r="http://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat(a,"&units=metric&APPID=").concat(E);fetch(r).then(function(){var t=Object(y.a)(p.a.mark((function t(a){var r,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(r=t.sent,a.ok){t.next=6;break}return n=r&&r.message||a.statusText,t.abrupt("return",Promise.reject(n));case 6:e.setState({searchedCity:r.name,searchedCountry:r.sys.country,temperature:Math.round(r.main.temp),weather:r.weather[0].description,weather_icon:r.weather[0].icon,pressure:r.main.pressure,humidity:r.main.humidity,wind:Math.round(r.wind.speed,1).toFixed(1),loadingWeather:!1,error:!1});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({error:!0,loadingWeather:!1,errorMessage:t})}))}}},{key:"render",value:function(){var e=this.state,t=e.searchedCountry,a=e.searchedCity,r=e.temperature,c=e.weather,o=e.weather_icon,l=e.pressure,i=e.humidity,s=e.wind,u=e.loadingWeather,m=e.error,h=e.errorMessage;return n.a.createElement("div",{className:"today-weather-page"},n.a.createElement(b,{handleInputChange:this.onNewInput}),n.a.createElement(w,{searchedCity:a,searchedCountry:t,temperature:r,weather:c,weather_icon:o,pressure:l,humidity:i,wind:s,loadingWeather:u,error:m,errorMessage:h}))}}]),a}(r.Component),N=function(e){var t=e.dailyData,a=e.cityData,r=e.error,c=e.loadingForecast,o=e.errorMessage;return n.a.createElement("section",null,r&&n.a.createElement("div",{className:"error-container"},n.a.createElement("h3",{className:"error-message"},o),n.a.createElement("h1",null,"Please enter the city")),c&&n.a.createElement("div",{className:"loader-container"},n.a.createElement(f.a,{type:"Puff",color:"#1d4e89",height:100,width:100})),a.name&&n.a.createElement("div",null,n.a.createElement("h1",null,"Five day forecast for"," ",n.a.createElement("span",null,a.name," ",a.country)),n.a.createElement("div",{className:"article-container"},t.map((function(e,t){return n.a.createElement("article",{key:t},n.a.createElement("h1",null,e.dt_txt.split("",10)),n.a.createElement("div",{className:"icon-container"},n.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"Weather"}),n.a.createElement("h2",null,Math.round(e.main.temp)," \xb0C")),n.a.createElement("h2",{className:"weather"},e.weather[0].description),n.a.createElement("table",{className:"measurement-container"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Feels like"),n.a.createElement("td",null,Math.round(e.main.feels_like)," \xb0C")),n.a.createElement("tr",null,n.a.createElement("td",null,"Min temp."),n.a.createElement("td",null,Math.round(e.main.temp_min)," \xb0C")),n.a.createElement("tr",null,n.a.createElement("td",null,"Max temp."),n.a.createElement("td",null,Math.round(e.main.temp_max)," \xb0C")),n.a.createElement("tr",null,n.a.createElement("td",null,"Pressure"),n.a.createElement("td",null,e.main.pressure," hPa")),n.a.createElement("tr",null,n.a.createElement("td",null,"Humidity"),n.a.createElement("td",null,e.main.humidity," %")),n.a.createElement("tr",null,n.a.createElement("td",null,"Wind gusts"),n.a.createElement("td",null,Math.round(e.wind.speed,1).toFixed(1)," m/s")))))})))))},j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={cityData:[],dailyData:[],loadingForecast:!0,error:!1,errorMessage:""},e.onInputChange=function(e,t){localStorage.setItem("storedCity",e),localStorage.setItem("storedCountry",t)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("storedCity"),a=localStorage.getItem("storedCountry");0===t.length&&this.setState({error:!0,loadingForecast:!1});var r="http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,",").concat(a,"&units=metric&APPID=").concat(E);t&&fetch(r).then(function(){var t=Object(y.a)(p.a.mark((function t(a){var r,n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:if(r=t.sent,a.ok){t.next=6;break}return n=r&&r.message||a.statusText,t.abrupt("return",Promise.reject(n));case 6:return t.next=8,r.list.filter((function(e){return e.dt_txt.includes("18:00:00")}));case 8:c=t.sent,e.setState({cityData:r.city,dailyData:c,loadingForecast:!1,error:!1});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({error:!0,loadingForecast:!1,errorMessage:t})}))}},{key:"render",value:function(){var e=this.state,t=e.dailyData,a=e.cityData,r=e.error,c=e.loadingForecast,o=e.errorMessage;return n.a.createElement("div",{className:"five-days-forecast"},n.a.createElement(b,{handleInputChange:this.onInputChange}),n.a.createElement(N,{dailyData:t,cityData:a,error:r,loadingForecast:c,errorMessage:o}))}}]),a}(r.Component),O=a(25),k=a.n(O),M=function(){return n.a.createElement("div",{style:{width:"350px",margin:"0 auto"}},n.a.createElement("h1",{style:{color:"red"}},"You`re lost! Get back!!"),n.a.createElement("img",{style:{paddingTop:"50px"},src:k.a,alt:"Back"}))},S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("nav",{className:"menu"},n.a.createElement(m.b,{activeClassName:"active",to:"/",exact:!0},"TODAY"),n.a.createElement(m.b,{activeClassName:"active",to:"/daily"},"5 DAYS"))}}]),a}(r.Component),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(S,null),n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/",component:function(e){return n.a.createElement(C,e)}}),n.a.createElement(h.a,{path:"/daily",component:function(e){return n.a.createElement(j,e)}}),n.a.createElement(h.a,{component:M}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.5198b3b7.chunk.js.map