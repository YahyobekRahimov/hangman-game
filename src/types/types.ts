export interface Data {
   categories: Categories;
}

export type Categories = {
   [key: string]: { name: string; selected: boolean }[];
};

export interface Movy {
   name: string;
   selected: boolean;
}

export interface Show {
   name: string;
   selected: boolean;
}

export interface Country {
   name: string;
   selected: boolean;
}

export interface City {
   name: string;
   selected: boolean;
}

export interface Animal {
   name: string;
   selected: boolean;
}

export interface Sport {
   name: string;
   selected: boolean;
}
