import AddToDoFeature from 'features/TodoFeature/AddTodo';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { reducer, sliceKey } from 'features/TodoFeature/slice';
import saga from 'features/TodoFeature/saga';

const NewTodoPage = () => {
  // useInjectSaga({ key: sliceKey, saga });
  // useInjectReducer({ key: sliceKey, reducer });
  return <AddToDoFeature />;
};

export default NewTodoPage;
