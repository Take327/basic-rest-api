const indexModule = (() => {

    document.getElementById('search-btn').addEventListener('click', () => {
        return searchModule.searchUsers();
    })

    return usersModule.fetchAllUsers();
})()


