'use strict';
import * as fs from 'fs';
import * as actions from '../common/actions.json';
import * as keymapping from '../common/keymapping.json';


export default class Utils {

    constructor() { }

    get Actions() {
        return actions;
    }

    get KeyMapping() {
        return keymapping;
    }


    // Get ide name and userKeys json files, and returns an array of ActionName:{actionId:***, shortcut:****}, the shortcut as string
	getNormalizedListByIDE(ideName, userKeys) {
		var arr = [];
		for (action in userActionsJson) {
			var obj = {};
			obj.actionId = getActionIdByIde(action, ideName);
			obj.shortcut = keyArrayToString(userkeys[action].shortCut)
			arr[action] = obj; 
		}

		return arr;
	}	
	// Get keyarray and ide name and return string represent the keystroke in the ide shortcuts file.
	keyArrayToString(keyArray, ideName) {
		var returnVal = " ";
		for (key in keyMap) {
			returnVal += getKeyBy
			Ide(key, ideName);
			returnVal += getKeyByIde("DELIMETER", ideName);
		}

		// Return last char
		returnVal = returnVal.substring(0, returnVal.length  - 1);

		return returnVal;
	}

	getActionIdByIde(actionName, ide) {
		return actions[actionName]["IDE"][ide];
	}

	getKeyByIde(key,ideName) {
		return keymapping[key]["IDE"][ideName];
	}
};
