import { SolanaSignInOutput } from "@solana/wallet-standard-features";

export const API_URI = 'http://onnyx-server-env-1.eba-rwuxjvp2.us-east-1.elasticbeanstalk.com';

export const identify = async () => {
    return fetch(`${API_URI}/identify`).then(x => x.json());
}

export const sendEvent = async (userKey: string, campaignId: string, publisherKey: string, siws: any) => {
    if (!siws.input || !siws.output) {
        throw 'Not signed in';
    }
    const serialisedOutput: SolanaSignInOutput = {
        account: {
            ...siws.output.account,
            publicKey: Array.from(
                new Uint8Array(siws.output.account.publicKey)
            ),
        },
        signature: new Uint8Array(siws.output.signature),
        signedMessage: new Uint8Array(siws.output.signedMessage),
    };
    console.log({serialisedOutput})
    return fetch(`${API_URI}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userKey,
            type: 'click',
            campaignId, 
            publisherKey, 
            signature: {input: siws.input, output: serialisedOutput}
        })
    }).then(x => x.json());
}

export const getOffers = async (pubKey: string) => {
    return await fetch(`${API_URI}/offers?pubKey=${pubKey}`).then(x => x.json());
}
export const getAudiences = async (pubKey: string) => {
    const resp = await fetch(`${API_URI}/audiences?pubKey=${pubKey}`).then(x => x.json());
    console.log(resp)
    return resp.data.audiences;
}
export const getUserData = async (pubKey: string) => {
    const resp = await fetch(`${API_URI}/users?pubKey=${pubKey}`).then(x => x.json());
    console.log(resp);
    return resp.data;
}