import { v4 as uuidv4 } from 'uuid';

export const largeInnerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INNERCELL':
      return [...state, { innerTitle: action.innerCell.title, id: uuidv4() }];
    case 'REMOVE_INNERCELL':
      return state.filter(innerCell => innerCell.id !== action.id);
    default:
      return state;
  }
};
