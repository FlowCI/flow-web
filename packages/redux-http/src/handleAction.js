export default function handleAction (name, reducers = {}) {
  return {
    [`${name}/SEND`]: reducers.send,
    [`${name}/SUCCESS`]: reducers.success,
    [`${name}/FAILURE`]: reducers.failure,
    [`${name}/CANCEL`]: reducers.cancel,
  }
}
