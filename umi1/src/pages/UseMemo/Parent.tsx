import { FC, memo } from "react";

const Parent: FC = () => {
    return (
        <>
            parent
        </>
    )
}

export default memo(Parent);