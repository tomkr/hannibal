export const addMember = name => {
  console.log(name);
  return {
    type: 'ADD_MEMBER',
    name
  }
}