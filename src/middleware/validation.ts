import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { InspectionStatus } from '../types/inspection.types';

const inspectionItemSchema = z.object({
  id: z.preprocess((val) => Number(val), z.number().int().positive()),
  status: z.enum([InspectionStatus.PENDING, InspectionStatus.PASSED, InspectionStatus.FAILED, InspectionStatus.NA]),
});

export const validateUpdateInspection = (req: Request, res: Response, next: NextFunction) => {
  try {
    inspectionItemSchema.parse({
      id: req.params.id,
      status: req.body.status,
    });
    next();
  } catch (error) {
    const formattedErrors = error instanceof z.ZodError
      ? error.errors.map(e => `${e.message}`).join('; ')
      : (error instanceof Error ? error.message : 'Validation error');
    
    res.status(400).json({
      data: null,
      message: formattedErrors,
      status: 'error'
    });
  }
};

export const validateResetInspections = (req: Request, res: Response, next: NextFunction) => {
  // No specific validation needed for reset, but can be extended if necessary
  next();
};