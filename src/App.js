import data from "./data";

const App = () => {
  return (
    <div className="App">
        <table>
            <thead>
                <th>exchangeType</th>
                <th>exchangeFrom</th>
                <th>exchangeTo</th>
                <th>buy</th>
                <th>sell</th>
                <th>diff</th>
            </thead>
            <tbody>
                {data.currencies.map((data, index) =>
                    <tr key={index}>
                        <td>{data.exchangeType}</td>
                        <td>{data.exchangeFrom}</td>
                        <td>{data.exchangeTo}</td>
                        <td>{data.buy}</td>
                        <td>{data.sell}</td>
                        <td>{data.diff}</td>
                    </tr>

                )}
            </tbody>
        </table>
    </div>
  );
}

export default App;
