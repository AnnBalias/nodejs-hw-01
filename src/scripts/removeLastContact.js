import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactsArr = await readContacts();
  contactsArr.pop();
  await writeContacts(contactsArr);
};

removeLastContact();
