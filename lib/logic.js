/**
 * Aggregate resources into a Research object package
 * @param {org.robjects.addResource} resourceTx
 * @transaction
 */
async function addResource(resourceTx) {
  let existRes = resourceTx.Ro 
  let oldCharacteristics = existRes.res;
  let newCharacteristics = resourceTx.newRes;
  if (oldCharacteristics === undefined) {
    existRes.res = newCharacteristics;
  } else {
    newCharacteristics.forEach(newCharacteristic => {
      let exist = false;
      oldCharacteristics.forEach(oldCharacteristic => {
        if (newCharacteristic.IPFSHash === oldCharacteristic.IPFSHash) {
          oldCharacteristic.uri = newCharacteristic.uri;
          oldCharacteristic.resourceCat = newCharacteristic.resourceCat;
          oldCharacteristic.owner = newCharacteristic.owner;
          oldCharacteristic.bundelAs.uri = newCharacteristic.bundelAs.uri;
          exist = true;
        }
      });
      if (!exist) {
        existRes.res.push(newCharacteristic);
      }
    });
  }
  const RORegistry = await getAssetRegistry("org.robjects.RObject");
  await RORegistry.update(existRes);
  }