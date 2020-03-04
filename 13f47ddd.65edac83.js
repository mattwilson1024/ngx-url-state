(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return a?n.a.createElement(d,c({ref:t},p,{components:a})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(1),n=a(6),i=(a(0),a(113)),o={id:"reading-parameters",title:"Reading & Subscribing to Parameters"},c={id:"reading-parameters",title:"Reading & Subscribing to Parameters",description:"## Reading parameter values",source:"@site/docs/reading-parameters.md",permalink:"/ngx-url-state/docs/reading-parameters",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/reading-parameters.md",sidebar:"someSidebar",previous:{title:"Defining default values",permalink:"/ngx-url-state/docs/defining-default-values"},next:{title:"Updating State",permalink:"/ngx-url-state/docs/updating-state"}},s=[{value:"Reading parameter values",id:"reading-parameter-values",children:[{value:"Subscribe to a parameter from the template using the async pipe",id:"subscribe-to-a-parameter-from-the-template-using-the-async-pipe",children:[]},{value:"Subscribe to a parameter from the component class",id:"subscribe-to-a-parameter-from-the-component-class",children:[]},{value:"Read the current value of a parameter (once)",id:"read-the-current-value-of-a-parameter-once",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"reading-parameter-values"},"Reading parameter values"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ngx-url-state")," provides a number of ways to retrieve parameter values to suit a variety of situations. At a glance, you can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"subscribe to an individual parameter"),Object(i.b)("li",{parentName:"ul"},"subscribe to all parameters"),Object(i.b)("li",{parentName:"ul"},'read the current value of one or more parameters (referred to as a "snapshot")')),Object(i.b)("div",{className:"admonition admonition-tip"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Where possible, using a reactive approach (",Object(i.b)("em",{parentName:"p"},"subscribing")," to parameter values, rather than just reading them from the snapshot) provides a lot of benefits."),Object(i.b)("p",{parentName:"div"},"The observables provided by ",Object(i.b)("inlineCode",{parentName:"p"},"ngx-url-state")," (whether for individual parameters, or all parameters) will automatically emit the new value whenever the parameter's value changes, meaning that it is easy to react to changes in the values over time."))),Object(i.b)("h3",{id:"subscribe-to-a-parameter-from-the-template-using-the-async-pipe"},"Subscribe to a parameter from the template using the async pipe"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<p>Hello {{ urlState.params.name | async }}!</p>\n")),Object(i.b)("h3",{id:"subscribe-to-a-parameter-from-the-component-class"},"Subscribe to a parameter from the component class"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"ngOnInit(): void {\n  // ... setup as described above\n\n  this.urlState.params.name.subscribe(\n    name => console.log(`Name is now ${name}`);\n  );\n}\n")),Object(i.b)("h3",{id:"read-the-current-value-of-a-parameter-once"},"Read the current value of a parameter (once)"),Object(i.b)("p",null,"In situations where you just need to get the current value of a specific parameter (for example inside a button click handler), you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"snapshot")," property."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"sayHello(): void {\n  alert(`Hello ${this.urlState.snapshot.name}`);\n}\n")))}l.isMDXComponent=!0}}]);