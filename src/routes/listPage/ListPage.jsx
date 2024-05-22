
import { useState } from 'react';
import Card from '../../componenets/card/Card';
import Filter from '../../componenets/filter/Filter';
import { listData } from '../../lib/dummydata'
import './listPage.scss'
import Map from '../../componenets/map/Map';
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
                <Map items={list} />
            </div>

        </div>
    )
}

export default ListPage