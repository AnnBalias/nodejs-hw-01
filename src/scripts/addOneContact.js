import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contactsArr = await readContacts();
  const newContact = createFakeContact();
  const newContactsArr = [...contactsArr, newContact];
  writeContacts(newContactsArr);
};

addOneContact();
