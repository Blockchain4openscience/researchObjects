# Research Objects in Hyperledger

This business network defines:

**Participant**
`author`

**Asset**
`RObject`

**Transaction**
`AddResource` 

## Add resources to a Research object 

Initially a `RObject` empty package is created by a `author`. 

To test this Business Network Definition in the **Test** tab:

Create a `author` that will make a `RObject` and later add resources:

```
{
  "$class": "org.robjects.author",
  "orcid": "0000-0001-1212-XXXX",
  "name": "Ayham Madi",
  "uri": "http://example.com/user/ayham"
}
```

Create a `RObject`:

```
{
  "$class": "org.robjects.RObject",
  "id": "RO:1112222",
  "IPFSHash": "QMWWQSu..3vb2t",
  "previousRO": "RO:1111111",
  "isEvolved": false,
  "res": [],
  "context": "http://w3id.org/bundle/context",
  "createdBy": "resource:org.robjects.author#0000-0001-1212-XXXX"
}
```

Use the transaction `AddResource`  to add resources to the existing `RObject` package:

```
{
  "$class": "org.robjects.addResource",
  "researcher": "resource:org.robjects.author#0000-0001-1212-XXXX",
  "Ro": "resource:org.robjects.RObject#RO:1112222",
  "newRes": [
    {
      "$class": "org.robjects.resource",
      "uri": "/process.py",
      "IPFSHash": "QMWWQSu..31122",
      "resourceCat": "process",
      "owner": "resource:org.robjects.author#0000-0001-1212-XXXX",
      "bundelAs": {
        "$class": "org.robjects.bundle",
        "uri": "urn:uuid:2562a70c-..ebb300"
      }
    }
  ]
}
```
Use the transaction `AddResource`  to add additiona resources to the existing `RObject` package:
```
{
  "$class": "org.robjects.addResource",
  "researcher": "resource:org.robjects.author#0000-0001-1212-XXXX",
  "Ro": "resource:org.robjects.RObject#RO:1112222",
  "newRes": [
    {
      "$class": "org.robjects.resource",
      "uri": "10.5281/zenodo.18877",
      "IPFSHash": "QMWWQSu..31111",
      "resourceCat": "input",
      "owner": "resource:org.robjects.author#0000-0001-1212-XXXX",
      "bundelAs": {
        "$class": "org.robjects.bundle",
        "uri": "urn:uuid:aaf448d5-..dc93c3"
      }
    }
  ]
}
```
