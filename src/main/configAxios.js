
/*
Para se Conectar na API do Dribbble

ClientID = '356e4f76f588252eea4a8710b00d80279116d77e0ab1e2a512f3ee3821c00766'
ClientSecret = '8497522054e4e8e3a3e70c846940015e5a9c698f2a495cf14ef5a07f7bf36596'
AUTH_TOKEN = '12f4af77ce77e702729bb9fddcdf9d20ed0d8e59ce4e00d6a264e03c9fb11994'

*/

/*
Access Token
{
  "access_token": "cc49bd30529c10a135c2ecfebf014950de213b046caa3c0a1bca79c33eb557e7",
  "token_type": "bearer",
  "scope": "public write",
  "created_at": 1495378295
}
*/


/*
Rotas
  Para acessar como usuario
    https://api.dribbble.com/v1/user
  Para acessar shots
    https://api.dribbble.com/v1/shots
*/


// Options para request

export const AuthToken = {
  "headers": {
    "Authorization": "Bearer cc49bd30529c10a135c2ecfebf014950de213b046caa3c0a1bca79c33eb557e7"
  }
}

export const BasicURL = `https://api.dribbble.com/v1`
