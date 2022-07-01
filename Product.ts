import { Brand } from "./Brand.ts";
import { Color } from "./Color.ts";
import { Fabric } from "./Fabric.ts";
import { Price } from "./Price.ts";
import { Size } from "./Size.ts";
import { Stock } from "./Stock.ts";
import { Supplier } from "./Supplier.ts";

export interface Product {
  recordID: RecordID
  productID: ProductID
  name: string
  color?: Color
  brand?: Brand
  description?: string
  fabric?: Fabric
  size?: Size
  suppliers?: Supplier[]
  basePrice: Price
  mortgagePrice: Price 
  publicPrice: Price
  lowStockAlert?: boolean
  publicStockQuantity: Stock
  privateStockQuantity: Stock
  totalStockQuantity: Stock 
  lowStockAlertQuantity?: number
  mortagePriceRelation: number
  publicPriceRelation: number
}

type RecordID = number

type ProductID = string