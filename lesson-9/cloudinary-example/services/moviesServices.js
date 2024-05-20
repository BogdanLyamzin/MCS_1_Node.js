import Movie from "../models/Movie.js"

export const getAllMovies = (search = {})=> {
    const {filter = {}, fields = "", settings = {}} = search;
    return Movie.find(filter, fields, settings).populate("owner", "username email");
};

export const countMovies = filter => Movie.countDocuments(filter);

export const getMovie = (filter)=> Movie.findOne(filter);

export const addMovie = data => Movie.create(data);

export const updateMovie = (filter, data)=> Movie.findOneAndUpdate(filter, data);

export const deleteMovie = filter => Movie.findOneAndDelete(filter);