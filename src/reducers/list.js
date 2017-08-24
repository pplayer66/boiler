export default (st=[{id: 'numb1', content: 'asdgdfg1'}, {id: 'numb2', content: 'asd31231'}, {id: 'numb3', content: 'asqrqqv1'}, {id: 'numb4', content: 'asddsf1'}, {id: 'numb5', content: 'assdf'}], action) =>{
	switch(action.type){
		case 'REORDER':
			return action.payload
	}
	return st;
}