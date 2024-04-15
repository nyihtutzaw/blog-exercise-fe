
import { PostFormData } from '@/types';
import { useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { editPost as editPostService } from '@/actions';


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


interface UseEditPostReturnType extends State {
    editPost: (data: PostFormData,id:number) => Promise<boolean>;
}

export const useEditPost = (): UseEditPostReturnType => {
    const router = useRouter();
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        error: null,
    });

    const editPost = async (data: PostFormData,id:number): Promise<boolean> => {
        try {
            dispatch({ type: SET_LOADING, payload: true });
            dispatch({ type: SET_ERROR, payload: null });
            await editPostService(data,id);
            dispatch({ type: SET_LOADING, payload: false });
            router.replace(`/profile`);
            return true;
        } catch (error) {
            dispatch({ type: SET_ERROR, payload: (error as { message: string }).message || 'Failed' });
            return false;
        }
    };

    return { ...state, editPost };
};