import { createApp, type App } from 'vue'
import { useFetch } from '../composables/useFetch'
import { flushPromises } from '@vue/test-utils'

import { vi } from 'vitest'

function withSetup(composable: Function): [any, App<Element>] {
    let result;

    const app = createApp({
        setup() {
            result = composable();
            return () => {};
        },
    });

    app.mount(document.createElement("div"));

    return [result, app];
}

describe('useFetch', () => {

    const fetchSpy = vi.spyOn(global, 'fetch');

    beforeEach(() => {
        fetchSpy.mockClear();
    });

    it('should fetch data from the given url', async () => {
        fetchSpy.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ data: 'test' }),
        } as any);

        const [result, app] = withSetup(() => useFetch('your-test-url'));
        await flushPromises();

        expect(result?.data.value).toEqual({ data: 'test' });
        expect(fetchSpy).toHaveBeenCalledWith('your-test-url');

        await app.unmount();
    });
});