import * as React from "react";
import {useIsMounted} from "./useIsMounted";

export function useSafeOnPress(onPress?: (arg: any) => void) {
    const {isMountedRef} = useIsMounted();
    return React.useCallback(
        (arg: any) => {
            if (onPress) {
                requestAnimationFrame(() => {
                    if (isMountedRef.current) {
                        onPress(arg);
                    }
                });
            }
        },
        [onPress, isMountedRef]
    );
}
