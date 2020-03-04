(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||r;return n?i.a.createElement(d,s({ref:t},l,{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(113)),o={id:"motivation",title:"Motivation"},s={id:"motivation",title:"Motivation",description:"Before we dive in, this page aims to describe the background / motivation for the library and what problem it aims to solve.",source:"@site/docs/motivation.md",permalink:"/ngx-url-state/docs/motivation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/motivation.md",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/ngx-url-state/docs/introduction"},next:{title:"Installation & Setup",permalink:"/ngx-url-state/docs/installation-and-setup"}},c=[{value:"User Expectations",id:"user-expectations",children:[]},{value:"Content and State",id:"content-and-state",children:[]},{value:"Managing state (well) is a hard problem",id:"managing-state-well-is-a-hard-problem",children:[]},{value:"Introducing ngx-url-state",id:"introducing-ngx-url-state",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Before we dive in, this page aims to describe the background / motivation for the library and what problem it aims to solve."),Object(r.b)("h2",{id:"user-expectations"},"User Expectations"),Object(r.b)("p",null,"Most users (technical or otherwise) are used to certain functionality / tools that are provided by web browsers and expect these features to work consistently and predictibly across all websites / applications."),Object(r.b)("p",null,"Consider the following three expectations that users are likely to have:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"History navigation"),": Users expect to be able to click back to return to the previous set of content, or make multiple steps backwards & forwards.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Bookmarking"),": Users expect to be able to bookmark a page and retrieve the same content at a later time when they click that bookmark")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Sharing"),": Users expect to be able to share the content they are looking at with others, which may involve copying & pasting the URL and sending it to someone else"))),Object(r.b)("h2",{id:"content-and-state"},"Content and State"),Object(r.b)("p",null,"The expectations listed above all refer to ",Object(r.b)("strong",{parentName:"p"},"content"),". What that actually means will depend on your application and use case, but broadly speaking this is likely to be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A listing of entities, with specific search, sorting, filtering or pagination parameters applied"),Object(r.b)("li",{parentName:"ul"},"Details of a specific entity, based on specific identifier(s), possibly with a customised set of view parameters"),Object(r.b)("li",{parentName:"ul"},"An information page, portraying information based on certain navigation or filtering choices that have been made by the user")),Object(r.b)("p",null,"Regardless of the application or domain, all of these examples have one thing in common - at any given time they depend on a certain ",Object(r.b)("strong",{parentName:"p"},"state")," which dictates what content is shown on the page and how it can be interacted with."),Object(r.b)("p",null,'In reality, any non-trivial application is likely to depend on a range of different types of "state". This library focuses on any state which represents the user\'s current activity, such as which filters are applied on a listing page, or which display parameters are currently selected when viewing an item.'),Object(r.b)("h2",{id:"managing-state-well-is-a-hard-problem"},"Managing state (well) is a hard problem"),Object(r.b)("p",null,"Managing state is arguably one of the hardest challenges when building modern frontend applications. "),Object(r.b)("p",null,"There are a huge number of techniques, patterns, tools and libraries out there that aim to tackle the challenges associated with this. This is a hot topic and, as with anything, each option comes with pros & cons. "),Object(r.b)("p",null,"Many of the options (whether transient or persisted, within a component or in a central store), suffer from one flaw which is that they are not complimentary with the expectations described above. In other words:"),Object(r.b)("div",{className:"admonition admonition-important"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Without careful attention to the techniques used to handle UI state, it may be difficult (or even impossible) for the user to use the browser history, bookmarks or share links to content as they expect."))),Object(r.b)("h2",{id:"introducing-ngx-url-state"},"Introducing ngx-url-state"),Object(r.b)("p",null,"ngx-url-state aims to ease the complexity of handling this kind of state by providing a powerful but simple to use abstraction on top of the Angular router, treating the URL (specifically, query parameters) as the source of truth."),Object(r.b)("p",null,"This approach makes it easy to provide a great experience for users, by allowing them to interact with the browser as they would naturally expect."),Object(r.b)("p",null,"Handling this manually (and doing it well) is not a trivial task. ngx-url-state aims to change that by tackling some of the trickier aspects, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Working with strongly-typed parameters (and mapping those in and out of strings that can go into the URL)"),Object(r.b)("li",{parentName:"ul"},"Specifying and enforcing default values without breaking back-navigation"),Object(r.b)("li",{parentName:"ul"},"Reactively responding to changes in either individual or multiple parameters"),Object(r.b)("li",{parentName:"ul"},"Patching one or more parameters whilst maintaining a clean history stack")))}p.isMDXComponent=!0}}]);