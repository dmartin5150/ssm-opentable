import { Procedure } from "../datatypes/procedure";
import { SCHEDULING_STATUS } from "../datatypes/schedulingStatus";
import { PROCEDURE_TYPES } from "../datatypes/procedure";


export const FOUNDTIMES:Procedure[] = [
    {procedureId:1, procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard',dateString:'11/25/24', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Smitheroniousness, Jonathan',procedureName:'Total Knee Replacement', room:'BH JRI O6', FIN:'570422303',inBlock:false, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:2,procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard', dateString:'11/25/24',timeString:'8:00 AM - 9:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Total Knee Replacement',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:3,procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard', dateString:'11/26/24',timeString:'8:00 AM - 10:30 AM',patientName:'Pt: Bedford, Heather',procedureName:'Total Knee Replacement',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:4,procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard', dateString:'11/29/24',timeString:'10:30 AM - 12:00 PM', duration: '1H 30M', patientName:'NA',procedureName:'Total Knee Replacement',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
]