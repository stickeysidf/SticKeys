'use strict';
import * as IDE from 'ide';

export default class VSCode extends IDE {

    constructor(platform) {
        super();
        this.name = "vscode";
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