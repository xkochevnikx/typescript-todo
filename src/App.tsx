import { useState } from 'react';
import { TodoItem } from './components/TodoItem';
type TTodo = {
    id: string;
    title: string;
    completed: boolean;
};
const App = () => {
    const [text, setText] = useState('');

    const [todos, setTodos] = useState<string[]>([]);

    const [] = useState<TTodo | null>(null);

    return (
        <div className="App">
            <TodoItem
                id={'1'}
                completed={true}
                title={'init'}
                style={{ color: 'red' }}
            />
        </div>
    );
};

export default App;
