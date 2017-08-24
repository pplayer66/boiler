import { combineReducers} from 'redux';
import sortedList from './list';

const rootReducer = combineReducers({
	listOrder: sortedList
});

export default rootReducer