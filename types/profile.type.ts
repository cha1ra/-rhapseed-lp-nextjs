interface Award {
  'date': string;
  'title': string;
}

export default interface Profile {
  name: {
    en: string;
    ja: string;
  };
  imgSrc: string;
  title: string;
  description: string;
  awards: Award[];
  tags: string[];
}
