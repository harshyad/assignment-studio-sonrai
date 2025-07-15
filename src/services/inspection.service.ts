import { InspectionItem, InspectionStatus } from '../models/inspection.model';
import { inspectionsData } from '../data/inspection.data';

export class InspectionService {
    private inspections: InspectionItem[];

    constructor() {
        this.inspections = inspectionsData;
    }

    getAllInspections(): InspectionItem[] {
        return this.inspections;
    }

    updateInspectionStatus(id: number, status: InspectionStatus): InspectionItem | boolean {
        const inspection = this.inspections.find(item => item.id === id);
        if (inspection) {
            inspection.status = status;
            return inspection;
        }
        return false;
    }

    resetInspections(): void {
        this.inspections.forEach(item => {
            item.status = InspectionStatus.PENDING;
        });
    }

    getSummary(): { passed: number; failed: number; na: number; pending: number; total: number } {
        const summary = {
            passed: 0,
            failed: 0,
            na: 0,
            pending: 0,
            total: this.inspections.length
        };

        this.inspections.forEach(item => {
            switch (item.status) {
                case InspectionStatus.PASSED:
                    summary.passed++;
                    break;
                case InspectionStatus.FAILED:
                    summary.failed++;
                    break;
                case InspectionStatus.NA:
                    summary.na++;
                    break;
                case InspectionStatus.PENDING:
                    summary.pending++;
                    break;
            }
        });

        return summary;
    }
}