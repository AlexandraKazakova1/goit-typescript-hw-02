export interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
    full: string;
    [key: string]: string;
  };
  alt_description: string;
}
