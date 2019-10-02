/**
 * skylark-widgets-richeditor - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-richeditor/
 * @license MIT
 */
define(["skylark-domx-query","../Toolbar","../RichEditor","skylark-widgets-base/Action","../i18n"],function(o,r,n,t,e){var l=t.inherit({name:"color",icon:"tint",disableTag:"pre",menu:!0,render:function(){var o;return o=1<=arguments.length?Array.prototype.slice.call(arguments,0):[],t.prototype.render.apply(this,o)},renderMenu:function(){return o('<ul class="color-list">\n  <li><a href="javascript:;" class="font-color font-color-1"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-2"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-3"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-4"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-5"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-6"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-7"></a></li>\n  <li><a href="javascript:;" class="font-color font-color-default"></a></li>\n</ul>').appendTo(this.menuWrapper),this.menuWrapper.on("mousedown",".color-list",function(o){return!1}),this.menuWrapper.on("click",".font-color",(r=this,function(n){var t,l,a,c;if(r.wrapper.removeClass("menu-on"),(t=o(n.currentTarget)).hasClass("font-color-default")){if(!((l=r.editor.body.find("p, li")).length>0))return;c=window.getComputedStyle(l[0],null).getPropertyValue("color"),a=r._convertRgbToHex(c)}else c=window.getComputedStyle(t[0],null).getPropertyValue("background-color"),a=r._convertRgbToHex(c);if(a)return r.editor.editable.fontColor(a,t.hasClass("font-color-default"),e.translate("coloredText"))}));var r},_convertRgbToHex:function(o){var r;return(r=/rgb\((\d+),\s?(\d+),\s?(\d+)\)/g.exec(o))?function(o,r,n){var t;return"#"+(t=function(o){var r;return 1===(r=o.toString(16)).length?"0"+r:r})(o)+t(r)+t(n)}(1*r[1],1*r[2],1*r[3]):""}});return n.addons.actions.color=l,l});
//# sourceMappingURL=../../sourcemaps/addons/actions/ColorAction.js.map
