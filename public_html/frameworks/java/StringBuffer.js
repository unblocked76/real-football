"use strict";var _p=window;var java=_p.java=_p.java||{};var lang=_p.java.lang=_p.java.lang||{};var StringBuffer=_p.java.lang.StringBuffer=gloft.Class.extend({value:null,count:0,ctor:function(a){this.value=[];if(typeof a=="string"||a instanceof String){this.append(a)}},append:function(c){if(c==null){c="null"}var a=c.length;if(a==0){return this}for(var b=0;b<a;b++){this.value[this.count+b]=c.charAt(b)}this.count=this.count+a;return this},deleteCharAt:function(a){if((a<0)||(a>=this.count)){throw new Error(a)}System.arraycopy(this.value,a+1,this.value,a,this.count-a-1);this.value[this.count-1]="";this.count--;return this},insert:function(e,d){if(typeof d=="string"||d instanceof String){}else{throw new Error("Not supported yet")}if((e<0)||(e>this.count)){throw new Error(e)}if(d==null){d="null"}var a=d.length;var c=this.count+a;System.arraycopy(this.value,e,this.value,e+a,this.count-e);for(var b=0;b<a;b++){this.value[e+b]=d.charAt(b)}this.count=c;return this},length:function(){return this.count},toString:function(){return this.value.join("")},setLength:function(a){if(this.count-1>=0){return this.deleteCharAt(this.count-1)}},charAt:function(a){if(a<this.count){return this.value[a]}return""},setCharAt:function(a,b){if(a<this.count){this.value[a]=b}},deleteStr:function(b,a){if(true){throw new Error("Not supported yet")}}});