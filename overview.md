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