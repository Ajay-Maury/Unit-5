import { Button } from "antd"

import "antd/dist/antd.css";

export const Button1 = ({ type, children }) => {
    console.log(type,children)
    return (
        <>
            <Button type={type}>{ children}</Button>
        </>
    )
}