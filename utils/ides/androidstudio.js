'use strict';
import * as path from 'path';
import * as IDE from 'ide';
import Utils from '../utils';
import * as xmlbuilder from 'xmlbuilder';
import * as defaultAndroidStudio from '../common/keybindings/androidstuido.json';

export default class AndroidStudio extends IDE {

    constructor(platform, relativePath) {
        super();
        this.name = "androidstudio";
        this.utils = new Utils(platform);
        this.relativePath = relativePath;

        this.createAndroidStudioXMLPrefs = (keybindings) => {
            var xml = xmlbuilder.create('keymap', { 'version': 1, 'name': "SticKeys", 'parent': "$default" });
            for (keybinding of keybindings) {
                xml = xml.ele('action', { 'id': keybinding.action })
                    .ele('keyboard-shortcut', { 'first-keystroke': keybinding.keys });
            }

            return xml.end({ pretty: true });
        }

        this.createKeyBindings = (userprefs) => {
            var keybindings = this.utils.getNormalizedListByIDE(this.name, userprefs);
            return this.createAndroidStudioXMLPrefs(keybindings);
        };
    }

    saveKeyBindings(userprefs) {

        fs.mkdir(path.join(this.relativePath, 'keymaps'), (err) => {
            if (err) throw err;

            fs.writeFile(path.join(this.relativePath, 'keymaps', 'SticKeys.xml'), this.createKeyBindings(userprefs), (err) => {
                if (err) throw err;
                console.log('It\'s saved!');
            });
            
            console.log('It\'s saved!');
        });


    }

    loadDefaultKeyBindings() {
        var defualtKeybindings = this.utils.getNormalizedListByIDE(this.name, defaultAndroidStudio);
        return defualtKeybindings;
    }
};