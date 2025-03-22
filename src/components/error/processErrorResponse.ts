import { ExceptionResponse } from "./ExceptionResponse";

export interface ProcessedError {
  mainError?: string;
  validationErrors?: string[];
}

export const processExceptionResponse = (errorResponse: ExceptionResponse): ProcessedError => {
  const processedError: ProcessedError = {};

  // Agregar el error principal
  if (errorResponse.error) {
    processedError.mainError = errorResponse.error;
  }

  // Agregar errores de validación
  if (errorResponse.validationErrors) {
    processedError.validationErrors = Array.from(errorResponse.validationErrors);
  }

  return processedError;
};