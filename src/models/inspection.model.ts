export interface InspectionItem {
    id: number;
    name: string;
    status: InspectionStatus;
}


export enum InspectionStatus {
    PENDING = 'pending',
    PASSED = 'passed',
    FAILED = 'failed',
    NA = 'na',
}