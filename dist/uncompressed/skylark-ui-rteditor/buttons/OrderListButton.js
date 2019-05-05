define([
  "skylark-utils-dom/query",
  "../Toolbar",
  "../RichEditor",
  "./ListButton"
],function($,Toolbar,RichEditor,ListButton){ 
  var OrderListButton = ListButton.inherit({

   });


    OrderListButton.prototype.type = 'ol';

    OrderListButton.prototype.name = 'ol';

    OrderListButton.prototype.icon = 'list-ol';

    OrderListButton.prototype.htmlTag = 'ol';

    OrderListButton.prototype.shortcut = 'cmd+/';

    OrderListButton.prototype._init = function() {
      if (this.editor.editable.util.os.mac) {
        this.title = this.title + ' ( Cmd + / )';
      } else {
        this.title = this.title + ' ( ctrl + / )';
        this.shortcut = 'ctrl+/';
      }
      return ListButton.prototype._init.call(this);
    };

    RichEditor.Toolbar.addButton(OrderListButton);

    return OrderListButton;
	
});