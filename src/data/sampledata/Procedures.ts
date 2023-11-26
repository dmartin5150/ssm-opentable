import { Procedure } from "../datatypes/procedure";
import { SCHEDULING_STATUS } from "../datatypes/schedulingStatus";
import { PROCEDURE_TYPES } from "../datatypes/procedure";


export const PROCEDURES:Procedure[] = [
    {procedureId:1, procedureType: PROCEDURE_TYPES.PROCEDURE, providerId: 1,providerName:'Elrod, Leonard',dateString:'11/25/24', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Smitheroniousness, Jonathan',procedureName:'Total Knee Replacement', room:'BH JRI O6', FIN:'570422303',inBlock:false, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
    {procedureId:2,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 1,providerName:'Elrod, Leonard', dateString:'11/25/24',timeString:'10:30 AM - 12:00 PM',patientName:'Pt: Bedford, Heather',procedureName:'Total Knee Replacement',inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:3,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 1,providerName:'Elrod, Leonard', dateString:'11/26/24',timeString:'12:30 PM - 2:30 PM',patientName:'Pt: Bedford, Heather',procedureName:'Total Knee Replacement',inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    // {procedureId:4,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 1,providerName:'Elrod, Leonard', dateString:'11/29/24',timeString:'10:30 AM - 12:00 PM', duration: '1H 30M', patientName:'NA',procedureName:'Total Knee Replacement',inBlock:true, scheduleStatus: SCHEDULING_STATUS.NEEDS_REVISION },
    {procedureId:5,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 2,providerName:'Rodriquez, Alverez', dateString:'11/25/24',timeString:'7:00 AM - 9:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 08', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:6,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 3,providerName:'Smith, John',dateString:'11/25/24', timeString:'8:00 AM - 10:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 5', FIN:'570422303', inBlock:false, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:6,procedureType: PROCEDURE_TYPES.OPENTIME,  providerId: 3,providerName:'Smith, John', dateString:'11/25/24',timeString:'10:00 AM - 1:00 PM', duration: '3H 0M', patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 5', FIN:'570422303', inBlock:false, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:7,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 3,providerName:'Smith, John',dateString:'11/25/24', timeString:'1:00 PM - 3:00 PM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 10', FIN:'570422303', inBlock:false, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:8,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William',dateString:'11/25/24', timeString:'7:00 AM - 8:00 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 12', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.SCHEDULED },
    {procedureId:9,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William', dateString:'11/25/24',timeString:'8:00 AM - 9:15 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 12', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.NEEDS_REVISION },
    {procedureId:10,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William',dateString:'11/25/24', timeString:'9:15 AM - 10:45 AM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release',room:'BH JRI 06', FIN:'570422303', inBlock:true, scheduleStatus: SCHEDULING_STATUS.OTHER_PRACTICE },
    {procedureId:11,procedureType: PROCEDURE_TYPES.PROCEDURE,  providerId: 4,providerName:'Jones, William', dateString:'11/25/24',timeString:'10:45 AM - 12:15 PM',patientName:'Pt: Bedford, Heather',procedureName:'Trigger Finger Release', inBlock:true, scheduleStatus: SCHEDULING_STATUS.UNSCHEDULED },
]
