export const getFromBackEnd = () => {
    return fetch('https://api.jsonbin.io/b/5ece8ec3bbb0e41480000df6/5', {
        headers: {
          'Content-Type': 'application/json',
          'secret-key': '$2b$10$4ZHMUv09gL5n6jEU8qOBt.3YmHG2V0Vfnpurai.SSJV1kAQ8LU/6y'
        }
      })
    .then(res => {
        return res.json()
    })
}
