import { useOutletContext } from "react-router-dom";
import { FormList } from "../../FormList/FormList";

export function Finished({ obj = useOutletContext() }) {
  const compleated = [];
  const getCompleatedTdods = () => {
    obj.todos.map((elem) => {
      if (!elem.compleated) {
        return;
      }
      return compleated.push(elem);
    });
  };
  getCompleatedTdods();
  return <FormList obj={{ todos: compleated, func: obj.func }} />;
}
