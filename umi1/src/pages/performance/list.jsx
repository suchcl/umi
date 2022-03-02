// import { nanoid } from "nanoid";
import Nav from "../../components/nav";
import { useState, memo, useCallback } from "react";

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
            <div className="test">
                <h2>性能测试</h2>
                <List data={data} selectedItems={selected} toggleItem={toggleItem} />
            </div>
        </div>
    );
};

const List = ({ data, selectedItems, toggleItem }) => {
    const MemoizedListItem = memo(ListItem);
    const handleClick = useCallback(
        (item) => {  // We now receive the selected item
            toggleItem(item);
            // console.log(item);
        },
        [toggleItem]
    );

    return (
        <ul>
            {data.map((item) => (
                <MemoizedListItem
                    key={item.id}
                    item={item}  // We pass the full item instead of the name
                    selected={selectedItems.includes(item)}
                    onClick={handleClick}
                />
            ))}
        </ul>
    );
};

const ListItem = ({ item, selected, onClick }) => {
    expensiveOperation(selected);
    return (
        <li style={selected ? { textDecoration: 'line-through' } : undefined}
            onClick={() => onClick(item)}
        >
            {item.name}
        </li>
    )
}

const expensiveOperation = (selected) => {
    let total = selected ? 1 : 0;
    for (let i = 0; i < 2000; i++) {
        total += Math.random();
    }
    return total;
};