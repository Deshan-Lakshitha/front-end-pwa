import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import FormInput from "../FormInput"

test('Should render text field', () => {
    render(
    <FormInput
        props={[]}
    />
    )
    const textField = screen.getByTestId('textfield-test')
    expect(textField).toBeInTheDocument()
})

test('Should ba able to type in text field', () => {
    render(
    <FormInput
        props={[]}
    />
    )
    const input = screen.getByTestId('textfield-test').querySelector("input")
    fireEvent.change(input, {target:{value:"input"}})
    expect(input.value).toBe("input")
})