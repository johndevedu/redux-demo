let nextHelloId = 0

export const addHello = () => ({
  type: 'ADD_HELLO',
  id: nextHelloId++
})