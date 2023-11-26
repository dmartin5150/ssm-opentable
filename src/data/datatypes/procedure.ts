import { SCHEDULING_STATUS } from "./schedulingStatus";

export enum PROCEDURE_TYPES {
    OPENTIME = 'open time',
    PROCEDURE = 'procedure',
    FOUNDTIME = 'foundtime'
}

export type Procedure = {
    procedureId:number;
    procedureType:PROCEDURE_TYPES,
    providerId:number, 
    providerName: string;
    dateString:string;
    timeString:string;
    patientName:string;
    procedureName:string;
    room?:string;
    FIN?:string;
    inBlock:boolean;
    scheduleStatus:SCHEDULING_STATUS;
    duration?:string;
}