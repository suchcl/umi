import { nanoid } from "nanoid";
import Nav from "../../components/nav";
import { useState } from "react";

// 创建模拟数据
const data = new Array(100)
    .fill()
    .map((_, i) => i + 1)
    .map((n) => ({
        id: n,
        name: `Item ${n}`
    }));

export default () => {
    // 包含所选项的数组
    const [selected, setSelected] = useState([]);

    const toggleItem = (item) => {
        if (!selected.includes(item)) {
            setSelected([...selected, item]);
        } else {
            setSelected(selected.filter((current) => current !== item));
        }
    };

    return (
        <div className="App">
            <Nav />
            <div className="test">
                <h2>性能测试</h2>
                <List data={data} selectedItems={selected} toggleItem={toggleItem} />
            </div>
        </div>
    );
};

const List = ({ data, selectedItems, toggleItem }) => {
    return (
        <ul>
            {
                data.map((item) => (
                    <ListItem
                        name={item.name}
                        selected={selectedItems.includes(item)}
                        onClick={() => toggleItem(item)}
                        // key={item.id}
                        key={nanoid()}
                    />)
                )
            }
        </ul>
    );
};

const ListItem = ({ name, selected, onClick }) => {
    expensiveOperation(selected);

    return (
        <li
            style={selected ? { textDecoration: 'line-through' } : undefined}
            onClick={onClick}
        >
            {name}
        </li>
    );
};

const expensiveOperation = (selected) => {
    let total = selected ? 1 : 0;
    for (let i = 0; i < 200000; i++) {
        total += Math.random();
    }
    return total;
};