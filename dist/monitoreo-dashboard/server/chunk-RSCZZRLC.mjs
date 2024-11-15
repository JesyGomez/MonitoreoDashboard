import './polyfills.server.mjs';
import{j as C}from"./chunk-R6EPD4WH.mjs";import{a as E,b as P,c as A,d as M,e as k,f as L,l as I}from"./chunk-EUYU3OXE.mjs";import{j as S,k as v,l as _}from"./chunk-RFT6AS4T.mjs";import{Fa as x,Ha as s,Ja as e,Ka as t,La as m,Na as g,Pa as i,Sa as p,T as h,Ta as c,Ua as f,Wa as w,ua as a,va as y}from"./chunk-PCGZHL7I.mjs";import"./chunk-5XUXGTUW.mjs";function F(r,l){r&1&&m(0,"i",28)}function N(r,l){r&1&&m(0,"i",29)}var b=class r{constructor(l){this.router=l}imagePath="images/DMonitoreo.png";username="";password="";showPassword=!1;onLogin(...l){this.username==="usuario1"&&this.password==="1234"?this.router.navigate(["/app/dashboard"]):alert("Usuario o contrase\xF1a incorrectos.")}togglePasswordVisibility(){this.showPassword=!this.showPassword}get backgroundStyle(){return{background:`
        linear-gradient(to bottom, rgba(51, 163, 170, 0.7), rgba(16, 112, 118, 0.7)),
        url(${this.imagePath})`,"background-size":"cover","background-position":"right",height:"100%",width:"100%","background-repeat":"no-repeat"}}static \u0275fac=function(d){return new(d||r)(y(C))};static \u0275cmp=h({type:r,selectors:[["app-login-component"]],standalone:!0,features:[w],decls:52,vars:6,consts:[[1,"bg-gradient-to-b","from-[#33A3AA]","to-[#107076]","flex","justify-center","items-center","h-screen"],[1,"w-1/2","h-full","hidden","lg:block"],[1,"loginContainerfijo","h-full","flex","flex-col","justify-center","items-left","p-40",3,"ngStyle"],[1,"text-white","text-4xl","font-bold","mb-5","text-center"],[1,"text-white","text-left","text-3x1","mb-4"],[1,"flex","items-center","mb-4"],["src","images/Icon2.png","alt","Logo monitoreo",1,"icon","mr-2"],[1,"text-white","text-2xl","font-semibold"],[1,"text-white"],["src","images/IconEstrella.png","alt","Logo estrella",1,"icon","mr-2"],[1,"lg:p-36","md:p-52","sm:p-20","p-8","w-full","lg:w-1/2","bg-white","rounded-md","shadow-lg","h-full","flex","flex-col","justify-center"],[1,"text-4xl","font-semibold","mb-4","text-gray-900"],[1,"text-3xl","font-semibold","mb-4","text-gray-800"],[1,"mb-4"],["for","email",1,"block","text-gray-800"],["type","email","id","email","name","username","autocomplete","off",1,"w-full","border","border-gray-300","rounded-md","py-2","px-3","focus:outline-none","focus:border-blue-500",3,"ngModelChange","ngModel"],[1,"mb-4","relative"],["for","password",1,"block","text-gray-800"],["id","password","name","password","autocomplete","off",1,"w-full","border","border-gray-300","rounded-md","py-2","px-3","pr-10","focus:outline-none","focus:border-blue-500",3,"ngModelChange","type","ngModel"],["type","button",1,"absolute","inset-y-0","right-3","flex","items-end","rounded-md","p-5","text-gray-500",3,"click"],["class","fa-solid fa-eye-slash",4,"ngIf"],["class","fa-regular fa-eye",4,"ngIf"],[1,"flex","justify-between","items-center","mb-2"],["href","#",1,"hover:underline"],["type","button",1,"bg-gradient-to-b","from-[#33A3AA]","to-[#107076]","hover:from-[#107076]","hover:to-[#33A3AA]","text-white","font-semibold","rounded-md","py-1","px-2",3,"click"],[1,"mt-6","text-left","text-gray-700"],["for","remember"],["href","#",1,"text-[#33A3AA]","hover:underline"],[1,"fa-solid","fa-eye-slash"],[1,"fa-regular","fa-eye"]],template:function(d,n){d&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),i(4,"Iniciar Sesi\xF3n"),t(),e(5,"p",4),i(6,"Nos alegra tenerte de vuelta y estamos listos para atender tus necesidades. Inicia sesi\xF3n y contin\xFAa aprovechando al m\xE1ximo nuestra plataforma."),t(),e(7,"div",5),m(8,"img",6),e(9,"div")(10,"h2",7),i(11,"Monitoreo Integral"),t(),e(12,"p",8),i(13,"Administra, monitorea m\xFAltiples plantas de forma centralizada"),t()()(),e(14,"div",5),m(15,"img",9),e(16,"div")(17,"h2",7),i(18,"Notificaciones en tiempo real"),t(),e(19,"p",8),i(20,"Recibe notificaciones en tiempo real sobre las mediciones"),t()()()()(),e(21,"div",10)(22,"h1",11),i(23,"Portal de Monitoreo"),t(),e(24,"h2",12),i(25,"Iniciar Sesi\xF3n"),t(),e(26,"form")(27,"div",13)(28,"label",14),i(29,"Email"),t(),e(30,"input",15),f("ngModelChange",function(o){return c(n.username,o)||(n.username=o),o}),t()(),e(31,"div",16)(32,"label",17),i(33,"Password"),t(),e(34,"input",18),f("ngModelChange",function(o){return c(n.password,o)||(n.password=o),o}),t(),e(35,"button",19),g("click",function(){return n.togglePasswordVisibility()}),x(36,F,1,0,"i",20)(37,N,1,0,"i",21),t()(),e(38,"div",22)(39,"a",23),i(40,"\xBFOlvidaste tu contrase\xF1a?"),t(),e(41,"button",24),g("click",function(){return n.onLogin()}),i(42," Inicia Sesi\xF3n "),t()()(),e(43,"div",25)(44,"label",26),i(45,"Protegido por reCAPTCHA y sujeto a la "),e(46,"a",27),i(47,"Pol\xEDtica de Privacidad"),t(),i(48," y "),e(49,"a",27),i(50,"Condiciones"),t(),i(51,". "),t()()()()),d&2&&(a(2),s("ngStyle",n.backgroundStyle),a(28),p("ngModel",n.username),a(4),s("type",n.showPassword?"text":"password"),p("ngModel",n.password),a(2),s("ngIf",!n.showPassword),a(),s("ngIf",n.showPassword))},dependencies:[_,S,v,I,L,E,P,A,k,M]})};export{b as default};