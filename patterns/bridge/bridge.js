"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilePlayer = exports.WebPlayer = exports.FourKQuality = exports.HDQuality = void 0;
exports.default = TestBridgePattern;
var HDQuality = /** @class */ (function () {
    function HDQuality() {
    }
    HDQuality.prototype.load = function (title) {
        console.log("Loading the content in HD");
    };
    return HDQuality;
}());
exports.HDQuality = HDQuality;
var FourKQuality = /** @class */ (function () {
    function FourKQuality() {
    }
    FourKQuality.prototype.load = function (title) {
        console.log("Loading the content in 4k");
    };
    return FourKQuality;
}());
exports.FourKQuality = FourKQuality;
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(quality) {
        this.quality = null;
        this.quality = quality;
    }
    return VideoPlayer;
}());
var WebPlayer = /** @class */ (function (_super) {
    __extends(WebPlayer, _super);
    function WebPlayer(quality) {
        return _super.call(this, quality) || this;
    }
    WebPlayer.prototype.play = function (title) {
        this.quality.load(title);
        console.log("Playing ".concat(title));
    };
    return WebPlayer;
}(VideoPlayer));
exports.WebPlayer = WebPlayer;
var MobilePlayer = /** @class */ (function (_super) {
    __extends(MobilePlayer, _super);
    function MobilePlayer(quality) {
        return _super.call(this, quality) || this;
    }
    MobilePlayer.prototype.play = function (title) {
        this.quality.load(title);
        console.log("Playing ".concat(title));
    };
    return MobilePlayer;
}(VideoPlayer));
exports.MobilePlayer = MobilePlayer;
function TestBridgePattern() {
    var mbplayer = new MobilePlayer(new FourKQuality());
    mbplayer.play("3 idiots");
    var webplayer = new WebPlayer(new HDQuality());
    webplayer.play("Companion");
}
