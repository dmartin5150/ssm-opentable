import { Provider } from "../datatypes/provider";

export const PROVIDERS:Provider[] = [
    {providerId:1, providerName:'Elrod, Leonard',hasBlock:false, blockId:1,procedureIds:[1,2,3]},
    {providerId:2, providerName:'Rodriguez,Alvarez',hasBlock:true, blockId:2,procedureIds:[4]},
    {providerId:3, providerName:'Smith,John',hasBlock:false, blockId:3,procedureIds:[]},
    {providerId:4, providerName:'Jones,William',hasBlock:true, blockId:4,procedureIds:[5,6,7,8]},
]