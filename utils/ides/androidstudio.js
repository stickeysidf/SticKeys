'use strict';
import * as IDE from 'ide';
import Utils from '../utils';
import * as xmlbuilder from 'xmlbuilder';
import * as defaultAndroidStudio from '../common/ide/androidstuido.json';

export default class AndroidStudio extends IDE {

    constructor(platform) {
        super();
        this.name = "androidstudio";
        this.utils = new Utils(platform);
       
        this.createAndroidStudioXMLPrefs = (keybindings) => {
            var xml = xmlbuilder.create('keymap', { 'version': 1 });
            for (keybinding of keybindings) {
                xml = xml.ele('action', { 'id': keybinding.action })
                    .ele('keyboard-shortcut', { 'first-keystroke': keybinding.keys });
            }

            return xml.end({ pretty: true });
        }
    }
    saveKeyBindings(userprefs) {
        // fs.save(createKeyBinding());
    }

    createKeyBindings(userprefs) {
        var keybindings = this.utils.getNormalizedListByIDE(this.name, userprefs);
        return this.createAndroidStudioXMLPrefs(keybindings);
    }

    loadDefaultKeyBindings() {
        return defaultAndroidStudio;
    }
};