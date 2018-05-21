# yamlw_vststask
A VSTS task for yamlw

[Extension on the Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=jakkaj.vsts-yaml-writer). 

[YouTube video](https://www.youtube.com/watch?v=MavBLz8Gmvc&feature=youtu.be) demonstration.

See the [yamlw GitHub repo](https://github.com/jakkaj/yamlw) for more info on the yamlw NPM package. 

This extension allows you to easily create or update yaml files during build and release. 

Take build arguments and other interesting things and write them to structured yaml. 

Pass in arguments as name/value pairs separated by a comma. 

Given this file:

```
replicaCount: 1
image:
  repository: jakkaj/sampletrainer
  tag: dev
  pullPolicy: IfNotPresent
outputs:
  modelfolder: /mnt/azure/
  mountpath: /mnt/azure
build:
  number: 1
```

Set the arguments to `build.number=23,something.else='my value'` for the following result:

```
replicaCount: 1
image:
  repository: jakkaj/sampletrainer
  tag: dev
  pullPolicy: IfNotPresent
outputs:
  modelfolder: /mnt/azure/
  mountpath: /mnt/azure
build:
  number: 23
something:
  else: my value
```

Note that nested properties are created. 




## Deployment to VSTS

You'll need node.js installed to deploy this to your VSTS instance.

```
npm install -g tfx-cli
```

Login with tfx login. Pass in base dir of your VSTS instance/DefaultCollection (or what ever collection!) 

You'll need a [VSTS Personal Access Token](https://docs.microsoft.com/en-us/vsts/accounts/use-personal-access-tokens-to-authenticate?view=vsts) too.

Deploy to vsts with `tfx build tasks upload` (pass in ./YamlWriter or . if in that dir already)


