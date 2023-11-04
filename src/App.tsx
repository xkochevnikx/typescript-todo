import // ChangeEvent,
// useEffect,
// useState,
'react';
import { NewTodoForm } from './components/NewTodoForm';
// import { TTodo } from './types';
import { TodoList } from './components/TodoList';

const App = () => {
    // const [text, setText] = useState('');

    // const [todos, setTodos] = useState<TTodo[]>([]);
    // console.log(todos);

    // const addTodo = () => {
    //     const newTodo: TTodo = {
    //         id: Date.now().toString(),
    //         title: text,
    //         completed: false,
    //     };
    //     setTodos([...todos, newTodo]);
    // };

    // const addTodoClick = (val: string) => {
    //     const newTodo: TTodo = {
    //         id: Date.now().toString(),
    //         title: val,
    //         completed: false,
    //     };
    //     setTodos([...todos, newTodo]);
    // };

    // const toggleTodo = (id: TTodo['id']) => {
    //     setTodos(
    //         todos.map((todo) => {
    //             if (todo.id !== id) {
    //                 return todo;
    //             } else {
    //                 return {
    //                     ...todo,
    //                     completed: !todo.completed,
    //                 };
    //             }
    //         })
    //     );
    // };

    // const removeTodo = (id: TTodo['id']) => {
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };

    // const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    //     setText(event.target.value);
    // };

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((resp) => resp.json())
    //         .then((data: TTodo[]) => setTodos(data));
    // }, []);

    return (
        <div className="App">
            <NewTodoForm
                onClickHandler={addTodoClick}
                // handleClick={handleClick}
                // addTodo={addTodo}
                // value={text}
            />
            <TodoList
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                todos={todos}
                style={{ color: 'red', display: 'flex', gap: 5 }}
            />
        </div>
    );
};

export default App;
