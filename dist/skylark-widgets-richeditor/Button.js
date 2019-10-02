/**
 * skylark-widgets-richeditor - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-richeditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query","skylark-widgets-base/Widget","./RichEditor","./i18n"],function(t,e,i,s,r){var n=i.inherit({options:{template:'<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',menu:{menuWrapper:'<div class="toolbar-menu"></div>',menuItem:'<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',separator:'<li><span class="separator"></span></li>'}},_construct:function(t){this.toolbar=t.toolbar,this.editor=t.toolbar.editor,this.title=r.translate(this.name),i.prototype._construct.call(this,t)}});return n.prototype.name="",n.prototype.icon="",n.prototype.title="",n.prototype.text="",n.prototype.htmlTag="",n.prototype.disableTag="",n.prototype.menu=!1,n.prototype.active=!1,n.prototype.disabled=!1,n.prototype.needFocus=!0,n.prototype.shortcut=null,n.prototype._init=function(){var i,s,r,n,a;for(this.render(),this.el.on("mousedown",(a=this,function(t){var e,i;return t.preventDefault(),e=a.needFocus&&!a.editor.editable.inputManager.focused,!a.el.hasClass("disabled")&&(e&&a.editor.focus(),a.menu?(a.wrapper.toggleClass("menu-on").siblings("li").removeClass("menu-on"),a.wrapper.is(".menu-on")&&(a.menuWrapper.offset().left+a.menuWrapper.outerWidth()+5-a.editor.wrapper.offset().left-a.editor.wrapper.outerWidth()>0&&a.menuWrapper.css({left:"auto",right:0}),a.trigger("menuexpand")),!1):(i=a.el.data("param"),a.command(i),!1))})),this.wrapper.on("click","a.menu-item",function(t){return function(i){var s,r,n;return i.preventDefault(),s=e(i.currentTarget),t.wrapper.removeClass("menu-on"),r=t.needFocus&&!t.editor.editable.inputManager.focused,!s.hasClass("disabled")&&!r&&(t.toolbar.wrapper.removeClass("menu-on"),n=s.data("param"),t.command(n),!1)}}(this)),this.wrapper.on("mousedown","a.menu-item",function(t){return!1}),this.editor.on("blur",function(t){return function(){if(t.editor.body.is(":visible")&&t.editor.body.is("[contenteditable]")&&!t.editor.editable.clipboard.pasting)return t.setActive(!1),t.setDisabled(!1)}}(this)),null!=this.shortcut&&this.editor.editable.hotkeys.add(this.shortcut,function(t){return function(e){return t.el.mousedown(),!1}}(this)),i=0,s=(r=this.htmlTag.split(",")).length;i<s;i++)n=r[i],(n=t.trim(n))&&t.inArray(n,this.editor.editable.formatter._allowedTags)<0&&this.editor.editable.formatter._allowedTags.push(n);return this.editor.on("selectionchanged",function(t){return function(e){if(t.editor.editable.inputManager.focused)return t._status()}}(this))},n.prototype.iconClassOf=function(t){return t?"richeditor-icon richeditor-icon-"+t:""},n.prototype.setIcon=function(t){return this.el.find("span").removeClass().addClass(this.iconClassOf(t)).text(this.text)},n.prototype.render=function(){if(this.toolbar.addToolItem(this),this.wrapper=e(this._elm),this.el=this.wrapper.find("a.toolbar-item"),this.el.attr("title",this.title).addClass("toolbar-item-"+this.name).data("button",this),this.setIcon(this.icon),this.menu)return this.menuWrapper=e(this.options.menu.menuWrapper).appendTo(this.wrapper),this.menuWrapper.addClass("toolbar-menu-"+this.name),this.renderMenu()},n.prototype.renderMenu=function(){var i,s,r,n,a,o,l;if(t.isArray(this.menu)){for(this.menuEl=e("<ul/>").appendTo(this.menuWrapper),l=[],s=0,r=(a=this.menu).length;s<r;s++)"|"!==(n=a[s])?(i=e(this.options.menu.menuItem).appendTo(this.menuEl).find("a.menu-item").attr({title:null!=(o=n.title)?o:n.text,"data-param":n.param}).addClass("menu-item-"+n.name),n.icon?l.push(i.find("span").addClass(this.iconClassOf(n.icon))):l.push(i.find("span").text(n.text))):e(this.options.menu.separator).appendTo(this.menuEl);return l}},n.prototype.setActive=function(t){if(t!==this.active)return this.active=t,this.el.toggleClass("active",this.active)},n.prototype.setDisabled=function(t){if(t!==this.disabled)return this.disabled=t,this.el.toggleClass("disabled",this.disabled)},n.prototype._disableStatus=function(){var t,e,i;return i=this.editor.editable.selection.startNodes(),e=this.editor.editable.selection.endNodes(),t=i.filter(this.disableTag).length>0||e.filter(this.disableTag).length>0,this.setDisabled(t),this.disabled&&this.setActive(!1),this.disabled},n.prototype._activeStatus=function(){var t,e,i,s,r;return r=this.editor.editable.selection.startNodes(),i=this.editor.editable.selection.endNodes(),s=r.filter(this.htmlTag),e=i.filter(this.htmlTag),t=s.length>0&&e.length>0&&s.is(e),this.node=t?s:null,this.setActive(t),this.active},n.prototype._status=function(){if(this._disableStatus(),!this.disabled)return this._activeStatus()},n.prototype.command=function(t){},n.prototype._t=r.translate,s.Button=n,n});
//# sourceMappingURL=sourcemaps/Button.js.map
