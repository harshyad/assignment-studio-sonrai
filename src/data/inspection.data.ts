import { InspectionItem, InspectionStatus } from '../models/inspection.model';

export const inspectionsData: InspectionItem[] = [
    { id: 1, name: "Safety Gear Check", status: InspectionStatus.PENDING },
    { id: 2, name: "Site Cleanliness", status: InspectionStatus.PENDING },
    { id: 3, name: "Equipment Inspection", status: InspectionStatus.PENDING },
    { id: 4, name: "Hazard Identification", status: InspectionStatus.PENDING },
    { id: 5, name: "Emergency Exits", status: InspectionStatus.PENDING },
];