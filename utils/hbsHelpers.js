module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },

    delLogin: (sessionName, commName) => {
        console.log(sessionName + ' = session name passed to helper');
        console.log(commName + ' = user name passed to helper')
        if (sessionName === commName) {
            return true
        } else {
            return false
        }
    },
}

