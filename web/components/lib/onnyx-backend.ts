

export const API_URI = 'http://onnyx-server-env-1.eba-rwuxjvp2.us-east-1.elasticbeanstalk.com';

export const identify = async () => {
    return fetch(`${API_URI}/identify`).then(x => x.json());
}

export const sendEvent = async (userKey: string, campaignId: string, publisherKey: string, siws: any) => {
    if (!siws.input || !siws.output) {
        throw 'Not signed in';
    }
    return fetch(`${API_URI}/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userKey,
            campaignId, 
            publisherKey, 
            signature: {input: JSON.stringify(siws.input), output: JSON.stringify(siws.output)}
        })
    }).then(x => x.json());
}

export const getOffers = async (userKey: string) => {
    return await fetch(`${API_URI}/offers?userKey=${userKey}`).then(x => x.json());
}