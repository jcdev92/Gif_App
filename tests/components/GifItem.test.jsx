import { render }  from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Test on <GifItem />', () => {
    const title = 'A Title';
    const url = 'https://localhost/something.jpg';
    test('It should match with the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

});