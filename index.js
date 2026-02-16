const { Plugin } = require('bunny');
const { Native } = require('bunny');

module.exports = class VolumePlugin extends Plugin {
    onLoad() {
        this.registerCommand('vol', (args) => {
            const vol = parseInt(args[0]) || 50;
            Native.setVolume(vol);
            return `Volume set to ${vol}%`;
        });
        this.registerCommand('fakedeafen', () => {
            Native.toggleFakeDeafen();
            return 'Fake deafen toggled';
        });
    }

    onUnload() {
        console.log('Plugin unloaded');
    }
};