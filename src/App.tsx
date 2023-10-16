import { TodoItem } from './components/TodoItem';

const App = () => {
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
