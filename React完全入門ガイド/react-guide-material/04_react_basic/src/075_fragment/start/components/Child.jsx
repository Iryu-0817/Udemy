import "./Child.css";
import { Fragment } from "react";

const Child = () => { 
    return (
        <Fragment key="1">
          {/* POINT keyはFragmentが受け取ることができる唯一の属性 */}
          <div className="component">
            <h3>Hello Component</h3>
          </div>
          <h3>Hello Fragment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
            suscipit recusandae eius perspiciatis illo corporis? Aliquam nam
            repellendus quos expedita est?
          </p>
        </Fragment>
    );
};


export default Example;