import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'

export type RequiredInputProps = {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onBlur: () => void
    required: true
}

export interface NumberInputProps {
    value: string | number
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onBlur: () => void
}

export type RequiredInputResult = [
    props: RequiredInputProps,
    error: string,
    setValue: Dispatch<SetStateAction<string>>,
    setError: Dispatch<SetStateAction<string>>
]

type NumberInputResult = [
    props: NumberInputProps,
    error: string,
    setValue: Dispatch<SetStateAction<string | number>>,
    setError: Dispatch<SetStateAction<string>>
]

export const useRequiredInput = (
    initialValue: string,
    errorText: string,
): RequiredInputResult => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState('')
    const onBlur = () => {
        if (value?.length > 0) {
            setError('')
        } else {
            setError(errorText)
        }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.type === 'ChangeEvent<HTMLInputElement>' ? e.target.value.trim() : e.target.value
        setValue(value)
        if (value?.length > 0) {
            setError('')
        }
    }
    return [{ value, onChange, onBlur, required: true }, error, setValue, setError]
}

export const useNumberInput = (initialValue: string | number, errorText: string, errorFormat: string): NumberInputResult => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState('')
    const onBlur = () => {
        if (typeof value !== 'number') {
            setError(errorText)
        }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value.trim()
        const num = Number(
            value.replace(/[０-９]/g, (str) => String.fromCharCode(str.charCodeAt(0) - 0xfee0)).replace(/[‐－―ー]/g, '-')
        )
        if (isNaN(num) || value === '') {
            setValue(value)
        } else {
            setValue(num)
        }
        if (value.length > 0) {
            setError('')
        } else {
            if (isNaN(num)) {
                setError(errorFormat)
            }
            setError('')
        }
    }
        return [{value, onChange, onBlur}, error, setValue, setError]
}
