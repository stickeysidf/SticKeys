'use strict';
import * as IDE from 'ide';
import Utils from '../utils';

export default class VSCode extends IDE {

    constructor(platform) {
        super();
        this.name = "vscode";
        this.utils = new Utils(platform);
    }

    saveKeyBindings() {
        // fs.save(createKeyBinding());
    }

    createKeyBindings(userprefs) {

        var json = userprefs.map((keybinding) => {
            keybinding['key'] = keybinding.keys;
            keybinding['command'] = keybinding.action;
            keybinding['when'] = defaultKeyBindings.;
        });

    }

    loadKeyBindings() {

    }


};
