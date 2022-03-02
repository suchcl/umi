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
}

const List = ({ data, selectedItems, toggleItem }) => {
    return (
        <ul>
            {
                data.map((item) => (
                    <ListItem
                        name={item.name}
                        selected={selectedItems.includes(item)}
                        onClick={() => toggleItem(item)}
                        key={item.id}
                    />
                ))
            }
        </ul>
    );
};

const ListItem = ({ name, selected, onClick }) => {
    // 运行昂贵的操作来模拟负载,在现实世界的JS应用程序中也可以有其他的相关业务代码
    expensiveOperation(selected);

    return (
        <li
            style={selected ? { textDecoration: "line-through" } : undefined}
            onClick={onClick}
        >
            {name}
        </li>
    );
};

// 这是一个昂贵的 JS 操作示例，我们可能会在渲染函数中执行该操作以模拟负载。
const expensiveOperation = (selected) => {
    // 这里我们使用 selected 只是因为我们想模拟一个依赖于 props 的操作
    let total = selected ? 1 : 0;
    for (let i = 0; i < 200000; i++) {
        total += Math.random();
    }
    return total;
};
