# Deployment

introduce systemd management configs。

## Hardware

### minimum

```
8core
16g
ssd iops>5k
```

### recommended
```
16core
32g
ssd iops>5k
```

### network&port

```
External IP Address
Port TCP/UDP 32668
```

## chain node

* config.toml

```
[Eth]
SyncMode = "snap"
TrieCleanCacheRejournal= 300000000000

[Eth.Miner]
GasFloor = 8000000
GasCeil = 8000000
GasPrice = 0
Recommit = 3000000000
Noverify = false

[Eth.Ethash]
CacheDir = "ethash"
CachesInMem = 2
CachesOnDisk = 3
CachesLockMmap = false
DatasetDir = "/data/sardis/data/.ethash"
DatasetsInMem = 1
DatasetsOnDisk = 2
DatasetsLockMmap = false
PowMode = 0

[Eth.TxPool]
Locals = []
NoLocals = false
Journal = "transactions.rlp"
Rejournal = 3600000000000
PriceLimit = 1
PriceBump = 10
AccountSlots = 16
GlobalSlots = 4096
AccountQueue = 64
GlobalQueue = 1024
Lifetime = 10800000000000

[Node]
DataDir = "/data/sardis/data"
InsecureUnlockAllowed = true
NoUSB = true
IPCPath = "geth.ipc"
HTTPHost = "0.0.0.0"
HTTPPort = 8545
HTTPCors = ["*"]
HTTPVirtualHosts = ["*"]
HTTPModules = ['eth', 'net', 'web3']

WSHost = "0.0.0.0"
WSPort = 8546
WSModules = ['eth', 'net', 'web3']

GraphQLVirtualHosts = ["localhost"]


[Node.P2P]
MaxPeers = 50
NoDiscovery = false

ListenAddr = ":32668"
EnableMsgEvents = false

[Node.HTTPTimeouts]
ReadTimeout = 30000000000
WriteTimeout = 30000000000
IdleTimeout = 120000000000

```

use snap sync in the config, if full needed, change this line
```
SyncMode = "snap"
```
to
```
SyncMode = "full"
```

## start bash

> To show full detail help info of all flags, type `geth help` or `geth -h`

* run.sh


```
#!/usr/bin/env bash
/data/sardis/geth-linux-amd64 \
--config /data/sardis/config.toml  \
--logpath /data/sardis/logs \
--verbosity 3  >> /data/sardis/logs/systemd_chain_console.out 2>&1
```

if you need to use it as archive node, add：

```
--syncmode full \
--gcmode archive \
```

so：

```
#!/usr/bin/env bash
/data/sardis/geth-linux-amd64 \
--config /data/sardis/config.toml  \
--logpath /data/sardis/logs \
--syncmode full \
--gcmode archive \
--verbosity 3  >> /data/sardis/logs/systemd_chain_console.out 2>&1
```

If no any network flags were provided, the node will connect the sardis-mainnet by default. If you want to connect to sardis-testnet, add:

```
--testnet
```

## systemd config

```
[Unit]
Description=Sardis Network service

[Service]
Type=simple
ExecStart=/bin/sh /data/sardis/run.sh

Restart=on-failure
RestartSec=5s

LimitNOFILE=65536

[Install]

```
