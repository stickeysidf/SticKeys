'use strict';
import * as IDE from 'ide';
import Utils from '../utils';
import * as defaultVSCode from '../common/keybindings/vscode.json';

export default class VSCode extends IDE {

    constructor(platform) {
        super();
        this.name = "vscode";
        this.utils = new Utils(platform);
    }

    saveKeyBindings(userprefs) {
        // fs.save(createKeyBinding());
    }

    createKeyBindings(userprefs) {

        var json = userprefs.map((keybinding) => {
            keybinding['key'] = keybinding.keys;
            keybinding['command'] = keybinding.action;
            keybinding['when'] = defaultKeyBindings.;
        });

    }

    loadDefaultKeyBindings() {
        return defaultVSCode;
    }


};
