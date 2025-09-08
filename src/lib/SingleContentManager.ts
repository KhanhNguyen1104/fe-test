import { API, CollectionTypeManager, SingleTypeManager } from "@strapi/client";
import strapiClient from "./strapiClient";

export type StrictDocument = Pick<API.Document, "documentId" | "createdAt" | "updatedAt">;

export interface CustomBaseQueryParams<TFields extends string>
  extends Omit<API.BaseQueryParams, "fields" | "sort"> {
  fields?: TFields[];
  sort?: TFields | TFields[] | `${TFields}:desc`[];
}

export class SingleContentManager<T extends Record<string, unknown> & StrictDocument> {
  private manager: SingleTypeManager;
  constructor(name: string) {
    this.manager = strapiClient.single(name);
  }

  async find(
    queryParams?: CustomBaseQueryParams<Extract<keyof T, string>>,
  ): Promise<API.DocumentResponse<T>> {
    const result = (await this.manager.find(queryParams)) as API.DocumentResponse<T>;

    return result;
  }
}
