import { Currency } from "./Currency.ts";

export interface Price {
  value: number
  currency: Currency
}