import axios from 'axios';

const USERS = [
  [ 1, 'Juan', 'Smith', 'Team lead' ],
  [ 2, 'Mariano', 'Johnson', 'Team lead' ],
  [ 3, 'Mariano', 'Williams', 'DevOps' ],
  [ 4, 'Renata', 'Brown', 'Designer' ],
  [ 5, 'Augusto', 'Jones', 'iOS engineer' ],
  [ 6, 'Nicolas', 'Miller', 'Data engineer' ],
  [ 7, 'Matias', 'Davis', 'Full-stack engineer' ]
];

export async function autocomplete(needle) {
  if (typeof needle !== 'string') {
    throw new Error('Invalid argument');
  }

  try {
    const res = await axios.get('http://127.0.0.1:5000/autocomplete', {
      params: { needle }
    });

    return res.data.result;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.data?.error ?? 'Unknown server error');
    }

    throw err;
  }
}

export async function autocompleteMock(needle) {
  if (typeof needle !== 'string') {
    throw new Error('Invalid argument');
  }

  const upNeedle = needle.toUpperCase();

  return USERS.filter(([id, firstName, lastName, role]) => {
    return (
      firstName.toUpperCase().includes(upNeedle) ||
      lastName.toUpperCase().includes(upNeedle) ||
      role.toUpperCase().includes(needle)
    );
  });
}
