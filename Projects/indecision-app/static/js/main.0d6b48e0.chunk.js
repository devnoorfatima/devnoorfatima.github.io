(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(33)},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),l=n.n(i),s=n(2),c=n(3),r=n(5),d=n(4),u=n(6),m=n(1),h=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"header__title"},e.title),e.subtitle&&o.a.createElement("h2",{className:"header__subtitle"},e.subtitle)))};h.defaultProps={title:"Indecision"};var p=h,O=function(e){return o.a.createElement("div",{className:"Action"},o.a.createElement("button",{className:"big_button",disabled:!e.hasOptions,onClick:e.handlePick},"What should I do?"))},b=function(e){return o.a.createElement("div",{className:"option"},o.a.createElement("p",{className:"option--text"},e.count,". ",e.optionText),o.a.createElement("button",{className:" button button--link",onClick:function(t){e.handleDeleteOption(e.optionText)}},"Remove"))},v=function(e){return o.a.createElement("div",{className:"Options"},o.a.createElement("div",{className:"widget-header"},o.a.createElement("h3",{className:"widget--title"},"Your Options"),o.a.createElement("button",{className:"button--link",onClick:e.handleDeleteAll},"Remove All")),e.options.map(function(t,n){return o.a.createElement(b,{handleDeleteOption:e.handleDeleteOption,key:t,optionText:t,count:n+1})}))},f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleAddOption=n.handleAddOption.bind(Object(m.a)(Object(m.a)(n))),n.state={error:void 0},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleAddOption",value:function(e){e.preventDefault();var t=e.target.elements.option.value.trim(),n=this.props.handleAddOption(t);this.setState(function(){return{error:n}}),n||(e.target.elements.option.value="")}},{key:"render",value:function(){return o.a.createElement("div",{className:"Input"},this.state.error&&o.a.createElement("p",{className:"widget--message"},this.state.error),o.a.createElement("form",{className:"add-option",onSubmit:this.handleAddOption},o.a.createElement("input",{className:"add-option--input",type:"text",name:"option"}),o.a.createElement("button",{className:"button"},"Submit")))}}]),t}(a.Component),E=n(14),k=n.n(E),N=function(e){return o.a.createElement("div",null,o.a.createElement(k.a,{isOpen:!!e.selectedOption,onRequestClose:e.handleRemoveModal,contentLabel:"selected Option",closeTimeoutMS:200,className:"modal"},o.a.createElement("h3",{className:"modal__title"},"Selected Option"),e.selectedOption&&o.a.createElement("p",{className:"modal__body"},e.selectedOption),o.a.createElement("button",{className:"button",onClick:e.handleRemoveModal},"Okay")))},j=(n(29),n(31),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleRemoveModal=function(){n.setState(function(){return{selectedOption:void 0}})},n.handleDeleteAll=n.handleDeleteAll.bind(Object(m.a)(Object(m.a)(n))),n.handlePick=n.handlePick.bind(Object(m.a)(Object(m.a)(n))),n.handleAddOption=n.handleAddOption.bind(Object(m.a)(Object(m.a)(n))),n.handleDeleteOption=n.handleDeleteOption.bind(Object(m.a)(Object(m.a)(n))),n.handleRemoveModal=n.handleRemoveModal.bind(Object(m.a)(Object(m.a)(n))),n.state={options:[],selectedOption:void 0},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleDeleteAll",value:function(){this.setState(function(){return{options:[]}})}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.setState(function(){return{options:t}})}},{key:"componentDidUpdate",value:function(e,t){if(t.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n)}}},{key:"componentWillUnmount",value:function(){console.log("component will unmount")}},{key:"handleDeleteOption",value:function(e){this.setState(function(t){return{options:t.options.filter(function(t){return e!==t})}})}},{key:"handlePick",value:function(){var e=Math.floor(Math.random()*this.state.options.length),t=this.state.options[e];this.setState(function(){return{selectedOption:t}})}},{key:"handleAddOption",value:function(e){return e?this.state.options.indexOf(e)>-1?"This option already exists.":void this.setState(function(t){return{options:t.options.concat(e)}}):"Enter a valid option."}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,{subtitle:"Give your life in the hands of Computer"}),o.a.createElement("div",{className:"container"},o.a.createElement(O,{hasOptions:this.state.options.length>0,handlePick:this.handlePick}),o.a.createElement("div",{className:"widget"},o.a.createElement(v,{options:this.state.options,handleDeleteAll:this.handleDeleteAll,handleDeleteOption:this.handleDeleteOption}),o.a.createElement(f,{handleAddOption:this.handleAddOption}))),o.a.createElement(N,{selectedOption:this.state.selectedOption,handleRemoveModal:this.handleRemoveModal}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.0d6b48e0.chunk.js.map