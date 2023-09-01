export type IconType = {
    resolutions: [number, number][]
    id: string
};

export type LineType = {
    name: string,
    id: string
};

export type UispType = {
    nameLegacy: [],
    bleServices: {},
    line: string,
    firmware: {
        platform: any,
        board: []
    }
};

export type ProductType = {
    abbrev: string,
    name: string
}

export type Product = {
    sysids: string[],
    icon: IconType,
    line: LineType,
    sysid: string,
    guids: string[],
    uisp: UispType,
    id: string,
    product: {
        abbrev: string,
        name: string
    },
    shortnames: string[],
    triplets: any[]
}

export type ProductsType = Product[];

export type ProductResponseType = {
    version: string,
    devices: Product[]
};