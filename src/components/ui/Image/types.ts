export interface ImageProps {
    url: string; /*Путь до изображения*/
    alt: string;
    width: string; 
    height: string;
    className: string;
    objetFit: 'cover' | 'contain';
}