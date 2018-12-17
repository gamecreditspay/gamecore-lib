'use strict';

var gamecore = module.exports;

// module information
gamecore.version = 'v' + require('./package.json').version;
gamecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of gamecore-lib found. ' +
      'Please make sure to require gamecore-lib and check that submodules do' +
      ' not also include their own gamecore-lib dependency.';
    throw new Error(message);
  }
};
gamecore.versionGuard(global._gamecore);
global._gamecore = gamecore.version;

// crypto
gamecore.crypto = {};
gamecore.crypto.BN = require('./lib/crypto/bn');
gamecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
gamecore.crypto.Hash = require('./lib/crypto/hash');
gamecore.crypto.Random = require('./lib/crypto/random');
gamecore.crypto.Point = require('./lib/crypto/point');
gamecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
gamecore.encoding = {};
gamecore.encoding.Base58 = require('./lib/encoding/base58');
gamecore.encoding.Base58Check = require('./lib/encoding/base58check');
gamecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
gamecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
gamecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
gamecore.util = {};
gamecore.util.buffer = require('./lib/util/buffer');
gamecore.util.js = require('./lib/util/js');
gamecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
gamecore.errors = require('./lib/errors');

// main bitcoin library
gamecore.Address = require('./lib/address');
gamecore.Block = require('./lib/block');
gamecore.MerkleBlock = require('./lib/block/merkleblock');
gamecore.BlockHeader = require('./lib/block/blockheader');
gamecore.HDPrivateKey = require('./lib/hdprivatekey.js');
gamecore.HDPublicKey = require('./lib/hdpublickey.js');
gamecore.Networks = require('./lib/networks');
gamecore.Opcode = require('./lib/opcode');
gamecore.PrivateKey = require('./lib/privatekey');
gamecore.PublicKey = require('./lib/publickey');
gamecore.Script = require('./lib/script');
gamecore.Transaction = require('./lib/transaction');
gamecore.URI = require('./lib/uri');
gamecore.Unit = require('./lib/unit');

// dependencies, subject to change
gamecore.deps = {};
gamecore.deps.bnjs = require('bn.js');
gamecore.deps.bs58 = require('bs58');
gamecore.deps.Buffer = Buffer;
gamecore.deps.elliptic = require('elliptic');
gamecore.deps.scryptsy = require('scryptsy');
gamecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
gamecore.Transaction.sighash = require('./lib/transaction/sighash');
