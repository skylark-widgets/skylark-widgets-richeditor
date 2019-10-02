define([
  "skylark-domx-query",
  "../Toolbar",
  "../RichEditor",
  "./ListAction"
],function($,Toolbar,RichEditor,ListAction){ 
  var OrderListAction = ListAction.inherit({
    type : 'ol',

    name : 'ol',

    icon : 'list-ol',

    htmlTag : 'ol',

    shortcut : 'cmd+/',

    _init : function() {
      if (this.editor.editable.util.os.mac) {
        this.title = this.title + ' ( Cmd + / )';
      } else {
        this.title = this.title + ' ( ctrl + / )';
        this.shortcut = 'ctrl+/';
      }
      return ListAction.prototype._init.call(this);
    }

   });

    return RichEditor.addons.actions.ol = OrderListAction;	
});