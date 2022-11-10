import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it("renders", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);

    //there should be no boxes
    //the only text associated with a Box is the remove button
    expect(queryByText('X')).not.toBeInTheDocument();

    //grab the form inputs
    const color = getByLabelText("Color:");
    const width = getByLabelText("Width:");
    const height = getByLabelText("Height:");
    const btn = queryByText("Create");

    //change the values of the form inputs
    fireEvent.change(color, { target: { value: '#14dcbe' } });
    fireEvent.change(width, { target: { value: 100 } });
    fireEvent.change(height, { target: { value: 100 } });

    //make a Box
    fireEvent.click(btn);

    const boxRemoveBtn = queryByText('X');
    expect(boxRemoveBtn).toBeInTheDocument();
    expect(boxRemoveBtn.previousSibling).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: #14dcbe;
  `);
});

it("should remove a box", function () {
    const { queryByText, getByLabelText } = render(<BoxList />);

    //there should be no boxes
    //the only text associated with a Box is the remove button
    expect(queryByText('X')).not.toBeInTheDocument();

    //grab the form inputs
    const color = getByLabelText("Color:");
    const width = getByLabelText("Width:");
    const height = getByLabelText("Height:");
    const btn = queryByText("Create");

    //change the values of the form inputs
    fireEvent.change(color, { target: { value: '#14dcbe' } });
    fireEvent.change(width, { target: { value: 100 } });
    fireEvent.change(height, { target: { value: 100 } });

    //make a Box
    fireEvent.click(btn);

    const boxRemoveBtn = queryByText('X');
    expect(boxRemoveBtn).toBeInTheDocument();

    //remove the Box
    fireEvent.click(boxRemoveBtn);
    expect(boxRemoveBtn).not.toBeInTheDocument();
});