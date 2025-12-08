// src/app/app.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';

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
export function miReducer(state: AppState = initialState, action: Action) {
    console.log(action);
    switch (action.type) {
        // CASE: Si manejas una acción, debes devolver un nuevo estado:
        // case '[App] Cambiar Mensaje':
        //    return { ...state, mensaje: 'Mensaje Cambiado' };

        default:
            // Si no se reconoce la acción, devuelve el estado actual
            return state;
    }
}