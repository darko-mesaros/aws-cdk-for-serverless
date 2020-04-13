# Serverless Application with AWS CDK

## Setting up AWS CDK

**Install AWS CDK**

You may need sudo permissions to run this as it installs the package globally.
```
npm install -g aws-cdk
```

Verify the installation by running:
```
cdk --version
# You should get something like: 1.32.2 (build e19e206)
```

**Configure our application directory**

Let's create a directory that we will be using for our Serverless Application
```
mkdir serverless-cdk
```

Time to initialize our serverless applicaiton, this time we will be using TypeScript as our language of choice, but you are free to choose what ever you want down the line. Currently (as of 2020-04-13) supported languages are: **CSharp**, **FSharp**, **Java**, **JavaScript**, **Python**, and **TypeScript**.
We will also use the `app` template, but there are other to choose from. To get a list of the available templates run the following command:
```
cdk init --list
```

To initialize our application, let's cd into the newly created directory and run the init command:
```
cd serverless-cdk
cdk init app --language=typescript
```

The top level directory structure of the newly initialized app should look something like this:
```
.
├── bin
├── cdk.json
├── jest.config.js
├── lib
├── node_modules
├── package.json
├── package-lock.json
├── README.md
├── test
└── tsconfig.json
```

## Some important files

The `./lib/serverless-cdk-stack.ts` file is where we will define our application resources, such as Lambda Scripts, Dynamo DB Tables and API Gateways. The actual code goes here!


The `./bin/serverless-cdk.ts` contains our App and Stack(s) definitions. Here is where we handle thing such as launching multiple stacks and passing some parameters to them (eg. Regions where we will launch them).

## Installing modules:

```
npm install @aws-cdk/aws-lambda
npm install @aws-cdk/aws-apigateway
npm install @aws-cdk/aws-dynamodb
```

