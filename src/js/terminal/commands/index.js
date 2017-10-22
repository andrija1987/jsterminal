const names = [
  'nullCommand',
  'openWindowCommand',
  'replyToWhoCommand',
  'replyToDateCommand',
  'replyToHelloCommand',
  'replyToHelpCommand',
  'replyToLoveYouCommand',
  'replyToTimeCommand',
  'replyToContactCommand',
  'replyToServicesCommand',
  'searchOnGoogleCommand',
  'searchOnWikiCommand',
  'searchOnYahooCommand',
  'searchOnYoutubeCommand',
];

const commands = names.reduce((hash, name) => {
  hash[name] = require(`./${name}`).default;
  return hash;
}, {});

commands[Symbol.iterator] = function*() {
  for (const name of names) {
    yield commands[name];
  }
};

export default commands;
