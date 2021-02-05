---
title: Start/stop the Service
parent: Fuzzing
grand_parent: Hacking Guides
has_children: false
nav_order: 3
---

# Start/Stop the service

In order to start or stop the service you need to change the amount of fuzzing bots (servers on the GCP that run the fuzzing tasks) that are associated with the project. By setting this to 0 you stop the fuzzing service.

You then need to shut down the GCP web server hosting the Clusterfuzz website.

Leaving both of these services running for an indeterminate time can incur high fees for NSE!

## Changing the number of fuzzing bots

You need to make sure you've set up the configuration environment from the previous section.

The file where you can change this setting is: `Clusterfuzz-configuration/gce/clusters.yaml`

The file will begin with the following configurations, if you'd like to turn the service off set the `instance_count` on both clusters to 0, if you'd like to turn it on set it to a positive number, such as 2.

```
# Regular bots run all task types (e.g fuzzing, minimize, etc).
clusterfuzz-linux:
  gce_zone: gce-zone
  instance_count: 1
  instance_template: clusterfuzz-linux
  distribute: False

# Pre-emptible bots must have '-pre-' in name. They only run fuzzing tasks.
clusterfuzz-linux-pre:
  gce_zone: gce-zone
  instance_count: 2
  instance_template: clusterfuzz-linux-pre
  distribute: False
```

Once you've made your changes you need to deploy them. This can be done using the following command:

```python butler.py deploy --config-dir=$CONFIG_DIR --prod --force```

Be aware that it can take a few minutes after you've deployed until your changes are reflected in the Google Cloud Platform.

## Web service

Go to the url https://console.cloud.google.com/appengine/settings
and disable the web application. You may need special privileges to complete this action.