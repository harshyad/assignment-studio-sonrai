export enum InspectionStatus {
    PENDING = 'pending',
    PASSED = 'passed',
    FAILED = 'failed',
    NA = 'na',
}

export interface InspectionItem {
    id: number;
    name: string;
    status: InspectionStatus;
}