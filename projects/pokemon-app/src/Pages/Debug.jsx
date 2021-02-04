import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as ActionsCounter from "../Store/counter/counter.actions";

function Debug(props) {
  //const [value, setValue] = useState(0);
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(value);
  //const counterChange = (value) => dispatch(ActionsCounter.change(value));

  return (
    <>
      <main className="debug">
        <header>
          <h1>Contador</h1>
          <span>{value}</span>
        </header>
        <section>
          <button
            type="button"
            onClick={() => dispatch(ActionsCounter.change(value + 1))}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => dispatch(ActionsCounter.change(value - 1))}
          >
            -
          </button>
        </section>
      </main>
    </>
  );
}

// const mapStateToProps = (state) => ({ value: state.counter.value });

// const mapDispatchToProps = (dispatch) => ({
//   counterChange: (value) => dispatch(CounterChange.change(value)),
// });

export default Debug;
