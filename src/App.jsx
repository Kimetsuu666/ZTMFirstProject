import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/search-box/SearchBox';
import { useEffect, useState } from 'react';

export default function App() {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setMonsters(data));
    }, []);

    useEffect(() => {
        setFilteredMonsters(monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField)));
    }, [monsters, searchField]);

    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    }

    return (
        <div className="App">
            <h1 className='app-title'>Monster's Rolodex</h1>
            <SearchBox
                onChange={onSearchChange}
                placeholder='search monsters'
                className='monsters-search-box'
            />
            <CardList monsters={filteredMonsters} />
        </div>
    )
}
