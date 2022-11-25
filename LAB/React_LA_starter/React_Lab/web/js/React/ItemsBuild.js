const ItemsBuild = () => {
    const itemList = [
        {id: 1, name: "Beat Happening", price: "$29.99", qty: 0},
        {id: 2, name: "Fake Train", price: "$25", qty: 5},
        {id: 3, name: "Repeater", price: "$21", qty: 0},
        {id: 4, name: "Innerspeaker", price: "$40", qty: 10},
        {id: 5, name: "Currents", price: "$35", qty: 2}
    ];
    
    const Items = ( { list, heading } ) => (
        <div>
            <h2>{heading}</h2>
            <ul>
                {
                    list.map(ele =>
                        <li key={ele.id}>
                            Id is {ele.id}: {ele.name} costs {ele.price}, quantity: {ele.qty === 0 ? "OUT OF STOCK" : ele.qty}
                        </li>
                    )
                }
            </ul>
        </div>
    );
  
    return <Items list={itemList} heading="Album Store Heading (student data)"/>;
};