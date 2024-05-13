import Movie from "../models/Movie.js"

export const getAllMovies = (search = {})=> {
    const {filter = {}} = search;
    return Movie.find(filter);
};

export const getMovieById = async (_id)=> {
    // const result = await Movie.findOne({_id});
    const result = await Movie.findById(_id);
    return result;
}

export const addMovie = data => Movie.create(data);

export const updateMovieById = (id, data)=> Movie.findByIdAndUpdate(id, data);

export const deleteMovieById = (id)=> Movie.findByIdAndDelete(id);