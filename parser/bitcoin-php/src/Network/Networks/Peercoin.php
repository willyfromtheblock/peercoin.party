<?php

namespace BitWasp\Bitcoin\Network\Networks;

use BitWasp\Bitcoin\Network\Network;
use BitWasp\Bitcoin\Script\ScriptType;

class Peercoin extends Network
{
    /**
     * {@inheritdoc}
     * @see Network::$base58PrefixMap
     */
    protected $base58PrefixMap = [
        self::BASE58_ADDRESS_P2PKH => "37",
        self::BASE58_ADDRESS_P2SH => "75",
        self::BASE58_WIF => "b7",
    ];
    
    /**
     * {@inheritdoc}
     * @see Network::$bech32PrefixMap
     */
    protected $bech32PrefixMap = [
        self::BECH32_PREFIX_SEGWIT => "pc",
    ];

    /**
     * {@inheritdoc}
     * @see Network::$bip32PrefixMap
     */
    protected $bip32PrefixMap = [
        self::BIP32_PREFIX_XPUB => "0488b21e",
        self::BIP32_PREFIX_XPRV => "0488ade4",
    ];

    /**
     * {@inheritdoc}
     * @see Network::$bip32ScriptTypeMap
     */
    protected $bip32ScriptTypeMap = [
        self::BIP32_PREFIX_XPUB => ScriptType::P2PKH,
        self::BIP32_PREFIX_XPRV => ScriptType::P2PKH,
    ];

    /**
     * {@inheritdoc}
     * @see Network::$signedMessagePrefix
     */
    protected $signedMessagePrefix = "Peercoin Signed Message";

    /**
     * {@inheritdoc}
     * @see Network::$p2pMagic
     */
    protected $p2pMagic = "e6e8e9e5";
}
