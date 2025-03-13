# launch-besu.sh
besu --genesis-file=besu-config/genesis.json \
     --data-path=data \
     --rpc-http-enabled \
     --rpc-http-port=8545 \
     --rpc-http-api=ETH,NET,WEB3 \
     --host-allowlist="*"
