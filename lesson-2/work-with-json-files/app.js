import { getAllMovies, getMovieById, addMovie, updateMovieById, deleteMovieById } from "./movies/index.js";

const invokeAction = async ({ action, id, ...data }) => {
    switch (action) {
        case "list":
            const allMovies = await getAllMovies();
            return console.log(allMovies);
        case "getById":
            const oneMovie = await getMovieById(id);
            return console.log(oneMovie);
        case "add":
            const newMovie = await addMovie(data);
            return console.log(newMovie);
        case "updateById":
            const updateMovie = await updateMovieById(id, data);
            return console.log(updateMovie);
        case "deleteById":
            const deleteMovie = await deleteMovieById(id);
            return console.log(deleteMovie);
        default:
            console.log("Unknown action");
    }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V48" });
// invokeAction({ action: "add", title: "Avatar: way of water", director: "James Cameron" });
// invokeAction({ action: "updateById", id: "Uw5RUOKvY5m43R6-zUpil", title: "Avatar: Way of water" });
// invokeAction({ action: "deleteById", id: "Uw5RUOKvY5m43R6-zUpil" });