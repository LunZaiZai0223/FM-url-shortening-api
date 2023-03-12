import RootLayout from './RootLayout';

// redux
import { useDispatch } from 'react-redux';
import { setDataFromLocalStorage } from './store/actions';

// utils
import { getLocalStorage } from './utils/localStorageHelpers';
import { Link } from './store/links';

function App() {
  const dispatch = useDispatch();
  const localStorageData = getLocalStorage();

  // render: app -> components...，所以先撈 localStorage 的資料，有的話就塞進 redux
  if (localStorageData.length > 0) {
    const formatted: Link[] = localStorageData.map((item: any) => ({
      ...item,
      copied_status: false,
    }));
    dispatch(setDataFromLocalStorage(formatted));
  }

  return <RootLayout />;
}

export default App;
