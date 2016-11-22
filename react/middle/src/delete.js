const deleting = (state = false, action) => {
  switch (action.type) {
	case 'DEL_TODO_DATA':
		return true
	case 'DEL_DATA_RECEIVED':
		return false
	default:
		return state
	}

}

export default deleting
