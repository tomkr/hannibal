let defaultState = {
  members: [
    { name: 'Tom', assignments: ['#C33', '#C33', '#666', '', '', ''] }
  ]
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MEMBER': 
      return { 
        ...state,
        members: [...state.members, { name: action.name, assignments: [] }]
      };
    default:
      return state;
  }
}

export default app;
