// src/components/useMyComposable.ts
import {reactive} from 'vue'

export const useMyComposable = () => {
    return reactive({
        title: 'This is my composable data',
    })
}