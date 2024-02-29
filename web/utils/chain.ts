import type { WalletContextState } from '@solana/wallet-adapter-react';

export async function signMessage(wallet: WalletContextState, message: string) {
  if (!wallet.signMessage) {
    return undefined;
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
}
