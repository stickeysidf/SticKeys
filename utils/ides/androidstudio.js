'use strict';
import * as IDE from 'ide';
import * as xmlbuilder from 'xmlbuilder';

export default class AndroidStudio extends IDE {

    constructor(platform) {
        super();
        this.name = "Android Studio";
    }

    saveKeyBindings() {
        // fs.save(createKeyBinding());
    }

    createKeyBindings(keybindings) {
        var xml = xmlbuilder.create('keymap', { 'version': 1 });
        for (keybinding of keybindings) {
            xml = xml.ele('action', { 'id': keybinding.action })
                .ele('keyboard-shortcut', { 'first-keystroke': keybinding.keys });
        }
        return xml.end({ pretty: true });
    }

    loadKeyBindings() {

    }
};