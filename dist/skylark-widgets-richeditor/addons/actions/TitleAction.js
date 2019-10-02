/**
 * skylark-widgets-richeditor - The skylark richeditor widget
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-richeditor/
 * @license MIT
 */
define(["skylark-domx-query","../Toolbar","../RichEditor","skylark-widgets-base/Action","../i18n"],function(t,e,a,i,n){var r=i.inherit({name:"title",htmlTag:"h1, h2, h3, h4, h5",disableTag:"pre, table",_init:function(){return this.menu=[{name:"normal",text:n.translate("normalText"),param:"p"},"|",{name:"h1",text:n.translate("title")+" 1",param:"h1"},{name:"h2",text:n.translate("title")+" 2",param:"h2"},{name:"h3",text:n.translate("title")+" 3",param:"h3"},{name:"h4",text:n.translate("title")+" 4",param:"h4"},{name:"h5",text:n.translate("title")+" 5",param:"h5"}],i.prototype._init.call(this)},setActive:function(t,e){if(i.prototype.setActive.call(this,t),t&&(e||(e=this.node[0].tagName.toLowerCase())),this.el.removeClass("active-p active-h1 active-h2 active-h3 active-h4 active-h5"),t)return this.el.addClass("active active-"+e)},_execute:function(t){return this.editor.editable.title(t,this.disableTag)}});return a.addons.actions.title=r,r});
//# sourceMappingURL=../../sourcemaps/addons/actions/TitleAction.js.map
