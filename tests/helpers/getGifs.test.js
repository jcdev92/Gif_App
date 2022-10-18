import { getGifs } from "../../src/helpers/getGif.js";
import { describe, test } from "vitest";

describe('Tests in getGifs()', () => {
    test('should return an array of gifs',  async () => {
        const category = 'One Punch';
        const gifs = await getGifs(category);
        expect(gifs.length).toBe(10);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),})
    });
});