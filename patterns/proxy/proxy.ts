

interface VideoDownloader {
    downloadVideoFromURL(url : string )
}

class VideoDownloadeFromURL implements VideoDownloader {
    downloadVideoFromURL(url: string) {
        console.log("Getting bits....")
        setTimeout(() => {
           console.log("Download and ready from url",url) 
        }, 1000);   
    }
}

class CachedVideoDownloadeFromURL implements VideoDownloader {
    private videoDownlaoder : VideoDownloadeFromURL | null
    private Cache  : Record<string,string> = {}

    constructor (vd : VideoDownloader) {
       this.videoDownlaoder =  vd 
    }

    private cacheURL(url : string,baseURL : string) {
        this.Cache[url] =  baseURL 
    }    

    public downloadVideoFromURL(url: string) {
        if(url in this.Cache) {
            console.log("Founded in cache returning...")
            return this.Cache[url]
        }
        console.log("Not in cache downloading")
        this.videoDownlaoder.downloadVideoFromURL(url)
        this.cacheURL(url,Math.random().toString())
    }
}

export default function TestingProxyPattern() {
    const videoDownloader = new VideoDownloadeFromURL()

    const timeEfficientVideoDownload = new CachedVideoDownloadeFromURL(videoDownloader)

    timeEfficientVideoDownload.downloadVideoFromURL("google.com")
    timeEfficientVideoDownload.downloadVideoFromURL("google.com")
    timeEfficientVideoDownload.downloadVideoFromURL("meta.com")
    timeEfficientVideoDownload.downloadVideoFromURL("meta.com")

} 


 