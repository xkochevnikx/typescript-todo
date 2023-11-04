import {
    // ChangeEvent,
    useEffect,
    useState,
} from 'react';
import { TodoItem } from './components/TodoItem';
import { NewTodoForm } from './components/NewTodoForm';
import { TTodo } from './types';

const App = () => {
    // const [text, setText] = useState('');

    const [todos, setTodos] = useState<TTodo[]>([]);
    console.log(todos);

    // const addTodo = () => {
    //     const newTodo: TTodo = {
    //         id: Date.now().toString(),
    //         title: text,
    //         completed: false,
    //     };
    //     setTodos([...todos, newTodo]);
    // };

    const addTodoClick = (val: string) => {
        const newTodo: TTodo = {
            id: Date.now().toString(),
            title: val,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    // const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    //     setText(event.target.value);
    // };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((resp) => resp.json())
            .then((data: TTodo[]) => setTodos(data));
    }, []);

    return (
        <div className="App">
            <NewTodoForm
                onClickHandler={addTodoClick}
                // handleClick={handleClick}
                // addTodo={addTodo}
                // value={text}
            />

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    completed={todo.completed}
                    title={todo.title}
                    style={{ color: 'red' }}
                />
            ))}
        </div>
    );
};

export default App;
