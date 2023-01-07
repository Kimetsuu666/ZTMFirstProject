import './card-list.css';
import { Card } from '../card/Card';

export function CardList({ monsters }) {
    return (
        <div className='card-list'>
            {monsters.map(monster => {
                return <Card key={monster.id} monster={monster} />
            })}
        </div>
    );
}
