import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it("renders", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new Todo", function () {
    const { queryByText, getByLabelText } = render(<TodoList />);

    //there should be no todos
    //all todos have a button with X
    expect(queryByText('X')).not.toBeInTheDocument();

    //grab the form inputs
    const task = getByLabelText("Task:");
    const btn = queryByText("Add Todo");

    //change the values of the form input
    fireEvent.change(task, { target: { value: 'New Todo' } });

    //make a todo
    fireEvent.click(btn);

    const todo = queryByText('New Todo');
    expect(todo).toBeInTheDocument();
});

it("should remove a Todo", function () {
    const { queryByText, getByLabelText } = render(<TodoList />);

    //there should be no todos
    //all todos have a button with X
    expect(queryByText('X')).not.toBeInTheDocument();

    //grab the form inputs
    const task = getByLabelText("Task:");
    const btn = queryByText("Add Todo");

    //change the values of the form input
    fireEvent.change(task, { target: { value: 'New Todo' } });

    //make a todo
    fireEvent.click(btn);

    const todo = queryByText('New Todo');
    expect(todo).toBeInTheDocument();

    const rmbtn = queryByText('X');
    expect(rmbtn).toBeInTheDocument();
    fireEvent.click(rmbtn);
    expect(rmbtn).not.toBeInTheDocument();
});