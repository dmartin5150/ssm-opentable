import { FoundTime } from "../datatypes/foundtimes";
import { SCHEDULING_STATUS } from "../datatypes/schedulingStatus";
import { PROCEDURE_TYPES } from "../datatypes/procedure";


export const FOUNDTIMES:FoundTime[] = [
    {procedureId:1, procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard',dateString:'11/25/23', timeString:'8:00 AM - 10:30 AM',patientName:'Pt: Smitheroniousness, Jonathan',procedureName:'Total Knee Replacement',facility:'St. Thomas Midtown', unit:'JRI',  room:'BH JRI O6', duration:'1H 15M',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:2,procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard', dateString:'11/25/23',timeString:'2:30 M - 5:00 PM',patientName:'Pt: Bedford, Heather',procedureName:'Total Knee Replacement',facility:'St. Thomas Midtown', unit:'JRI',  room:'BH JRI O8', duration:'1H 15M', inBlock:false, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:3,procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard', dateString:'11/26/23',timeString:'8:00 AM - 10:30 AM',patientName:'Pt: Bedford, Heather',procedureName:'Total Knee Replacement',inBlock:true,facility:'St. Thomas Midtown', unit:'JRI',  room:'BH JRI 10', duration:'1H 15M', scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:4,procedureType: PROCEDURE_TYPES.FOUNDTIME, providerId: 1,providerName:'Elrod, Leonard', dateString:'11/29/23',timeString:'10:30 AM - 12:00 PM', patientName:'NA',procedureName:'Total Knee Replacement',facility:'St. Thomas Midtown', unit:'JRI',  room:'BH JRI O2', duration:'1H 15M',inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
]

