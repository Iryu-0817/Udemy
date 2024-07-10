import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    const o = {
        coor: 'red',
        num: 123
    }
    return (
        <>
            <Child
            {...o}
             fn = {hello}
             bool
             obj = {{ name: 'Taro', age: 18}}
             />
        </>
    );
} 

export default Example;
