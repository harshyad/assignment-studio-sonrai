import { Router, Request, Response } from 'express';
import { InspectionService } from '../services/inspection.service';
import { validateUpdateInspection , validateResetInspections} from '../middleware/validation';

const inspectionService = new InspectionService();
const router = Router();

router.get('/', (req: Request, res: Response) => {
    const inspections = inspectionService.getAllInspections();
    res.status(200).json({message: 'Inspection items retrieved successfully', data: inspections});
});

router.put('/:id', validateUpdateInspection, (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    const updatedInspection = inspectionService.updateInspectionStatus(parseInt(id), status);
    if (updatedInspection) {
        res.status(200).json({message: 'Inspection item updated successfully', data: updatedInspection});
    } else {
        res.status(404).json({ message: 'Inspection item not found' });
    }
});

router.post('/reset',validateResetInspections, (req: Request, res: Response) => {
    inspectionService.resetInspections();
    const inspections = inspectionService.getAllInspections();
    res.status(200).json({ message: 'All inspections have been reset to pending' , data: inspections });
});

router.get('/summary', (req: Request, res: Response) => {
    const summary = inspectionService.getSummary();
    res.status(200).json({message: 'Inspection summary retrieved successfully', data: summary});
});

export default router;
