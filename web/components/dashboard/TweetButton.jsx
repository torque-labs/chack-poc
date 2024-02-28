import {Button} from "@chakra-ui/react";
import React from 'react';

const TweetButton = ({audiences}) => {
  const tweetText = "The @OnnyxProtocol web3 user data layer has bucketed me in the following audiences using my activity on @Solana over the past week:\n";

  // Encode the tweet text and URL
  const encodedTweet = encodeURIComponent(tweetText + audiences.map(x => x.id).join('\n') + '\n\n');
  const encodedHashtags = encodeURIComponent('OnnyxData,Web3Users');

  // Construct the full Twitter intent URL
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTweet}&hashtags=${encodedHashtags}`;

  // Function to open the Twitter intent URL in a new tab
  const handleTweet = () => {
    window.open(twitterUrl, '_blank');
  };

  return (
    <Button backgroundColor={'#641ae6'} onClick={handleTweet}>Share on X</Button>
  );
};

export default TweetButton;