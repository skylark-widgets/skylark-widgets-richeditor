/**
 * skylark-widgets-richeditor - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-richeditor/
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","../Toolbar","../RichEditor","skylark-widgets-base/Action","./ImagePopover","../i18n"],function(e,t,i,r,a,o,n){var d=a.inherit({name:"image",icon:"picture-o",htmlTag:"img",disableTag:"pre, table",defaultImage:"",needFocus:!1,_init:function(){var e,i,r,o,d;if(this.editor.opts.imageAction)if(Array.isArray(this.editor.opts.imageAction))for(this.menu=[],i=0,r=(o=this.editor.opts.imageAction).length;i<r;i++)e=o[i],this.menu.push({name:e+"-image",text:this._t(e+"Image")});else this.menu=!1;else null!=this.editor.uploader?this.menu=[{name:"upload-image",text:n.translate("uploadImage")},{name:"external-image",text:n.translate("externalImage")}]:this.menu=!1;return this.defaultImage=this.editor.opts.defaultImage,this.editor.body.on("click","img:not([data-non-image])",(d=this,function(e){var i,r;return i=t(e.currentTarget),(r=document.createRange()).selectNode(i[0]),d.editor.editable.selection.range(r),d.editor.editable.util.support.onselectionchange||d.editor.trigger("selectionchanged"),!1})),this.editor.body.on("mouseup","img:not([data-non-image])",function(e){return!1}),this.editor.on("selectionchanged.image",function(e){return function(){var i,r,a;if(null!=(a=e.editor.editable.selection.range()))return 1===(i=t(a.cloneContents()).contents()).length&&i.is("img:not([data-non-image])")?(r=t(a.startContainer).contents().eq(a.startOffset),e.popover.show(r)):e.popover.hide()}}(this)),this.editor.on("valuechanged.image",function(e){return function(){var i;if((i=e.editor.wrapper.find(".richeditor-image-loading")).length>0)return i.each(function(i,r){var a,o,n;if(!((a=(o=t(r)).data("img"))&&a.parent().length>0)&&(o.remove(),a&&(n=a.data("file"))&&(e.editor.uploader.cancel(n),e.editor.body.find("img.uploading").length<1)))return e.editor.uploader.trigger("uploadready",[n])})}}(this)),a.prototype._init.call(this)},render:function(){var e;if(e=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],a.prototype.render.apply(this,e),this.popover=new o({Action:this}),"upload"===this.editor.opts.imageAction)return this._initUploader(this.el)},renderMenu:function(){return a.prototype.renderMenu.call(this),this._initUploader()},_initUploader:function(i){var r,a,o,n;if(null==i&&(i=this.menuEl.find(".menu-item-upload-image")),null!=this.editor.uploader)return r=null,n=this,(a=function(){return r&&r.remove(),r=t("<input/>",{type:"file",title:n._t("uploadImage"),multiple:!0,accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"}).appendTo(i)})(),i.on("click mousedown","input[type=file]",function(e){return e.stopPropagation()}),i.on("change","input[type=file]",function(e){return function(t){return e.editor.editable.inputManager.focused?(e.editor.uploader.upload(r,{inline:!0}),a()):(e.editor.one("focus",function(t){return e.editor.uploader.upload(r,{inline:!0}),a()}),e.editor.focus()),e.wrapper.removeClass("menu-on")}}(this)),this.editor.uploader.on("beforeupload",function(e){return function(i,r){var a;if(r.inline)return r.img?a=t(r.img):(a=e.createImage(r.name),r.img=a),a.addClass("uploading"),a.data("file",r),e.editor.uploader.readImageFile(r.obj,function(t){var i;if(a.hasClass("uploading"))return i=t?t.src:e.defaultImage,e.loadImage(a,i,function(){if(e.popover.active)return e.popover.refresh(),e.popover.srcEl.val(e._t("uploading")).prop("disabled",!0)})})}}(this)),o=e.proxy(this.editor.editable.util.throttle(function(e,t,i,r){var a,o,n;if(t.inline&&(o=t.img.data("mask"))){if((a=o.data("img")).hasClass("uploading")&&a.parent().length>0)return(n=(100*(n=i/r)).toFixed(0))>99&&(n=99),o.find(".progress").height(100-n+"%");o.remove()}},500),this),this.editor.uploader.on("uploadprogress",o),this.editor.uploader.on("uploadsuccess",function(e){return function(t,i,r){var a,o,n;if(i.inline&&(a=i.img).hasClass("uploading")&&a.parent().length>0){if("object"!=typeof r)try{r=JSON.parse(r)}catch(e){e,r={success:!1}}return!1===r.success?(n=r.msg||e._t("uploadFailed"),alert(n),o=e.defaultImage):o=r.file_path,e.loadImage(a,o,function(){var t;if(a.removeData("file"),a.removeClass("uploading").removeClass("loading"),(t=a.data("mask"))&&t.remove(),a.removeData("mask"),e.editor.trigger("valuechanged"),e.editor.body.find("img.uploading").length<1)return e.editor.uploader.trigger("uploadready",[i,r])}),e.popover.active?(e.popover.srcEl.prop("disabled",!1),e.popover.srcEl.val(r.file_path)):void 0}}}(this)),this.editor.uploader.on("uploaderror",function(e){return function(t,i,r){var a,o;if(i.inline&&"abort"!==r.statusText){if(r.responseText)try{(o=JSON.parse(r.responseText)).msg}catch(t){t,e._t("uploadError")}if((a=i.img).hasClass("uploading")&&a.parent().length>0)return e.loadImage(a,e.defaultImage,function(){var e;return a.removeData("file"),a.removeClass("uploading").removeClass("loading"),(e=a.data("mask"))&&e.remove(),a.removeData("mask")}),e.popover.active&&(e.popover.srcEl.prop("disabled",!1),e.popover.srcEl.val(e.defaultImage)),e.editor.trigger("valuechanged"),e.editor.body.find("img.uploading").length<1?e.editor.uploader.trigger("uploadready",[i,o]):void 0}}}(this));this.el.find(".btn-upload").remove()},_status:function(){return this._disableStatus()},loadImage:function(i,r,a){var o,n,d,l;return l=this,d=function(){var e,t;return e=i.offset(),t=l.editor.wrapper.offset(),o.css({top:e.top-t.top,left:e.left-t.left,width:i.width(),height:i.height()}).show()},i.addClass("loading"),(o=i.data("mask"))||(o=t('<div class="richeditor-image-loading">\n  <div class="progress"></div>\n</div>').hide().appendTo(this.editor.wrapper),d(),i.data("mask",o),o.data("img",i)),(n=new Image).onload=function(t){return function(){var l,s;if(i.hasClass("loading")||i.hasClass("uploading"))return s=n.width,l=n.height,i.attr({src:r,width:s,height:l,"data-image-size":s+","+l}).removeClass("loading"),i.hasClass("uploading")?(t.editor.editable.util.reflow(t.editor.body),d()):(o.remove(),i.removeData("mask")),e.isFunction(a)?a(n):void 0}}(this),n.onerror=function(){return e.isFunction(a)&&a(!1),o.remove(),i.removeData("mask").removeClass("loading")},n.src=r},createImage:function(e){var i,r;return null==e&&(e="Image"),this.editor.editable.inputManager.focused||this.editor.focus(),(r=this.editor.editable.selection.range()).deleteContents(),this.editor.editable.selection.range(r),i=t("<img/>").attr("alt",e),r.insertNode(i[0]),this.editor.editable.selection.setRangeAfter(i,r),this.editor.trigger("valuechanged"),i},_execute:function(e){var t,i;return t=this.createImage(),this.loadImage(t,e||this.defaultImage,(i=this,function(){return i.editor.trigger("valuechanged"),i.editor.editable.util.reflow(t),t.click(),i.popover.one("popovershow",function(){return i.popover.srcEl.focus(),i.popover.srcEl[0].select()})}))}});return r.addons.actions.image=d,d});
//# sourceMappingURL=../../sourcemaps/addons/actions/ImageAction.js.map
