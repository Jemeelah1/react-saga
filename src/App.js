import './App.css';
import { useEffect } from "react";
import { onLoadAction, onLoadSuccess } from "./action/action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => console.log(state));
  // const loading = useSelector((state) => state);
  // const error = useSelector((state) => state);

  useEffect(() => {
    dispatch(onLoadAction(users));
  }, []);

  return (
    <div className="App">
      <h1>Activity suggestions!</h1>
    
      {/* {loading && <h2>loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}  */}
    </div>
  );
}

export default App;
