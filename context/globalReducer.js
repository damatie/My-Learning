export const initialState  =  {
    openAddEmployeeModal:false,
    openDeleteModal:false,
    openEditModal:false,
}

const reducer = (state,action) => {
    switch(action.type){
        case "TOGGLE_CREATE_MODAL":
            return {
                ...state,
                openAddEmployeeModal:action.openAddEmployeeModal
            }
        case "TOGGLE_DELETE_MODAL":
            return {
                ...state,
                openDeleteModal:action.openDeleteModal
            }
        case "TOGGLE_EDIT_MODAL":
            return {
                ...state,
                openEditModal:action.openEditModal
            }
        default:
            return state;
        }
    }

export default reducer