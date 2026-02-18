import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useState} from 'react';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export function useForm<T extends object> (obj: T) {
    const [form, setValue] = useState<T>(obj);

    function handleForm<K extends keyof T>(key: K, newValue: T[K]): void {
        setValue(prevValue => {
            return {
                ...prevValue,
                [key]: newValue,
            }
        })
    }

    return {
        form,
        handleForm,
    }
}