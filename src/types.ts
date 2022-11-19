export type Coordinate = {
  x: number;
  y: number;
};

export type Frame = {
  loc: Coordinate[];
};

export type Animations = {
  [key: string]: Frame;
};
