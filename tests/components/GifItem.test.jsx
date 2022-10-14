import { render , screen } from "@testing-library/react";
import { GifItem }         from "../../src/components";

describe('Test on <GifItem />', () => {
    const title = 'A Title';
    const url = 'https://localhost/something.jpg';
    test('It should match with the snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
    test('It should show the image with the URL and the indicated ALT', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('It should render the title of the component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

});