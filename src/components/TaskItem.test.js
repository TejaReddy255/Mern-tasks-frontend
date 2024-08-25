import  configureStore  from "redux-mock-store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import TaskItem from "./TaskItem";

describe('TaskItem',()=>{
    const task={
        _id:'task-123',
        createdAt:'2023-07-09T10:00:00',
        text:'Learn BlockChain',
    };
    const mockstore =configureStore([]);
    const store = mockstore({});
    test('render task details correctly',()=>{
        const {getByText} = render(
            <Provider store={store}>
                <TaskItem task={task}/>
            </Provider>
        );
        expect(getByText(task.text)).toBeInTheDocument();
        expect(getByText(new Date(task.createdAt).toLocaleString('en-Us'))).toBeInTheDocument();
    })
});