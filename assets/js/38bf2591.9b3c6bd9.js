(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7651],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return m},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,d=s["".concat(l,".").concat(f)]||s[f]||p[f]||o;return t?n.createElement(d,i(i({ref:r},m),{},{components:t})):n.createElement(d,i({ref:r},m))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3975:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i={title:"<IFrame />",id:"iframe"},c={unversionedId:"iframe",id:"iframe",isDocsHomePage:!1,title:"<IFrame />",description:"The ` can be used like a regular ` HTML tag.",source:"@site/docs/iframe.md",sourceDirName:".",slug:"/iframe",permalink:"/docs/iframe",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/iframe.md",version:"current",frontMatter:{title:"<IFrame />",id:"iframe"},sidebar:"someSidebar",previous:{title:"<Img />",permalink:"/docs/img"},next:{title:"Easing",permalink:"/docs/easing"}},l=[{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],u={toc:l};function m(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<IFrame />")," can be used like a regular ",(0,o.kt)("inlineCode",{parentName:"p"},"<iframe>")," HTML tag.\nThe difference is that if you use the component from Remotion, that Remotion will ensure that the iframe is loaded before rendering the frame. That way you can avoid flickers if it happens that the iframe is still loading during rendering."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {IFrame} from 'remotion';\n\nexport const MyComp: React.FC = () => {\n  return (\n    <IFrame src=\"https://remotion.dev\" />\n  )\n}\n\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/use-img-and-iframe"},"Use ",(0,o.kt)("inlineCode",{parentName:"a"},"<Img>")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"<IFrame>")," tags"))))}m.isMDXComponent=!0}}]);