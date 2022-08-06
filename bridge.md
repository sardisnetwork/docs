# Summary

Users can map ETH, BTC, stable coins and other assets to Sardisthrough the asset cross-chain bridge, which is achieved by locking a certain number of assets on the source chain and generating the corresponding number of Tokens in Sardis.

Sardis encourages community developers to provide more decentralized cross-chain solutions.

This document describes the option for project parties to map Tokens from the source chain to Sardison their own.

> [Sardis-brige ref here](./hecobridge.md)

The project owner **self** maintains the total balance of Token on the multi-chain including Sardis, and endorses the credibility of Token.

The main processes include：

```
1）Initial Preparation
2）Source Chain -> Sardis Network
3）Sardis Network -> Source Chain
```

## Glossary 

Source Chain: The source chain where the Token is located (e.g. Ethereum)

Src_Token: Token on the source chain, possibly a contract, or a native Token

Locked address or contract: the address used to lock the Token

Sardis_Token: Token on Sardis's chain
## Initial Preparation

1) Deploy the lock address or contract on the source chain `Src_Lock_Addr`

2) Deploy Token on Sardis: `Sardis_Token`

3) Deploy a lock address or contract on Sardis`Sardis_Lock_Addr`

If you need multiple sign contracts, you can refer to [gnosis/MultiSigWallet](https://github.com/gnosis/MultiSigWallet).

If you need contracts with mint/burn, you can refer to [OpenZeppelin/openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/) contracts/token/ERC20).

Translated with www.DeepL.com/Translator (free version)

> In order to maintain credibility, the project needs to publicize the above information to the community and invite the community to supervise it. And to monitor the total amount of coins on both chains.

## Source Chain->Sardis Network

1) Source chain locking `Src_Token`

Transfer a certain amount of `Src_Token` to `Src_Lock_Addr` for locking

2) Release `Sardis_Token` on the Sardis Network

Execute mint operation to give `Sardis_Lock_Addr` the corresponding amount of `Sardis_Token`

## Sardis Network->Source chain

1) Sardis Network lock `Sardis_Token`

Execute burn operation, destroy `Sardis_Token`

2) Release `Src_Token` on the source chain

operation `Src_Lock_Addr` to unlock the corresponding volume