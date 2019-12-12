/**
 * skylark-widgets-wordpad - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-wordpad/
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-query","skylark-domx-contents/Editable","skylark-widgets-base/Widget","./Toolbar","./uploader","./i18n","./addons"],function(t,e,a,i,o,r,s,d,n){var l=o.inherit({options:{classes:{icons:{html:"fa fa-html5",header:"fa fa-header",bold:"fa fa-bold",italic:"fa fa-italic",underline:"fa fa-underline",strike:"fa fa-strikethrough",fontSize:"fa fa-text-height",fontColor:"fa fa-font",mark:"fa fa-pencil",blockquote:"fa fa-quote-right",listul:"fa fa-list-ul",listol:"fa fa-list-ol",code:"fa fa-code",table:"fa fa-table",fullscreen:"fa fa-expand",emoji:"fa fa-smile-o",link:"fa fa-link",image:"fa fa-image",video:"fa fa-video-camera",indent:"fa fa-indent",dedent:"fa fa-dedent",alignLeft:"fa fa-align-left",alignCenter:"fa fa-align-center",alignRight:"fa fa-align-right",alignJustify:"fa fa-align-justify"}},srcNodeRef:null,placeholder:"",defaultImage:"images/image.png",params:{},upload:!1,template:'<div class="wordpad">\n  <div class="wordpad-wrapper">\n    <div class="wordpad-placeholder"></div>\n    <div class="wordpad-body" contenteditable="true">\n    </div>\n  </div>\n</div>'},_init:function(){var t,e;if(this._actions=[],this.opts=this.options,this.textarea=a(this.opts.srcNodeRef),this.opts.placeholder=this.opts.placeholder||this.textarea.attr("placeholder"),!this.textarea.length)throw new Error("Wordpad: param textarea is required.");null!=(t=this.textarea.data("wordpad"))&&t.destroy(),this.id=++l.count,this._render();var o=this;if(this.editable=new i(this._elm,{classPrefix:"wordpad-",textarea:this.textarea,body:this.body}),this.editable.on("all",function(t,e){return o.trigger(t.type,e)}),this.opts.upload&&s&&(e="object"==typeof this.opts.upload?this.opts.upload:{},this.uploader=s(e)),this.toolbar=new r(this,{toolbar:this.opts.toolbar,toolbarFloat:this.opts.toolbarFloat,toolbarHidden:this.opts.toolbarHidden,toolbarFloatOffset:this.opts.toolbarFloatOffset}),this.opts.placeholder&&this.on("valuechanged",function(){return o._placeholder()}),this.setValue(this.textarea.val().trim()||""),this.textarea.attr("autofocus"))return o.focus()}});return l.prototype.triggerHandler=l.prototype.trigger=function(t,a){var i;return i=[t],a&&(i=i.concat(a)),e.Evented.prototype.trigger.apply(this,i),this},l.count=0,l.prototype._render=function(){var t,e,i,o;if(this.el=a(this._elm).insertBefore(this.textarea),this.wrapper=this.el.find(".wordpad-wrapper"),this.body=this.wrapper.find(".wordpad-body"),this.placeholderEl=this.wrapper.find(".wordpad-placeholder").append(this.opts.placeholder),this.el.data("wordpad",this),this.wrapper.append(this.textarea),this.textarea.data("wordpad",this).blur(),this.body.attr("tabindex",this.textarea.attr("tabindex")),this.opts.params){for(t in i=[],e=this.opts.params)o=e[t],i.push(a("<input/>",{type:"hidden",name:t,value:o}).insertAfter(this.textarea));return i}},l.prototype._placeholder=function(){var t;return 0===(t=this.body.children()).length||1===t.length&&this.util.isEmptyNode(t)&&parseInt(t.css("margin-left")||0)<this.opts.indentWidth?this.placeholderEl.show():this.placeholderEl.hide()},l.prototype.setValue=function(t){return this.hidePopover(),this.editable.setValue(t),this.trigger("valuechanged")},l.prototype.getValue=function(){return this.editable.getValue()},l.prototype.focus=function(){return this.editable.focus()},l.prototype.blur=function(){return this.editable.blur()},l.prototype.findAction=function(t){if(!this._actions[t]){if(!this.constructor.addons.actions[t])throw new Error("Wordpad: invalid action "+t);this._actions[t]=new this.constructor.addons.actions[t]({editor:this})}return this._actions[t]},l.prototype.hidePopover=function(){return this.el.find(".wordpad-popover").each(function(t,e){if((e=a(e).data("popover")).active)return e.hide()})},l.prototype.destroy=function(){return this.trigger("destroy"),this.textarea.closest("form").off(".Wordpad .wordpad-"+this.id),this.selection.clear(),this.inputManager.focused=!1,this.textarea.insertBefore(this.el).hide().val("").removeData("wordpad"),this.el.remove(),a(document).off(".wordpad-"+this.id),a(window).off(".wordpad-"+this.id),this.off()},l.Toolbar=r,l.i18n=d,l.addons=n,t.attach("widgets.Wordpad",l)});
//# sourceMappingURL=sourcemaps/Wordpad.js.map
