import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzYzZjYxOTQ5MDU5YmM5ODVkMzk4NzQ1YTcwOGQxNCIsInN1YiI6IjY0YTk5YzQ0M2UyZWM4MDBhZjdkMDM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7O8LSNygn_55K611E_fsmC4gFr0aLGNGB8T6aWMg1g";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
