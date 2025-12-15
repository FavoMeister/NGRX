// src/app/app.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { spanishAction, englishAction } from './mensaje.action';

// Modelo de estado de la aplicación
export interface AppState {
    mensaje: string;
}

// Estado inicial de la aplicación
export const initialState: AppState = {
    mensaje: 'Código Interactivo'
}

// Definición del reductor
// Aquí puedes manejar diferentes acciones para actualizar el estado
export const miReducer = createReducer(
    initialState,
    
    on(spanishAction, (state, { payload }) => ({ 
        ...state, 
        mensaje: payload
    })),

    on(englishAction, (state, { payload }) => ({ 
        ...state, 
        mensaje: payload 
    }))
);