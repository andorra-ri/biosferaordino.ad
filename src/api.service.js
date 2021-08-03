import { useAirtable } from 'painless-airtable';
import { api } from '/@/config.yaml';

const airtable = useAirtable({
  base: api.base,
  token: import.meta.env.VITE_AIRTABLE_TOKEN,
});

const { SOCIAL_PHOTOS } = api.resources;

export default {
  getSocialPhotos: () => airtable.select(SOCIAL_PHOTOS.endpoint, SOCIAL_PHOTOS.options),
};
