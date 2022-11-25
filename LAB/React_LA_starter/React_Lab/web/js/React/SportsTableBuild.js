const SportsTableBuild = () => {
    const itemList = [
        {id: 1, name: "Volleyball", price: "$20", qty: 0},
        {id: 2, name: "Basketball", price: "$5", qty: 5},
        {id: 3, name: "Tennis Raquet", price: "$30", qty: 0},
        {id: 4, name: "Football", price: "$40", qty: 10}
    ];

    const Items = ({ list, heading }) => (
        <div className="sportsTable">
            <h2>{heading}</h2>
            <table>
                <thead>
                    <tr>
                        <th className="num">Id</th>
                        <th className="name">Name</th>
                        <th className="num">Price</th>
                        <th className="num">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(ele =>
                            <tr key={ele.id}>
                                <td className="num">{ele.id}</td> 
                                <td className="name">{ele.name}</td>
                                <td className="num">{ele.price}</td>
                                <td className="num">{ele.qty === 0 ? "OUT of Stock" : ele.qty}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

    return <Items list={itemList} heading="Sports Equipment"/>;
};