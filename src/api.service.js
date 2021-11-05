import { useAirtable } from 'painless-airtable';
import { api } from '/@/config.yaml';

const airtable = useAirtable({
  base: api.base,
  token: import.meta.env.VITE_AIRTABLE_TOKEN,
});

const { SOCIAL_PHOTOS, PROJECTS, DOCUMENTS } = api.resources;

// Define localizable fields for the API query
const localize = (locale, options) => {
  const { localized, ...rest } = options;
  const fields = rest.fields.map(field => (
    localized.includes(field) ? `${field}_${locale}` : field
  ));
  return { ...rest, fields };
};

export default {
  getSocialPhotos: () => airtable.select(SOCIAL_PHOTOS.endpoint, SOCIAL_PHOTOS.options),
  getProjects: locale => airtable.select(PROJECTS.endpoint, localize(locale, PROJECTS.options)),
  getDocuments: locale => airtable.select(DOCUMENTS.endpoint, localize(locale, DOCUMENTS.options)),
};
