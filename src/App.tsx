import { ChangeEvent, useState } from 'react';
import { TodoItem } from './components/TodoItem';
import { NewTodoForm } from './components/NewTodoForm';
type TTodo = {
    id: string;
    title: string;
    completed: boolean;
};
const App = () => {
    const [text, setText] = useState('');

    const [todos, setTodos] = useState<string[]>([]);

    const [] = useState<TTodo | null>(null);

    const addTodo = () => {
        setTodos([...todos, text]);
    };

    const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className="App">
            <TodoItem
                id={'1'}
                completed={true}
                title={'init'}
                style={{ color: 'red' }}
            />
            <NewTodoForm
                handleClick={handleClick}
                addTodo={addTodo}
                value={text}
            />
        </div>
    );
};

export default App;
