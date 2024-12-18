import { Router } from "express";
import { getSimilarTvShows, getTrendingTvShow, getTvShowsByCategory, getTvShowsDetails, getTvShowsTrailers } from "../controllers/tv.controller.js";

const tvShowRoutes = Router()

tvShowRoutes.get("/trending",getTrendingTvShow)
tvShowRoutes.get("/:id/trailers",getTvShowsTrailers)
tvShowRoutes.get("/:id/details",getTvShowsDetails)
tvShowRoutes.get("/:id/similar",getSimilarTvShows)
tvShowRoutes.get("/:category",getTvShowsByCategory)

export default tvShowRoutes