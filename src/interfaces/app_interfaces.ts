export interface MemesData {
  succes: boolean;
  data: {
    memes: [
      {
        id: string;
        name: string;
        url: string;
        width: number;
        height: number;
        box_count: number;
      }
    ];
  };
}

export interface MemeDetails {
  name: string;
  url: string;
  width: number;
  height: number;
  boxCount: number;
}
