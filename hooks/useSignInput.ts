import * as React from 'react';
import {TextInput} from "react-native";

export function useSignInput(): [string, (input: string) => void, React.Ref<TextInput | undefined>, () => void] {
    const [input, setInput] = React.useState<string>("");

    const inputInputRef = React.useRef<TextInput>();
    const focusInput = React.useCallback(() => {
        if (inputInputRef.current) {
            inputInputRef.current.focus();
        }
    }, [inputInputRef]);

    return [input, setInput, inputInputRef, focusInput];
}
