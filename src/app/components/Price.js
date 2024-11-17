export default function Price({ data }) {
    return (
        <div>
            <h1>Price</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.price}
                    </li>
                ))}
            </ul>
            <p>{data}</p>
        </div>
    )
}