!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,i,a,u,l,f,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(x,t),d?y(e):u}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=a}function x(){var e=p();if(w(e))return O(e);l=setTimeout(x,function(e){var n=t-(e-f);return s?g(n,a-(e-c)):n}(e))}function O(e){return l=void 0,v&&o?y(e):(o=i=void 0,u)}function T(){var e=p(),n=w(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return j(f);if(s)return l=setTimeout(x,t),y(f)}return void 0===l&&(l=setTimeout(x,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},T.flush=function(){return void 0===l?u:O(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),email:document.querySelector('[name= "email"]'),textarea:document.querySelector('[name= "message"]')},w="feedback-form-state";j.form.addEventListener("input",e(t)((function(e){var t,n=null!==(t=JSON.parse(localStorage.getItem(w)))&&void 0!==t?t:{};n[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(n)),console.log(n)}),500)),j.textarea.addEventListener("sabmit",(function(e){e.preventDefault(),email.value&&textarea.value?(console.log("email: ".concat(email.value," message:\n        ").concat(textarea.value)),localStorage.removeItem(w),e.currentTarget.reset()):alert("Будь ласка, заповніть усі поля!")})),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem(w));console.log(e),e&&(j.textarea.value=e.message||"",j.email.value=e.email||"")}))}();
//# sourceMappingURL=03-feedback.97bab3c0.js.map