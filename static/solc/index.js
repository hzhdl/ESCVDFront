self.onmessage = (e) => {
  let data =e.data
  console.log(data)
  importScripts(data[1]);
  //'soljson-v0.5.15+commit.6a57276f.js'
  let soljson = Module;

  importScripts('solc.bundle.js');

  var input = {
    language: 'Solidity',
    sources: {
      'test': {
        content: data[2]
        //'contract C { function f() public {  } } contract B  function f() public {  } }'
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

// New syntax (supported from 0.5.12, mandatory from 0.6.0)
  var output = JSON.parse(
    solc.compile(JSON.stringify(input))
  );
// `output` here contains the JSON output as specified in the documentation
//   for (var contractName in output.contracts['test.sol']) {
//     console.log(
//       contractName +
//       ': ' +
//       output.contracts['test.sol'][contractName].evm.bytecode.object
//     );
//   }
  postMessage(["success",output])
}


