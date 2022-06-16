self.onmessage = (e) => {
  console.log(e.data)
  importScripts('soljson-v0.5.15+commit.6a57276f.js');
  let soljson = Module;
  console.log('worker soljson = ', soljson);
  importScripts('solc.bundle.js');
  console.log("solc = ", solc);
  var input = {
    language: 'Solidity',
    sources: {
      'test.sol': {
        content: 'contract C { function f() public {  } } contract B  function f() public {  } }'
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


