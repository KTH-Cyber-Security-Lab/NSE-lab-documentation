---
title: Configuring the lab's Clusterfuzz service
parent: Fuzzing
has_children: false
nav_order: 3
---

# Configuring the lab's Clusterfuzz service

Clusterfuzz is highly configurable. You can change the amount of VM instances used to fuzz, the OS of the fuzzing bots, physical location of the servers, the fuzzing alert system and more. You might find that the software you'd like to fuzz would benefit from altering these configurations. In order to configure the service you'll need to use the Ubuntu machine in the lab which has everything already set up - or set up the environment on your local machine. This will also allow you to turn the service [on and off](pages/fuzzing/start-stop.html).

## Setting up local environment for configuring Clusterfuzz

These instructions are based off the [Clusterfuzz documentation](https://google.github.io/clusterfuzz/production-setup/clusterfuzz/) for creating a new project. In this case we only want to setup a new machine to connect to our existing project so we skip a few of their steps. This guide is for Linux.

### Prerequisites 

Before you start setting up your local environment you'll need to make sure you have accomplished these tasks:
1. Have a Google account that has been granted access to NSE's Clusterfuzz project 
2. Followed the prerequisite tutorial from the Clusterfuzz [documentation](https://google.github.io/clusterfuzz/getting-started/prerequisites/)
3. Downloaded the lab's [configuration files](https://github.com/KTH-Cyber-Security-Lab/Clusterfuzz-configuration)

### Setting environment variables

Once you've installed all the necessary files and are authenticated with the lab's GCP project you'll need to set the variables to be used in your local environment.

First go to the lab's GCP [API page](https://console.developers.google.com/apis/credentials?) and make note of the key titled `Browser key (auto created by Firebase)` and download the JSON file called `Clusterfuzz`. These two keys will authenticate your local machine to Google. You'll also need to go to the [GCP dashboard](https://console.cloud.google.com/home/dashboard) and make note of the Project ID.

We will now export these values and a couple others to your terminal environment to be used by the Clusterfuzz application. 

First in your terminal navigate to the Clusterfuzz repository and run `source ENV/bin/activate` to start the Clusterfuzz environment. Then run these commands:

1. Set the API key variable

```export FIREBASE_API_KEY=<browser key you saw before>```

2. Set the JSON file you downloaded

```export CLIENT_SECRETS_PATH=/path/to/your/client_secrets.json```

3. Set the project id

```export CLOUD_PROJECT_ID=<your project id>```

4. Set the path to the lab's configuration folder (that you downloaded from Github)

```export CONFIG_DIR=/path/to/Clusterfuzz-configuration```

### Authenticating to GCP

You need to authenticate your local machine to GCP using your Google account. Run this command.

```gcloud auth application-default login```

### Deploying your changes

Now that the environment is set up you should be able to make some changes to the configuration files and deploy them.

To deploy changes run this command (make sure you are still in the environment from the previous step)

```python butler.py deploy --config-dir=$CONFIG_DIR --prod --force```

Be aware that it can take a few minutes after you've deployed until your changes are reflected in the Google Cloud Platform.