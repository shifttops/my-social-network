const CONSTANTS = {
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
    CHANGE_DEPTH: 'CHANGE_DEPTH'
}

let initialState = {
    /*users: [
       {
            id: 1,
            name: 'Nick',
            surname: 'Kupreev',
            age: 18,
            city: 'Minsk',
            avatarUrl: 'https://sun9-9.userapi.com/impg/UG8VExZpPRlb6YGYJEKAeyP-rkLkLhx_U6dsdw/zwWIQ9UZ118.jpg?size=960x1280&quality=96&sign=b4742913b9a925638ad8ebaac472a4e5&type=album',
            isFollowed: true,
        },
        {
            id: 2,
            name: 'Denis',
            surname: 'Baikhanov',
            age: 16,
            city: 'Vitebsk',
            avatarUrl: 'https://sun9-27.userapi.com/impf/c837134/v837134870/2541e/lZAF8Vr9OhQ.jpg?size=720x599&quality=96&sign=7ef1de645bff24c67f90925a2194828d&type=album',
            isFollowed: true,
        },
        {
            id: 3,
            name: 'Anna',
            surname: 'Baikhanova',
            age: 45,
            city: 'Vitebsk',
            avatarUrl: '',
            isFollowed: false,
        },
    ],*/
    users: [ ],
    displayingUsersAmount: 5,
    totalUsersCount: 0,
    currentDepth: 1,
    isFetching: false,
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case CONSTANTS.FOLLOW: {
            return {
                ...state ,
                users: state.users.map ( user => {
                    if (user.id === action.id) {
                        return {...user , isFollowed: true}
                    }
                    return user;
                } )
            };
        }
        case CONSTANTS.UNFOLLOW: {
            return {
                ...state ,
                users: state.users.map ( user => {
                    if (user.id === action.id) {
                        return {...user , isFollowed: false}
                    }
                    return user;
                } )
            };
        }

        case CONSTANTS.SET_USERS: {
            return{
                ...state,
                users: [...state.users, ...action.data.items],
                totalUsersCount: action.data.totalCount,
            }
        }
        case CONSTANTS.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case CONSTANTS.CHANGE_DEPTH: {
            return {...state, currentDepth: action.depth}
        }
        default: return state;
    }
}

export const follow = (id) => ({type: CONSTANTS.FOLLOW, id});
export const unfollow = (id) => ({type: CONSTANTS.UNFOLLOW, id});
export const setUsers = (data) => ({type: CONSTANTS.SET_USERS, data})
export const toggleIsFetching = (isFetching) => ({type: CONSTANTS.TOGGLE_IS_FETCHING, isFetching})
export const changeDepth = (depth) => ({type: CONSTANTS.CHANGE_DEPTH, depth})

export default searchReducer;