<<<<<<< HEAD
import * as constants from '../constants'
=======
import * as constants from '../constants';
>>>>>>> 17dd89db877f97fd01181e95215a80b39277e50b

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM
}
<<<<<<< HEAD
=======

>>>>>>> 17dd89db877f97fd01181e95215a80b39277e50b
export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}
<<<<<<< HEAD

=======
>>>>>>> 17dd89db877f97fd01181e95215a80b39277e50b
export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}