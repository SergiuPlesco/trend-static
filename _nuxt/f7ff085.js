(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{363:function(e,t,r){"use strict";r.r(t);r(44);var o=r(19),n=(r(77),{layout:"En",name:"FormEn",data:function(){return{error:!1,success:!1,formData:{name:"",phone:"",email:"",message:""}}},methods:{submitForm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/api/",e.formData);case 3:e.formData={name:"",phone:"",email:"",message:""},e.success=!0,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.error=!0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),m=r(23),component=Object(m.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("div",{staticClass:"space-y-4 mt-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.name,expression:"formData.name"}],staticClass:"w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white",attrs:{type:"text",required:"",placeholder:"Full name"},domProps:{value:e.formData.name},on:{input:function(t){t.target.composing||e.$set(e.formData,"name",t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.phone,expression:"formData.phone"}],staticClass:"w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white",attrs:{type:"number",required:"",placeholder:"Phone"},domProps:{value:e.formData.phone},on:{input:function(t){t.target.composing||e.$set(e.formData,"phone",t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],staticClass:"w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white",attrs:{type:"email",required:"",placeholder:"Email"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formData.message,expression:"formData.message"}],staticClass:"w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white min-h-[120px]",attrs:{required:"",placeholder:"Message"},domProps:{value:e.formData.message},on:{input:function(t){t.target.composing||e.$set(e.formData,"message",t.target.value)}}}),e._v(" "),e._m(0)])]),e._v(" "),e.success?t("p",{staticClass:"text-green-600 mt-4"},[e._v("Message succesfully sent.")]):e.error?t("p",{staticClass:"text-red-600 mt-4"},[e._v("\n    There was an error sending the message. Please try again or conteact us\n    directly at office@example.com\n  ")]):e._e()])}),[function(){var e=this._self._c;return e("div",{staticClass:"flex"},[e("button",{staticClass:"block text-custom-1 bg-white rounded-md text-base font-bold px-4 py-3 text-center w-[200px]",attrs:{type:"submit"}},[this._v("\n          Send now\n        ")])])}],!1,null,null,null);t.default=component.exports}}]);