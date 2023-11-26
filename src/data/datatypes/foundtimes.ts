import { SCHEDULING_STATUS } from "./schedulingStatus";
import { PROCEDURE_TYPES } from "./procedure";



export type FoundTime = {
    procedureId:number;
    procedureType:PROCEDURE_TYPES,
    providerId:number, 
    providerName: string;
    dateString:string;
    timeString:string;
    patientName:string;
    procedureName:string;
    facility:string;
    unit: string;
    room:string;
    inBlock:boolean;
    scheduleStatus:SCHEDULING_STATUS;
    duration:string;
}