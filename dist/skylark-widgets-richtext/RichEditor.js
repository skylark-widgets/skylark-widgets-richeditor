/**
 * skylark-widgets-richtext - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-richtext/
 * @license MIT
 */
define([],function(){"use strict";var t={},e={};function i(t){return"object"!=typeof t||Array.isArray(t)||!function(t){var e;for(e in t)return!1;return!0}(t)}return define(["skylark-langx/langx","skylark-domx-query","skylark-domx-contents/Editable","skylark-widgets-base/Widget","./Toolbar","./uploader","./i18n","./addons"],function(t,e,i,r,o,a,s,n){var h=r.inherit({options:{srcNodeRef:null,placeholder:"",defaultImage:"images/image.png",params:{},upload:!1,template:'<div class="richeditor">\n  <div class="richeditor-wrapper">\n    <div class="richeditor-placeholder"></div>\n    <div class="richeditor-body" contenteditable="true">\n    </div>\n  </div>\n</div>'},_init:function(){var t,r;if(this._actions=[],this.opts=this.options,this.textarea=e(this.opts.srcNodeRef),this.opts.placeholder=this.opts.placeholder||this.textarea.attr("placeholder"),!this.textarea.length)throw new Error("richeditor: param textarea is required.");null!=(t=this.textarea.data("richeditor"))&&t.destroy(),this.id=++h.count,this._render();var s=this;if(this.editable=new i(this._elm,{classPrefix:"richeditor-",textarea:this.textarea,body:this.body}),this.editable.on("all",function(t,e){return s.trigger(t.type,e)}),this.opts.upload&&a&&(r="object"==typeof this.opts.upload?this.opts.upload:{},this.uploader=a(r)),this.toolbar=new o(this,{toolbar:this.opts.toolbar,toolbarFloat:this.opts.toolbarFloat,toolbarHidden:this.opts.toolbarHidden,toolbarFloatOffset:this.opts.toolbarFloatOffset}),this.opts.placeholder&&this.on("valuechanged",function(){return s._placeholder()}),this.setValue(this.textarea.val().trim()||""),this.textarea.attr("autofocus"))return s.focus()}});return h.prototype.triggerHandler=h.prototype.trigger=function(e,i){var r;return r=[e],i&&(r=r.concat(i)),t.Evented.prototype.trigger.apply(this,r),this},h.count=0,h.prototype._render=function(){var t,i,r,o;if(this.el=e(this._elm).insertBefore(this.textarea),this.wrapper=this.el.find(".richeditor-wrapper"),this.body=this.wrapper.find(".richeditor-body"),this.placeholderEl=this.wrapper.find(".richeditor-placeholder").append(this.opts.placeholder),this.el.data("richeditor",this),this.wrapper.append(this.textarea),this.textarea.data("richeditor",this).blur(),this.body.attr("tabindex",this.textarea.attr("tabindex")),this.opts.params){for(t in r=[],i=this.opts.params)o=i[t],r.push(e("<input/>",{type:"hidden",name:t,value:o}).insertAfter(this.textarea));return r}},h.prototype._placeholder=function(){var t;return 0===(t=this.body.children()).length||1===t.length&&this.util.isEmptyNode(t)&&parseInt(t.css("margin-left")||0)<this.opts.indentWidth?this.placeholderEl.show():this.placeholderEl.hide()},h.prototype.setValue=function(t){return this.hidePopover(),this.editable.setValue(t),this.trigger("valuechanged")},h.prototype.getValue=function(){return this.editable.getValue()},h.prototype.focus=function(){return this.editable.focus()},h.prototype.blur=function(){return this.editable.blur()},h.prototype.findAction=function(t){if(!this._actions[t]){if(!this.constructor.addons.actions[t])throw new Error("richeditor: invalid action "+t);this._actions[t]=new this.constructor.addons.actions[t]({editor:this})}return this._actions[t]},h.prototype.hidePopover=function(){return this.el.find(".richeditor-popover").each(function(t,i){if((i=e(i).data("popover")).active)return i.hide()})},h.prototype.destroy=function(){return this.triggerHandler("destroy"),this.textarea.closest("form").off(".richeditor .richeditor-"+this.id),this.selection.clear(),this.inputManager.focused=!1,this.textarea.insertBefore(this.el).hide().val("").removeData("richeditor"),this.el.remove(),e(document).off(".richeditor-"+this.id),e(window).off(".richeditor-"+this.id),this.off()},h.Toolbar=o,h.i18n=s,h.addons=n,h}),i(e)?e:i(t)?t:void 0});
//# sourceMappingURL=sourcemaps/RichEditor.js.map
