const url = "https://www.boredapi.com/api/activity"

const fetchGetUsers = () => {
    return fetch(url, {
        method: "GET",
    })
    .then((response) => response.json())
    .catch((error) => {
        throw error;
    });
};

export default fetchGetUsers;
