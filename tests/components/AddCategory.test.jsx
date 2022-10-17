import { fireEvent , render , screen } from "@testing-library/react";
import { AddCategory }                 from "../../src/components";

describe('Test on <AddCategory>' ,  () => {
    test('should change the value of the text box', () => {
        render(<AddCategory  onAddCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Hola Mundo'}});
        expect(input.value).toBe('Hola Mundo');
    });

    test('should call onAddCategory if the input has a value', () => {
        const inputValue = 'Saitama';
        render(<AddCategory  onAddCategory={(e)=>{}}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('Saitama');
    });

});