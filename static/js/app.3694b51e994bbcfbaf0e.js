webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),c=n("Ml+6"),l=n("4sbQ"),d=n("g+Hc"),p=n("BMSc"),u=n("Puvr"),m={props:["sfdc_impression_id"],name:"STLviwer",components:{VueCircle:n.n(u).a},data:function(){return{scene:null,renderer:null,camera:null,controls:null,points:[],height:0,object:null,mouse:null,showProgress:!0,fill:{gradient:["#000000","#000000","#000000"]}}},methods:{init:function(){var e=this;return i()(a.a.mark(function t(){var n,o,s,r,i,u,m,h,v,w,f,g,b,_,y;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e,o=document.getElementById("canvas"),e.renderer=new c.D({clearColor:16777215,clearAlpha:1}),s=window.innerWidth,r=window.innerHeight,e.renderer.setSize(s,r),e.renderer.setClearColor(16777215,1),o.appendChild(e.renderer.domElement),e.scene=new c.y,e.scene.background=new c.e(16777215),i=new l.a,u=new c.a(1052688),e.scene.add(u),(m=new c.w(16777215,1,0)).position.set(-200,0,-100),e.scene.add(m),(h=new c.w(16777215,1,0)).position.set(200,0,100),e.scene.add(h),(v=new c.w(16777215,1,0)).position.set(0,200,100),e.scene.add(v),(w=new c.w(16777215,1,0)).position.set(0,-200,-100),e.scene.add(w),f=(new d.a).load("/static/empty_warehouse_01_2k.hdr",function(){f.mapping=c.h}),g=window.location.href.split("/")[4],b=new c.r,_=void 0,y=void 0,b.onStart=function(e,t,n){console.log("Started loading file: "+e+".\nLoaded "+t+" of "+n+" files.")},b.onLoad=function(){n.scene.add(_),n.scene.add(y),n.showProgress=!1},b.onProgress=function(e,t){n.$refs.myUniqueID.updateProgress(t/2*100),_.position.set(0,0,0),_.rotation.x=-Math.PI/2,_.rotation.z=-Math.PI/2-.7,y.position.set(0,0,0),y.rotation.x=-Math.PI/2,y.rotation.z=-Math.PI/2-.7,setTimeout(function(){gsap.to(n.camera,{duration:2,zoom:3,onUpdate:function(){n.camera.updateProjectionMatrix()}}),gsap.to(n.controls.target,{duration:2,x:10,y:0,z:0,onUpdate:function(){n.controls.update()}})},1e3)},b.onError=function(e){console.log("There was an error loading "+e)},(i=new l.a(b)).load("https://s3.ap-northeast-1.amazonaws.com/static-dev.oh-my-teeth.com/"+g+"/lowerJaw.stl",function(e){var t=new c.u({color:5066061,transmission:0,roughness:0,envMapIntensity:.1,envMap:f});(_=new c.t(e,t)).name="lower"}),i.load("https://s3.ap-northeast-1.amazonaws.com/static-dev.oh-my-teeth.com/"+g+"/upperJaw.stl",function(e){var t=new c.u({color:5066061,transmission:0,roughness:0,envMapIntensity:.1,envMap:f});(y=new c.t(e,t)).name="upper"}),e.points.push(new c.C(0,0,0)),e.camera=new c.v(90,s/r,1,1e3),e.camera.position.y=0,e.camera.position.z=0,e.camera.position.x=-250,e.camera.lookAt(new c.C(0,0,0)),e.renderer.shadowMap.enabled=!0,e.renderer.shadowMap.type=c.b,e.controls=new p.a(e.camera,e.renderer.domElement);case 45:case"end":return t.stop()}},t,e)}))()},animate:function(){this.controls.autoRotate=!0,requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}},mounted:function(){var e=this;return i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:e.animate(),e.controls.addEventListener("change",function(t){var n=e.scene.getObjectByName("upper"),o=e.scene.getObjectByName("lower");n&&(e.controls.object.position.y>0&&Math.abs(e.controls.object.position.z/e.controls.object.position.x)<.01?n.visible=!1:n.visible=!0),o&&(e.controls.object.position.y<0&&Math.abs(e.controls.object.position.z/e.controls.object.position.x)<.01?o.visible=!1:o.visible=!0)});case 4:case"end":return t.stop()}},t,e)}))()}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{attrs:{id:"canvas"}}),e._v(" "),e._m(0),e._v(" "),e.showProgress?n("div",{staticClass:"progress"},[n("vue-circle",{ref:"myUniqueID",attrs:{progress:0,size:150,reverse:!1,"line-cap":"round",fill:e.fill,"empty-fill":"rgba(0, 0, 0, .1)","animation-start-value":0,"start-angle":0,"insert-mode":"append",thickness:4,"show-percent":!0}})],1):e._e(),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"main"},[this._v("Oh Simon's teeth!")]),this._v(" "),t("div",{staticClass:"date"},[this._v("2022 02.06 19:02")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"button-area"},[t("button",{staticClass:"red-button"},[this._v("シェアする")]),this._v(" "),t("div",{staticClass:"text"},[this._v("不明点があります")])])}]};var v=n("VU/8")(m,h,!1,function(e){n("S3vX")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:v},template:"<App/>"})},S3vX:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3694b51e994bbcfbaf0e.js.map