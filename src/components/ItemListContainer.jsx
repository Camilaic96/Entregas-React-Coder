import React from "react";
import { useState ,  useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayProductos from "./json/arrayProductos.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000)
        })

        promesa.then((data) => {
            setItems(data);
        })
    }, []);

    return (
        <div className="container py-5">
            <ItemList items={items} />
            <ItemCount stockItems={10} />
        </div>
    )
}

export default ItemListContainer;