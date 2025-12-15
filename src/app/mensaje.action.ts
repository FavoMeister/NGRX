import { Action } from "@ngrx/store"; 
import { createAction, props } from "@ngrx/store";

export const SPANISH = '[Mensaje] SPANISH';
export const ENGLISH = '[Mensaje] ENGLISH';

export const spanishAction = createAction(
    '[Mensaje] SPANISH',
    props<{ payload: string }>() // Define la estructura del payload
);

export const englishAction = createAction(
    '[Mensaje] ENGLISH',
    props<{ payload: string }>() // Define la estructura del payload
);

