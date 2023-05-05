export class BootScene extends Phaser.Scene {
    constructor() {
        super('boot');
    }
    preload() {
        this.load.image('logo', 'assets/logo.png');
    }
    create() {
        this.scene.start('preloader');
    }
}