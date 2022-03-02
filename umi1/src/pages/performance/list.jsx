import Nav from "../../components/nav";
import { memo, useState, useCallback } from "react";

// 使用包含增加项的元素创建模拟数据
const data = new Array(100)
    .fill()
    .map((_, i) => i + 1)
    .map((n) => ({
        id: n,
        name: `Item ${n}`
    }));

export default function App() {
    // 包含所选item的数组
    const [selected, setSelected] = useState([]);

    // 选择或取消选择给定的item
    const toggleItem = useCallback((item) => {
        setSelected((prevSelected) => {
            if (!prevSelected.includes(item)) {
                return [...prevSelected, item];
            } else {
                return prevSelected.filter((current) => current !== item);
            }
        });
    }, []);

    return (
        <div className="App">
            <Nav />
            <h1>List Example</h1>
            <List data={data} selectedItems={selected} toggleItem={toggleItem} />
        </div>
    );
}

const List = ({ data, selectedItems, toggleItem }) => {
    const handleClick = useCallback(
        (item) => {
            toggleItem(item);
        },
        [toggleItem]
    );

    return (
        <ul>
            {data.map((item) => (
                <MemoizedListItem
                    key={item.id}
                    item={item}
                    selected={selectedItems.includes(item)}
                    onClick={handleClick}
                />
            ))}
        </ul>
    );
};

const ListItem = ({ item, selected, onClick }) => {
    // 运行复杂的操作来模拟负载，在实际开发中，这可以是自定义的复杂的渲染。
    expensiveOperation(selected);

    return (
        <li
            style={selected ? { textDecoration: "line-through" } : undefined}
            onClick={() => onClick(item)}
        >
            {item.name}
        </li>
    );
};

const MemoizedListItem = memo(ListItem);

// 运行复杂的操作来模拟负载，在实际开发中，这可以是自定义的复杂的渲染。
const expensiveOperation = (selected) => {
    // 这里我们使用 selected 只是因为我们要模拟一个依赖于 props 的操作
    let total = selected ? 1 : 0;
    for (let i = 0; i < 2000000; i++) {
        total += Math.random();
    }
    return total;
};
