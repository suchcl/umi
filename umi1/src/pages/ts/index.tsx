import { FC, memo } from "react";
const medal = require("@/assets/img-medal.png");

interface PageProps { }

const TestTs: FC<PageProps> = (props) => {

    return (
        <>
            测试
            <img src={medal} alt="" />
            <img src={require("@/assets/img-medal.png")} alt="" />
            <img src="https://xxxx.com/xxxx/xxxx/n_v30fc3017a261e463f94d7c3937dcce35e.png" alt="" />
        </>
    )
}

export default memo(TestTs);