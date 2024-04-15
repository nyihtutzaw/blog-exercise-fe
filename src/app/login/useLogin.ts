/* eslint-disable no-console */
import { useReducer } from 'react';
// import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';



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


interface UseLoginReturnType extends State {
    login: (name: string, password: string) => Promise<boolean>;
}

export const useLogin = (): UseLoginReturnType => {
    //const router = useRouter();
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        error: null,
    });

    const login = async (name: string, password: string): Promise<boolean> => {
        try {
            console.log(name);
            console.log(password);
            dispatch({ type: SET_LOADING, payload: true });
            dispatch({ type: SET_ERROR, payload: null });

            //   const result = await signIn('credentials', {
            //     name,
            //     password,
            //     redirect: false,
            //   });

            dispatch({ type: SET_LOADING, payload: false });

            //   if (!result?.error) {
            //     router.replace('/');
            //     return true;
            //   } else {
            //     dispatch({ type: SET_ERROR, payload: 'Login Failed' });
            //     return false;
            //   }
            return false;
        } catch (error) {
            dispatch({ type: SET_ERROR, payload: 'Login Failed' });
            console.error('Error:', error);
            return false;
        }
    };

    return { ...state, login };
};