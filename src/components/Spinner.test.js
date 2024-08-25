import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the matcher
import Spinner from './Spinner';
import { act } from 'react'; // Import act from react

describe("Spinner", () => {
    test("renders Spinner component", () => {
        act(() => {
            render(<Spinner />);
        });

        const containerDiv = screen.getByTestId('spin-container');
        expect(containerDiv).toBeInTheDocument();

        const innerDiv = screen.getByTestId('inner-container');
        expect(innerDiv).toBeInTheDocument();
    });
});
