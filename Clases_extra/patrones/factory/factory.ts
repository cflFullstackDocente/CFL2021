class DecodedImage {
    private image: string;

    constructor(image: string) {
        this.image = image;
    }

    public toString(): string {
        return this.image + ": is decoded";
    }
}

interface ImageReader {
    getDecodeImage(): DecodedImage;
}


class GifReader implements ImageReader {
    private decodedImage: DecodedImage;

    constructor(image: string) {
        this.decodedImage = new DecodedImage(image);
    }

    public getDecodeImage(): DecodedImage {
        return this.decodedImage;
    }
}

class JpegReader implements ImageReader {
    private decodedImage: DecodedImage;

    constructor(image: string) {
        this.decodedImage = new DecodedImage(image);
    }

    public getDecodeImage(): DecodedImage {
        return this.decodedImage;
    }
}

class ImageReaderFactory {

    public getImageReader(imageType:String): ImageReader{
        if (imageType === "gif") 
            return new GifReader(image);

        if (imageType === "jpeg") 
            return new JpegReader(image);

        throw("No existe el tipo de imagen");
    }
}

let args: string[] = process.argv.slice(2);

let decodedImage: DecodedImage;
let reader: ImageReader = null;

let image: string = args[0];
let format: string = image.substring(image.indexOf('.') + 1, (image.length));

let factory:ImageReaderFactory = new ImageReaderFactory();

decodedImage = factory.getImageReader(format).getDecodeImage();

console.log(decodedImage);