(this["webpackJsonpplatzi-conf-proyec"]=this["webpackJsonpplatzi-conf-proyec"]||[]).push([[0],{27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),l=(a(46),a(8)),i=a(3),m=(a(47),c.a.createContext({})),s=function(){var e=Object(n.useContext)(m).cart;return c.a.createElement("nav",{className:"navbar navbar-light bg-light  container-fluid"},c.a.createElement("h2",{className:"Header-title"},"Platzi Store"),c.a.createElement("h2",null,c.a.createElement(l.b,{to:"/"},"  proyecto react con hooks")),c.a.createElement("div",{className:"Header-checkout"},c.a.createElement(l.b,{to:"/checkout"},c.a.createElement("i",{className:"fas fa-shopping-basket "})),e.length>0&&c.a.createElement("div",{className:"Header-alert"},e.length," ")," "))};a(52);var u=function(){return c.a.createElement("div",{className:"bg-secondary Footer container-fluid mt-5"},c.a.createElement("h2",{className:"Footer-title"},"proyecto hooks"),c.a.createElement("h2",{className:"Footer-copy"},"derechos reservados de fran"))};var p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),e.children,c.a.createElement(u,null))},d=a(37),E=(a(27),function(e){var t=e.product,a=e.handleAddToCart;return c.a.createElement("div",{className:"Products-item"},c.a.createElement("img",{src:"http://localhost:1337".concat(t.image[0].url),alt:t.title})," ",c.a.createElement("div",{className:"Products-item-info"},c.a.createElement("h2",null,t.title,c.a.createElement("span",null,"$ "," "," ",t.price)),c.a.createElement("p",null,t.description),c.a.createElement("button",{type:"button",onClick:a(t)},"a\xf1adir al carro")," "))}),f=function(){var e=Object(n.useContext)(m),t=e.addToCart,a=e.products,r=function(e){return function(){t(e)}};return c.a.createElement("div",{className:"Products container"},c.a.createElement("div",{className:"Products-items"},a.length>0?a.map((function(e){return c.a.createElement(E,{key:e.id,product:e,handleAddToCart:r})})):c.a.createElement("div",null," cargando...")))},h=function(){return c.a.createElement(c.a.Fragment,null," ",c.a.createElement(d.a,null,c.a.createElement("title",null,"platzi conf merch - productos"),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{name:"twitter:site",content:"@TU_USER"}),c.a.createElement("meta",{name:"twitter:creator",content:"@TU_USER"}),c.a.createElement("meta",{name:"twitter:title",content:"Platzi Conf Store"}),c.a.createElement("meta",{name:"twitter:description",content:"Platzi Conf Store"}),c.a.createElement("meta",{name:"twitter:image",content:"https://s3.amazonaws.com/gndx.dev/gndxdev.png"}),c.a.createElement("meta",{property:"og:title",content:"Platzi Conf Store"}),c.a.createElement("meta",{property:"og:description",content:"Platzi Conf Store"}),c.a.createElement("meta",{property:"og:image",content:"https://s3.amazonaws.com/gndx.dev/gndxdev.png"}),c.a.createElement("meta",{property:"og:url",content:"platzistore.xyz"}),c.a.createElement("meta",{property:"og:site_name",content:"Platzi Conf Store"}),c.a.createElement("meta",{property:"og:locale",content:"es_ES"}),c.a.createElement("meta",{property:"og:type",content:"article"}),c.a.createElement("meta",{property:"fb:app_id",content:"ID_APP_FACEBOOK"})),c.a.createElement(f,null)," ")},g=(a(53),function(){var e=Object(n.useContext)(m),t=e.state,a=e.addToBuyer,r=Object(n.useRef)(null),o=t.cart,s=Object(i.f)();return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"Information-content"},c.a.createElement("div",{className:"Information-head"},c.a.createElement("h2",null,"Informaci\xf3n de contacto:")),c.a.createElement("div",{className:"Information-form"},c.a.createElement("form",{ref:r}," ",c.a.createElement("input",{type:"text",placeholder:"Nombre completo",name:"name"}),c.a.createElement("input",{type:"text",placeholder:"Correo Electronico",name:"email"}),c.a.createElement("input",{type:"text",placeholder:"Direccion",name:"address"}),c.a.createElement("input",{type:"text",placeholder:"apto",name:"apto"}),c.a.createElement("input",{type:"text",placeholder:"Ciudad",name:"city"}),c.a.createElement("input",{type:"text",placeholder:"Pais",name:"country"}),c.a.createElement("input",{type:"text",placeholder:"Estado",name:"state"}),c.a.createElement("input",{type:"text",placeholder:"Codigo postal",name:"cp"}),c.a.createElement("input",{type:"text",placeholder:"Telefono",name:"phone"}))),c.a.createElement("div",{className:"Information-buttons"},c.a.createElement(l.b,{to:"/checkout"}," ",c.a.createElement("div",{className:"Information-back"},"Regresar")),c.a.createElement("div",{className:"Information-next"}," ",c.a.createElement("button",{type:"button",onClick:function(){var e=new FormData(r.current),t={name:e.get("name"),email:e.get("email"),address:e.get("address"),apto:e.get("apto"),city:e.get("city"),country:e.get("country"),state:e.get("state"),cp:e.get("cp"),phone:e.get("phone")};a(t),s.push("/checkout/payment")}}," pagar")," ")," ")),c.a.createElement("div",{className:"Information-sidebar"},o.length>0?c.a.createElement("h3",null,"Pedidos:"):c.a.createElement("h3",null,"no hay pedidos"),o.map((function(e,t){return c.a.createElement("div",{className:"Information-item",key:t},c.a.createElement("div",{className:"Information-element"},c.a.createElement("h4",null,e.title),c.a.createElement("span",null,e.price)))}))))}),y=(a(54),function(){return Object(n.useContext)(m).state.cart.reduce((function(e,t){return e+t.price}),0)}),b=function(){var e=Object(n.useContext)(m),t=e.state,a=e.removeFromCart,r=t.cart,o=function(e,t){return function(){a(e,t)}};return c.a.createElement("div",{className:"container"},"  ",c.a.createElement("div",{className:"Checkout-content"},r.length>0?c.a.createElement("h3",null,"Lista de Pedidos:"):c.a.createElement("h3",null,"no hay pedidos"),r.map((function(e,t){return c.a.createElement("div",{className:"Checkout-item",key:t},c.a.createElement("div",{className:"Checkout-element"},c.a.createElement("h4",null,e.title),c.a.createElement("span",null,e.price)),c.a.createElement("button",{type:"button",onClick:o(e,t)},c.a.createElement("i",{className:"fas fa-trash-alt"})))}))),r.length>0&&c.a.createElement("div",{className:"Checkout-sidebar"},c.a.createElement("h3",null,"Precio Total: $ ".concat(y())),c.a.createElement(l.b,{to:"/checkout/information"}," ",c.a.createElement("button",{type:"button"},"Continuar pedido"))))},v=(a(55),a(40)),N=function(){var e=Object(n.useContext)(m).state,t=e.cart,a=e.buyer,r=e.addNewOrder,o=Object(i.f)();return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"Payment-content"},c.a.createElement("h3",null,"Resumen del pedido:"),t.map((function(e,t){return c.a.createElement("div",{className:"Information-item",key:t},c.a.createElement("div",{className:"Information-element"},c.a.createElement("h4",null,e.title),c.a.createElement("span",null,e.price)))})),c.a.createElement("div",{className:"Payment-button"},c.a.createElement(v.PayPalButton,{amount:y(),buttonStyles:{shape:"rect",layout:"vertical"},paypalOptions:{clientId:"sb-djlzk6746871@personal.example.com",intent:"capture",currency:"USD"},onButtonReady:function(){return console.log("payment star")},onSuccess:function(e,n){return function(e,n){if("COMPLETED"===e.status){console.log("Transaction completed by "+e.payer.name.given_name);var c={buyer:a,product:t,payment:n};console.log(c),o.push("/checkout/success"),r(c),console.log(e)}}(e,n)},onError:function(e){return console.log(e)},onCancel:function(e){return console.log(e)}}))))},O=(a(56),a(21));var x=function(e){var t=e.data,a={lat:t.latitude,lng:t.longitude};return Object(O.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyB7OQEXUAudFxRIt32g5Kon0Ml7SxALOcI"}).isLoaded?c.a.createElement(O.a,{mapContainerStyle:{width:"400px",height:"400px"},center:a,zoom:10},c.a.createElement(O.b,{position:a}),c.a.createElement(c.a.Fragment,null)):c.a.createElement(c.a.Fragment,null)},k=a(12),C=a.n(k),j=a(19),w=a(14),z=function(e){var t=Object(n.useState)({}),a=Object(w.a)(t,2),c=a[0],r=a[1],o="http://api.positionstack.com/v1/forward?access_key=653d7887af48efa55ea24d6e3e72ad97&query=".concat(e);return Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),r(a.data[0]);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c},P=function(){var e=Object(n.useContext)(m).state.buyer,t=z(e[0].address);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"Success-content"},c.a.createElement("h2",null,"".concat(e[0].name,", Gracias por tu compra")),c.a.createElement("span",null,"Tu pedido llegara en 3 dias a tu direcci\xf3n:"),c.a.createElement("div",{className:"Success-map"},c.a.createElement(x,{data:t})," ")))},S=(a(58),function(){return c.a.createElement("section",{className:"error"},c.a.createElement("section",{className:"error__container"},c.a.createElement("h2",{className:"error__container--title"},"404"),c.a.createElement("p",null,"P\xe1gina no encontrada")))}),I=a(22),_=a(9),F={cart:[{id:"1",image:"https://arepa.s3.amazonaws.com/camiseta.png",title:"Camiseta",price:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"3",image:"https://arepa.s3.amazonaws.com/mug.png",title:"Mug",price:10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}],products:[{id:"1",image:"https://arepa.s3.amazonaws.com/camiseta.png",title:"Camiseta",price:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"3",image:"https://arepa.s3.amazonaws.com/mug.png",title:"Mug",price:10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"4",image:"https://arepa.s3.amazonaws.com/pin.png",title:"Pin",price:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"5",image:"https://arepa.s3.amazonaws.com/stickers1.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"6",image:"https://arepa.s3.amazonaws.com/stickers2.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"7",image:"https://arepa.s3.amazonaws.com/hoodie.png",title:"Hoodie",price:35,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},L=a(41),T=a.n(L),A="http://localhost:1337/products",B=function(){var e=Object(n.useState)(F),t=Object(w.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(w.a)(r,2),l=o[0],i=o[1];Object(n.useLayoutEffect)((function(){function e(){return(e=Object(j.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T()(A);case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return{addToCart:function(e){c(Object(_.a)(Object(_.a)({},a),{},{cart:[].concat(Object(I.a)(a.cart),[e])}))},removeFromCart:function(e,t){c(Object(_.a)(Object(_.a)({},a),{},{cart:a.cart.filter((function(e,a){return a!==t}))}))},addToBuyer:function(e){c(Object(_.a)(Object(_.a)({},a),{},{buyer:[].concat(Object(I.a)(a.buyer),[e])}))},addNewOrder:function(e){c(Object(_.a)(Object(_.a)({},a),{},{order:[].concat(Object(I.a)(a.order),[e])}))},products:l,state:a}},R=function(){var e=B(),t=Object.keys(e.state).length;return c.a.createElement(c.a.Fragment,null," ",t>0?c.a.createElement(m.Provider,{value:e},"  ",c.a.createElement(l.a,null,c.a.createElement(p,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:h}),c.a.createElement(i.a,{exact:!0,path:"/checkout",component:b}),"   ",c.a.createElement(i.a,{exact:!0,path:"/checkout/information",component:g}),"   ",c.a.createElement(i.a,{exact:!0,path:"/checkout/payment",component:N}),"  ",c.a.createElement(i.a,{exact:!0,path:"/checkout/success",component:P}),"   ",c.a.createElement(i.a,{component:S}))))," "):c.a.createElement("h1",null,"cargando..."))};a(77);o.a.render(c.a.createElement(R,null),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.1b28f204.chunk.js.map