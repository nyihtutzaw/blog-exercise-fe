import { RegisterFormData } from '@/types';
import { useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '@/actions';



interface State {
    loading: boolean;
    error: string | null;
}


const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';


interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: boolean;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string | null;
}

type Action = SetLoadingAction | SetErrorAction;


const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};


interface UseRegisterReturnType extends State {
    register: (data: RegisterFormData) => Promise<boolean>;
}

export const useRegister = (): UseRegisterReturnType => {
    const router = useRouter();
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        error: null,
    });

    const register = async (data: RegisterFormData): Promise<boolean> => {
        try {
            dispatch({ type: SET_LOADING, payload: true });
            dispatch({ type: SET_ERROR, payload: null });
            await createUser(data);
            dispatch({ type: SET_LOADING, payload: false });
            router.replace('/login');
            return true;
        } catch (error) {
            dispatch({ type: SET_ERROR, payload: (error as { message: string }).message || 'Failed' });
            return false;
        }
    };

    return { ...state, register };
};