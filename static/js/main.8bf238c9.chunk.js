(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),o=n(20),i=n.n(o),r=n(8),u=(n(30),n(24)),l=n(2),p=n(3),d=Object(s.createContext)(),j=n.p+"static/media/fail.7c6a020b.svg",m=n.p+"static/media/success.1b6082f8.svg",h=function(e){var t=e.isOpen,n=e.onClose,c=e.isSuccess,o=Object(p.h)().pathname,i=c?m:j;Object(s.useEffect)((function(){if(t){var e=function(e){"Escape"===e.key&&n()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[t,n]);return Object(a.jsx)("section",{onClick:function(e){e.target===e.currentTarget&&t&&n()},className:"popup popup_type_info-tooltip ".concat(t?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{className:"button popup__button-close",type:"button",onClick:n}),Object(a.jsx)("img",{className:"popup__image-tooltip",src:i,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438"}),Object(a.jsx)("p",{className:"popup__tooltip",children:"/sign-in"===o||"/sign-up"===o?c?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.":"/mesto"===o?c?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!":void 0})]})})},_=function(e){var t=e.path,n=e.loggedIn,s=e.isChecking,c=e.children;return Object(a.jsx)(p.b,{path:t,exact:!0,children:s?Object(a.jsx)("main",{className:"content page__content"}):n?c:Object(a.jsx)(p.a,{to:"./sign-in"})})},b=n(11),O=n(9),f=function(){var e=c.a.useState({}),t=Object(l.a)(e,2),n=t[0],a=t[1],o=c.a.useState({}),i=Object(l.a)(o,2),r=i[0],u=i[1],p=c.a.useState(!1),d=Object(l.a)(p,2),j=d[0],m=d[1],h=c.a.useState({}),_=Object(l.a)(h,2),f=_[0],g=_[1],x=Object(s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a(e),u(t),m(n),g(s)}),[a,u,m]);return{values:n,handleChange:function(e){var t=e.target,s=t.value,c=t.name;a(Object(O.a)(Object(O.a)({},n),{},Object(b.a)({},c,s))),u(Object(O.a)(Object(O.a)({},r),{},Object(b.a)({},c,t.validationMessage))),m(t.closest("form").checkValidity()),g(Object(O.a)(Object(O.a)({},f),{},Object(b.a)({},c,t.checkValidity())))},resetFrom:x,errors:r,isValid:j,isValidInputs:f}},g=function(e){var t=e.onRegister,n=f(),s=n.values,c=n.handleChange,o=n.resetFrom,i=n.errors,u=n.isValid,l=n.isValidInputs;return Object(a.jsx)("main",{className:"register content page__content",children:Object(a.jsxs)("div",{className:"register__container",children:[Object(a.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"register__form",name:"form",id:"form-with-register",onSubmit:function(e){e.preventDefault(),s.password===s.confirmation?t(s).then(o()).catch((function(e){console.log(e.message||"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")})):o({email:s.email},{password:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442",confirmation:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"},!1,{email:!0})},children:[Object(a.jsx)("input",{className:"register__input register__input_type_email\n        ".concat(l.email?"register__input_state_valid":""),type:"email",placeholder:"Email",name:"email",id:"register-input-email",minLength:"2",maxLength:"100",value:s.email||"",onChange:c,required:!0}),Object(a.jsx)("span",{id:"register-input-email-error",className:"register__error",children:i.email||""}),Object(a.jsx)("input",{className:"register__input register__input_type_password\n        ".concat(l.password?"register__input_state_valid":""),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"register-input-password",minLength:"6",maxLength:"50",value:s.password||"",onChange:c,required:!0}),Object(a.jsx)("span",{id:"register-input-password-error",className:"register__error",children:i.password||""}),Object(a.jsx)("input",{className:"register__input register__input_type_confirm-password\n        ".concat(l.confirmation?"register__input_state_valid":""),type:"password",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",name:"confirmation",id:"register-input-confirm-password",minLength:"2",maxLength:"50",value:s.confirmation||"",onChange:c,required:!0}),Object(a.jsx)("span",{id:"register-input-confirm-password-error",className:"register__error",children:i.confirmation||""}),Object(a.jsx)("button",{className:"button register__button-submit \n            ".concat(u?"":"register__button-submit_invalid"),type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(a.jsx)("div",{className:"register__signin",children:Object(a.jsxs)("p",{children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(a.jsx)(r.b,{to:"/sign-in",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})})},x=function(e){var t=e.onLogin,n=f(),s=n.values,c=n.handleChange,o=n.resetFrom,i=n.errors,r=n.isValid,u=n.isValidInputs;return Object(a.jsx)("main",{className:"login content page__content",children:Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"login__form",name:"form",id:"form-with-login",onSubmit:function(e){e.preventDefault(),t(s).then(o()).catch((function(e){console.log(e.message||"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}))},children:[Object(a.jsx)("input",{className:"login__input login__input_type_email\n        ".concat(u.email?"login__input_state_valid":""),type:"email",placeholder:"Email",name:"email",id:"login-input-email",maxLength:"100",value:s.email||"",onChange:c,required:!0}),Object(a.jsx)("span",{id:"login-input-email-error",className:"login__error",children:i.email||""}),Object(a.jsx)("input",{className:"login__input login__input_type_password\n        ".concat(u.password?"login__input_state_valid":""),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",id:"login-input-password",maxLength:"50",value:s.password||"",onChange:c,required:!0}),Object(a.jsx)("span",{id:"login-input-password-error",className:"login__error",children:i.password||""}),Object(a.jsx)("button",{className:"button login__button-submit \n            ".concat(r?"":"login__button-submit_invalid"),type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},v=n.p+"static/media/Logo.a307e1c4.svg",k=function(e){var t=e.onSignOut,n=e.userEmail,c=e.loggedIn,o=Object(p.h)().pathname,i=Object(s.useState)(!1),u=Object(l.a)(i,2),d=u[0],j=u[1];return Object(a.jsxs)("header",{className:"header page__header",children:[Object(a.jsx)("img",{src:v,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u041c\u0435\u0441\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438",className:"header__logo"}),c?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",className:"header__burger button \n        ".concat(d?"active":""),onClick:function(){j(!d)},children:Object(a.jsx)("span",{})}),Object(a.jsx)("nav",{className:"header__menu \n      ".concat(d?"active":""),children:Object(a.jsxs)("ul",{className:"header__list",children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{className:"header__email",children:n})}),Object(a.jsxs)("li",{children:["/mesto"===o,Object(a.jsx)("button",{className:"button header__button header__button_type_exit",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})})]}):Object(a.jsx)(r.b,{className:"button header__button",to:"/sign-in"===o?"/sign-up":"/sign-in",children:"/sign-in"===o?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u0445\u043e\u0434"})]})},C=function(e){var t=e.card,n=e.onCardLike,c=e.onImageClick,o=e.onCardTrash,i=Object(s.useContext)(d),r=t.owner._id===i._id,u=t.likes.some((function(e){return e._id===i._id}));return Object(a.jsxs)("article",{className:"place",children:[Object(a.jsx)("img",{className:"place__image",alt:t.name,src:t.link,onClick:function(){return c(t)}}),r?Object(a.jsx)("button",{className:"button place__button-remove",type:"button",onClick:function(){o(t)}}):null,Object(a.jsxs)("div",{className:"place__row-block",children:[Object(a.jsx)("h2",{className:"place__title",children:t.name}),Object(a.jsxs)("div",{className:"place__column-block",children:[Object(a.jsx)("button",{className:"button place__button-like \n            ".concat(u?"place__button-like_active":""),type:"button",onClick:function(){return n(t)}}),Object(a.jsx)("span",{className:"place__score-like",children:t.likes.length})]})]})]})},N=function(e){var t=e.card,n=e.onClose;Object(s.useEffect)((function(){var e=function(e){"Escape"===e.key&&n()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]);return Object(a.jsx)("section",{onClick:function(e){e.target===e.currentTarget&&n()},className:"popup popup_blackout \n    ".concat(t.isOpen?"popup_opened":""),id:"popup-image",children:Object(a.jsxs)("figure",{className:"popup__figure",children:[Object(a.jsx)("button",{className:"button popup__button-close",type:"button",onClick:n}),Object(a.jsx)("img",{className:"popup__image",alt:t.name,src:t.link}),Object(a.jsxs)("figcaption",{className:"popup__caption",children:[t.name," / \xa9 ",t.owner.name]})]})})},y=function(e){var t=e.children,n=e.name,c=e.title,o=e.textButton,i=e.isOpen,r=e.onClose,u=e.onSubmit,l=e.isDisabled,p=void 0!==l&&l;Object(s.useEffect)((function(){if(i){var e=function(e){"Escape"===e.key&&r()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[i,r]);return Object(a.jsx)("section",{onClick:function(e){e.target===e.currentTarget&&i&&r()},className:"popup popup_type_".concat(n," ").concat(i?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{className:"button popup__button-close",type:"button",onClick:r}),Object(a.jsx)("h2",{className:"popup__title",children:c}),Object(a.jsxs)("form",{className:"popup__form",name:n,id:n,onSubmit:u,children:[t,Object(a.jsx)("button",{className:"button popup__button-submit \n            ".concat(p?"popup__button-submit_invalid":""),type:"submit",children:o||""})]})]})})},w=function(e){var t=e.onUpdateUser,n=e.isOpen,c=e.onClose,o=f(),i=o.values,r=o.handleChange,u=o.resetFrom,l=o.errors,p=o.isValid,j=o.isValidInputs,m=Object(s.useContext)(d);Object(s.useEffect)((function(){m&&u({name:m.name,about:m.about},{},!1,{})}),[m,u]);return Object(a.jsxs)(y,{name:"popup-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),t(i)},isDisabled:!p,children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_author \n        ".concat(j.name?"popup__input_state_valid":""),type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",id:"popup-input-name",name:"name",minLength:"2",maxLength:"40",value:i.name||"",onChange:r,required:!0}),Object(a.jsx)("span",{id:"popup-input-name-error",className:"popup__error",children:l.name||""}),Object(a.jsx)("input",{className:"popup__input popup__input_type_status \n        ".concat(j.about?"popup__input_state_valid":""),type:"text",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",id:"popup-input-status",name:"about",minLength:"2",maxLength:"200",value:i.about||"",onChange:r,required:!0}),Object(a.jsx)("span",{id:"popup-input-status-error",className:"popup__error",children:l.about||""})]})},S=function(e){var t=e.onUpdateAvatar,n=e.isOpen,c=e.onClose,o=f(),i=o.values,r=o.handleChange,u=o.resetFrom,l=o.errors,p=o.isValid,d=o.isValidInputs;Object(s.useEffect)((function(){u()}),[n,u]);return Object(a.jsxs)(y,{name:"add-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textButton:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),t(i)},isDisabled:!p,children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_photo \n        ".concat(d.avatar?"popup__input_state_valid":""),type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",id:"popup-input-url-avatar",minLength:"7",maxLength:"300",value:i.avatar||"",onChange:r,required:!0}),Object(a.jsx)("span",{id:"popup-input-url-avatar-error",className:"popup__error",children:l.avatar||""})]})},E=function(e){var t=e.onAddPlace,n=e.isOpen,c=e.onClose,o=f(),i=o.values,r=o.handleChange,u=o.resetFrom,l=o.errors,p=o.isValid,d=o.isValidInputs;Object(s.useEffect)((function(){u()}),[n,u]);return Object(a.jsxs)(y,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),t(i)},isDisabled:!p,children:[Object(a.jsx)("input",{className:"popup__input popup__input_type_place-name \n        ".concat(d.name?"popup__input_state_valid":""),type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",id:"popup-input-place-name",minLength:"2",maxLength:"30",value:i.name||"",onChange:r,required:!0}),Object(a.jsx)("span",{id:"popup-input-place-name-error",className:"popup__error",children:l.name||""}),Object(a.jsx)("input",{className:"popup__input popup__input_type_photo \n        ".concat(d.link?"popup__input_state_valid":""),type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"popup-input-url",name:"link",minLength:"7",maxLength:"300",value:i.link||"",onChange:r,required:!0}),Object(a.jsx)("span",{id:"popup-input-url-error",className:"popup__error",children:l.link||""})]})},L=function(e){var t=e.onDeleteCard,n=e.isOpen,s=e.onClose;return Object(a.jsx)(y,{name:"remove-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",textButton:"\u0414\u0430",isOpen:n,onClose:s,onSubmit:function(e){e.preventDefault(),t()}})},I=function(e){var t=e.isLoading,n=e.cards,c=e.onCardDelete,o=e.onCardLike,i=e.onAddPlaceSubmit,r=e.onUpdateAvatar,u=e.onUpdateUser,p=Object(s.useContext)(d),j=Object(s.useState)(!1),m=Object(l.a)(j,2),h=m[0],_=m[1],b=Object(s.useState)(!1),f=Object(l.a)(b,2),g=f[0],x=f[1],v=Object(s.useState)(!1),k=Object(l.a)(v,2),y=k[0],I=k[1],U=Object(s.useState)(!1),T=Object(l.a)(U,2),D=T[0],V=T[1],A=Object(s.useState)({isOpen:!1,owner:{name:""}}),P=Object(l.a)(A,2),R=P[0],q=P[1],z=Object(s.useState)(""),F=Object(l.a)(z,2),B=F[0],J=F[1],M=function(e){return q(Object(O.a)({isOpen:!0},e))},H=function(e){V(!0),J(e._id)},G=function(){_(!1),x(!1),I(!1),V(!1),q({isOpen:!1,owner:{name:""}})},K=function(e){o(e).catch((function(e){return console.log("Error: ".concat(e))}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("main",{className:"content page__content",children:[Object(a.jsxs)("section",{className:"profile content__item",children:[Object(a.jsx)("div",{className:"profile__overlay",onClick:function(){return I(!0)},children:Object(a.jsx)("img",{src:p.avatar||"#",alt:"\u0410\u0432\u0430\u0442\u0430\u0440 ".concat(p.name||""),className:"profile__avatar"})}),Object(a.jsxs)("div",{className:"profile__text-block",children:[Object(a.jsxs)("div",{className:"profile__row-block",children:[Object(a.jsx)("h1",{className:"profile__author",children:p.name||"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),Object(a.jsx)("button",{className:"button profile__button-edit",type:"button",onClick:function(){return _(!0)}})]}),Object(a.jsx)("p",{className:"profile__status",children:p.about||"\u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435"})]}),Object(a.jsx)("button",{className:"button profile__button-add",type:"button",onClick:function(){return x(!0)}})]}),t?Object(a.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(a.jsx)("section",{className:"places content__item",children:n.map((function(e){return Object(a.jsx)(C,{card:e,onImageClick:M,onCardLike:K,onCardTrash:H},e._id)}))})]}),Object(a.jsx)(w,{isOpen:h,onClose:G,onUpdateUser:function(e){u(e).then(G).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(E,{isOpen:g,onClose:G,onAddPlace:function(e){i(e).then(G).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(S,{isOpen:y,onClose:G,onUpdateAvatar:function(e){r(e).then(G).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(L,{isOpen:D,onClose:G,onDeleteCard:function(){c(B).then(G).catch((function(e){return console.log("Error: ".concat(e))}))}}),Object(a.jsx)(N,{card:R,onClose:G})]})},U=function(){return Object(a.jsx)("footer",{className:"footer page__footer",children:Object(a.jsx)("p",{className:"footer__author",children:"\xa9 2020 Mesto Russia Lod55"})})},T="https://auth.nomoreparties.co",D=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))},V=n(22),A=n(23),P=new(function(){function e(t){var n=t.baseUrl,a=t.token,s=t.groupId;Object(V.a)(this,e),this._address=n,this._token=a,this._groupId=s}return Object(A.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getInfoUser",value:function(){return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setInfoUser",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"setCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1",token:"429ceaf1-0a34-48aa-a4c9-c70c2c79ac6e",groupId:"cohort-19"}),R=function(){var e={email:""},t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(s.useState)([]),r=Object(l.a)(i,2),j=r[0],m=r[1],b=Object(s.useState)(!1),O=Object(l.a)(b,2),f=O[0],v=O[1],C=Object(s.useState)({}),N=Object(l.a)(C,2),y=N[0],w=N[1],S=Object(s.useState)(!1),E=Object(l.a)(S,2),L=E[0],V=E[1],A=Object(s.useState)(e),R=Object(l.a)(A,2),q=R[0],z=R[1],F=Object(s.useState)(!1),B=Object(l.a)(F,2),J=B[0],M=B[1],H=Object(p.g)(),G=function(e){if(!e)throw new Error("Error: ".concat(e.message))};Object(s.useEffect)((function(){v(!0),P.getInitialCards().then((function(e){m(e)})).catch((function(e){return console.log("Error: ".concat(e))})).finally((function(){return v(!1)}))}),[]),Object(s.useEffect)((function(){P.getInfoUser().then((function(e){w(e)})).catch((function(e){return console.log("Error: ".concat(e))}))}),[]);var K=Object(s.useState)(!0),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Y=Object(s.useCallback)((function(){var e,t=localStorage.getItem("jwt");t?(X(!0),(e=t,fetch("".concat(T,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(D)).then((function(e){e&&(V(!0),z({email:e.data.email}),H.push("/mesto"))})).catch((function(){return H.push("/sign-in")})).finally((function(){return X(!1)}))):X(!1)}),[H]);Object(s.useEffect)((function(){Y()}),[Y]);return Object(a.jsx)("div",{className:"page__container",children:Object(a.jsxs)(d.Provider,{value:y,children:[Object(a.jsx)(k,{loggedIn:L,onSignOut:function(){localStorage.removeItem("jwt"),z(e),V(!1),H.push("/sign-in")},userEmail:q.email}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(_,{path:"/mesto",loggedIn:L,isChecking:W,exact:!0,children:Object(a.jsx)(I,{onCardDelete:function(e){return P.removeCard(e).then((function(t){return G(t),m((function(t){return t.filter((function(t){return t._id===e?null:t}))})),t}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===y._id}));return P.changeLikeCardStatus(e._id,t).then((function(t){return G(t),m((function(n){return n.map((function(n){return n._id===e._id?t:n}))})),t}))},onAddPlaceSubmit:function(e){var t=e.name,n=e.link;return P.setCard({name:t,link:n}).then((function(e){return G(e),m([e].concat(Object(u.a)(j))),e}))},onUpdateAvatar:function(e){return P.setUserAvatar(e).then((function(e){return G(e),w(e),e}))},onUpdateUser:function(e){return P.setInfoUser(e).then((function(e){return G(e),w(e),e}))},cards:j,isLoading:f})}),Object(a.jsx)(p.b,{path:"/sign-in",exact:!0,children:Object(a.jsx)(x,{onLogin:function(e){return function(e){var t=e.password,n=e.email;return fetch("".concat(T,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(D)}({password:e.password,email:e.email}).then((function(e){if(!e||400===e.statusCode||401===e.statusCode)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.message));e.token&&(o(!0),M(!0),V(!0),localStorage.setItem("jwt",e.token))})).then(Y).catch((function(e){return o(!0),M(!1),e}))}})}),Object(a.jsx)(p.b,{path:"/sign-up",exact:!0,children:Object(a.jsx)(g,{onRegister:function(e){return function(e){var t=e.password,n=e.email;return fetch("".concat(T,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(D)}({password:e.password,email:e.email}).then((function(e){if(!e||400===e.statusCode)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.message));return o(!0),M(!0),H.push("/sign-in"),e})).catch((function(e){return o(!0),M(!1),e}))}})}),Object(a.jsx)(p.b,{path:"*",children:L?Object(a.jsx)(p.a,{to:"/mesto"}):Object(a.jsx)(p.a,{to:"/sign-in"})})]}),Object(a.jsx)(U,{}),Object(a.jsx)(h,{isOpen:c,onClose:function(){o(!1)},isSuccess:J})]})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(r.a,{basename:"/mesto-react",children:Object(a.jsx)(R,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8bf238c9.chunk.js.map