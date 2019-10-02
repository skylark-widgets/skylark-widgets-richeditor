define([
  "skylark-langx/langx",
  "skylark-domx-query",
  "../Toolbar",
  "../RichEditor",
  "skylark-widgets-base/Action"
],function(langx,$,Toolbar,RichEditor,Action){ 
  var EmojiAction = Action.inherit({
    name : 'emoji',

    icon : 'smile-o',

    menu : true,

    _init : function() {
      Action.prototype._init.apply(this);
      langx.merge(this.editor.editable.formatter._allowedAttributes['img'], ['data-emoji', 'alt']);
    },

    renderMenu : function() {
      var $list, dir, html, name, opts, src, tpl, _i, _len, _ref;
      tpl = '<ul class="emoji-list">\n</ul>';
      opts = langx.extend({
        imagePath: 'images/emoji/',
        images: EmojiAction.images
      }, this.editor.opts.emoji || {});
      html = "";
      dir = opts.imagePath.replace(/\/$/, '') + '/';
      _ref = opts.images;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        src = "" + dir + name;
        name = name.split('.')[0];
        html += "<li data-name='" + name + "'><img src='" + src + "' width='20' height='20' alt='" + name + "' /></li>";
      }
      $list = $(tpl);
      $list.html(html).appendTo(this.menuWrapper);
      return $list.on('mousedown', 'li', (function(_this) {
        return function(e) {
          var $img;
          _this.wrapper.removeClass('menu-on');
          if (!_this.editor.editable.inputManager.focused) {
            return;
          }
          $img = $(e.currentTarget).find('img').clone().attr({
            'data-emoji': true,
            'data-non-image': true
          });
          _this.editor.editable.selection.insertNode($img);
          _this.editor.trigger('valuechanged');
          _this.editor.trigger('selectionchanged');
          return false;
        };
      })(this));
    },

    status : function() {}


  });


  EmojiAction.i18n = {
    'zh-CN': {
      emoji: '表情'
    },
    'en-US': {
      emoji: 'emoji'
    }
  };

  EmojiAction.images = ['smile.png', 'smiley.png', 'laughing.png', 'blush.png', 'heart_eyes.png', 'smirk.png', 'flushed.png', 'grin.png', 'wink.png', 'kissing_closed_eyes.png', 'stuck_out_tongue_winking_eye.png', 'stuck_out_tongue.png', 'sleeping.png', 'worried.png', 'expressionless.png', 'sweat_smile.png', 'cold_sweat.png', 'joy.png', 'sob.png', 'angry.png', 'mask.png', 'scream.png', 'sunglasses.png', 'heart.png', 'broken_heart.png', 'star.png', 'anger.png', 'exclamation.png', 'question.png', 'zzz.png', 'thumbsup.png', 'thumbsdown.png', 'ok_hand.png', 'punch.png', 'v.png', 'clap.png', 'muscle.png', 'pray.png', 'skull.png', 'trollface.png'];


  RichEditor.addons.actions.emoji = EmojiAction; 

  return EmojiAction;
	
});