import{$ as u,X as f,g as d,h as m}from"./chunk-LQ6XVIMY.js";var g=class{};function k(h){return h&&typeof h.connect=="function"&&!(h instanceof d)}var p=class{applyChanges(e,t,s,n,i){e.forEachOperation((o,r,a)=>{let c,l;if(o.previousIndex==null){let _=s(o,r,a);c=t.createEmbeddedView(_.templateRef,_.context,_.index),l=1}else a==null?(t.remove(r),l=3):(c=t.get(r),t.move(c,a),l=2);i&&i({context:c?.context,operation:l,record:o})})}detach(){}};var E=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(e=!1,t,s=!0,n){this._multiple=e,this._emitChanges=s,this.compareWith=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new m,t&&t.length&&(e?t.forEach(i=>this._markSelected(i)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){this._verifyValueAssignment(e),e.forEach(s=>this._markSelected(s));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...e){this._verifyValueAssignment(e),e.forEach(s=>this._unmarkSelected(s));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...e){this._verifyValueAssignment(e);let t=this.selected,s=new Set(e);e.forEach(i=>this._markSelected(i)),t.filter(i=>!s.has(i)).forEach(i=>this._unmarkSelected(i));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e){if(this.compareWith){for(let t of this._selection)if(this.compareWith(e,t))return t;return e}else return e}};var A=(()=>{let e=class e{constructor(){this._listeners=[]}notify(s,n){for(let i of this._listeners)i(s,n)}listen(s){return this._listeners.push(s),()=>{this._listeners=this._listeners.filter(n=>s!==n)}}ngOnDestroy(){this._listeners=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let h=e;return h})(),b=new u("_ViewRepeater");export{g as a,k as b,p as c,E as d,A as e,b as f};
