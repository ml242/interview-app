export type UnifiType = {
  adoptability: string;
  network: {
    radios: {
      na: {
        gain: number;
        maxPower: number;
        maxSpeedMegabitsPerSecond: number;
      };
      ng: {
        gain: number;
        maxPower: number;
        maxSpeedMegabitsPerSecond: number;
      };
    };
    bleServices: [
      {
        configured: string;
        default: string;
      }
    ];
    numberOfPorts: number;
    ethernetMaxSpeedMegabitsPerSecond: number;
    systemIdHexadecimal: string;
    features: {
      bandsteer: boolean;
      ax: boolean;
      gen: number;
      atfDisabled: boolean;
    };
    chipset: string;
    type: string;
    minimumFirmwareRequired: string;
    deviceCapabilities: string[];
  };
};

export type IconType = {
  resolutions: [number, number][];
  id: string;
};

export type LineType = {
  name: string;
  id: string;
};

export type UispType = {
  nameLegacy: [];
  bleServices: {};
  line: string;
  firmware: {
    platform: any;
    board: [];
  };
};

export type ProductType = {
  abbrev: string;
  name: string;
};

export type Product = {
  sysids: string[];
  icon: IconType;
  line: LineType;
  sysid: string;
  guids: string[];
  uisp: UispType;
  id: string;
  product: {
    abbrev: string;
    name: string;
  };
  shortnames: string[];
  triplets: any[];
  unifi?: UnifiType;
};

export type ProductsType = Product[];

export type ProductResponseType = {
  version: string;
  devices: Product[];
};
