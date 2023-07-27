interface Artist {
  image: string;
  name: string;
}

interface HeroImages {
  small: string;
  large: string;
}

interface Images {
  thumbnail: string;
  hero: HeroImages;
  gallery: string;
}

export interface GalleryDataModel {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: Artist;
  images: Images;
}



