import useFetch from "../hooks/useFetch.js";
import {renderHook, waitFor} from '@testing-library/react';

jest.mock('axios', () => ({
    get: jest.fn().mockResolvedValue({ data: 'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284' }),
}));

describe("useFetch", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should return default url when the keyword not provided", async () => {
        const {result} = renderHook(() => useFetch({keyword: ""}));
        await waitFor(()=>result.current);
        expect(result.current).toBe('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284')
    })
})