import React from "react";
import { connect } from "react-redux";
import { changeDepth , follow , setUsers , toggleIsFetching , unfollow } from "../../../../Redux/searchReducer";
import SearchAPI from "./SearchAPI";

let mapStateToProps = (state) => {
    return {
        usersData: state.searchPage.users,
        isFetching: state.searchPage.isFetching,
        currentDepth: state.searchPage.currentDepth,
        displayingUsersAmount: state.searchPage.displayingUsersAmount,
    }
}

let SearchContainer = connect(mapStateToProps, {follow, unfollow, setUsers, toggleIsFetching, changeDepth})(SearchAPI)

export default SearchContainer;