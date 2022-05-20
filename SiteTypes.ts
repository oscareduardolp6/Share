export type SitesTypes = 
    1 // Private Stock 
  | 2 // Públic Stock 
  | 3 // Failed Site 
  | 4 // Client (Sale)

export const FAILED_SITE = 3 

export enum SiteTypesEnum {
  PrivateSite = 1, 
  PublicSite  = 2,
  FailedSite  = 3, 
  ClientSite  = 4 
}