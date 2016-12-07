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
};
