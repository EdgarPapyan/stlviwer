webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s=n("Ml+6"),a=n("4sbQ"),r=n("BMSc"),o={name:"STLviwer",data:function(){return{show:this.tabs,scene:null,renderer:null,camera:null,controls:null,points:[],lightHolder:null,height:0,object:null,nozzle:null,raycaster:null,mouse:null,gcode:""}},methods:{init:function(){var e=n("PMNR"),t=n("UBQj"),i=this,o=document.getElementById("canvas");this.renderer=new s.w({clearColor:0,clearAlpha:1});var c=window.innerWidth,h=window.innerHeight;this.renderer.setSize(c,h),this.renderer.setClearColor(16777215,1),o.appendChild(this.renderer.domElement),this.scene=new s.r,this.scene.background=new s.e(5264735);var l=new a.a,d=new s.a(0);this.scene.add(d);var u=new s.p(16777215,1,0);u.position.set(0,200,0),this.scene.add(u);var p=new s.p(16777215,1,0);p.position.set(100,200,100),this.scene.add(p);var m=new s.p(16777215,1,0);m.position.set(-100,-200,-100),this.scene.add(m);t.getBinaryContent("static/test.zip",function(t,n){if(t)throw t;e.loadAsync(n).then(function(e){e.files["eh238hori_2021-10-06_021-LowerJaw.stl"].async("arrayBuffer").then(function(t){var n=l.parse(t),a=new s.n({emissive:0,ambient:41727,color:41727,specular:1118481,shininess:200}),r=new s.m(n,a);r.material.side=s.f,r.position.set(0,0,0),r.rotation.x=-Math.PI/2,r.rotation.z=-Math.PI/2,e.files["eh238hori_2021-10-06_021-UpperJaw.stl"].async("arrayBuffer").then(function(e){var t=l.parse(e),n=new s.m(t,a);n.material.side=s.f,n.position.set(0,0,0),n.rotation.x=-Math.PI/2,n.rotation.z=-Math.PI/2,i.scene.add(r),i.scene.add(n)})})})}),this.points.push(new s.v(0,0,0)),this.camera=new s.o(30,c/h,1,2e3),this.camera.position.y=0,this.camera.position.z=0,this.camera.position.x=-150,this.camera.lookAt(new s.v(0,0,0)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=s.b,this.controls=new r.a(this.camera,this.renderer.domElement)},animate:function(){this.controls.update(),this.controls.autoRotate=!0,requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app"},[t("div",{attrs:{id:"canvas"}})])}]};var h=n("VU/8")(o,c,!1,function(e){n("ua/h")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:h},template:"<App/>"})},"ua/h":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.da1df5fa9752dfdd927c.js.map