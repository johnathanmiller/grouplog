'use strict';

class Group {
    constructor() {
        this.message = '';
        this.startGroup = false;
        this.divGroup = false;
        this.midGroup = false;
        this.endGroup = false;
    }
    static log(message) {
        this.message = message;
        return this;
    }
    static get start() {
        this.startGroup = true;
        return this;
    }
    static get div() {
        this.divGroup = true;
        return this;
    }
    static get mid() {
        this.midGroup = true;
        return this;
    }
    static get end() {
        this.endGroup = true;
        return this;
    }

    /**
     * 
     * output
     * u2500 ─
     * u2502 │
     * u250C ┌
     * u2514 └
     * u251C ├
     * 
     */

    static get output() {
        var output = '';
        if (this.startGroup) {
            output += '\u250C' + '\u2500' + '\r\n';
        } else if (this.divGroup) {
            output += '\u251C' + '\u2500' + '\r\n';
        }
        if (this.startGroup || this.divGroup || this.midGroup || this.endGroup) {
            output += '\u2502 ' + this.message;
        } else {
            output = this.message;
        }
        if (this.endGroup) {
            output += '\r\n' + '\u2514' + '\u2500';
        }

        console.log(output);
        
        // Reset
        this.message = '';
        this.startGroup = false;
        this.divGroup = false;
        this.midGroup = false;
        this.endGroup = false;
    }
}

module.exports = Group;