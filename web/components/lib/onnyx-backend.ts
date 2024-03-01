import { WalletContextState } from '@solana/wallet-adapter-react';

export const API_URI = 'https://api.onnyx.io'; //'http://localhost:3000'; //

export const identify = async () => {
  return fetch(`${API_URI}/identify`).then((x) => x.json());
};

export const signMessage = async (
  wallet: WalletContextState,
  message: string
) => {
  if (!wallet.signMessage) {
    throw new Error("Wallet doesn't support signing.");
  }

  try {
    const msg = Buffer.from(message, 'utf8');

    const result = await wallet.signMessage(msg);

    const signature = Buffer.from(result).toString('base64');

    return signature;
  } catch (error) {
    console.error('Error', error);

    return undefined;
  }
};

export const sendEvent = async (
  pubKey: string,
  campaignId: string,
  publisherKey: string,
  authType: string,
  siws: any
) => {
  if (!siws.input || !siws.output || !authType) {
    throw 'Not signed in';
  }

  const signature =
    authType === 'siws'
      ? {
          input: siws.input,
          output: {
            account: {
              ...siws.output.account,
              publicKey: Array.from(
                new Uint8Array(siws.output.account.publicKey)
              ),
            },
            signature: new Uint8Array(siws.output.signature),
            signedMessage: new Uint8Array(siws.output.signedMessage),
          },
        }
      : { input: siws.input, output: siws.output };

  return fetch(`${API_URI}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      pubKey,
      type: 'click',
      campaignId,
      publisherKey: 'CkPgfpLX8R6e5V9EfXPxM5vzivXZhmVm6uud7TKn4ghf', // hard coded for cHack
      authType,
      signature,
    }),
  }).then((x) => x.json());
};

export const getOffers = async (pubKey: string) => {
  return await fetch(`${API_URI}/offers?pubKey=${pubKey}`).then((x) =>
    x.json()
  );
};
export const getAudiences = async (pubKey: string) => {
  const resp = await fetch(`${API_URI}/audiences?pubKey=${pubKey}`).then((x) =>
    x.json()
  );
  console.log(resp);
  return resp.data.audiences;
};
export const getUserData = async (pubKey: string) => {
  const resp = await fetch(`${API_URI}/users?pubKey=${pubKey}`).then((x) =>
    x.json()
  );
  console.log(resp);
  return resp.data;
};
