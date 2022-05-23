import Pagination from "../components/Pagination/Pagination";
import Todos from "../components/Todos/Todos";

export default function Home() {
  return (
    <>
      <Todos />
      <hr />
      <Pagination />
    </>
  );
}
