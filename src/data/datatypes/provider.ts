import { Procedure } from "./procedure";

export type Provider = {
    providerName:string;
    providerId: number;
    hasBlock:boolean;
    blockId:number;
    procedureIds:number[];
}