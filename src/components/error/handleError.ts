import axios from "axios";
import { ProcessedError, processExceptionResponse } from "./processErrorResponse";
import { ExceptionResponse } from "./ExceptionResponse";

export const handleError = (error: unknown): ProcessedError => {
  if (axios.isAxiosError(error)) {
    if (error.response?.data) {
      const exceptionResponse = error.response.data as ExceptionResponse;
      return processExceptionResponse(exceptionResponse);
    } else {
      return { mainError: "Error en la solicitud. No se recibió una respuesta del servidor." };
    }
  }

  if (error instanceof TypeError) {
    return { mainError: "No se pudo conectar con el servidor. Por favor, intente más tarde." };
  }

  if (error instanceof Error) {
    return { mainError: error.message };
  }

  return { mainError: "Ha ocurrido un error inesperado. Por favor, intente de nuevo o contacte al administrador." };
};