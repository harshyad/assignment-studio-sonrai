import { InspectionService } from '../src/services/inspection.service';
import { InspectionItem } from '../src/models/inspection.model';
import { InspectionStatus } from '../src/types/inspection.types';

describe('InspectionService', () => {
    let service: InspectionService;

    beforeEach(() => {
        service = new InspectionService();
    });

    it('should retrieve all inspection items', () => {
        const items: InspectionItem[] = service.getAllInspections();
        expect(items).toBeDefined();
        expect(Array.isArray(items)).toBe(true);
    });

    it('should update the status of an inspection item', () => {
        const itemId = 1;
        const newStatus = InspectionStatus.PASSED;
        service.updateInspectionStatus(itemId, newStatus);
        const updatedItem = service.getAllInspections().find(item => item.id === itemId);
        expect(updatedItem).toBeDefined();
        expect(updatedItem?.status).toBe(newStatus);
    });

    it('should reset all inspection items to pending', () => {
        service.resetInspections();
        const items = service.getAllInspections();
        items.forEach(item => {
            expect(item.status).toBe(InspectionStatus.PENDING);
        });
    });
});