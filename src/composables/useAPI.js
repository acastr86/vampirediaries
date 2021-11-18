import { ref } from "vue";
import axios from "axios";

const seasons = ref([]);
const episodes = ref([]);

const api = axios.create({
    baseURL: "https://vampire-diaries.herokuapp.com/api"
});

export const useAPI = () => {
    const getSeasons = async () => {
        const response = await api.get(`seasons?key=${import.meta.env.VITE_API_KEY}`);
        if (response.status === 200) {
            seasons.value = response.data.seasons;
        }
    };

    const getEpisodes = async (id) => {
        const response = await api.get(`seasons/${id}/episodes?key=${import.meta.env.VITE_API_KEY}`);
        if (response.status === 200) {
            episodes.value = response.data;
        }
    };

    getSeasons();

    return {seasons, episodes, getEpisodes};
};

