import { useState } from 'react'
import Card from './Card';


function Cards(){
    const [items, setItems] = useState([
        {id: 1, img: '/img/cactus.png', status: "" },
        {id: 1, img: '/img/cactus.png', status: "" },
        {id: 2, img: '/img/egg.png', status: "" },
        {id: 2, img: '/img/egg.png', status: "" },
        {id: 3, img: '/img/hamster.png', status: "" },
        {id: 3, img: '/img/hamster.png', status: "" },
        {id: 4, img: '/img/hippo.png', status: "" },
        {id: 4, img: '/img/hippo.png', status: "" },
        {id: 5, img: '/img/fox.png', status: "" },
        {id: 5, img: '/img/fox.png', status: "" },
        {id: 6, img: '/img/chicken.png', status: "" },
        {id: 6, img: '/img/chicken.png', status: "" },
        {id: 7, img: '/img/monster.png', status: "" },
        {id: 7, img: '/img/monster.png', status: "" },
        {id: 8, img: '/img/trex.png', status: "" },
        {id: 8, img: '/img/trex.png', status: "" },
    ].sort(() => Math.random() -0.5))

    const [previuos, setPrevious] = useState(-1)

    function check(current){
        if(items[current].id === items[previuos].id){
            items[current].status = "correct"
            items[previuos].status = "correct"
            setItems([...items])
            setPrevious(-1)
        }else{
            items[current].status = "wrong"
            items[previuos].status = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].status = ""
                items[previuos].status = ""
                setItems([...items])
                setPrevious(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(previuos === -1){
            items[id].status = "active"
            setItems([...items])
            setPrevious(id)
        }else{
            check(id)
        }
    }
    return(
        <section className='memogame-area'>
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ))}

        </section>
    )
}

export default Cards;