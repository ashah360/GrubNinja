import hookcord from 'hookcord';
import mapLevel from './mapLevel';

const buildRewardEmbed = (map, score, prizes) => {
  const embed = {
    embeds: [
      {
        color: 8311585,
        author: {
          name: 'Grub Guardian Reward',
          icon_url:
            'https://cdn.discordapp.com/emojis/609456216334270504.png?v=1'
        },
        fields: [
          {
            name: 'Map',
            value: map
          },
          {
            name: 'Score',
            value: score
          },
          {
            name: 'Prizes',
            value: prizes.join('\n')
          }
        ]
      }
    ]
  };
};

const webhook = (uri, embed) => {
  const Hook = new hookcord.Hook()
    .setLink(uri)
    .setPayload(embed)
    .fire()
    .then(function(response) {})
    .catch(function(e) {});
};
