define([
  "skylark-utils-dom/query",
  "../Toolbar",
  "../RichEditor",
  "../Button"
],function($,Toolbar,RichEditor,Button){ 
  

  var ItalicButton = Button.inherit({

   });


  ItalicButton.prototype.name = 'italic';

  ItalicButton.prototype.icon = 'italic';

  ItalicButton.prototype.htmlTag = 'i';

  ItalicButton.prototype.disableTag = 'pre';

  ItalicButton.prototype.shortcut = 'cmd+i';

  ItalicButton.prototype._init = function() {
    if (this.editor.editable.util.os.mac) {
      this.title = this.title + " ( Cmd + i )";
    } else {
      this.title = this.title + " ( Ctrl + i )";
      this.shortcut = 'ctrl+i';
    }
    return Button.prototype._init.call(this);
  };

  ItalicButton.prototype._activeStatus = function() {
    var active;
    active = this.editor.editable.isActive('italic');
    this.setActive(active);
    return this.active;
  };

  ItalicButton.prototype.command = function() {
    return this.editor.editable.italic();
  };

  RichEditor.Toolbar.addButton(ItalicButton); 

  return ItalicButton;

});