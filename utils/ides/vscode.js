'use strict';
import * as IDE from 'ide';
import Utils from '../utils';
import * as defaultVSCode from '../common/keybindings/vscode.json';

export default class VSCode extends IDE {

    constructor(platform) {
        super();
        this.name = "vscode";
        this.utils = new Utils(platform);

        this.createVSCodeJSONPrefs = (keybindings) => {
            var defualtKeyBindings = loadDefaultKeybindings();

            return userprefs.map((keybinding) => {
                keybinding['key'] = keybinding.keys;
                keybinding['command'] = keybinding.action;
                keybinding['when'] = defualtKeyBindings.filter((defaultKeybinding) => {
                    if (defaultKeybinding.action === keybinding.action) {
                        return true;
                    }

                    return false;
                })[0].when;

                delete(keybinding.keys);
                delete(keybinding.action);
            });
        }

        this.createKeyBindings = (userprefs) => {
            var keybindings = this.utils.getNormalizedListByIDE(this.name, userprefs);
            return this.createVSCodeJSONPrefs(keybindings);
        };
    }

    saveKeyBindings(userprefs) {
        // fs.save(createKeyBinding());
    }

    loadDefaultKeybindings() {
        var defualtKeybindings = this.utils.getNormalizedListByIDE(this.name, defaultVSCode);
        return defualtKeybindings;
    }


};