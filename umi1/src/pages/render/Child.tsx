import { memo, useEffect } from "react"

const Child = ({ user, handleClick }:any) => {
    useEffect(() => {
        console.log("子组件->user:", user);
    }, [user]);

    useEffect(() => {
        console.log("子组件->handleClick:", handleClick);

    }, [handleClick]);

    return (
        <>
            {/* {user.name} */}
        </>
    )
}

export default memo(Child);