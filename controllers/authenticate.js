import jwt from 'jsonwebtoken'

function login(input) {
  // retrieve user
  // const user = await User.findOne({ username: input.username, password: input.password });

  if (!user) {
    // incorrect credentials or not found
  }

  // verify here
  const token = jwt.sign({},
    'SOME_SECRET_KEY',
    { subject: user.id }
  );

  return token;
}

