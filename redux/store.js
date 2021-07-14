import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import instagramPostsSlice from "./reducers/instagramPosts";
import developersRating from "./reducers/developersRating";
import newsCardsReducer from "./reducers/newsCardsReducer";
import articleCardsReducer from "./reducers/articleCardsReducer";
// import homeCardsREducer from "./reducers/homeCardsREducer";
import housingComplexesReducer from "./reducers/housingComplexesReducer";
import homeRatingCardsReducer from "./reducers/homeRatingCardsREducer";
import homeCardsRedcuer from "./reducers/homeCardsRedcuer";
import popularRequestsReducer from "./reducers/popularRequestsReducer";
import largeHousesReducer from "./reducers/largeHousesReducer";
import cottagesRatingReducer from "./reducers/cottagesRatingReducer";
import flatsReducer from "./reducers/flatsReducer";
import buildingsReducer from "./reducers/buildingsReducer";
import developersCardRatingReducer from "./reducers/developersCardRatingReducer";
import developersNewsReducer from "./reducers/developersNewsrReducer";
import singleArticleReducer from "./reducers/singleArticleReducer";
import singleNewsReducer from "./reducers/singleNewsReducer";
import readAlsoNewsReducer from "./reducers/readAlsoNewsReducer";
import readAlsoArticlesReducer from "./reducers/readAlsoArticlesReducer";
import lastNewsReducer from "./reducers/lastNewsReducer";
import singleDeveloperReducer from "./reducers/singleDeveloperReducer";

const reducer = combineReducers({
  instagramPosts: instagramPostsSlice,
  developers: developersRating,
  news: newsCardsReducer,
  articles: articleCardsReducer,
  largeHouses: largeHousesReducer,
  singleHousingComplex: housingComplexesReducer,
  homeRatingCards: homeRatingCardsReducer,
  popularRequests: popularRequestsReducer,
  flats: flatsReducer,
  buildings: buildingsReducer,
  developersCardRating: developersCardRatingReducer,
  developersNews: developersNewsReducer,
  singleArticle: singleArticleReducer,
  singleNews: singleNewsReducer,
  readAlsoNews: readAlsoNewsReducer,
  readAlsoArticles: readAlsoArticlesReducer,
  lastNews: lastNewsReducer,
  singleDeveloper: singleDeveloperReducer,
});
const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

export const wrapper = createWrapper(makeStore, { debug: false });
