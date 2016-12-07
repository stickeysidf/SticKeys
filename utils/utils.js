'use strict';
import * as fs from 'fs';
import * as actions from '../common/actions.json';
import * as keymapping from '../common/keymapping.json';


export default class Utils {

    constructor(platform) {
		this.platform = platform;
	 }

    // Get ide name and userprefs json files, and returns an array of {action:***, keys:****}, the keys as string
	getNormalizedListByIDE(ideName, userprefs) {
		var arr = [];
		for (userpref of userprefs) {
			var obj = {};
			obj.action = getActionIdByIde(userpref.action, ideName);
			obj.keys = keyArrayToString(userpref.keys, ideName)
			arr.push(obj); 
		}

		return arr;
	}	

	// Get keyarray and ide name and return string represent the keystroke in the ide shortcuts file.
	keyArrayToString(keyArray, ideName) {
		var returnVal = " ";
		for (key in keyMap) {
			returnVal += getKeyByIde(key, ideName);
			returnVal += getKeyByIde("DELIMETER", ideName);
		}

		// Remove last char
		returnVal = returnVal.substring(0, returnVal.length  - 1);

		return returnVal;
	}

	getActionIdByIde(actionName, ideName) {
		return actions[actionName]['ide'][ideName];
	}

	getKeyByIde(key,ideName) {
		return keymapping[key][ideName][this.platform];
	}
};
