export const getFromBackEnd = () => {
    return fetch('https://api.jsonbin.io/b/5ed4c6fb7741ef56a565d575', {
        headers: {
          'Content-Type': 'application/json',
          'secret-key': '$2b$10$pREu6f06kxG9xN25IENQoeUo8saEPbmsLQeF/EUo7KjiJjw5cOm9.'
        }
      })
    .then(res => {
        return res.json()
    })
}
