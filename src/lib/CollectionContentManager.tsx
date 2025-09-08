import { API, CollectionTypeManager } from "@strapi/client";
import strapiClient from "./strapiClient";

export type StrictDocument = Pick<API.Document, "documentId" | "createdAt" | "updatedAt">;

export interface CustomBaseQueryParams<TFields extends string>
  extends Omit<API.BaseQueryParams, "fields" | "sort"> {
  fields?: TFields[];
  sort?: TFields | TFields[] | `${TFields}:desc`[];
}

export class CollectionManager<T extends Record<string, unknown> & StrictDocument> {
  private manager: CollectionTypeManager;
  constructor(name: string) {
    this.manager = strapiClient.collection(name);
  }

  async find(
    queryParams?: CustomBaseQueryParams<Extract<keyof T, string>>,
  ): Promise<API.DocumentResponseCollection<T>> {
    const result = (await this.manager.find(queryParams)) as API.DocumentResponseCollection<T>;

    return result;
  }

  async findOne(
    documentId: string,
    queryParams?: CustomBaseQueryParams<Extract<keyof T, string>>,
  ): Promise<API.DocumentResponse<T>> {
    const result = (await this.manager.findOne(documentId, queryParams)) as API.DocumentResponse<T>;

    return result;
  }
}
