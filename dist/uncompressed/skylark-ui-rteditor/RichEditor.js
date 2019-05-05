define([], function () {
    'use strict';
    var exports = {};
    var module = { exports: {} };
    define([
        'skylark-langx/langx',
        'skylark-utils-dom/query',
        'skylark-ui-contents/editable',
        './Toolbar',
        './uploader',
        './i18n'
    ], function (langx, $, editable, Toolbar, uploader, i18n) {
        var RichEditor = langx.Evented.inherit({
            init: function (opts) {
                this.opts = langx.extend({}, this.opts, opts);
                var e, editor, uploadOpts;
                this.textarea = $(this.opts.textarea);
                this.opts.placeholder = this.opts.placeholder || this.textarea.attr('placeholder');
                if (!this.textarea.length) {
                    throw new Error('richeditor: param textarea is required.');
                    return;
                }
                editor = this.textarea.data('richeditor');
                if (editor != null) {
                    editor.destroy();
                }
                this.id = ++RichEditor.count;
                this._render();
                var self = this;
                this.editable = editable(this.el, {
                    classPrefix: 'richeditor-',
                    textarea: this.textarea,
                    body: this.body
                });
                this.editable.on('all', function (e, data) {
                    return self.trigger(e.type, data);
                });
                if (this.opts.upload && uploader) {
                    uploadOpts = typeof this.opts.upload === 'object' ? this.opts.upload : {};
                    this.uploader = uploader(uploadOpts);
                }
                this.toolbar = new Toolbar(this, {
                    toolbar: this.opts.toolbar,
                    toolbarFloat: this.opts.toolbarFloat,
                    toolbarHidden: this.opts.toolbarHidden,
                    toolbarFloatOffset: this.opts.toolbarFloatOffset
                });
                if (this.opts.placeholder) {
                    this.on('valuechanged', function () {
                        return self._placeholder();
                    });
                }
                this.setValue(this.textarea.val().trim() || '');
                if (this.textarea.attr('autofocus')) {
                    return self.focus();
                }
            }
        });
        RichEditor.prototype.triggerHandler = RichEditor.prototype.trigger = function (type, data) {
            var args, ref;
            args = [type];
            if (data) {
                args = args.concat(data);
            }
            langx.Evented.prototype.trigger.apply(this, args);
            return this;
        };
        RichEditor.count = 0;
        RichEditor.prototype.opts = {
            textarea: null,
            placeholder: '',
            defaultImage: 'images/image.png',
            params: {},
            upload: false
        };
        RichEditor.prototype._tpl = '<div class="richeditor">\n  <div class="richeditor-wrapper">\n    <div class="richeditor-placeholder"></div>\n    <div class="richeditor-body" contenteditable="true">\n    </div>\n  </div>\n</div>';
        RichEditor.prototype._render = function () {
            var key, ref, results, val;
            this.el = $(this._tpl).insertBefore(this.textarea);
            this.wrapper = this.el.find('.richeditor-wrapper');
            this.body = this.wrapper.find('.richeditor-body');
            this.placeholderEl = this.wrapper.find('.richeditor-placeholder').append(this.opts.placeholder);
            this.el.data('richeditor', this);
            this.wrapper.append(this.textarea);
            this.textarea.data('richeditor', this).blur();
            this.body.attr('tabindex', this.textarea.attr('tabindex'));
            if (this.opts.params) {
                ref = this.opts.params;
                results = [];
                for (key in ref) {
                    val = ref[key];
                    results.push($('<input/>', {
                        type: 'hidden',
                        name: key,
                        value: val
                    }).insertAfter(this.textarea));
                }
                return results;
            }
        };
        RichEditor.prototype._placeholder = function () {
            var children;
            children = this.body.children();
            if (children.length === 0 || children.length === 1 && this.util.isEmptyNode(children) && parseInt(children.css('margin-left') || 0) < this.opts.indentWidth) {
                return this.placeholderEl.show();
            } else {
                return this.placeholderEl.hide();
            }
        };
        RichEditor.prototype.setValue = function (val) {
            this.hidePopover();
            this.editable.setValue(val);
            return this.trigger('valuechanged');
        };
        RichEditor.prototype.getValue = function () {
            return this.editable.getValue();
        };
        RichEditor.prototype.focus = function () {
            return this.editable.focus();
        };
        RichEditor.prototype.blur = function () {
            return this.editable.blur();
        };
        RichEditor.prototype.hidePopover = function () {
            return this.el.find('.richeditor-popover').each(function (i, popover) {
                popover = $(popover).data('popover');
                if (popover.active) {
                    return popover.hide();
                }
            });
        };
        RichEditor.prototype.destroy = function () {
            this.triggerHandler('destroy');
            this.textarea.closest('form').off('.richeditor .richeditor-' + this.id);
            this.selection.clear();
            this.inputManager.focused = false;
            this.textarea.insertBefore(this.el).hide().val('').removeData('richeditor');
            this.el.remove();
            $(document).off('.richeditor-' + this.id);
            $(window).off('.richeditor-' + this.id);
            return this.off();
        };
        RichEditor.Toolbar = Toolbar;
        RichEditor.i18n = i18n;
        return RichEditor;
    });
    function __isEmptyObject(obj) {
        var attr;
        for (attr in obj)
            return !1;
        return !0;
    }
    function __isValidToReturn(obj) {
        return typeof obj != 'object' || Array.isArray(obj) || !__isEmptyObject(obj);
    }
    if (__isValidToReturn(module.exports))
        return module.exports;
    else if (__isValidToReturn(exports))
        return exports;
});