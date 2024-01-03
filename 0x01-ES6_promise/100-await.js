import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let array = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    array = { photo, user };
  } catch (err) {
    array = { photo: null, user: null };
  }
  return array;
}
