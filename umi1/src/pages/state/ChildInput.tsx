import { FC, MutableRefObject, useCallback, useEffect, useState } from "react";
interface ChildProps {
    label: string;
    cRef: MutableRefObject<any>;
}

const ChildInput: FC<ChildProps> = (props) => {
    const [value, setValue] = useState("");
    const { label, cRef } = props;
    const [name, sestName] = useState<string>("");

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    const getValue = useCallback(() => {
        return value;
    }, [value])

    const changeName = (e: any) => {
        sestName(e.target.value);
    }

    const getName = useCallback(() => {
        return name;
    }, [name]);

    useEffect(() => {
        if (cRef && cRef.current) {
            cRef.current.getValue = getValue;
        }
    }, [getValue])

    useEffect(() => {
        if (cRef && cRef.current) {
            cRef.current.getName = getName;
        }
    }, [getName])

    return (
        <>
            <span>{label}</span>
            <input type="text" value={value} onChange={handleChange} />
            <input type="text" value={name} onChange={changeName} />
        </>
    )
}

export default ChildInput;