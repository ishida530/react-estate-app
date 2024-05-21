
import { useState } from 'react';
import Card from '../../componenets/card/Card';
import Filter from '../../componenets/filter/Filter';
import { listData } from '../../lib/dummydata'
import './listPage.scss'
const data = listData;
const ListPage = () => {
    const [list] = useState(data)
    console.log(list)
    return (
        <div className='listPage'>
            <div className="listContainer">
                <div className='wrapper'>
                    <Filter />
                    {list.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="mapContainer">

            </div>

        </div>
    )
}

export default ListPage