(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{209:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||b[f]||a;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/patreon-15b4e66595efdb2e079faf18b89cff7c.png"},293:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/19-8a57538a13eb1b7b1b0f5bb6098cd6ce.gif"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(209)),c={id:"start19",title:"\u0423\u043c\u043d\u044b\u0435 \u0438 \u0433\u043b\u0443\u043f\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b - Function vs Class Component",sidebar_label:"\u0423\u043c\u043d\u044b\u0435 \u0438 \u0433\u043b\u0443\u043f\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b - Function vs Class Component"},s={unversionedId:"start19",id:"start19",isDocsHomePage:!1,title:"\u0423\u043c\u043d\u044b\u0435 \u0438 \u0433\u043b\u0443\u043f\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b - Function vs Class Component",description:"\u0415\u0441\u043b\u0438 \u043a\u043e\u043d\u0446\u0435\u043f\u0442\u0443\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u044d\u0442\u043e\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0435 \u0438 \u043f\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u043c\u0443, \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0435 \u0432\u0430\u0448\u0435\u0433\u043e UI Kit, \u0442\u043e \u0435\u0441\u0442\u044c \u044d\u0442\u043e \u0444\u043e\u0440\u043c\u043e\u0447\u043a\u0438, \u043a\u043d\u043e\u043f\u043e\u0447\u043a\u0438, \u0442\u0430\u0439\u0442\u043b\u044b, \u0438\u043d\u043f\u0443\u0442\u044b \u0438 \u044d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u0434\u0438\u0437\u0430\u0439\u043d. Class Component \u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u043e\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f, \u0432 \u043d\u0438\u0445 \u0438\u0434\u0443\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0438 \u043e\u043d\u0438 \u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u044e\u0442 \u0443\u043c\u043d\u044b\u0435 \u0438 \u0433\u043b\u0443\u043f\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u0441\u0435\u0431\u0435, \u044d\u0442\u043e \u043a\u0430\u043a \u0431\u044b \u0442\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438, \u043e\u043d\u0438 \u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u043e\u0439 \u0441\u0442\u0435\u0439\u0442. Update: \u041f\u0440\u0430\u0432\u0434\u0430 \u0442\u0430\u043a \u0431\u044b\u043b\u043e, \u043f\u043e\u043a\u0430 \u043d\u0435 \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c Hooks \ud83e\udd37\ud83c\udffc\u200d\u2642\ufe0f",source:"@site/docs/start19.md",slug:"/start19",permalink:"/docs/start19",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/start19.md",version:"current",sidebar_label:"\u0423\u043c\u043d\u044b\u0435 \u0438 \u0433\u043b\u0443\u043f\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b - Function vs Class Component",sidebar:"someSidebar",previous:{title:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 - State",permalink:"/docs/start18"},next:{title:"State vs Props",permalink:"/docs/start20"}},i=[],u={toc:i};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0415\u0441\u043b\u0438 \u043a\u043e\u043d\u0446\u0435\u043f\u0442\u0443\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u044d\u0442\u043e\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0435 \u0438 \u043f\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u043c\u0443, \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0435 \u0432\u0430\u0448\u0435\u0433\u043e UI Kit, \u0442\u043e \u0435\u0441\u0442\u044c \u044d\u0442\u043e \u0444\u043e\u0440\u043c\u043e\u0447\u043a\u0438, \u043a\u043d\u043e\u043f\u043e\u0447\u043a\u0438, \u0442\u0430\u0439\u0442\u043b\u044b, \u0438\u043d\u043f\u0443\u0442\u044b \u0438 \u044d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u043f\u0440\u043e \u0434\u0438\u0437\u0430\u0439\u043d. Class Component \u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u043e\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f, \u0432 \u043d\u0438\u0445 \u0438\u0434\u0443\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0438 \u043e\u043d\u0438 \u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u044e\u0442 \u0443\u043c\u043d\u044b\u0435 \u0438 \u0433\u043b\u0443\u043f\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432 \u0441\u0435\u0431\u0435, \u044d\u0442\u043e \u043a\u0430\u043a \u0431\u044b \u0442\u0430\u043a\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438, \u043e\u043d\u0438 \u0438\u043c\u0435\u044e\u0442 \u0441\u0432\u043e\u0439 \u0441\u0442\u0435\u0439\u0442. Update: \u041f\u0440\u0430\u0432\u0434\u0430 \u0442\u0430\u043a \u0431\u044b\u043b\u043e, \u043f\u043e\u043a\u0430 \u043d\u0435 \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c Hooks \ud83e\udd37\ud83c\udffc\u200d\u2642\ufe0f"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://youtu.be/S2hQ_Tu39jo"}),Object(a.b)("img",{alt:"\u0423\u043c\u043d\u044b\u0435 \u0438 \u0433\u043b\u0443\u043f\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b - Function vs Class Component",src:n(293).default}))),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.patreon.com/bePatron?u=31769291"}),Object(a.b)("img",{alt:"Become a Patron!",src:n(210).default}))))}p.isMDXComponent=!0}}]);