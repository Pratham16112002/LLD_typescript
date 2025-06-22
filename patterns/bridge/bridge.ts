interface PlayQuality {
  load(title: string): void;
}

export class HDQuality implements PlayQuality {
  public load(title: string): void {
    console.log("Loading the content in HD");
  }
}

export class FourKQuality implements PlayQuality {
  public load(title: string): void {
    console.log("Loading the content in 4k");
  }
}

abstract class VideoPlayer {
  protected quality: PlayQuality = null;
  constructor(quality: PlayQuality) {
    this.quality = quality;
  }
  public abstract play(title: string): void;
}

export class WebPlayer extends VideoPlayer {
  constructor(quality: PlayQuality) {
    super(quality);
  }
  public play(title: string): void {
    this.quality.load(title);
    console.log(`Playing ${title}`);
  }
}

export class MobilePlayer extends VideoPlayer {
  constructor(quality: PlayQuality) {
    super(quality);
  }
  public play(title: string): void {
    this.quality.load(title);
    console.log(`Playing ${title}`);
  }
}

export default function TestBridgePattern() {
  const mbplayer = new MobilePlayer(new FourKQuality());
  mbplayer.play("3 idiots");
  const webplayer = new WebPlayer(new HDQuality());
  webplayer.play("Companion");
}
