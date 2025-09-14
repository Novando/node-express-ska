export type UpdateSampleDescriptionDTO = {
  description: string;
}

export type GetSampleByItemNameDTO = {
  name: string;
}

export type CreateSampleDTO = {
  name: string;
  description?: string;
}

export type GetSampleDTO = CreateSampleDTO & {
  id: number;
  description: string | null;
}