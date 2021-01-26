export function getPolls(state) {
  return state.polls;
};

export function getActivePoll(state) {
  return state.polls.active.poll;
};