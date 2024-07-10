import "./Expression.css";

const Expression = () => {
    const tittle = "Expression";
    const arry = ["item1", "item2", "item3"];
    const hello = (arg) => `${arg} Function`;
    const jsx = <h3>Hello JSX</h3>;

    return (
        <div className={tittle.toLowerCase()}>
            <h3>{"Hello" + tittle}</h3>

            <h3>{arry}</h3>

            <h3>{hello("Hello")}</h3>

            {<h3>Hello JSX</h3>} 

            {jsx}
        </div>
    )
}

export default Expression;