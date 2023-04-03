import { useOutletContext } from "react-router-dom";
import { FormList } from "../../FormList/FormList";

export function Uncompleated({ obj = useOutletContext() }) {
  const uncompleated = [];
  const getCompleatedTdods = () => {
    obj.todos.map((elem) => {
      if (elem.compleated) {
        return;
      }
      return uncompleated.push(elem);
    });
  };
  getCompleatedTdods();
  return <FormList obj={{ todos: uncompleated, func: obj.func }} />;
}
