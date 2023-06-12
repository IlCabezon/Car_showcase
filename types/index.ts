import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CustomFilterProps {
  title: string;
  options: Array<OptionProps>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  car: Car;
}

export type Car = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
}

export interface FetchCarsProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
