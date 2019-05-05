/**
 * skylark-ui-rteditor - The skylark rteditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylarkui/skylark-ui-rteditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query","../Toolbar","../RichEditor","../Popover"],function(t,i,e,n,a){var r=a.inherit({});return r.prototype.offset={top:6,left:-4},r.prototype.render=function(){var t,e;return t='<div class="link-settings">\n  <div class="settings-field">\n    <label>'+this._t("imageUrl")+'</label>\n    <input class="image-src" type="text" tabindex="1" />\n    <a class="btn-upload" href="javascript:;"\n      title="'+this._t("uploadImage")+'" tabindex="-1">\n      <span class="richeditor-icon richeditor-icon-upload"></span>\n    </a>\n  </div>\n  <div class=\'settings-field\'>\n    <label>'+this._t("imageAlt")+'</label>\n    <input class="image-alt" id="image-alt" type="text" tabindex="1" />\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("imageSize")+'</label>\n    <input class="image-size" id="image-width" type="text" tabindex="2" />\n    <span class="times">×</span>\n    <input class="image-size" id="image-height" type="text" tabindex="3" />\n    <a class="btn-restore" href="javascript:;"\n      title="'+this._t("restoreImageSize")+'" tabindex="-1">\n      <span class="richeditor-icon richeditor-icon-undo"></span>\n    </a>\n  </div>\n</div>',this.el.addClass("image-popover").append(t),this.srcEl=this.el.find(".image-src"),this.widthEl=this.el.find("#image-width"),this.heightEl=this.el.find("#image-height"),this.altEl=this.el.find("#image-alt"),this.srcEl.on("keydown",(e=this,function(t){var i;if(13===t.which&&!e.target.hasClass("uploading"))return t.preventDefault(),i=document.createRange(),e.button.editor.editable.selection.setRangeAfter(e.target,i),e.hide()})),this.srcEl.on("blur",function(t){return function(i){return t._loadImage(t.srcEl.val())}}(this)),this.el.find(".image-size").on("blur",function(t){return function(e){return t._resizeImg(i(e.currentTarget)),t.el.data("popover").refresh()}}(this)),this.el.find(".image-size").on("keyup",function(t){return function(e){var n;if(n=i(e.currentTarget),13!==e.which&&27!==e.which&&9!==e.which)return t._resizeImg(n,!0)}}(this)),this.el.find(".image-size").on("keydown",function(t){return function(e){var n,a,r;return a=i(e.currentTarget),13===e.which||27===e.which?(e.preventDefault(),13===e.which?t._resizeImg(a):t._restoreImg(),n=t.target,t.hide(),r=document.createRange(),t.button.editor.editable.selection.setRangeAfter(n,r)):9===e.which?t.el.data("popover").refresh():void 0}}(this)),this.altEl.on("keydown",function(t){return function(i){var e;if(13===i.which)return i.preventDefault(),e=document.createRange(),t.button.editor.editable.selection.setRangeAfter(t.target,e),t.hide()}}(this)),this.altEl.on("keyup",function(t){return function(i){if(13!==i.which&&27!==i.which&&9!==i.which)return t.alt=t.altEl.val(),t.target.attr("alt",t.alt)}}(this)),this.el.find(".btn-restore").on("click",function(t){return function(i){return t._restoreImg(),t.el.data("popover").refresh()}}(this)),this.editor.on("valuechanged",function(t){return function(i){if(t.active)return t.refresh()}}(this)),this._initUploader()},r.prototype._initUploader=function(){var t,e,n;if(t=this.el.find(".btn-upload"),null!=this.editor.uploader)return n=this,(e=function(){return n.input&&n.input.remove(),n.input=i("<input/>",{type:"file",title:n._t("uploadImage"),multiple:!0,accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"}).appendTo(t)})(),this.el.on("click mousedown","input[type=file]",function(t){return t.stopPropagation()}),this.el.on("change","input[type=file]",function(t){return function(i){return t.editor.uploader.upload(t.input,{inline:!0,img:t.target}),e()}}(this));t.remove()},r.prototype._resizeImg=function(i,e){var n,a,r;if(null==e&&(e=!1),a=1*i.val(),this.target&&(t.isNumber(a)||a<0))return i.is(this.widthEl)?(r=a,n=this.height*a/this.width,this.heightEl.val(n)):(n=a,r=this.width*a/this.height,this.widthEl.val(r)),e?void 0:(this.target.attr({width:r,height:n}),this.editor.trigger("valuechanged"))},r.prototype._restoreImg=function(){var t,i;return i=(null!=(t=this.target.data("image-size"))?t.split(","):void 0)||[this.width,this.height],this.target.attr({width:1*i[0],height:1*i[1]}),this.widthEl.val(i[0]),this.heightEl.val(i[1]),this.editor.trigger("valuechanged")},r.prototype._loadImage=function(t,i){var e;if(!/^data:image/.test(t)||this.editor.uploader){if(this.target.attr("src")!==t)return this.button.loadImage(this.target,t,(e=this,function(n){var a;if(n)return e.active&&(e.width=n.width,e.height=n.height,e.widthEl.val(e.width),e.heightEl.val(e.height)),/^data:image/.test(t)?((a=e.editor.editable.util.dataURLtoBlob(t)).name="Base64 Image.png",e.editor.uploader.upload(a,{inline:!0,img:e.target})):e.editor.trigger("valuechanged"),i?i(n):void 0}))}else i&&i(!1)},r.prototype.show=function(){var t,i;return i=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],a.prototype.show.apply(this,i),t=this.target,this.width=t.width(),this.height=t.height(),this.alt=t.attr("alt"),t.hasClass("uploading")?this.srcEl.val(this._t("uploading")).prop("disabled",!0):(this.srcEl.val(t.attr("src")).prop("disabled",!1),this.widthEl.val(this.width),this.heightEl.val(this.height),this.altEl.val(this.alt))},r});
//# sourceMappingURL=../sourcemaps/buttons/ImagePopover.js.map
