import {RESTDataSource} from "@apollo/datasource-rest";
import {TrackModel, AuthorModel, ModuleModel} from "../models"

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getTrack(id: string) {
    return this.get<TrackModel>(`track/${id}`)
  }

  getTrackModules(id: string) {
    return this.get<ModuleModel[]>(`tracks/${id}/modules`);
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
